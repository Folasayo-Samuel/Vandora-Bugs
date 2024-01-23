import NextAuth from "next-auth"

declare module "next-auth" {
  interface User{
    name: string | null,
  }
  interface Session {
    user: User & {
        name: string
    },
    userId: User & {
      email: string | null,
    },
    token: {
        name: string | null
    }
  }
  interface verificationToken{
    token: string | null
  }
}