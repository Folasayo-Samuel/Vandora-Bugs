import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Provider from '@/components/Provider';
// import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vendile',
  description: 'Now, You are not alone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-slate", inter.className)}>
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
          {children}
          <Toaster/>
          </ThemeProvider>
    </Provider>
          </body>
      </html>
  )
}
