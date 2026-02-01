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
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-transparent pb-4 sm:pb-5 md:pb-6">
      <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
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
                "cursor-pointer w-[60px] h-[60px] flex items-center justify-center transition-all",
                isActive
                  ? "active rounded-full text-white p-4"
                  : "text-white/50 hover:text-white",
              ].join(" ")}
              style={
                isActive
                  ? {
                      background:
                        "linear-gradient(92.23deg, #406aff 21.43%, #3bace2 50.63%, #1ab639 100%, #0fb834 117.04%)",
                    }
                  : undefined
              }
            >
              <Icon size={24} />
            </button>
          )
        })}
      </div>
    </nav>
  )
}

