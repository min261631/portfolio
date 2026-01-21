"use client"

import { useEffect, useMemo, useState } from "react"
import { Home, User, BarChart3, Briefcase, MessageCircle } from "lucide-react"

export function BottomNav() {
  const sections = useMemo(() => ["home", "about", "skills", "projects", "contact"], [])
  const [activeNav, setActiveNav] = useState<(typeof sections)[number]>("home")

  // Improved Scroll Spy using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id as (typeof sections)[number])
          }
        })
      },
      { threshold: 0.5 }
    )
    const elements = sections.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-md mx-auto px-6 pb-6">
        <div className="relative rounded-full p-2 border border-white/10 bg-[#0b0b0b]/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
          {/* top highlight line */}
          <div className="pointer-events-none absolute inset-x-4 top-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="flex items-center justify-around">
            {[
              { icon: Home, id: "home", label: "Home" },
              { icon: User, id: "about", label: "Profile" },
              { icon: BarChart3, id: "skills", label: "Stats" },
              { icon: Briefcase, id: "projects", label: "Portfolio" },
              { icon: MessageCircle, id: "contact", label: "Chat" },
            ].map(({ icon: Icon, id, label }) => {
              const isActive = activeNav === id
              return (
                <button
                  key={id}
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  aria-label={label}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "h-12 w-12 rounded-full grid place-items-center transition-all focus:outline-none focus:ring-2 focus:ring-emerald-300/35",
                    isActive
                      ? "bg-gradient-to-r from-sky-400 to-emerald-300 text-black shadow-lg shadow-emerald-500/20 scale-[1.08]"
                      : "text-white/50 hover:text-white/85 hover:bg-white/[0.05] hover:scale-[1.04]",
                  ].join(" ")}
                >
                  <Icon size={19} />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

