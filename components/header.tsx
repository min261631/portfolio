"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 xl:px-24 py-6 flex items-center justify-between bg-transparent">
      <Link href="#home" className="group flex flex-col items-start" aria-label="Home">
        <div className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent tracking-tight">
          MR
        </div>
        <div className="text-sm tracking-[0.22em] text-white/65 group-hover:text-white/80 transition-colors">
          MIHINI NIWEKA
        </div>
      </Link>

      <Button
        className="rounded-2xl px-6 shadow-lg shadow-emerald-500/10 bg-gradient-to-r from-emerald-300 to-sky-400 text-black hover:opacity-90 hover:scale-[1.03] transition-all"
        asChild
      >
        <Link href="#contact">Work With Me</Link>
      </Button>
    </header>
  )
}

