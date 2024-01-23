// import { auth, currentUser } from "@clerk/nextjs";
import {NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

// import prismadb from "@/lib/prismadb";
//import { checkSubscription } from "@/lib/subscription";

const prisma = new PrismaClient();
interface User {
    id: string;
    name: string;
  }

  // Function to fetch user information from your database
const getUserFromDatabase = async (userId: string): Promise<User | null> => {
    const user = await prisma.user.findUnique({ where: { id: userId } });
  
    return user
      ? {
          ...user,
          name: user.name ?? '', // Provide a default empty string if name is null
        }
      : null;
  };
  
  // Function to authenticate the user based on the request's Authorization header
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

export async function PATCH(
    req: NextRequest,
    { params }: { params: { companionId: string } }
) {
    try {
        const body = await req.json();
        // const user = await currentUser();
        const user = await authenticateUser(req);
        const { src, name, description, instructions, seed, categoryId } = body;

        if (!params.companionId) {
            return new NextResponse("Companion ID required", { status: 400 });
        }

        if (!user || !user.id || !user.name) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!src || !name || !description || !instructions || !seed || !categoryId) {
            return new NextResponse("Missing required fields", { status: 400 });
        };

        //const isPro = await checkSubscription();

       // if (!isPro) {
           // return new NextResponse("Pro subscription required", { status: 403 });
        //}

        const companion = await prisma.companion.update({
            where: {
                id: params.companionId,
                userId: user.id,
            },
            data: {
                categoryId,
                userId: user.id,
                userName: user.name,
                src,
                name,
                description,
                instructions,
                seed,
            }
        });

        return NextResponse.json(companion);
    } catch (error) {
        console.log("[COMPANION_PATCH]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};

export async function DELETE(
    request: NextRequest,
    { params }: { params: { companionId: string } }
) {
    try {
        // const { userId } = auth();
        const user = await authenticateUser(request);
        const userId = user?.id;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const companion = await prisma.companion.delete({
            where: {
                userId,
                id: params.companionId
            }
        });

        return NextResponse.json(companion);
    } catch (error) {
        console.log("[COMPANION_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};