import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 relative min-h-screen flex items-center scroll-mt-28"
      aria-label="Contact section"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        <p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-9 md:mb-10 max-w-2xl">
          If you're hiring or want to collaborate, send me a message — I reply fast.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <Button
            className="bg-gradient-to-r from-emerald-300 to-sky-400 text-black border-0 rounded-xl px-5 sm:px-6 py-3 sm:py-3.5 hover:opacity-90 transition-opacity text-sm sm:text-base w-full sm:w-auto"
            asChild
          >
            <Link href="mailto:mihininiweka@gmail.com">Email Me</Link>
          </Button>
          <Button variant="outline" className="bg-white/[0.04] border-white/15 rounded-xl px-5 sm:px-6 py-3 sm:py-3.5 text-white text-sm sm:text-base w-full sm:w-auto" asChild>
            <Link href="https://www.linkedin.com/in/mihini-ranasinghe-213355219" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

