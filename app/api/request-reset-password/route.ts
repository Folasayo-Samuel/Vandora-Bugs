import nodemailer from 'nodemailer';
import prismadb from '@/lib/prismadb';
import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';

const emailConfig = {
  service: 'gmail', 
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_USERNAME,
    pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD
  },
};

const transporter = nodemailer.createTransport(emailConfig);

const userSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email')
})

export async function POST(request: NextRequest){

  try {
    const body = await request.json();
    const {email} = userSchema.parse(body);

    // Check if the user with the provided email exists
    const user = await prismadb.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({error: "User not found. We kindly request you to proceed with the registration page."}, {status: 404})
    }

    // Generate a unique token
    const token = uuidv4();

    // Store the token and expiration in the database
    await prismadb.verificationToken.create({
      data: {
        identifier: user.id,
        token,
        expires: new Date(Date.now() + 60 * 60 * 1000), // Expire in 1 hour
      },
    });

    // Send the password reset email
    const mailOptions = {
      from: 'info@vendile.com',
      to: user.email!,
      subject: 'Password Reset Request',
      text: `Click here to reset your password: http://localhost:3000/reset-password/${token}`,
    };

    transporter.sendMail(mailOptions);

    return NextResponse.json({ message:'Password Reset Token Sent Successfully'}, {status: 201});
  }
catch(error){
  console.error('Error in password reset request:', error);
  return NextResponse.json({ error: "Internal server error!" }, { status: 500 });
}
}



//   try{
//     const body = await request.json();
//     const {email} = userSchema.parse(body);

//     const existingUserByEmail = await prismadb.user.findUnique({
//       where: {email: email}
//     })

//     if(!existingUserByEmail){
//       return NextResponse.json({error: "User not found. We kindly request you to proceed with the registration page."}, {status: 404})
//     }

//     const token = await createPasswordResetToken(existingUserByEmail.id);

//     const transporter = nodemailer.createTransport({
//       service: 'gmail', 
//   auth: {
//     user: 'folasayosamuel@gmail.com',
//     pass: 'iypoicysixgdkmgm'
//     // process.env.GMAIL_APP_PASSWORD,
//   },
//     });

//     const mailOptions = {
//       from: 'info@vendille.com',
//       to: existingUserByEmail.email!,
//       subject: 'Password Reset Request',
//       text: `Click here to reset your password: http://localhost:3000/reset-password/${token}`,
//     };

//   const sendEmail = await transporter.sendMail(mailOptions);
// console.log(sendEmail);
// return NextResponse.json({sendEmail, message:"Password Reset Token Sent Successfully"}, {status: 201});

//   }
//   catch(error){
//     return NextResponse.json({ error: "User not found. We kindly request you to proceed with the registration page." }, { status: 404 }); 
//   }
// }

//   async function createPasswordResetToken(id:string) {
//     const user = await prismadb.user.findUnique({where: {id:id}})

//     if (!user) {
//       return NextResponse.json({error: "User not found. We kindly request you to proceed with the registration page."}, {status: 404})
//     }

//     const token = uuidv4();
//     const expiration = new Date(Date.now() + 60 * 60 * 1000); // Expire in 1 hour
//     await prismadb.verificationToken.create({
//       data: {
//         identifier: user.id!,
//         token,
//         expires: expiration
//       }
//     })
//     // await saveToken(userId, token, expiration);
//     return token
  // }