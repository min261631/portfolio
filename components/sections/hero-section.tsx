"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  // Typing effect with cursor
  const roles = useMemo(
    () => ["Fullstack Developer", "Software Engineer", "Full-Stack Developer", "AI Enthusiast", "Problem Solver"],
    []
  )
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [cursor, setCursor] = useState(true)
  const [i, setI] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => setCursor((v) => !v), 520)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = del ? 45 : 80

    const timer = setTimeout(() => {
      if (!del && i < current.length) {
        setText(current.slice(0, i + 1))
        setI((v) => v + 1)
        return
      }

      if (del && i > 0) {
        setText(current.slice(0, i - 1))
        setI((v) => v - 1)
        return
      }

      if (!del && i === current.length) {
        setTimeout(() => setDel(true), 1100)
        return
      }

      if (del && i === 0) {
        setDel(false)
        setRoleIndex((v) => (v + 1) % roles.length)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [del, i, roleIndex, roles])

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-20 sm:pb-24 md:pb-16 scroll-mt-20 sm:scroll-mt-28 relative z-10"
      aria-label="Home section"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile: Centered layout with image first */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Profile Image - Mobile first, then right on desktop */}
          <div className="relative flex justify-center order-1 lg:order-2 lg:justify-end w-full lg:w-auto">
            <div className="animate-float w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] overflow-hidden">
              <Image
                src="/photo.PNG"
                alt="Mihini Niweka - Full-Stack Developer"
                width={500}
                height={500}
                className="w-full h-full object-contain"
                priority
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 420px"
              />
            </div>
          </div>

          {/* Content - Centered on mobile, centered-left on desktop */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start order-2 lg:order-1 w-full lg:pl-8 xl:pl-12 pt-4 sm:pt-6 md:pt-8">
            {/* Name */}
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-3 lg:mb-0 text-center lg:text-left whitespace-nowrap w-full font-secondary">
              MIHINI <span>NIWEKA</span>
            </h1>

            {/* Profession with typing effect */}
            <div className="mb-4 sm:mb-5 md:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px] font-secondary font-semibold leading-[1.2] text-center lg:text-left w-full whitespace-nowrap">
              <span className="text-white font-secondary">I am a </span>
              <span className="text-sky-300 uppercase inline-block min-w-[180px] sm:min-w-[220px] md:min-w-[280px] lg:min-w-[350px] xl:min-w-[400px] text-left font-secondary">
                {text}
                <span className={cursor ? "opacity-100" : "opacity-0"} aria-hidden>
                  |
                </span>
              </span>
            </div>

            {/* Contact info - Stacked on mobile, horizontal on desktop */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-white/80 pt-2 w-full">
              <span className="flex items-center gap-2">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0" style={{ display: 'block', verticalAlign: 'middle' }}>
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
                <span className="text-sm sm:text-base md:text-lg break-all sm:break-normal">mihininiweka@gmail.com</span>
              </span>
              <span className="flex items-center gap-2">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0" style={{ display: 'block', verticalAlign: 'middle' }}>
                  <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.37-28.3 20.53-36.8L296.6 284.5c9.07 2.78 26.4 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                </svg>
                <span className="text-sm sm:text-base md:text-lg">La Trobe University</span>
              </span>
              <span className="flex items-center gap-2">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0" style={{ display: 'block', verticalAlign: 'middle' }}>
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                </svg>
                <span className="text-sm sm:text-base md:text-lg">Melbourne</span>
              </span>
            </div>

            {/* Buttons - Side by side on all screen sizes */}
            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-5 w-full max-w-md mx-auto lg:max-w-none lg:mx-0 justify-center lg:justify-start">
              <Button
                size="lg"
                className="btn px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-3.5 md:py-4 lg:py-5 text-xs sm:text-sm md:text-base lg:text-lg shadow-lg shadow-emerald-500/20 hover:opacity-90 hover:scale-[1.02] transition-all bg-gradient-to-r from-emerald-400 to-sky-500 flex-1 sm:flex-none whitespace-nowrap h-[48px] sm:h-[52px] md:h-[56px]"
                asChild
              >
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  My Resume
                </Link>
              </Button>

              <Link
                href="tel:+61492917957"
                target="_blank"
                rel="noreferrer"
                className="btn btn_secondary border-2 border-none bg-none text-white hover:bg-accent hover:text-white transition-all flex items-center justify-center hover:animate-pulse whitespace-nowrap ease-in-out duration-700 flex-1 sm:flex-none px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-3.5 md:py-4 lg:py-5 text-xs sm:text-sm md:text-base lg:text-lg h-[48px] sm:h-[52px] md:h-[56px]"
              >
                Contact me
              </Link>
            </div>

            {/* Social icons - Centered on mobile */}
            <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-5 md:pt-6 justify-center lg:justify-start">
              {[
                { href: "https://github.com/min261631", label: "GitHub", Icon: Github },
                { href: "https://www.linkedin.com/in/mihini-ranasinghe-213355219", label: "LinkedIn", Icon: Linkedin },
                { href: "mailto:mihininiweka@gmail.com", label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="hero-icon w-10 h-10 sm:w-11 sm:h-11 md:w-[42px] md:h-[42px]"
                >
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

