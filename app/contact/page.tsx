"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <div className="w-20 h-1 bg-primary-blue mx-auto mb-8"></div>
            <p className="text-zinc-300 max-w-3xl mx-auto text-lg">
              Have a project in mind? We'd love to hear from you. Fill out the form below or contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-zinc-300 mb-8">
                Feel free to reach out to us with any questions or inquiries. We're here to help you with your branding
                needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-primary-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-zinc-300">
                      <a href="tel:8080399554" className="hover:text-primary-blue transition-colors">
                        8080399554
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-primary-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-zinc-300">
                      <a href="mailto:brandifymedia18@gmail.com" className="hover:text-primary-blue transition-colors">
                        brandifymedia18@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Instagram className="text-primary-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Instagram</h3>
                    <p className="text-zinc-300">
                      <a
                        href="https://instagram.com/brandify_media20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-blue transition-colors"
                      >
                        @brandify_media20
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-primary-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Office Hours</h3>
                    <p className="text-zinc-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-zinc-300">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-zinc-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/brandify_media20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-primary-blue text-white p-3 rounded-full transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

           <div className="bg-zinc-900 p-8 rounded-lg">
  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

  <form action="https://formspree.io/f/xqaqvkaq" method="POST">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Your Name <span className="text-primary-blue">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address <span className="text-primary-blue">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject <span className="text-primary-blue">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-blue"
        >
          <option value="">Select a subject</option>
          <option value="Logo Design">Logo Design</option>
          <option value="Business Card Design">Business Card Design</option>
          <option value="Brochure & Flyer Design">Brochure & Flyer Design</option>
          <option value="Website Design">Website Design</option>
          <option value="Social Media Design">Social Media Design</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>

    <div className="mb-6">
      <label htmlFor="message" className="block text-sm font-medium mb-2">
        Your Message <span className="text-primary-blue">*</span>
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-blue"
      ></textarea>
    </div>

    <button
      type="submit"
      className="bg-primary-blue text-white px-6 py-3 rounded-md font-medium hover:bg-primary-blue/90 transition-colors flex items-center justify-center"
    >
      Send Message
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </button>
  </form>
</div>

          </div>
        </div>
      </section>



      {/* FAQ Section 
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-primary-blue mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">How long does the branding process take?</h3>
              <p className="text-zinc-300">
                The timeline varies depending on the scope of the project. A basic logo design typically takes 1-2
                weeks, while a complete brand identity package may take 3-4 weeks.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">What information do you need to start a project?</h3>
              <p className="text-zinc-300">
                We'll need details about your business, target audience, brand values, and design preferences. We'll
                provide a questionnaire to gather this information at the start of the project.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">How many revisions are included in your design packages?</h3>
              <p className="text-zinc-300">
                Most of our packages include unlimited revisions until you're completely satisfied with the final
                design. We want to ensure that the end result perfectly matches your vision.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">What file formats will I receive for my logo?</h3>
              <p className="text-zinc-300">
                We provide logos in various formats including AI, EPS, PDF, PNG, and JPG. This ensures you have the
                right format for any application, whether print or digital.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Do you offer website development services?</h3>
              <p className="text-zinc-300">
                Yes, we offer website design and development services. We can create a modern, responsive website that
                aligns with your brand identity and meets your business needs.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">How do we get started on a project?</h3>
              <p className="text-zinc-300">
                Simply fill out the contact form on this page or reach out to us via email or phone. We'll schedule an
                initial consultation to discuss your project requirements and provide a quote.
              </p>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  )
}
