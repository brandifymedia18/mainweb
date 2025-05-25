import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <div className="w-20 h-1 bg-primary-blue mx-auto mb-8"></div>
            <p className="text-zinc-300 max-w-3xl mx-auto text-lg">
              Explore our recent branding projects and see how we've helped businesses transform their brand identity.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src="/tech.png?height=300&width=400"
                  alt="Portfolio Item"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 {/* <Link href="#" className="bg-white text-primary-blue px-4 py-2 rounded-md font-medium">
                    View Project
                  </Link> */}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tech Startup Rebrand</h3>
                <p className="text-zinc-400 mb-3">Complete brand identity redesign for a growing tech startup.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Logo Design</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Website</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Branding</span>
                </div>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src="/cafe.jpg?height=300&width=400"
                  alt="Portfolio Item"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <Link href="#" className="bg-white text-primary-blue px-4 py-2 rounded-md font-medium">
                    View Project
                  </Link> */}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cafe Branding Package</h3>
                <p className="text-zinc-400 mb-3">Brand identity and packaging design for a local coffee shop.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Logo Design</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Packaging</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Menu Design</span>
                </div>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src="/fashion.jpg?height=300&width=400"
                  alt="Portfolio Item"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <Link href="#" className="bg-white text-primary-blue px-4 py-2 rounded-md font-medium">
                    View Project
                  </Link> */}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fashion Boutique Identity</h3>
                <p className="text-zinc-400 mb-3">Elegant brand identity for an upscale fashion boutique.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Logo Design</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Business Cards</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Packaging</span>
                </div>
              </div>
            </div>

            {/* Portfolio Item 4 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src="/estate.jpg?height=300&width=400"
                  alt="Portfolio Item"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <Link href="#" className="bg-white text-primary-blue px-4 py-2 rounded-md font-medium">
                    View Project
                  </Link> */}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Real Estate Agency Rebrand</h3>
                <p className="text-zinc-400 mb-3">Modern rebrand for a growing real estate agency.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Logo Design</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Stationery</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Website</span>
                </div>
              </div>
            </div>

            {/* Portfolio Item 5 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src="/health.jpg?height=300&width=400"
                  alt="Portfolio Item"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <Link href="#" className="bg-white text-primary-blue px-4 py-2 rounded-md font-medium">
                    View Project
                  </Link> */}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Health & Wellness Brand</h3>
                <p className="text-zinc-400 mb-3">Fresh and vibrant branding for a health and wellness company.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Logo Design</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Packaging</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Social Media</span>
                </div>
              </div>
            </div>

            {/* Portfolio Item 6 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src="/menu.jpg?height=300&width=400"
                  alt="Portfolio Item"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <Link href="#" className="bg-white text-primary-blue px-4 py-2 rounded-md font-medium">
                    View Project
                  </Link> */}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Restaurant Menu Design</h3>
                <p className="text-zinc-400 mb-3">Elegant menu design and branding for an upscale restaurant.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Menu Design</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Logo Design</span>
                  <span className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">Stationery</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Discuss Your Project <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Reviews</h2>
            <div className="w-20 h-1 bg-primary-blue mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="text-zinc-300 mb-4 italic">
                "Brandify.media transformed our brand identity completely. The logo design and business cards they
                created for us perfectly capture our company's vision. Highly recommended!"
              </p>
              <div>
                <h4 className="font-bold">Phino Bank</h4>
                <p className="text-zinc-400 text-sm"></p>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="text-zinc-300 mb-4 italic">
                "Working with Brandify.media was a pleasure from start to finish. They took the time to understand our
                business and created a brand identity that perfectly represents who we are."
              </p>
              <div>
                <h4 className="font-bold">Handia Cloud Kitchen</h4>
                <p className="text-zinc-400 text-sm"></p>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="text-primary-blue w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="text-zinc-300 mb-4 italic">
                "The social media designs Brandify.media created for us have significantly increased our engagement and
                following. Their team is professional, creative, and a pleasure to work with."
              </p>
              <div>
                <h4 className="font-bold">Bathory Kitchen</h4>
                <p className="text-zinc-400 text-sm"></p>
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
            Contact us today to discuss your project and how we can help your business stand out.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-blue px-8 py-3 rounded-md font-bold hover:bg-white/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
