import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Award, Users, Briefcase, Zap } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black to-zinc-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block">Make your brand stand out </span>
                <span className="text-primary-blue">and rise above the crowd</span>
              </h1>
              <p className="text-lg text-zinc-300 mb-8">
                Professional branding services for small businesses and startups. We create memorable brand identities
                that connect with your audience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary flex items-center">
                  Get Started <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="text-white border border-zinc-700 px-6 py-2 rounded-md hover:border-primary-blue transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/head.jpg?height=400&width=500"
                alt="Branding Services"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-primary-blue mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              We offer a complete range of branding services to help your business stand out in the market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card">
              <div className="text-primary-blue mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Logo Design</h3>
              <p className="text-zinc-400">
                Logo design that shows your brand and leaves a strong impression.
              </p>
            </div>

            <div className="service-card">
              <div className="text-primary-blue mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 15H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Business Card Design</h3>
              <p className="text-zinc-400">
                Eye-catching business cards that impress clients.
              </p>
            </div>

            <div className="service-card">
              <div className="text-primary-blue mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" />
                  <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Brochures & Flyers</h3>
              <p className="text-zinc-400">
                Brochures and flyers that look great and clearly share your message.
              </p>
            </div>

            <div className="service-card">
              <div className="text-primary-blue mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 3V21" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 9H9" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 15H9" stroke="currentColor" strokeWidth="2" />
                  <path d="M15 3V21" stroke="currentColor" strokeWidth="2" />
                  <path d="M15 9H21" stroke="currentColor" strokeWidth="2" />
                  <path d="M15 15H21" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Website Design</h3>
              <p className="text-zinc-400">
                Modern, responsive website designs that showcase your brand and engage your audience.
              </p>
            </div>

            <div className="service-card">
              <div className="text-primary-blue mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M8 6H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Booklets & Catalogs</h3>
              <p className="text-zinc-400">
                Professionally designed booklets and catalogs that showcase your products and services.
              </p>
            </div>

            <div className="service-card">
              <div className="text-primary-blue mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M8.5 9.5C8.5 8.11929 9.61929 7 11 7H13C14.3807 7 15.5 8.11929 15.5 9.5C15.5 10.8807 14.3807 12 13 12H11C9.61929 12 8.5 13.1193 8.5 14.5C8.5 15.8807 9.61929 17 11 17H13C14.3807 17 15.5 15.8807 15.5 14.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M12 7V17" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Social Media Design</h3>
              <p className="text-zinc-400">
                Engaging social media graphics that boost your online presence and attract followers.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary inline-flex items-center">
              View All Services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Choose Brandify.media?</h2>
              <p className="text-zinc-300 mb-8">
                We're dedicated to helping small businesses and startups build strong brand identities that resonate
                with their target audience.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Expert Design Team</h3>
                    <p className="text-zinc-400">
                      Our team of designers creates high-quality, professional designs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Customized Solutions</h3>
                    <p className="text-zinc-400">
                      We build branding that matches your goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Timely Delivery</h3>
                    <p className="text-zinc-400">
                      We value your time and ensure that projects are completed on schedule.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Affordable Pricing</h3>
                    <p className="text-zinc-400">
                      Affordable, quality branding for small businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <Award className="text-primary-blue mx-auto mb-4" size={40} />
                <h3 className="font-bold text-lg mb-2">Quality Work</h3>
                <p className="text-zinc-400 text-sm">High-quality designs that go beyond expectations.</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <Users className="text-primary-blue mx-auto mb-4" size={40} />
                <h3 className="font-bold text-lg mb-2">Client Focus</h3>
                <p className="text-zinc-400 text-sm">Client satisfaction is our top priority.</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <Briefcase className="text-primary-blue mx-auto mb-4" size={40} />
                <h3 className="font-bold text-lg mb-2">Experience</h3>
                <p className="text-zinc-400 text-sm">Years of experience in branding and design</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <Zap className="text-primary-blue mx-auto mb-4" size={40} />
                <h3 className="font-bold text-lg mb-2">Fast Turnaround</h3>
                <p className="text-zinc-400 text-sm">Quick delivery without compromising quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's work together to create a powerful brand identity that helps your business grow and succeed.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-blue px-8 py-3 rounded-md font-bold hover:bg-white/90 transition-colors inline-flex items-center"
          >
            Get in Touch <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
