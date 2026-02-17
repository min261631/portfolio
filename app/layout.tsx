import type React from "react"
import type { Metadata } from "next"
import { Rajdhani, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { GalleryProvider } from "@/contexts/gallery-context"
import "./globals.css"

const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mihini Ranasinghe | Full-Stack Developer",
  description:
    "Software Engineering major at La Trobe University. Full-stack developer specializing in AWS, AI/ML, and scalable web applications. Vice President of GDG La Trobe & CTO of Enactus La Trobe.",
  keywords: ["Full-Stack Developer", "Software Engineer", "AWS", "React", "Next.js", "AI/ML", "Melbourne Developer"],
  authors: [{ name: "Mihini Niweka" }],
  generator: "Next.js",
  ...(process.env.NEXT_PUBLIC_SITE_URL && {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  }),
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
    title: "Mihini Niweka | Full-Stack Developer",
    description:
      "Full-stack developer crafting scalable, impact-driven applications with AWS, AI/ML, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden" suppressHydrationWarning>
      <body className={`${rajdhani.variable} ${orbitron.variable} font-sans antialiased overflow-x-hidden`}>
        <GalleryProvider>
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-black focus:rounded-lg focus:font-bold"
          >
            Skip to main content
          </a>
          <Header />
          {children}
          <Analytics />
        </GalleryProvider>
      </body>
    </html>
  )
}
