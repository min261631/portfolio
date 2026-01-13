"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Home,
  User,
  BarChart3,
  Briefcase,
  MessageCircle,
  Code2,
  Cpu,
  Layers,
  Globe,
  Cloud,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  const sections = useMemo(() => ["home", "about", "skills", "projects", "contact"], [])
  const [activeNav, setActiveNav] = useState<(typeof sections)[number]>("home")

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
    const t = window.setInterval(() => setCursor((v) => !v), 520)
    return () => window.clearInterval(t)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = del ? 45 : 80

    const timer = window.setTimeout(() => {
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
        window.setTimeout(() => setDel(true), 1100)
        return
      }

      if (del && i === 0) {
        setDel(false)
        setRoleIndex((v) => (v + 1) % roles.length)
      }
    }, speed)

    return () => window.clearTimeout(timer)
  }, [del, i, roleIndex, roles])

  // Improved Scroll Spy using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id)
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  return (
    <div className="min-h-screen overflow-hidden bg-site bg-no-repeat bg-cover text-white relative selection:bg-emerald-500/30">
      {/* Animated cloud-like light patches */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        <div className="cloud-light-1" />
        <div className="cloud-light-2" />
        <div className="cloud-light-3" />
      </div>

      {/* --- top header (same layout, more premium) --- */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 xl:px-24 py-6 flex items-center justify-between bg-transparent">
        <Link href="#home" className="group flex flex-col items-start">
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

      {/* --- HERO (same layout, better hierarchy + spacing + finish) --- */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 xl:px-24 pt-24 pb-32 scroll-mt-28 relative z-10"
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* left */}
          <div className="space-y-5 flex flex-col items-start">
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-3 lg:mb-0 whitespace-nowrap">
              MIHINI NIWEKA
            </h1>

            <div className="mb-6 text-[25px] lg:text-[50px] font-secondary font-semibold leading-[1] whitespace-nowrap">
              <span className="text-white">I am a </span>
              <span className="text-sky-300 uppercase inline-block w-[200px] lg:w-[400px] text-left">
                {text}
                <span className={cursor ? "opacity-100" : "opacity-0"} aria-hidden>
                  |
                </span>
              </span>
          </div>

            {/* contact row: lighter + cleaner */}
            <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6 text-white/80 pt-3">
              <div className="flex items-center gap-2.5">
                <Mail size={18} className="text-white/50" />
                <span className="text-lg">mihininiweka@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <GraduationCap size={18} className="text-white/50" />
                <span className="text-lg">La Trobe University</span>
        </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={18} className="text-white/50" />
                <span className="text-lg">Melbourne</span>
            </div>
          </div>

            {/* buttons: clearer primary/secondary */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Button
                size="lg"
                className="rounded-xl px-7 py-6 text-lg font-medium bg-gradient-to-r from-emerald-300 to-sky-400 text-black shadow-lg shadow-emerald-500/10 hover:opacity-90 hover:scale-[1.02] transition-all"
                asChild
              >
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  My Resume
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-7 py-6 text-lg font-medium border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/30 hover:scale-[1.02] transition-all"
                asChild
              >
                <Link href="#contact">Contact me</Link>
              </Button>
            </div>

            {/* socials: glass pills, nicer hover */}
            <div className="flex items-center gap-3 pt-6 justify-center">
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
                  className="hero-icon"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* right: portrait image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="animate-float w-full max-w-xs lg:max-w-sm xl:max-w-md">
              <Image
                src="/photo.png"
                alt="Mihini Niweka"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- bottom dock (same, looks more native) --- */}
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

      {/* About Section */}
      <section
        id="about"
        className="py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 relative min-h-screen flex items-center scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <Code2 className="text-emerald-300" size={32} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">About</h2>
            </div>
            <div className="space-y-5 text-lg text-white/80 leading-relaxed">
              <div className="p-8 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-emerald-300/30 transition-all">
                <p>
                Final-year Software Engineering student at La Trobe University with hands-on experience building
                full-stack applications, cloud deployments, and AI-driven features.
              </p>
              </div>
              <div className="p-8 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-emerald-300/30 transition-all">
                <p>I enjoy turning complex problems into clean, production-ready systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Bento Grid */}
      <section
        id="skills"
        className="py-32 px-6 md:px-12 lg:px-16 xl:px-24 max-w-7xl mx-auto scroll-mt-20 relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-bold">Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase">Technical Stack</h3>
          </div>
          <p className="text-white/40 max-w-xs text-right hidden md:block">
            Specializing in full-stack engineering, cloud architecture, and AI-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Main Skill Card */}
          <div className="glass-card md:col-span-2 p-10 rounded-[2.5rem] relative overflow-hidden group">
            <Globe className="absolute -right-8 -bottom-8 text-emerald-500/5 w-48 h-48 group-hover:rotate-12 transition-transform" />
            <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Layers className="text-emerald-400" /> Frontend Architecture
            </h4>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((s) => (
                <Badge
                  key={s}
                  className="bg-white/5 hover:bg-emerald-500 hover:text-black transition-colors py-2 px-4 rounded-xl border-white/10"
                >
                  {s}
                </Badge>
                  ))}
                </div>
          </div>

          {/* Backend Card */}
          <div className="glass-card p-10 rounded-[2.5rem]">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Cpu className="text-sky-400" /> Backend
            </h4>
            <ul className="space-y-4 text-white/50">
              <li className="flex items-center gap-2 font-mono text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" /> Node.js / Bun
              </li>
              <li className="flex items-center gap-2 font-mono text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" /> Python Flask
              </li>
              <li className="flex items-center gap-2 font-mono text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" /> PostgreSQL
              </li>
            </ul>
          </div>

          {/* Cloud Card */}
          <div className="glass-card p-10 rounded-[2.5rem]">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Cloud className="text-purple-400" /> Cloud
            </h4>
            <div className="flex flex-wrap gap-2">
              {["AWS (S3, Lambda)", "Docker", "Firebase", "CI/CD"].map((t) => (
                <Badge key={t} variant="secondary" className="bg-white/5 text-white/60 border-none">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 relative min-h-screen flex items-center scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                Projects
              </span>
          </h2>
            <p className="text-white/60 text-lg lg:text-xl">Building solutions that make a difference</p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            {/* Project 1: LINK */}
            <Card className="p-8 bg-white/[0.04] backdrop-blur-sm border-white/10 hover:border-emerald-300/30 transition-all duration-500 group overflow-hidden relative rounded-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-300/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-sky-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    LINK
                  </h3>
                  <p className="text-white/70 mb-4">
                    A platform connecting students with volunteering opportunities based on their skill gaps.
                  </p>
                </div>
                <Badge className="self-start bg-white/10 text-white border-white/20">In Progress</Badge>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Flutter", "Firebase", "Google Maps API", "TypeScript"].map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-white/5 text-white/80 border-white/20">
                    {tech}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-2 mb-6 text-white/70">
                <li>• Built cross-platform mobile app with Flutter for iOS and Android</li>
                <li>• Integrated Firebase for real-time data sync and authentication</li>
                <li>• Implemented location-based search using Google Maps API</li>
              </ul>

              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="bg-white/5 text-white border-white/20 hover:bg-white/10" asChild>
                  <Link href="https://github.com/min261631/link" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Project 2: MapMyColes */}
            <Card className="p-8 bg-white/[0.04] backdrop-blur-sm border-white/10 hover:border-emerald-300/30 transition-all duration-500 group overflow-hidden relative rounded-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-sky-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-sky-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    MapMyColes
                  </h3>
                  <p className="text-white/70 mb-4">
                    Location-based service helping users find nearest Coles stores with real-time inventory.
                  </p>
                </div>
                <Badge className="self-start bg-white/10 text-white border-white/20">Completed</Badge>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Node.js", "Google Maps API", "REST APIs"].map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-white/5 text-white/80 border-white/20">
                    {tech}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-2 mb-6 text-white/70">
                <li>• Developed full-stack web application with React frontend and Node.js backend</li>
                <li>• Integrated Google Maps API for store location and routing</li>
                <li>• Built REST API for inventory management and search functionality</li>
              </ul>

              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="bg-white/5 text-white border-white/20 hover:bg-white/10" asChild>
                  <Link href="https://github.com/min261631/mapmycoles" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact section (kept simple — you can paste your existing contact section here) */}
      <section
        id="contact"
        className="py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 relative min-h-screen flex items-center scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl">
            If you're hiring or want to collaborate, send me a message — I reply fast.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-to-r from-emerald-300 to-sky-400 text-black border-0 rounded-xl px-6 hover:opacity-90 transition-opacity" asChild>
              <Link href="mailto:mihininiweka@gmail.com">Email Me</Link>
            </Button>
            <Button variant="outline" className="bg-white/[0.04] border-white/15 rounded-xl px-6 text-white" asChild>
              <Link href="https://www.linkedin.com/in/mihini-ranasinghe-213355219" target="_blank">
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
