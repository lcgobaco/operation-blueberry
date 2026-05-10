"use client";

import { motion } from "framer-motion";
import { Sprout, Building2, Check } from "lucide-react";

const pillars = [
  {
    audience: "For farms",
    icon: Sprout,
    title: "Sell into institutional buyers without losing your weekends to paperwork.",
    bullets: [
      "List weekly availability in minutes",
      "AggieLink handles compliance, packaging standards, and invoicing",
      "Get paid proportionally — usually within 14 days",
      "Keep your land, your name, your farming practices",
    ],
  },
  {
    audience: "For institutions",
    icon: Building2,
    title: "Hit your local-sourcing goals without changing how you order.",
    bullets: [
      "One PO. One invoice. One delivery. One food-safety packet.",
      "Traceability to the individual farm for every line item",
      "Predictable weekly fulfillment with seasonal forecasting",
      "Procurement-team-friendly &mdash; works with your existing systems",
    ],
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.18em] text-forest-600">Built for both sides</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest-900 leading-[1.05] text-balance">
            A single platform that serves growers <span className="italic text-forest-600">and</span> the institutions that feed people.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.audience}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative rounded-3xl p-8 md:p-10 border border-forest-100 bg-cream-100/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-full bg-forest-800 grid place-items-center text-cream-50">
                  <p.icon className="size-5" strokeWidth={1.75} />
                </div>
                <span className="text-xs uppercase tracking-[0.16em] text-forest-700">{p.audience}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-forest-900 leading-tight text-balance">
                {p.title}
              </h3>
              <ul className="mt-7 space-y-3">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-ink leading-relaxed">
                    <Check className="size-4 text-forest-600 shrink-0 mt-1" strokeWidth={2.5} />
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
