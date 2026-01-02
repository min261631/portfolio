import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mihini Ranasinghe | Full-Stack Developer",
  description:
    "Software Engineering major at La Trobe University. Full-stack developer specializing in AWS, AI/ML, and scalable web applications. Vice President of GDG La Trobe & CTO of Enactus La Trobe.",
  keywords: ["Full-Stack Developer", "Software Engineer", "AWS", "React", "Next.js", "AI/ML", "Melbourne Developer"],
  authors: [{ name: "Mihini Ranasinghe" }],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Mihini Ranasinghe | Full-Stack Developer",
    description:
      "Full-stack developer crafting scalable, impact-driven applications with AWS, AI/ML, and modern web technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
