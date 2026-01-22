"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4 md:py-5 lg:py-6 flex items-center justify-between bg-transparent backdrop-blur-sm bg-black/10">
      <Link href="#home" className="group flex flex-col items-start" aria-label="Home">
        <div className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent tracking-tight">
          MR
        </div>
        <div className="text-xs sm:text-sm tracking-[0.22em] text-white/65 group-hover:text-white/80 transition-colors hidden sm:block">
          MIHINI NIWEKA
        </div>
      </Link>

      <Button
        className="btn px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base shadow-lg shadow-emerald-500/10 bg-gradient-to-r from-emerald-300 to-sky-400 hover:opacity-90 hover:scale-[1.03] transition-all whitespace-nowrap"
        asChild
      >
        <Link href="#contact">Work With Me</Link>
      </Button>
    </header>
  )
}

