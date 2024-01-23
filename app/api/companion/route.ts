// import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import prismadb from "@/lib/prismadb";
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
  const authenticateUser = async (request: Request) => {
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

export async function POST(req: Request) {
    try {
        const body = await req.json();
        // const user = await currentUser();
        const user = await authenticateUser(req);
        const { src, name, description, instructions, seed, categoryId } = body;

        if (!user || !user.id || !user.name) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!src || !name || !description || !instructions || !seed || !categoryId) {
            return new NextResponse("Missing required fields", { status: 400 });
        };

        //TODO: check for subscription
        //const isPro = await checkSubscription();

       // if (!isPro) {
            //return new NextResponse("Pro subscription required", { status: 403 });
        //}

        const companion = await prismadb.companion.create({
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
        console.log("[COMPANION_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};