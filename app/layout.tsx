import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorTrail } from "@/components/cursor-trail"
import { CursorEffects } from "@/components/cursor-effects"
import { InteractiveCursor } from "@/components/interactive-cursor"
import { CursorGlow } from "@/components/cursor-glow"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jorge Antonio - Desenvolvedor Full Stack",
  description: "Portfólio de Jorge Antonio, desenvolvedor Full Stack especializado em Python, JavaScript, Java e PHP.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <CursorGlow />
          <InteractiveCursor />
          <CursorTrail />
          <CursorEffects />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
