import { ScrollAnimation } from "@/components/animations/scroll-animation"

export function AboutSection() {
  return (
    <section
      id="about"
      className="pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 md:pb-8 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 relative scroll-mt-28"
      aria-label="About section"
    >
      <ScrollAnimation>
        <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[90%] xl:max-w-6xl mx-auto relative z-10 overflow-x-hidden">
        <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] xl:grid-cols-[minmax(0,1.5fr)_minmax(0,0.5fr)] gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 items-start">
          {/* Left Section - Content */}
          <div className="space-y-4 sm:space-y-5">
            <h2 className="h2 text-accent mr-auto break-words">
              About me.
            </h2>
            <h3 className="h3 mb-4 break-words">
            I'm just a software engineering student passionate about turning ideas into innovative solutions through code. 

            </h3>
            <p className="mb-8 text-white font-secondary break-words">
            My experience includes 30+ end-to-end projects completed across internships at software companies, freelance work, university projects, startups, and in my own time.
             My Tech skills include:
            </p>
          </div>

          {/* Right Section - Experience Highlight */}
          <div className="flex flex-col items-center md:items-end md:mr-4 md:mb-auto mb-8">
            <div className="text-[40px] font-tertiary mb-2 leading-tight text-center md:text-right">
              <span className="text-sky-400">4</span><span className="text-emerald-400">+</span>
            </div>
            <div className="font-primary text-sm tracking-[2px] text-center md:text-right text-white">
              Years of <br />Experience
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  )
}

