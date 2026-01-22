"use client"

import { BottomNav } from "@/components/bottom-nav"
import { BackgroundEffects } from "@/components/sections/background-effects"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-site bg-no-repeat bg-cover text-white relative selection:bg-emerald-500/30">
      {/* Skip to content link is handled in layout */}
      <BackgroundEffects />

      {/* Header is now in layout.tsx - shared across all pages */}

      <HeroSection />
      <AboutSection />

      {/* Bottom navigation - page-specific for single-page portfolio */}
      <BottomNav />

      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
