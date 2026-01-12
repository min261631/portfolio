"use client"

import { useState, useEffect } from "react"
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
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  const [activeNav, setActiveNav] = useState("home")
  const [typingText, setTypingText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  
  const roles = ["Full-Stack Developer", "Software Engineer", "AI Enthusiast", "Problem Solver"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex]
      
      if (!isDeleting && charIndex < currentRole.length) {
        setTypingText(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setTypingText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, currentRoleIndex])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorTimer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 300 && rect.bottom >= 300
        }
        return false
      })
      if (current) setActiveNav(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Subtle background gradient effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 xl:px-24 py-6 flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <Link href="#home" className="flex flex-col items-start group">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            MR
          </div>
          <div className="text-xs text-white/80 group-hover:text-white transition-colors tracking-wider">
            MIHINI RANASINGHE
          </div>
        </Link>
        
        <Button 
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0 hover:opacity-90 hover:scale-105 transition-all rounded-lg px-6 py-2 font-medium"
          asChild
        >
          <Link href="#contact">Work With Me</Link>
        </Button>
      </header>

      {/* Main Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 md:px-12 lg:px-16 xl:px-24 pt-24 pb-32">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side Content */}
          <div className="space-y-6 relative z-10">
            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              MIHINI RANASINGHE
            </h1>

            {/* Tagline with typing effect */}
            <div className="text-xl md:text-2xl lg:text-3xl font-medium text-white pt-2">
              <span>I am a </span>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {typingText}
                <span className={showCursor ? "opacity-100" : "opacity-0"}>|</span>
              </span>
            </div>

            {/* Contact Information */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90 pt-2">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-white/70" />
                <span className="text-base">mihininiweka@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-white/70" />
                <span className="text-base">La Trobe University</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-white/70" />
                <span className="text-base">Melbourne</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0 hover:opacity-90 hover:scale-105 transition-all rounded-lg px-8 font-medium shadow-lg shadow-green-500/20"
                asChild
              >
                <Link href="/resume.pdf" target="_blank">
                  My Resume
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-[#1a1a1a] text-white border-white/20 hover:bg-[#2a2a2a] hover:border-white/30 hover:scale-105 transition-all rounded-lg px-8 font-medium"
                asChild
              >
                <Link href="#contact">Contact me</Link>
              </Button>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-6">
              <Link
                href="https://github.com/min261631"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mihini-ranasinghe-213355219"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="mailto:mihininiweka@gmail.com"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>

          {/* Right Side - Profile Picture */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-[#0a0a0a] p-1">
                  <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-white/10">
                    <Image
                      src="/professional-headshot-of-young-female-software-eng.jpg"
                      alt="Mihini Ranasinghe"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/10">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-around bg-white/5 rounded-full p-2 backdrop-blur-sm border border-white/5">
            {[
              { icon: Home, id: "home", label: "Home" },
              { icon: User, id: "about", label: "Profile" },
              { icon: BarChart3, id: "skills", label: "Stats" },
              { icon: Briefcase, id: "projects", label: "Portfolio" },
              { icon: MessageCircle, id: "contact", label: "Chat" },
            ].map(({ icon: Icon, id, label }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveNav(id)
                  const element = document.getElementById(id === "home" ? "home" : id)
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
                className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
                  activeNav === id
                    ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg shadow-green-500/30 scale-110"
                    : "text-white/60 hover:text-white/80 hover:bg-white/10 hover:scale-105"
                }`}
                aria-label={label}
              >
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <Code2 className="text-green-400" size={32} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">About</h2>
            </div>
            <div className="space-y-5 text-lg text-white/80 leading-relaxed">
              <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all">
                <p>
                  Final-year Software Engineering student at La Trobe University with hands-on experience building
                  full-stack applications, cloud deployments, and AI-driven features.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all">
                <p>I enjoy turning complex problems into clean, production-ready systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-white">
            Skills <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">& Technologies</span>
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
                className="p-8 bg-white/5 backdrop-blur-sm border-white/10 hover:border-green-400/50 transition-all duration-300 group h-full"
              >
                <h3 className="text-sm font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4 uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-base text-white/80 flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/40" />
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
      <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Featured <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-white/60 text-lg lg:text-xl">Building solutions that make a difference</p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            {/* Project 1: LINK */}
            <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10 hover:border-green-400/30 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    LINK
                  </h3>
                  <p className="text-white/70 mb-4">
                    A platform connecting students with volunteering opportunities based on their skill gaps.
                  </p>
                </div>
                <Badge className="self-start bg-white/10 text-white border-white/20">
                  In Progress
                </Badge>
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
            <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10 hover:border-green-400/30 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    MapMyColes
                  </h3>
                  <p className="text-white/70 mb-4">
                    Location-based service helping users find nearest Coles stores with real-time inventory.
                  </p>
                </div>
                <Badge className="self-start bg-white/10 text-white border-white/20">
                  Completed
                </Badge>
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

            {/* Project 3: RSDCC */}
            <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10 hover:border-green-400/30 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    RSDCC - Retail Security Data Collection & Classification
                  </h3>
                  <p className="text-white/70 mb-4">
                    AI-powered system for retail security using computer vision and machine learning for threat
                    detection.
                  </p>
                </div>
                <Badge className="self-start bg-white/10 text-white border-white/20">
                  Capstone Project
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "TensorFlow", "Computer Vision", "AWS"].map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-white/5 text-white/80 border-white/20">
                    {tech}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-2 mb-6 text-white/70">
                <li>• Developed ML model for real-time threat classification with 85%+ accuracy</li>
                <li>• Deployed on AWS using Lambda and S3 for scalable video processing</li>
                <li>• Integrated computer vision pipeline for automated security monitoring</li>
              </ul>

              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="bg-white/5 text-white border-white/20 hover:bg-white/10" asChild>
                  <Link href="https://github.com/min261631/rsdcc" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience & Leadership Section */}
      <section id="experience" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-white">
            Experience & <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Leadership</span>
          </h2>

          <div className="space-y-6 lg:space-y-8 max-w-5xl">
            {[
              {
                title: "Vice President",
                org: "GDG La Trobe University",
                date: "Oct 2025 - Present",
                desc: "Lead technical workshops, manage partnerships, and create learning opportunities for 200+ students in Google technologies.",
              },
              {
                title: "Chief Technology Officer",
                org: "Enactus La Trobe",
                date: "Aug 2025 - Present",
                desc: "Oversee technology strategy and digital solutions for social impact projects, managing technical infrastructure and cybersecurity.",
              },
              {
                title: "Full Stack Developer",
                org: "IFFA Awards",
                date: "Nov 2025 - Present",
                desc: "Built and optimized web platform using AWS for hosting, databases, and media streaming. Enhanced site performance and SEO.",
              },
            ].map((exp, idx) => (
              <Card
                key={idx}
                className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:border-green-400/30 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                <div className="ml-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {exp.title}
                      </h3>
                      <p className="text-white/70 font-medium">{exp.org}</p>
                    </div>
                    <p className="text-sm text-white/60">{exp.date}</p>
                  </div>
                  <p className="text-white/70">{exp.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-blue-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Get In Touch</h2>
            <span className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-blue-500" />
          </div>
          <p className="text-lg lg:text-xl text-white/70 mb-10 md:mb-12 max-w-3xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0 hover:opacity-90 transition-opacity rounded-lg px-6" 
              asChild
            >
              <Link href="mailto:mihininiweka@gmail.com">
                <Mail size={18} className="mr-2" />
                Email Me
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/5 text-white border-white/20 hover:bg-white/10 rounded-lg px-6" 
              asChild
            >
              <Link href="https://github.com/min261631" target="_blank" rel="noopener noreferrer">
                <Github size={18} className="mr-2" />
                GitHub
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/5 text-white border-white/20 hover:bg-white/10 rounded-lg px-6" 
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/mihini-ranasinghe-213355219"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </Link>
            </Button>
          </div>

          <div className="text-sm text-white/60">
            <p>Melbourne, Australia</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 lg:px-16 xl:px-24 border-t border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center text-sm text-white/60">
          <p>© 2025 Mihini Ranasinghe. Built with Next.js and TypeScript.</p>
        </div>
      </footer>
    </div>
  )
}
