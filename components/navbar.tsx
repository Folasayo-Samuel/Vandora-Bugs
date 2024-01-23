"use client";

import { cn } from "@/lib/utils";
// import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "@/components/mobile-sidebar";
// import { authOptions } from "@/lib/auth";
// import { getServerSession} from "next-auth";
import { signOut } from "next-auth/react";
// import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});

export const Navbar = () => {
    const { data: session, status } = useSession();
    // const session = await getServerSession(authOptions);

  
    //    Use state to store the session
// const [session, setSession] = useState<Session | null>(null);

// useEffect(() => {
//     const fetchSession = async () => {
//         try {
//             const session = await getServerSession(authOptions);
//             console.log('Fetched session:', session);
//             setSession(session);
//         } catch (error) {
//             console.error('Error fetching session:', error);
//         }
//     };

//     fetchSession();
// }, []);


    return(
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg secondary h-16">
            <div className="flex items-center">
                <MobileSidebar />
                <Link href="/">
                <h1 className={cn(
                    "hidden md:block text-xl md:text-3xl font-bold text-primary",
                    font.className
                    )}>
                    Vendile.com
                </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button variant="premium" size="sm">
                    Upgrade
                    <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
                </Button>
                <ModeToggle />
                {
status === "authenticated" ? (
<p>{session.user.name}</p>
):(<p>{null}</p>)
                }
               
{
               status === "authenticated" ? (
<div>
      <Button onClick={()=> signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/sign-in`,
      })} variant="destructive">Sign Out</Button>
    </div> 
                     ) : (
 <Link href="/sign-in">Sign In</Link>
                    )
                }
                
                {/* <UserButton afterSignOutUrl=""/> */}
            </div>
        </div>
    );
};