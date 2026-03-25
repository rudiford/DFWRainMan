const cities = [
  "Dallas", "Fort Worth", "Plano", "Frisco", "McKinney", "Allen",
  "Richardson", "Garland", "Mesquite", "Arlington", "Irving", "Grand Prairie",
  "Carrollton", "Flower Mound", "Lewisville", "Denton", "Prosper", "Celina",
  "Wylie", "Rockwall", "Rowlett", "Sachse", "Murphy", "Fairview",
  "Lucas", "Parker", "Addison", "Farmers Branch", "Duncanville", "DeSoto",
  "Cedar Hill", "Mansfield", "Southlake", "Colleyville", "Grapevine", "Euless",
  "Bedford", "Hurst", "North Richland Hills", "Keller",
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: content */}
          <div>
            <p className="text-green-primary font-semibold tracking-widest uppercase text-sm mb-3">
              Where We Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              Serving the Entire
              <br />
              <span className="text-green-primary">DFW Metroplex</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              From North Dallas to Fort Worth and everywhere in between — if you&apos;re in the DFW area, we&apos;ve got you covered. Not sure if we serve your neighborhood? Give us a call.
            </p>

            <a
              href="tel:2143330000"
              className="inline-flex items-center gap-2 bg-green-primary hover:bg-green-dark text-white font-bold px-7 py-3 rounded transition-colors duration-200 text-base mb-10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              214.333.xxxx — Call to Confirm Your Area
            </a>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              {[
                { number: "40+", label: "Cities Served" },
                { number: "DFW", label: "Metroplex Coverage" },
                { number: "100%", label: "Local & Licensed" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-green-primary mb-1">{stat.number}</div>
                  <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: city list */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-charcoal text-xl mb-6 flex items-center gap-2">
              <span className="text-green-primary">📍</span>
              Cities We Serve
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
              {cities.map((city) => (
                <div key={city} className="flex items-center gap-2 text-gray-700 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-primary flex-shrink-0" />
                  {city}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-gray-100 text-sm text-gray-500">
              Don&apos;t see your city? We may still serve your area.{" "}
              <a href="#contact" className="text-green-primary font-medium hover:underline">
                Contact us to check.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
