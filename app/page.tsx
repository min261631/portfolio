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
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  const sections = useMemo(() => ["home", "about", "skills", "projects", "contact"], [])
  const [activeNav, setActiveNav] = useState<(typeof sections)[number]>("home")

  // typing (keep your vibe, just smoother)
  const roles = useMemo(
    () => ["Full-Stack Developer", "Software Engineer", "AI Enthusiast", "Problem Solver"],
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

  // scroll spy (unchanged behaviour)
  useEffect(() => {
    const handler = () => {
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const r = el.getBoundingClientRect()
        return r.top <= 260 && r.bottom >= 260
      })
      if (current) setActiveNav(current)
    }
    window.addEventListener("scroll", handler, { passive: true })
    handler()
    return () => window.removeEventListener("scroll", handler)
  }, [sections])

  return (
    <div className="min-h-screen bg-[#07090b] text-white relative overflow-hidden">
      {/* --- premium background (depth, not distracting) --- */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 hero-grid opacity-[0.08]" />
        <div className="absolute -top-40 -left-48 h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-48 h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute inset-0 hero-vignette" />
        <div className="absolute inset-0 hero-noise opacity-40" />
      </div>

      {/* --- top header (same layout, more premium) --- */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 xl:px-24 py-5 flex items-center justify-between border-b border-white/10 bg-[#07090b]/70 backdrop-blur-xl">
        <Link href="#home" className="group flex flex-col items-start">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent tracking-tight">
            MR
          </div>
          <div className="text-[11px] tracking-[0.22em] text-white/65 group-hover:text-white/80 transition-colors">
            MIHINI RANASINGHE
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
        className="min-h-screen flex items-center px-6 md:px-12 lg:px-16 xl:px-24 pt-24 pb-32 scroll-mt-28 relative z-10"
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* left */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight">
              MIHINI
              <br />
              RANASINGHE
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl font-medium pt-1">
              <span className="text-white/80">I am a </span>
              <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                {text}
                <span className={cursor ? "opacity-100" : "opacity-0"} aria-hidden>
                  |
                </span>
              </span>
            </div>

            {/* subtle subline (kept, just nicer) */}
            <p className="max-w-xl text-white/60 text-base md:text-lg leading-relaxed">
              Building clean, production-ready web apps with solid UI, reliable APIs, and cloud deployment.
            </p>

            {/* contact row: lighter + cleaner */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/75 pt-1">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-white/45" />
                <span className="text-[15px]">mihininiweka@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-white/45" />
                <span className="text-[15px]">La Trobe University</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-white/45" />
                <span className="text-[15px]">Melbourne</span>
              </div>
            </div>

            {/* buttons: clearer primary/secondary */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                size="lg"
                className="rounded-2xl px-8 bg-gradient-to-r from-emerald-300 to-sky-400 text-black shadow-lg shadow-emerald-500/10 hover:opacity-90 hover:scale-[1.03] transition-all"
                asChild
              >
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  My Resume
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl px-8 border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.06] hover:border-white/25 hover:scale-[1.03] transition-all"
                asChild
              >
                <Link href="#contact">Contact me</Link>
              </Button>
            </div>

            {/* socials: glass pills, nicer hover */}
            <div className="flex items-center gap-3 pt-6">
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

          {/* right: portrait + ring (same concept, better finish) */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-float">
              {/* outer glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-emerald-300/20 to-sky-400/20 blur-3xl opacity-80" />
              {/* ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 p-[2px]">
                <div className="w-full h-full rounded-full bg-[#07090b] p-[6px] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_14px_40px_rgba(0,0,0,0.55)]">
                    <Image
                      src="/professional-headshot-of-young-female-software-eng.jpg"
                      alt="Mihini Ranasinghe"
                      width={640}
                      height={640}
                      className="w-full h-full object-cover scale-[1.01] hover:scale-[1.04] transition-transform duration-500"
                      priority
                    />
                    {/* subtle highlight */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_45%)]" />
                  </div>
                </div>
              </div>
              {/* thin outer ring */}
              <div className="absolute inset-0 rounded-full ring-1 ring-white/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* --- bottom dock (same, looks more native) --- */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#07090b]/70 backdrop-blur-xl">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="relative rounded-full p-2 border border-white/12 bg-white/[0.035] shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
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
                        ? "bg-gradient-to-r from-emerald-300 to-sky-400 text-black shadow-lg shadow-emerald-500/15 scale-[1.08]"
                        : "text-white/55 hover:text-white/85 hover:bg-white/[0.06] hover:scale-[1.04]",
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

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 relative min-h-screen flex items-center scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-white">
            Skills{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
              & Technologies
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
              { title: "Backend", skills: ["Node.js", "Flask", "REST APIs"] },
              { title: "Cloud / DevOps", skills: ["AWS (S3, Lambda, EC2)", "Firebase", "Docker", "CI/CD"] },
              { title: "Tools", skills: ["Git", "Figma", "SQL", "Google Cloud"] },
            ].map((category) => (
              <Card
                key={category.title}
                className="p-8 bg-white/[0.04] backdrop-blur-sm border-white/10 hover:border-emerald-300/35 transition-all duration-300 group h-full rounded-2xl"
              >
                <h3 className="text-sm font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-4 uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400" />
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-base text-white/80 flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/35" />
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
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
