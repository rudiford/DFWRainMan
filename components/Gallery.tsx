"use client";

import { useState } from "react";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "outdoor-contractor", label: "Outdoor Contractor" },
  { id: "sprinkler", label: "Sprinkler Systems" },
  { id: "landscape", label: "Landscape" },
  { id: "drainage", label: "Drainage" },
  { id: "lighting", label: "Outdoor Lighting" },
  { id: "hardscape", label: "Hardscape" },
];

const placeholderColors: Record<string, string> = {
  "outdoor-contractor": "bg-gradient-to-br from-green-700 to-green-900",
  sprinkler: "bg-gradient-to-br from-blue-700 to-blue-900",
  landscape: "bg-gradient-to-br from-emerald-600 to-emerald-800",
  drainage: "bg-gradient-to-br from-slate-600 to-slate-800",
  lighting: "bg-gradient-to-br from-amber-600 to-amber-800",
  hardscape: "bg-gradient-to-br from-stone-600 to-stone-800",
};

const items = [
  { id: 1, category: "landscape", label: "Front Yard Landscape Design", size: "large" },
  { id: 2, category: "sprinkler", label: "Sprinkler System Install", size: "small" },
  { id: 3, category: "hardscape", label: "Backyard Patio", size: "small" },
  { id: 4, category: "lighting", label: "Pathway Lighting", size: "small" },
  { id: 5, category: "outdoor-contractor", label: "Full Backyard Renovation", size: "large" },
  { id: 6, category: "drainage", label: "French Drain Install", size: "small" },
  { id: 7, category: "landscape", label: "Planting Bed Design", size: "small" },
  { id: 8, category: "hardscape", label: "Retaining Wall", size: "small" },
  { id: 9, category: "sprinkler", label: "System Repair & Upgrade", size: "small" },
  { id: 10, category: "lighting", label: "Uplighting Installation", size: "large" },
  { id: 11, category: "drainage", label: "Dry Creek Bed", size: "small" },
  { id: 12, category: "outdoor-contractor", label: "Complete Outdoor Overhaul", size: "small" },
  { id: 13, category: "landscape", label: "Sod Installation", size: "small" },
  { id: 14, category: "hardscape", label: "Fire Pit Area", size: "small" },
  { id: 15, category: "lighting", label: "Security Lighting", size: "small" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = items.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section id="gallery" className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-green-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Project Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every yard tells a story. Browse our portfolio of completed projects across the DFW area.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-green-primary text-white shadow-md"
                  : "bg-white text-charcoal border border-gray-200 hover:border-green-primary hover:text-green-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`break-inside-avoid rounded-xl overflow-hidden group cursor-pointer ${
                item.size === "large" ? "h-72" : "h-48"
              } ${placeholderColors[item.category]} relative flex items-center justify-center`}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />

              {/* Placeholder text */}
              <div className="relative text-center p-4">
                <div className="text-white/50 text-xs font-mono tracking-widest uppercase mb-2">
                  [ Photo ]
                </div>
                <div className="text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </div>
              </div>

              {/* Category tag */}
              <div className="absolute bottom-3 left-3">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
                  {categories.find((c) => c.id === item.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">📸</div>
            <p className="text-lg">Photos coming soon for this category.</p>
          </div>
        )}

        {/* CTA below gallery */}
        <div className="text-center mt-14">
          <p className="text-gray-600 mb-5 text-lg">
            Ready to transform your outdoor space?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-primary hover:bg-green-dark text-white font-bold px-8 py-4 rounded text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
