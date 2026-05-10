"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sprout, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream-50/75 border-b border-forest-100/60"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="size-8 rounded-full bg-forest-800 grid place-items-center text-cream-50 group-hover:bg-forest-700 transition">
            <Sprout className="size-4" strokeWidth={2.25} />
          </div>
          <span className="font-display text-xl tracking-tight text-forest-900">AggieLink</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-ink-muted">
          <a href="#how" className="hover:text-forest-800 transition">How it works</a>
          <a href="#pillars" className="hover:text-forest-800 transition">For farms & buyers</a>
          <a href="#impact" className="hover:text-forest-800 transition">Impact</a>
        </div>

        <Link
          href="/dashboard"
          className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-forest-800 hover:bg-forest-700 text-cream-50 text-sm transition"
        >
          See the demo
          <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
        </Link>
      </nav>
    </motion.header>
  );
}
