import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#02346A] text-white">
      {/* CTA Section */}
      <div className="container px-4 py-16 mx-auto text-center border-b border-white/10">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl max-w-2xl mx-auto">
          Ready to Transform Your Property?
        </h2>
        <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
          Let's discuss how Bresan Projects can help bring your vision to life with expert project management.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="xl"
            variant="white"
            className="text-lg px-8 py-6 h-auto font-bold shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <div className="mb-6">
              <Image
                src="/images/bresan-logo-horizontal-new.png"
                alt="Bresan Projects Logo"
                width={280}
                height={100}
                className="h-auto w-full max-w-[280px]"
              />
            </div>
            <p className="mt-4 text-sm text-white/80 max-w-xs">
              Where Vision Meets Value. Specializing in residential renovations and investor-funded home improvement
              projects.
            </p>
            <div className="flex mt-6 space-x-4">
              <Link href="#" className="text-white/70 hover:text-white">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 text-white/80" />
                <a href="mailto:fabian@bresanprojects.com" className="text-sm hover:underline">
                  fabian@bresanprojects.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-white/80" />
                <span className="text-sm">Palm Beach Gardens, FL</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 text-white/80" />
                <span className="text-sm">561-567-9478</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Company Information</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm">EIN: 33-4600872</li>
              <li className="text-sm">Florida LLC #L25000164087</li>
              <li className="text-sm">Est. 2025</li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-white/70 mb-2">Banking Partner</p>
              <div className="bg-white/10 p-2 rounded-md inline-block">
                <Image
                  src="/placeholder.svg?height=30&width=120"
                  alt="Mercury Banking"
                  width={120}
                  height={30}
                  className="h-6 object-contain opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-white/20">
          <p className="text-xs text-center text-white/60">
            &copy; {new Date().getFullYear()} Bresan Projects LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
