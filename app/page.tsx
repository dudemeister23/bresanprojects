import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Modern luxury interior with ocean view"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Where Vision <span className="text-sky-300">Meets Value</span>
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl">
              Bresan Projects delivers exceptional real estate project management for residential renovations and
              investor-funded home improvements in Palm Beach and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Palm Beach Roots, <br />
                Modern Approach
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Founded by Fabian Bresan, our firm combines deep local knowledge with innovative project management
                techniques to deliver exceptional results for homeowners and investors alike.
              </p>
              <div className="mt-8">
                <Link href="/about" className="inline-flex items-center text-sky-600 font-medium hover:text-sky-800">
                  Learn more about our story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Beautiful Florida coastal beach with palm trees"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-sky-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Project Management Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From initial concept to final walkthrough, we handle every aspect of your real estate project with
              precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Oversight</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive management of your renovation projects from planning to completion, ensuring quality and
                timeliness.
              </p>
              <ul className="space-y-2">
                {["Budget management", "Contractor coordination", "Timeline tracking"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Renovation Consulting</h3>
              <p className="text-gray-600 mb-6">
                Expert advice for your home improvement projects, helping you make informed decisions that maximize
                value.
              </p>
              <ul className="space-y-2">
                {["Design guidance", "Material selection", "Value engineering"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Investor Support</h3>
              <p className="text-gray-600 mb-6">
                Specialized services for real estate investors looking to maximize returns on renovation projects.
              </p>
              <ul className="space-y-2">
                {["ROI analysis", "Market research", "Exit strategy planning"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl max-w-2xl mx-auto">
            Ready to Transform Your Property?
          </h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Let's discuss how Bresan Projects can help bring your vision to life with expert project management.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
