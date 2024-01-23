import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import * as z from 'zod';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

interface Props {
  params: { token: string };
}

interface User {
  id: string;
}

const prisma = new PrismaClient();

const userSchema = z.object({
  newPassword: z.string().min(1, 'Password is required').min(8, 'Password must have than 8 characters'),
});

const getUserFromDatabase = async (userId: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  return user ?? null;
};

const authenticateUser = async (request: NextRequest) => {
  try {
    const session = await getServerSession({ req: request, ...authOptions });

    if (!session) {
      return null;
    }

    const user = await getUserFromDatabase(session.user.id);
    return user;
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
};

export default async function PUT(request: NextRequest, { params }: Props) {
  try {
    const body = await request.json();
    const { newPassword } = userSchema.parse(body);

    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token: params.token },
    });

    if (!verificationToken || verificationToken.expires < new Date()) {
      return NextResponse.json({ error: 'Invalid or expired token. Please request a new password reset.' }, { status: 400 });
    }

    const user = await getUserFromDatabase(verificationToken.identifier);

    if (!user) {
      return NextResponse.json({ error: 'User not found. Please request a new password reset.' }, { status: 404 });
    }

    const hashPassword = await hash(newPassword, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashPassword },
    });

    await prisma.verificationToken.delete({
      where: { token: params.token },
    });

    return NextResponse.json({ message: 'Password successfully reset' }, { status: 200 });
  } catch (error) {
    console.error('Password reset error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
