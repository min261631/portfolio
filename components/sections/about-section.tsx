export function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 relative scroll-mt-28"
      aria-label="About section"
    >
      <div className="w-full max-w-[100rem] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-10 md:gap-12 lg:gap-20 xl:gap-32 items-start">
          {/* Left Section - Content */}
          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.2em] text-sky-400 mb-4 sm:mb-5 md:mb-6 font-bold">
              ABOUT ME.
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-4 sm:mb-5 md:mb-6 leading-[1.1]">
              I'm just a dude passionate about Technology and Design
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-4xl">
              With 4+ years of working experience, 50+ projects completed including projects completed at software
              companies, freelance and in my own time. My Tech skills include:
            </p>
          </div>

          {/* Right Section - Experience Highlight */}
          <div className="flex flex-col items-center sm:items-end justify-start pt-2 lg:pr-8 xl:pr-16">
            <div className="mb-2 sm:mb-3 leading-none">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-sky-400">4</span>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-emerald-400">+</span>
            </div>
            <div className="text-white text-center sm:text-right">
              <div className="text-sm sm:text-base md:text-lg font-medium">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

