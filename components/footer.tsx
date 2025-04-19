import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary-foreground border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="mb-4">
              <Image
                src="/images/bresan-logo-horizontal.png"
                alt="Bresan Projects Logo"
                width={220}
                height={55}
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Where Vision Meets Value. Specializing in residential renovations and investor-funded home improvement
              projects.
            </p>
            <div className="flex mt-6 space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <a href="mailto:fabian@bresanprojects.com" className="text-sm hover:underline">
                  fabian@bresanprojects.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span className="text-sm">Palm Beach Gardens, FL</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 text-primary" />
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
              <p className="text-xs text-muted-foreground mb-2">Banking Partner</p>
              <div className="bg-white p-2 rounded-md inline-block">
                <Image
                  src="/placeholder.svg?height=30&width=120"
                  alt="Mercury Banking"
                  width={120}
                  height={30}
                  className="h-6 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-xs text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} Bresan Projects LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
