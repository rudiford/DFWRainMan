const services = [
  {
    id: "outdoor-contractor",
    title: "Outdoor Contractor",
    description:
      "Full-service outdoor project management from concept to completion. We coordinate every aspect of your outdoor renovation — planning, permitting, and execution — so you don't have to.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    placeholder: "Outdoor Contractor Project Photo",
    color: "from-green-700 to-green-900",
  },
  {
    id: "sprinkler",
    title: "Sprinkler Install, Repair & Maintenance",
    description:
      "Custom sprinkler design and installation built for Texas summers. We also service existing systems — from broken heads and controller issues to full winterization and spring startups.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    placeholder: "Sprinkler System Photo",
    color: "from-blue-700 to-blue-900",
  },
  {
    id: "landscape",
    title: "Landscape Design, Install & Maintenance",
    description:
      "Transform your outdoor space with professional landscape design tailored to DFW's climate. From planting beds and turf to seasonal color and ongoing maintenance programs.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    placeholder: "Landscape Design Photo",
    color: "from-emerald-700 to-emerald-900",
  },
  {
    id: "drainage",
    title: "Drainage Solutions",
    description:
      "Protect your property from water damage with engineered drainage solutions. French drains, channel drains, dry creek beds, and grading to redirect water away from your home.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    placeholder: "Drainage Solution Photo",
    color: "from-slate-600 to-slate-800",
  },
  {
    id: "lighting",
    title: "Outdoor Lighting",
    description:
      "Enhance your home's beauty, safety, and security with professional outdoor lighting. Path lights, uplighting, accent lighting, and smart controls to set the perfect ambiance.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    placeholder: "Outdoor Lighting Photo",
    color: "from-amber-600 to-amber-800",
  },
  {
    id: "hardscape",
    title: "Hardscape",
    description:
      "Create functional and beautiful outdoor living spaces with expert hardscape installation. Patios, walkways, retaining walls, fire pits, and decorative concrete — built to last.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    placeholder: "Hardscape Project Photo",
    color: "from-stone-600 to-stone-800",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-green-primary font-semibold tracking-widest uppercase text-sm mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Complete Outdoor Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From sprinkler systems to full landscape overhauls — we handle every aspect of your outdoor space so you can enjoy it.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${service.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40 40-40H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")" }} />
                <div className="relative text-center text-white/70 text-xs font-mono px-4 tracking-wider uppercase">
                  [ {service.placeholder} ]
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-col flex-1 p-6 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-primary/10 text-green-primary flex items-center justify-center group-hover:bg-green-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-charcoal text-lg leading-tight">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-green-primary font-semibold text-sm hover:gap-2 transition-all duration-150"
                >
                  Get a Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 bg-green-primary rounded-2xl p-8 md:p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Not sure what you need?</h3>
          <p className="text-white/85 mb-6 text-lg">
            Call us for a free consultation — we&apos;ll assess your property and recommend the best solution.
          </p>
          <a
            href="tel:2143330000"
            className="inline-flex items-center gap-2 bg-white text-green-primary font-bold px-8 py-3 rounded hover:bg-cream transition-colors duration-200 text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            214.333.xxxx
          </a>
        </div>
      </div>
    </section>
  );
}
