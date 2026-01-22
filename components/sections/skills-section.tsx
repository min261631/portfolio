import { Badge } from "@/components/ui/badge"
import { Cpu, Layers, Globe, Cloud } from "lucide-react"

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 max-w-7xl mx-auto scroll-mt-20 relative z-10"
      aria-label="Skills section"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-14 md:mb-16 gap-4">
        <div>
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-emerald-400 mb-3 sm:mb-4 font-bold">Expertise</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic uppercase">Technical Stack</h3>
        </div>
        <p className="text-white/40 max-w-xs text-left sm:text-right text-sm sm:text-base hidden md:block">
          Specializing in full-stack engineering, cloud architecture, and AI-driven solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4">
        {/* Main Skill Card */}
        <div className="glass-card md:col-span-2 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] relative overflow-hidden group">
          <Globe className="absolute -right-8 -bottom-8 text-emerald-500/5 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 group-hover:rotate-12 transition-transform" />
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-3">
            <Layers className="text-emerald-400 w-5 h-5 sm:w-6 sm:h-6" /> <span>Frontend Architecture</span>
          </h4>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((s) => (
              <Badge
                key={s}
                className="bg-white/5 hover:bg-emerald-500 hover:text-black transition-colors py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg sm:rounded-xl border-white/10 text-xs sm:text-sm"
              >
                {s}
              </Badge>
            ))}
          </div>
        </div>

        {/* Backend Card */}
        <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem]">
          <h4 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
            <Cpu className="text-sky-400 w-5 h-5 sm:w-6 sm:h-6" /> <span>Backend</span>
          </h4>
          <ul className="space-y-3 sm:space-y-4 text-white/50">
            <li className="flex items-center gap-2 font-mono text-xs sm:text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" /> Node.js / Bun
            </li>
            <li className="flex items-center gap-2 font-mono text-xs sm:text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" /> Python Flask
            </li>
            <li className="flex items-center gap-2 font-mono text-xs sm:text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" /> PostgreSQL
            </li>
          </ul>
        </div>

        {/* Cloud Card */}
        <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem]">
          <h4 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
            <Cloud className="text-purple-400 w-5 h-5 sm:w-6 sm:h-6" /> <span>Cloud</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {["AWS (S3, Lambda)", "Docker", "Firebase", "CI/CD"].map((t) => (
              <Badge key={t} variant="secondary" className="bg-white/5 text-white/60 border-none text-xs sm:text-sm py-1.5 px-3">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

