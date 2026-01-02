"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Menu, X, ArrowRight, Code2, Sparkles } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-30" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-chart-2/15 rounded-full blur-3xl animate-float opacity-25"
          style={{ animationDelay: "4s", animationDuration: "10s" }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="#home"
            className="text-lg font-bold hover:text-primary transition-all duration-300 hover:scale-105"
          >
            <span className="gradient-text">Mihini Ranasinghe</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
                className={`text-sm font-medium capitalize px-4 py-2 rounded-lg transition-all ${
                  activeSection === section
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-6 py-4 flex flex-col gap-2">
              {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-left text-sm font-medium capitalize py-2 text-muted-foreground hover:text-foreground"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-20 pb-16 relative">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm animate-float">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Open to Full-Stack Opportunities</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Mihini <span className="gradient-text">Ranasinghe</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Software Engineering Student | Full-Stack Developer
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I build scalable, impact-driven web applications using React, TypeScript, AWS, and AI — from idea to
              production.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild className="magnetic group">
                <Link href="#projects">
                  View Projects
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="magnetic bg-transparent">
                <Link href="https://github.com/min261631" target="_blank" rel="noopener noreferrer">
                  <Github size={18} className="mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm perspective-container">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl card-3d group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src="/professional-headshot-of-young-female-software-eng.jpg"
                  alt="Mihini Ranasinghe"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="absolute inset-0 grid-background opacity-5" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <Code2 className="text-primary" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold">About</h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p className="spotlight p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
                Final-year Software Engineering student at La Trobe University with hands-on experience building
                full-stack applications, cloud deployments, and AI-driven features.
              </p>
              <p className="spotlight p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
                I enjoy turning complex problems into clean, production-ready systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Skills <span className="text-primary">& Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
              { title: "Backend", skills: ["Node.js", "Flask", "REST APIs"] },
              { title: "Cloud / DevOps", skills: ["AWS (S3, Lambda, EC2)", "Firebase", "Docker", "CI/CD"] },
              { title: "Tools", skills: ["Git", "Figma", "SQL", "Google Cloud"] },
            ].map((category, idx) => (
              <Card
                key={category.title}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 tilt-hover group"
              >
                <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-base flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                    >
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
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
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">Building solutions that make a difference</p>

          <div className="space-y-8">
            {/* Project 1: LINK */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 group overflow-hidden relative spotlight">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">LINK</h3>
                  <p className="text-muted-foreground mb-4">
                    A platform connecting students with volunteering opportunities based on their skill gaps.
                  </p>
                </div>
                <Badge variant="secondary" className="self-start">
                  In Progress
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Flutter", "Firebase", "Google Maps API", "TypeScript"].map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-2 mb-6 text-muted-foreground">
                <li>• Built cross-platform mobile app with Flutter for iOS and Android</li>
                <li>• Integrated Firebase for real-time data sync and authentication</li>
                <li>• Implemented location-based search using Google Maps API</li>
              </ul>

              <div className="flex gap-3">
                <Button size="sm" variant="outline" asChild>
                  <Link href="https://github.com/min261631/link" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Project 2: MapMyColes */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 group overflow-hidden relative spotlight">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">MapMyColes</h3>
                  <p className="text-muted-foreground mb-4">
                    Location-based service helping users find nearest Coles stores with real-time inventory.
                  </p>
                </div>
                <Badge variant="secondary" className="self-start">
                  Completed
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Node.js", "Google Maps API", "REST APIs"].map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-2 mb-6 text-muted-foreground">
                <li>• Developed full-stack web application with React frontend and Node.js backend</li>
                <li>• Integrated Google Maps API for store location and routing</li>
                <li>• Built REST API for inventory management and search functionality</li>
              </ul>

              <div className="flex gap-3">
                <Button size="sm" variant="outline" asChild>
                  <Link href="https://github.com/min261631/mapmycoles" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Project 3: RSDCC */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 group overflow-hidden relative spotlight">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-chart-2/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    RSDCC - Retail Security Data Collection & Classification
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    AI-powered system for retail security using computer vision and machine learning for threat
                    detection.
                  </p>
                </div>
                <Badge variant="secondary" className="self-start">
                  Capstone Project
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "TensorFlow", "Computer Vision", "AWS"].map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-2 mb-6 text-muted-foreground">
                <li>• Developed ML model for real-time threat classification with 85%+ accuracy</li>
                <li>• Deployed on AWS using Lambda and S3 for scalable video processing</li>
                <li>• Integrated computer vision pipeline for automated security monitoring</li>
              </ul>

              <div className="flex gap-3">
                <Button size="sm" variant="outline" asChild>
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
      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>

          <div className="space-y-6">
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
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                <div className="ml-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                      <p className="text-muted-foreground font-medium">{exp.org}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.date}</p>
                  </div>
                  <p className="text-muted-foreground">{exp.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <span className="w-8 h-0.5 bg-primary" />
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" asChild className="magnetic group">
              <Link href="mailto:mihininiweka@gmail.com">
                <Mail size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
                Email Me
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="magnetic group bg-transparent">
              <Link href="https://github.com/min261631" target="_blank" rel="noopener noreferrer">
                <Github size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
                GitHub
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="magnetic group bg-transparent">
              <Link
                href="https://www.linkedin.com/in/mihini-ranasinghe-213355219"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
                LinkedIn
              </Link>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Melbourne, Australia</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Mihini Ranasinghe. Built with Next.js and TypeScript.</p>
        </div>
      </footer>
    </div>
  )
}
