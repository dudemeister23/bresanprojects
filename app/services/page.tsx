import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services - Bresan Projects Palm Beach Renovation Management",
  description:
    "Explore our renovation project management services including whole-home remodels, investor flips, kitchen & bath upgrades, and pre-sale improvements.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Services</h1>
            <p className="mt-6 text-xl text-gray-600">
              Comprehensive real estate project management services tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/hero.jpg" alt="Whole-Home Remodels" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Whole-Home Remodels</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Comprehensive renovation management from concept to closeout. Ideal for homeowners updating layout,
                  design, or functionality.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Budget development and management",
                    "Contractor selection and coordination",
                    "Timeline tracking and milestone management",
                    "Quality control inspections",
                    "Regular progress reporting",
                    "Issue resolution and troubleshooting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/about.jpg" alt="Investor Flips" fill className="object-cover" />
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Investor Flips</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Full project execution for investor-owned properties, with tight timelines and return-focused
                  delivery.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "ROI analysis and projections",
                    "Market research and property valuation",
                    "Exit strategy planning and execution",
                    "Renovation scope optimization for target markets",
                    "Contractor network access and management",
                    "Investment portfolio advisory services",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/hero.jpg" alt="Kitchen & Bath Upgrades" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Kitchen & Bath Upgrades</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Coordination with licensed subs and designers to modernize high-ROI spaces with minimal disruption.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Design guidance and recommendations",
                    "Material selection assistance",
                    "Value engineering to optimize budgets",
                    "Trend analysis and market insights",
                    "Sustainability and energy efficiency planning",
                    "Permit and regulatory compliance advice",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/about.jpg" alt="Pre-Sale Improvements" fill className="object-cover" />
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Pre-Sale Improvements</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Strategic updates to maximize listing appeal and sales value—especially for local agents and
                  developers.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Targeted upgrades for maximum ROI",
                    "Staging coordination and management",
                    "Market positioning and analysis",
                    "Curb appeal enhancements",
                    "Quick-turn renovations on tight timelines",
                    "Realtor and agent partnerships",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-navy/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              A structured approach to ensure your project's success from start to finish.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-navy/20 hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  title: "Initial Consultation",
                  description: "We meet to understand your vision, goals, and requirements for the project.",
                  number: "01",
                },
                {
                  title: "Project Planning",
                  description:
                    "We develop a comprehensive project plan including budget, timeline, and resource allocation.",
                  number: "02",
                },
                {
                  title: "Team Assembly",
                  description:
                    "We select and coordinate the right contractors and specialists for your specific project.",
                  number: "03",
                },
                {
                  title: "Execution & Monitoring",
                  description: "We oversee the day-to-day progress, ensuring quality and adherence to the plan.",
                  number: "04",
                },
                {
                  title: "Quality Assurance",
                  description:
                    "We conduct regular inspections to maintain the highest standards throughout the project.",
                  number: "05",
                },
                {
                  title: "Project Completion",
                  description:
                    "We ensure all final details are addressed and deliver a comprehensive project closeout.",
                  number: "06",
                },
              ].map((step, i) => (
                <div key={i} className="relative flex items-start md:items-center flex-col md:flex-row">
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:order-2"}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="inline-block bg-navy/10 text-navy font-bold text-sm px-3 py-1 rounded-full mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-navy border-4 border-white hidden md:block"></div>

                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:order-2" : "md:pr-12"}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Flexible Pricing Options</h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer various engagement models to suit your project needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Project-Based",
                description: "Fixed fee based on project scope and complexity.",
                features: [
                  "Clearly defined deliverables",
                  "Predictable costs",
                  "Milestone-based payments",
                  "Best for defined renovations",
                ],
              },
              {
                title: "Retainer",
                description: "Monthly fee for ongoing project management services.",
                features: [
                  "Dedicated support",
                  "Regular reporting",
                  "Multiple project oversight",
                  "Best for investors",
                ],
                featured: true,
              },
              {
                title: "Hourly Consulting",
                description: "Pay only for the time and expertise you need.",
                features: [
                  "Flexible engagement",
                  "Specialized advice",
                  "No long-term commitment",
                  "Best for specific challenges",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg overflow-hidden border ${plan.featured ? "border-navy shadow-lg" : "border-gray-200"}`}
              >
                {plan.featured && (
                  <div className="bg-navy text-white text-center py-2 text-sm font-medium">Most Popular</div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-navy mr-2 shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`${plan.featured ? "w-full" : "w-full"} py-2.5`}
                    variant={plan.featured ? "cta" : "navy"}
                  >
                    <Link href="/contact">Book a Free Consultation</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
