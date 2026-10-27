import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

/* Serifa itálica usada só nos trechos de ênfase dos títulos. */
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jorge Antonio — Desenvolvedor Full Stack",
  description:
    "Portfólio de Jorge Antonio, desenvolvedor Full Stack em Recife. Java, Spring Boot, React e Next.js — do protótipo ao deploy.",
  openGraph: {
    title: "Jorge Antonio — Desenvolvedor Full Stack",
    description: "Java, Spring Boot, React e Next.js — do protótipo ao deploy.",
    images: ["/images/portfolio-preview.png"],
    locale: "pt_BR",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#f5f3ee" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrument.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
