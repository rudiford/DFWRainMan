const PHONE = "214.333.xxxx";
const PHONE_HREF = "tel:2143330000";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background placeholder — replace with real photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-dark via-green-primary to-charcoal">
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.03) 35px, rgba(255,255,255,.03) 70px)",
          }}
        />
        {/* Placeholder label — remove when real photo is added */}
        <div className="absolute inset-0 flex items-end justify-start p-6">
          <span className="text-white/20 text-xs font-mono tracking-widest uppercase">
            [ Hero Background Photo — Replace with landscape/irrigation image ]
          </span>
        </div>
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-dark/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 mb-6 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Family-Owned &amp; Serving DFW Since Day One
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
          Dallas-Fort Worth&apos;s
          <br />
          <span className="text-green-400">Trusted Outdoor</span>
          <br />
          Experts
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
          Sprinkler systems, landscape design, drainage, outdoor lighting, and hardscape — all from one team that treats your yard like their own.
        </p>

        <p className="text-white/70 mb-10 text-base sm:text-lg">
          Serving Dallas, Plano, Frisco, McKinney, Allen &amp; the entire DFW metroplex
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-primary hover:bg-green-dark text-white font-bold px-8 py-4 rounded text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            Get a Free Estimate
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href={PHONE_HREF}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-green-primary font-bold px-8 py-4 rounded text-lg transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call {PHONE}
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 sm:gap-10 text-white/80 text-sm">
          {[
            { icon: "⭐", label: "5-Star Rated" },
            { icon: "🏠", label: "Family Owned" },
            { icon: "📍", label: "DFW Local" },
            { icon: "✅", label: "Licensed & Insured" },
            { icon: "🔒", label: "Free Estimates" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <span className="text-xl">{badge.icon}</span>
              <span className="font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
