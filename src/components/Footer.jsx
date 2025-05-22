// import { a } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Logo from "../assets/image/FATIPL Logo - Visheshh Jatiaa.png"

const services = [
  { name: "Accounting and Finance", href: "/services/accounting" },
  { name: "Supply Chain Management", href: "/services/supply-chain" },
  { name: "Procurement Solutions", href: "/services/procurement" },
  { name: "IT and ERP Services", href: "/services/it-erp" },
  { name: "HR and Administrative Services", href: "/services/hr-admin" },
  { name: "Legal and Compliance Services", href: "/services/legal" },
]

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border px-4">
      <div className="container pt-10 md:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="/" className="inline-block mb-4">
              <img src={Logo} className="h-4" alt="Logo" />
            </a>
            <p className="text-muted-foreground mb-4">
              Providing comprehensive corporate services to help businesses thrive in today's competitive environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-blue">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">aedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick as</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-blue">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="text-muted-foreground hover:text-blue">
                  About
                </a>
              </li>
              <li>
                <a href="/career" className="text-muted-foreground hover:text-blue">
                  Career
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-blue">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <a href={service.href} className="text-muted-foreground hover:text-blue">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-blue mr-2 flex-shrink-0" />
                <span className="text-muted-foreground">Corporate Office: 144A, Mittal Tower, Nariman Point, Mumbai 400021
                  Registered Address: 430-B, Kewal Industrial Estate, Senapati Bapat Marg, Mumbai 400013</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-blue mr-2 flex-shrink-0" />
                <span className="text-muted-foreground">+91 22 43337200</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-blue mr-2 flex-shrink-0" />
                <span className="text-muted-foreground">fukui@texbrex.com</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm text-center">
            &copy; {new Date().getFullYear()} FAI Corporate Services. All rights reserved.
          </p>
        </div>
    </footer>
  )
}
