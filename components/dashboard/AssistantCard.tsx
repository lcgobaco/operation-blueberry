"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";
import type { Section } from "./Sidebar";

type Suggestion = { q: string; a: string };

const suggestions: Record<Section, Suggestion[]> = {
  network: [
    {
      q: "Which farms could supply 200 lb of carrots next week?",
      a: "Three farms in the network have flagged carrot availability for next week: Putah Creek (90 lb), Madison Acre (60 lb), and Three Sisters Heritage (50 lb). Combined that's 200 lb — exactly your target.",
    },
    {
      q: "Show me only the certified-organic growers.",
      a: "11 farms hold a USDA Organic, CCOF, or Real Organic certification. Together they represent 234 weekly capacity-pounds across roots, greens, brassicas, and squash.",
    },
    {
      q: "Any new farms onboarded recently?",
      a: "Four farms joined this season: Yolo Greenway Acres, Suisun Marsh Gardens, Russell Boulevard Greens, and Coyote Hill Produce — all under 12 acres.",
    },
  ],
  order: [
    {
      q: "How does this week compare to last week?",
      a: "This week's combined order is 220 lb larger than last week's, mostly from a stronger broccoli flush and one new line item (mixed salad greens) coming online.",
    },
    {
      q: "What's our heaviest line item?",
      a: "Apples, at 360 lb, drawn from three orchards (Solano Heritage, Esparto Hill, Buckhorn Ranch). It's the largest single line in this week's order.",
    },
    {
      q: "Which farms contributed to multiple lines?",
      a: "Capay Hills covered three lines (tomatoes, peppers, zucchini). Putah Creek, Madison Acre, and West Plainfield Co-op each covered two. The rest are single-line contributors this week.",
    },
  ],
  impact: [
    {
      q: "Summarize this season in one sentence.",
      a: "Across 12 weeks, AggieLink combined supply from 22 small farms into roughly 38,400 pounds of food delivered to four institutional buyers — without any single farm needing to grow beyond what it already does.",
    },
    {
      q: "What's our largest crop category?",
      a: "Fruit leads at about 9,200 lb this season, driven mostly by stone-fruit and apple orchards in Solano and northern Yolo counties.",
    },
    {
      q: "How spread out is our farm network?",
      a: "Twelve farms in Yolo, seven in Solano, three in Sacramento. The geographic concentration is intentional — it keeps deliveries efficient and trucks short-haul.",
    },
  ],
};

const sectionLabels: Record<Section, string> = {
  network: "Farm Network",
  order: "Aggregated Order",
  impact: "Impact Insights",
};

export default function AssistantCard({ active }: { active: Section }) {
  const [chosen, setChosen] = useState<Suggestion | null>(null);
  const [typed, setTyped] = useState("");

  // Reset when section changes
  useEffect(() => {
    setChosen(null);
    setTyped("");
  }, [active]);

  // Typewriter effect for answer
  useEffect(() => {
    if (!chosen) {
      setTyped("");
      return;
    }
    setTyped("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(chosen.a.slice(0, i));
      if (i >= chosen.a.length) clearInterval(interval);
    }, 14);
    return () => clearInterval(interval);
  }, [chosen]);

  const tips = suggestions[active];

  return (
    <div className="rounded-2xl border border-forest-200/60 bg-gradient-to-br from-forest-900 to-forest-800 text-cream-50 p-5 shadow-lift relative overflow-hidden">
      <div className="absolute -top-16 -right-16 size-48 rounded-full bg-forest-600/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-12 size-44 rounded-full bg-wheat-500/10 blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="flex items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-full bg-cream-50/10 grid place-items-center">
              <Sparkles className="size-3.5 text-cream-50" />
            </div>
            <div>
              <div className="text-sm font-medium leading-tight">Ask AggieLink</div>
              <div className="text-[10px] text-forest-200 uppercase tracking-[0.14em]">
                {sectionLabels[active]}
              </div>
            </div>
          </div>
          {chosen && (
            <button
              onClick={() => setChosen(null)}
              className="text-[10px] text-forest-200 hover:text-cream-50 inline-flex items-center gap-1 transition"
            >
              <RotateCcw className="size-3" /> reset
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {!chosen ? (
            <motion.div
              key="suggestions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4"
            >
              <p className="text-xs text-forest-100 leading-relaxed">
                Quick questions about this section:
              </p>
              <div className="mt-3 flex flex-col gap-1.5">
                {tips.map((t) => (
                  <button
                    key={t.q}
                    onClick={() => setChosen(t)}
                    className="group text-left text-xs px-3 py-2 rounded-lg bg-cream-50/5 hover:bg-cream-50/10 border border-cream-50/10 transition flex items-center gap-2"
                  >
                    <span className="flex-1 text-cream-50/95">{t.q}</span>
                    <ArrowRight className="size-3 text-forest-200 group-hover:translate-x-0.5 transition shrink-0" />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="answer"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4"
            >
              <div className="text-xs text-forest-200 italic leading-relaxed">&ldquo;{chosen.q}&rdquo;</div>
              <div className="mt-3 text-sm leading-relaxed text-cream-50/95">
                {typed}
                {typed.length < chosen.a.length && (
                  <span className="inline-block w-1 h-4 align-middle bg-cream-50/70 ml-0.5 animate-pulse" />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 pt-4 border-t border-cream-50/10 text-[10px] text-forest-200 leading-relaxed">
          Plain-English answers from your network. AggieLink doesn&rsquo;t expose internal scoring &mdash; it shows you what matters.
        </div>
      </div>
    </div>
  );
}
