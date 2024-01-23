import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import {hash} from 'bcryptjs';
import * as z from 'zod';

// Define a schema for input validation
const userSchema = z
  .object({
    name: z.string().min(1, 'Full Name is required').max(100),
    // username: z.string().min(1, 'Full Name is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  })
  


export async function POST(req: NextRequest){
    try{
        const body = await req.json();
        const {email, name, password} = userSchema.parse(body);

        // Check if email already exists
        const existingUserByEmail = await prismadb.user.findUnique({
            where: {email: email}
        })
        if(existingUserByEmail){
            return NextResponse.json({user: null, message: "User with this email already exists"}, {status: 409})
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await prismadb.user.create({
            data:{
                name,
                email,
                password: hashedPassword
            }
        });

        const {password: newUserPassword, ...rest} = newUser;

        return NextResponse.json({user: rest, message: "User created successfully!"}, {status: 201});
    }catch(error){
        return NextResponse.json({message: "Something went wrong"}, {status: 500});
    }
}