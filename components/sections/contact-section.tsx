"use client"

import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="pt-12 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 scroll-mt-28"
      aria-label="Contact section"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Contact Info */}
          <div className="flex flex-col justify-center">
            <p className="text-sky-400 text-lg uppercase tracking-wider mb-4 font-secondary">
              GET IN TOUCH
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white font-secondary leading-tight">
              Let&apos;s Connect!
            </h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-sky-400 text-lg mb-2 font-secondary">Phone</p>
                <a href="tel:+61492917957" className="text-white text-2xl font-secondary hover:opacity-80 transition-opacity">
                  +61 492 917957
                </a>
              </div>
              <div>
                <p className="text-sky-400 text-lg mb-2 font-secondary">Email</p>
                <a href="mailto:mihininiweka@gmail.com" className="text-white text-2xl font-secondary hover:opacity-80 transition-opacity">
                  mihininiweka@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex items-center">
            <form
              onSubmit={handleSubmit}
              className="w-full border border-white/20 rounded-2xl p-8 bg-black/20 backdrop-blur-sm"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-base mb-2 font-secondary">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-white/30 text-white text-base placeholder-white/50 focus:outline-none focus:border-white pb-2 font-secondary"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-base mb-2 font-secondary">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-white/30 text-white text-base placeholder-white/50 focus:outline-none focus:border-white pb-2 font-secondary"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-base mb-2 font-secondary">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-white/30 text-white text-base placeholder-white/50 focus:outline-none focus:border-white pb-2 resize-none font-secondary"
                    placeholder=""
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-400 to-sky-500 text-white font-semibold text-lg py-3 px-6 rounded-full hover:opacity-90 transition-opacity font-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
                
                {submitStatus === "success" && (
                  <p className="text-green-400 text-base text-center font-secondary">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-base text-center font-secondary">
                    Failed to send message. Please try again or email me directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

