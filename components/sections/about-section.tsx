export function AboutSection() {
  return (
    <section
      id="about"
      className="pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative scroll-mt-28"
      aria-label="About section"
    >
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.4fr_0.6fr] xl:grid-cols-[1.5fr_0.5fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Section - Content */}
          <div className="space-y-4 sm:space-y-5">
            <h2 className="h2 text-accent mr-auto">
              About me.
            </h2>
            <h3 className="h3 mb-4">
            I’m just a software engineering student passionate about turning ideas into innovative solutions through code. 

            </h3>
            <p className="mb-8 text-white font-secondary">
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
    </section>
  )
}

