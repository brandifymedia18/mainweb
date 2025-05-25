import Image from "next/image"
import Link from "next/link"
import { Users, Award, Briefcase } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Brandify.media</h1>
            <div className="w-20 h-1 bg-primary-blue mx-auto mb-8"></div>
            <p className="text-zinc-300 max-w-3xl mx-auto text-lg">
              We are a creative branding agency dedicated to helping small businesses and startups build strong,
              memorable brand identities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-zinc-300 mb-6">
                Brandify.media was founded with a simple mission: to provide affordable, high-quality branding solutions
                to small businesses and startups that want to make a big impact.
              </p>
              <p className="text-zinc-300 mb-6">
                We understand that in today's competitive market, a strong brand identity is essential for standing out
                and connecting with your target audience. Our team of experienced designers and branding experts work
                closely with each client to create customized solutions that reflect their unique vision and values.
              </p>
              <p className="text-zinc-300">
                Whether you're just starting out or looking to refresh your existing brand, we're here to help you build
                a strong foundation for your business's success.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/ourstory.jpg?height=400&width=500"
                alt="Our Team"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-primary-blue mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              These core values guide everything we do at Brandify.media
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 p-8 rounded-lg text-center">
              <div className="bg-primary-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-primary-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-zinc-400">
                We aim for the best in every project, delivering great work that goes beyond expectations.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg text-center">
              <div className="bg-primary-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-zinc-400">
                We work closely with our clients to understand and bring their vision to life.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg text-center">
              <div className="bg-primary-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-blue"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-zinc-400">
                We use creativity and innovation to create unique branding that makes an impact.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg text-center">
              <div className="bg-primary-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="text-primary-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-zinc-400">
                We conduct our business with honesty, transparency, and a commitment to ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-primary-blue mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-2xl mx-auto">Meet the creative minds behind Brandify.media</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <Image
                src="/y.png?height=300&width=400"
                alt="Team Member"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Yash Kumbhar</h3>
                <p className="text-primary-blue mb-3">Creative Director</p>
                <p className="text-zinc-400">
                  With over 3 years of experience in branding and design, Yash leads our creative team.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <Image
                src="/a.png?height=300&width=400"
                alt="Team Member"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Atmaj Khatavkar</h3>
                <p className="text-primary-blue mb-3">Senior Designer</p>
                <p className="text-zinc-400">
                  Atmaj specializes in logo design and brand identity development for businesses of all sizes.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <Image
                src="/meta.png?height=300&width=400"
                alt="Team Member"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Meta Ads Expert</h3>
                <p className="text-primary-blue mb-3">Marketing Specialist</p>
                <p className="text-zinc-400">
                  Meta Ads Expert helps our clients develop effective marketing strategies to complement their branding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* CTA Section */}
      <section className="bg-primary-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's collaborate to create a powerful brand identity that helps your business grow and succeed.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-blue px-8 py-3 rounded-md font-bold hover:bg-white/90 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
