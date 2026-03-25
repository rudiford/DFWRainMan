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
            {/* Social */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.facebook.com/RainManDFW/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-primary flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://search.google.com/local/reviews?placeid=ChIJRRJfnBKhToYR_REPLACE_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-primary flex items-center justify-center transition-colors duration-200"
                aria-label="Google Reviews"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>
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
