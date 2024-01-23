import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import { auth, redirectToSignIn } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

import { ChatClient } from "./components/client";

interface ChatIdPageProps {
    params: {
        chatId: string;
    }
}

const ChatIdPage = async ({
    params
}: ChatIdPageProps) => {
    const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/sign-in');
  }

  const userId = session.user?.id;

  if (!userId) {
    return redirect('/sign-in');
  }
    
    // const { userId } = auth();

    // if (!userId) {
    //     return redirectToSignIn();
    // }

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.chatId
        },
        include: {
            messages: {
                orderBy: {
                    createdAt: "asc"
                },
                where: {
                    userId,
                },
            },
            _count: {
                select: {
                    messages: true,
                }
            }
        }
    });


    if (!companion) {
        return redirect("/");
    }

    return (
        <ChatClient companion={companion} />
    );
}

export default ChatIdPage;