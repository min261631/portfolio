"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
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
      className="min-h-[85vh] flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-20 sm:pb-24 md:pb-16 scroll-mt-20 sm:scroll-mt-28 relative z-10"
      aria-label="Home section"
    >
      <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[90%] xl:max-w-7xl mx-auto w-full overflow-x-hidden">
        {/* Mobile: Centered layout with image first */}
        <div className="flex flex-col-reverse xl:flex-row gap-y-8 xl:items-center xl:gap-x-12">
          {/* Content - Centered on mobile, left-aligned on desktop */}
          <div className="flex-1 flex flex-col items-center xl:items-start text-center xl:text-left xl:pl-12 2xl:pl-16 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 xl:space-y-8">
            {/* Name */}
            <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[110px] font-bold leading-[0.9] text-center lg:text-left break-words w-full font-secondary text-white lg:mb-0">
              MIHINI <span>NIWEKA</span>
            </h1>

            {/* Profession with typing effect */}
            <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-[50px] font-secondary font-semibold leading-[1.2] text-center lg:text-left w-full break-words lg:-mt-2 xl:-mt-3">
              <span className="text-white font-secondary">I am a </span>
              <span className="text-sky-300 inline-block text-left font-secondary whitespace-nowrap">
                {text}
                <span className={cursor ? "opacity-100" : "opacity-0"} aria-hidden>
                  |
                </span>
              </span>
            </div>

            {/* Contact info - Stacked on mobile, horizontal on desktop */}
            <div className="flex flex-col xl:flex-row gap-x-6 xl:gap-y-4 mb-5 text-white text-lg items-center w-full justify-center xl:justify-start flex-wrap">
              <span className="flex items-center gap-2.5">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" style={{ display: 'block', verticalAlign: 'middle' }}>
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
                <span className="text-sm sm:text-base md:text-lg">mihininiweka@gmail.com</span>
              </span>
              <span className="flex items-center gap-2.5 whitespace-nowrap">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" style={{ display: 'block', verticalAlign: 'middle' }}>
                  <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.37-28.3 20.53-36.8L296.6 284.5c9.07 2.78 26.4 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                </svg>
                <span className="text-sm sm:text-base md:text-lg">La Trobe University</span>
              </span>
              <span className="flex items-center gap-2.5 whitespace-nowrap">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" style={{ display: 'block', verticalAlign: 'middle' }}>
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                </svg>
                <span className="text-sm sm:text-base md:text-lg">Melbourne</span>
              </span>
            </div>

            {/* Buttons - Side by side */}
            <div className="flex max-w-max gap-x-6 items-center mb-6 xl:mb-10 mx-auto xl:mx-0">
              <Button
                size="lg"
                className="btn px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 lg:py-5 text-sm sm:text-base md:text-lg shadow-lg shadow-emerald-500/20 hover:opacity-90 hover:scale-[1.02] transition-all bg-gradient-to-r from-emerald-400 to-sky-500 whitespace-nowrap h-[48px] sm:h-[52px] md:h-[56px]"
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
                className="btn btn_secondary border-2 border-none bg-none text-white hover:bg-accent hover:text-white transition-all flex items-center justify-center hover:animate-pulse whitespace-nowrap ease-in-out duration-700 px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 lg:py-5 text-sm sm:text-base md:text-lg h-[48px] sm:h-[52px] md:h-[56px]"
              >
                Contact me
              </Link>
            </div>

            {/* Social icons - Centered */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto xl:mx-0">
              <Link
                href="https://github.com/min261631"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', verticalAlign: 'middle' }}>
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mihini-ranasinghe-213355219"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', verticalAlign: 'middle' }}>
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
              </Link>
              <Link
                href="mailto:mihininiweka@gmail.com"
                aria-label="Email"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', verticalAlign: 'middle' }}>
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Profile Image - Mobile first, then right on desktop */}
          <div className="xl:flex flex-1 max-w-[80%] sm:max-w-[60%] md:max-w-[50%] xl:max-w-[40%] 2xl:max-w-[450px] mx-auto -mt-16 sm:-mt-20 md:-mt-24 xl:mt-0 xl:-ml-8 2xl:-ml-12">
            <div className="animate-float w-full overflow-hidden rounded-full xl:rounded-none">
              <Image
                src="/photo.PNG"
                alt="Mihini Niweka - Full-Stack Developer"
                width={500}
                height={500}
                className="w-full h-auto object-cover brightness-[90%]"
                priority
                sizes="(max-width: 640px) 80vw, (max-width: 1280px) 50vw, 450px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

