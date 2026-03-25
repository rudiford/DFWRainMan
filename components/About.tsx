const values = [
  {
    icon: "🏡",
    title: "Family-Owned",
    body: "We're not a franchise or a big-box crew. Rain Man Irrigation is owned and operated by Andrew Triplett — and you'll feel the difference.",
  },
  {
    icon: "📍",
    title: "DFW Local",
    body: "We know North Texas soil, weather patterns, and HOA requirements. Our solutions are built specifically for this climate.",
  },
  {
    icon: "⚙️",
    title: "Quality Workmanship",
    body: "We use professional-grade materials and take pride in clean, lasting installs. No shortcuts, no callbacks.",
  },
  {
    icon: "📞",
    title: "Responsive & Reliable",
    body: "We answer our phones and show up when we say we will. Simple as that.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: image placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="bg-gradient-to-br from-green-primary to-green-dark rounded-2xl overflow-hidden h-80 sm:h-96 flex items-center justify-center">
                <div className="text-center text-white/50">
                  <div className="text-xs font-mono tracking-widest uppercase mb-2">[ Owner Photo ]</div>
                  <div className="text-sm">Andrew Triplett</div>
                </div>
              </div>
              {/* Accent card */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center text-2xl">
                    🌿
                  </div>
                  <div>
                    <div className="font-bold text-charcoal text-lg">Andrew Triplett</div>
                    <div className="text-green-primary text-sm font-medium">Owner, Rain Man Irrigation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <p className="text-green-primary font-semibold tracking-widest uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              Built on Trust,<br />Rooted in DFW
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                Rain Man Irrigation was founded with a simple mission: give Dallas-Fort Worth homeowners the professional outdoor services they deserve — at a fair price, with no runaround.
              </p>
              <p>
                Owner Andrew Triplett has spent years in the field understanding what makes a great irrigation system, a healthy landscape, and a property that truly stands out in the neighborhood. That hands-on experience is what sets us apart.
              </p>
              <p>
                Whether you need a brand-new sprinkler system, a full backyard transformation, or just a quick repair, you&apos;ll get the same attention to detail every single time.
              </p>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.title} className="flex gap-3">
                  <div className="flex-shrink-0 text-2xl mt-0.5">{v.icon}</div>
                  <div>
                    <div className="font-bold text-charcoal mb-1">{v.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{v.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary text-center px-8 py-3 rounded text-base font-bold bg-green-primary hover:bg-green-dark text-white inline-flex items-center justify-center gap-2 transition-colors"
              >
                Get a Free Estimate
              </a>
              <a
                href="tel:2143330000"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-primary text-green-primary hover:bg-green-primary hover:text-white font-bold px-8 py-3 rounded text-base transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                214.333.xxxx
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
