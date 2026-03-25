import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Outdoor Contractor",
  "Sprinkler Systems",
  "Landscape Design",
  "Drainage Solutions",
  "Outdoor Lighting",
  "Hardscape",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Rain Man Irrigation"
              width={160}
              height={60}
              className="h-14 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Family-owned outdoor services for the Dallas-Fort Worth area. Sprinkler systems, landscape design, drainage, lighting, and hardscape — done right.
            </p>
            {/* Phone */}
            <a
              href="tel:2143330000"
              className="inline-flex items-center gap-2 bg-green-primary hover:bg-green-light text-white font-bold px-5 py-3 rounded transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              214.333.xxxx
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm tracking-widest uppercase">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
          <span>
            &copy; {year} Rain Man Irrigation. All rights reserved. | Dallas-Fort Worth, TX
          </span>
          <span className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
            <a href="mailto:info@dfwrainman.com" className="hover:text-gray-300 transition-colors">
              info@dfwrainman.com
            </a>
            {" · "}
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJRRJfnBKhToYR_REPLACE_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              ⭐ Google Reviews
            </a>
            {" · "}
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
