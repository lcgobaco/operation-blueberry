"use client";

import { motion } from "framer-motion";
import { Users, Combine, Truck } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Farms join the pool",
    desc: "Small growers list weekly availability through a simple producer portal. No minimums. No long-term contracts.",
  },
  {
    icon: Combine,
    title: "AggieLink aggregates",
    desc: "Listings are combined into a single institution-ready order with consistent pack sizes, traceability, and one consolidated food-safety packet.",
  },
  {
    icon: Truck,
    title: "One delivery, one invoice",
    desc: "Buyers receive one truck and one invoice. Farms are paid in proportion to what they contributed — usually within 14 days.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-28 px-6 lg:px-10 bg-cream-100/70 border-y border-forest-100/60">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.18em] text-forest-600">How it works</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest-900 leading-[1.05] text-balance">
            The supply chain, <span className="italic text-forest-600">simplified.</span>
          </h2>
          <p className="mt-5 text-ink-muted leading-relaxed text-pretty">
            Institutions get the volume and paperwork they need. Farms get a fair, predictable buyer they can plan a season around.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-cream-50 rounded-2xl p-8 border border-forest-100 shadow-soft"
            >
              <div className="absolute -top-3 -left-3 size-9 grid place-items-center rounded-full bg-forest-800 text-cream-50 font-display text-sm">
                {i + 1}
              </div>
              <s.icon className="size-7 text-forest-600 mb-5" strokeWidth={1.75} />
              <h3 className="font-display text-2xl text-forest-900 leading-snug">{s.title}</h3>
              <p className="mt-3 text-ink-muted leading-relaxed text-pretty">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
