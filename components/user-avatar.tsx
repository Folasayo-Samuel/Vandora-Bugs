"use client";

// import { useUser } from "@clerk/nextjs";
import { authOptions } from "@/lib/auth";
import { getServerSession, Session } from "next-auth";

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { useState, useEffect } from "react";
export const UserAvatar =  () => {
//    Use state to store the session
const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        // Define an async function within useEffect
        const fetchSession = async () => {
            const session = await getServerSession(authOptions);
            setSession(session);
        };

        // Call the async function
        fetchSession();
    }, []); // Run once when the component mounts

    // const { user } = useUser();

    // Check if session is still loading
    // if (!session) {
    //     return <div>Loading...</div>;
    // }
    
    return (
        <Avatar className="h-12 w-12">
            <AvatarImage src={session?.user.image!}
            // src={user?.imageUrl} 
            />
        </Avatar>
    );
};