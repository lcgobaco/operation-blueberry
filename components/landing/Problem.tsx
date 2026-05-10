"use client";

import { motion } from "framer-motion";
import { TrendingDown, Package, ScrollText } from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    big: "< 4%",
    label: "of institutional food in California is locally sourced",
    note: "Most ends up traveling 1,500+ miles before it&rsquo;s served.",
  },
  {
    icon: Package,
    big: "$50K+",
    label: "minimum order most institutional buyers require",
    note: "Out of reach for nearly every farm under 50 acres.",
  },
  {
    icon: ScrollText,
    big: "10+",
    label: "compliance documents per supplier per year",
    note: "Insurance, GAP audits, traceability, recall plans, COIs &mdash; per farm.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6 lg:px-10 border-t border-forest-100/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.18em] text-forest-600">The procurement gap</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest-900 leading-[1.05] text-balance">
              Institutions want local food.
              <span className="block italic text-forest-600 mt-1">The system wasn&rsquo;t built for it.</span>
            </h2>
            <p className="mt-6 text-ink-muted leading-relaxed text-pretty">
              Hospitals, schools, and universities have committed to sourcing more locally — but their procurement
              systems require volumes, paperwork, and consolidated invoicing that no individual small farm can produce alone.
              That gap is where most local food initiatives quietly fail.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.big}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-cream-100/60 border border-forest-100 rounded-2xl p-6"
              >
                <s.icon className="size-5 text-forest-600 mb-5" strokeWidth={1.75} />
                <div className="font-display text-4xl text-forest-900 leading-none">{s.big}</div>
                <div className="mt-3 text-sm text-ink leading-snug" dangerouslySetInnerHTML={{ __html: s.label }} />
                <div className="mt-3 text-xs text-ink-subtle leading-relaxed" dangerouslySetInnerHTML={{ __html: s.note }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
