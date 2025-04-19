
import { ClipboardList, Hammer, BarChart3 } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      <header className="bg-gradient-to-r from-blue-100 via-white to-amber-100/60 py-4 fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-xl font-semibold">Bresan Projects</h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="pt-24 bg-cover bg-center h-screen flex items-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="bg-white/70 backdrop-blur-sm p-8 max-w-2xl mx-auto text-center rounded-2xl shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where Vision Meets Value
          </h2>
          <p className="text-lg">
            Florida’s trusted partner for investor‑focused renovations and
            residential transformations.
          </p>
        </div>
      </section>

      <section id="about" className="py-16 bg-amber-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/about.jpg"
            alt="Palm Beach coastline aerial"
            className="rounded-2xl shadow-md"
          />
          <div>
            <h3 className="text-3xl font-semibold mb-4">Our Story</h3>
            <p className="mb-4">
              Bresan Projects LLC began with a simple idea: elevate Florida homes
              while maximizing investor returns. Founded in Palm Beach Gardens
              by <strong>Fabian Bresan</strong>, a medically trained entrepreneur
              turned real‑estate strategist, we fuse meticulous project
              management with a passion for upscale design.
            </p>
            <p>
              From historic bungalow makeovers to full‑scale luxury flips, our
              local expertise and trusted network ensure every project is
              delivered on time, on budget, and above expectations.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-12">Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard title="Project Oversight" Icon={ClipboardList}>
              End‑to‑end management—from permitting to punch‑list—so you can
              focus on the bigger picture.
            </ServiceCard>
            <ServiceCard title="Renovation Consulting" Icon={Hammer}>
              Data‑driven recommendations that maximize resale value and
              minimize surprises.
            </ServiceCard>
            <ServiceCard title="Investor Support" Icon={BarChart3}>
              Detailed ROI analyses, transparent reporting, and lender‑ready
              documentation.
            </ServiceCard>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-8 text-center">Let’s Talk</h3>
          <form className="grid gap-6">
            <input type="text" placeholder="Name" className="border p-3 rounded-lg" />
            <input type="email" placeholder="Email" className="border p-3 rounded-lg" />
            <textarea placeholder="Tell us about your project…" rows="5" className="border p-3 rounded-lg" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition">
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center text-sm">
            <p>fabian@bresanprojects.com</p>
            <p>561‑567‑9478</p>
            <p>Palm Beach Gardens, FL</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Bresan Projects LLC. EIN 33‑4600872.
            Florida LLC # L25000164087.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, Icon, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
      <Icon className="w-10 h-10 text-blue-600 mb-4" />
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
}
