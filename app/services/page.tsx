import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <div className="w-20 h-1 bg-primary-blue mx-auto mb-8"></div>
            <p className="text-zinc-300 max-w-3xl mx-auto text-lg">
              We offer a comprehensive range of branding services to help your business stand out in the market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Logo Design</h2>
              <p className="text-zinc-300 mb-6">
                Your logo is the face of your brand. We create distinctive, memorable logos that capture your brand's
                essence and make a lasting impression on your audience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Custom logo design tailored to your brand
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Multiple concept options to choose from
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Unlimited revisions until you're satisfied
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Files in various formats for different uses
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/logo1.jpg?height=400&width=500"
                alt="Logo Design"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="order-2 md:order-1 relative">
              <Image
                src="/namecard.jpg?height=400&width=500"
                alt="Business Card Design"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-primary-blue mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 15H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Business Card Design</h2>
              <p className="text-zinc-300 mb-6">
                Make a strong first impression with professionally designed business cards that reflect your brand
                identity and leave a lasting impact.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Eye-catching, professional designs
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  High-quality print-ready files
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Double-sided designs available
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Various paper and finish options
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Brochures & Flyers</h2>
              <p className="text-zinc-300 mb-6">
                Communicate your message effectively with visually appealing brochures and flyers that engage your
                audience and drive action.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Tri-fold, bi-fold, and single-page designs
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Compelling copy and layout
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  High-resolution images and graphics
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Print-ready files in various formats
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/booklet&flayer.jpg?height=400&width=500"
                alt="Brochures & Flyers"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="order-2 md:order-1 relative">
              <Image
                src="/webdesign.jpg?height=400&width=500"
                alt="Website Design"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Website Design</h2>
              <p className="text-zinc-300 mb-6">
                Establish a strong online presence with a modern, responsive website that showcases your brand and
                engages your audience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Custom, responsive website design
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  User-friendly navigation and layout
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  SEO-friendly structure
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Mobile-optimized for all devices
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Social Media Design</h2>
              <p className="text-zinc-300 mb-6">
                Boost your online presence with eye-catching social media graphics that attract followers and enhance
                your brand visibility.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Profile and cover images for all platforms
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Post templates for consistent branding
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Engaging graphics for promotions
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-primary-blue mr-2">•</span>
                  Platform-specific size optimization
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/socialmedia.jpg?height=400&width=500"
                alt="Social Media Design"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <div className="w-20 h-1 bg-primary-blue mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              We follow a structured approach to ensure that every project meets our high standards and your
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-zinc-900 p-8 rounded-lg text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-blue w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Discovery</h3>
              <p className="text-zinc-400">
                We start by understanding your business, target audience, and branding goals.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-blue w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Concept</h3>
              <p className="text-zinc-400">
                Our designers create initial concepts based on your requirements and brand vision.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-blue w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Refinement</h3>
              <p className="text-zinc-400">We refine the chosen concept based on your feedback until it's perfect.</p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-blue w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Delivery</h3>
              <p className="text-zinc-400">
                We deliver the final files in various formats suitable for different applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* More Services Section */}
<section className="bg-zinc-950 py-12">
  <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Looking for More Services?</h2>
    <p className="text-zinc-400 mb-6">
      Explore our full range of printing and designing services to help your brand grow even further.
    </p>
    <a
      href="https://brandifymedia-contact.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-primary-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-blue/90 transition-colors"
    >
      Visit Full Service List
    </a>
  </div>
</section>


      {/* CTA Section */}
      <section className="bg-primary-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your branding needs and how we can help your business stand out.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-blue px-8 py-3 rounded-md font-bold hover:bg-white/90 transition-colors inline-flex items-center"
          >
            Contact Us <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
