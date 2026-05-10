"use client";

import { motion } from "framer-motion";
import { Truck, FileText, ShieldCheck, Package, CheckCircle2, ChevronRight } from "lucide-react";
import { aggregatedOrder, farmsById } from "@/lib/mockData";
import { useState } from "react";
import clsx from "clsx";

const categoryColors: Record<string, string> = {
  Roots: "#9c7327",
  Greens: "#458c55",
  Brassicas: "#286c3c",
  Alliums: "#74ad7e",
  Nightshades: "#cd7d5e",
  Squash: "#dbab5d",
  Fruit: "#b86244",
  Other: "#a9ccae",
};

export default function AggregatedOrder() {
  const o = aggregatedOrder;
  const [expanded, setExpanded] = useState<string | null>(o.lines[0]?.crop ?? null);

  return (
    <div>
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.16em] text-forest-600">Section · 2 of 3</span>
          <h1 className="mt-1.5 font-display text-3xl md:text-4xl text-forest-900 leading-tight">
            Aggregated Order
          </h1>
          <p className="mt-2 text-ink-muted max-w-xl text-pretty">
            {o.weekOf} · {o.buyer}. {o.contributingFarms} farms have contributed to one combined supply pool, ready
            for a single dispatch.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-50 border border-forest-100 text-forest-700 text-xs">
          <CheckCircle2 className="size-3.5" />
          {o.status}
        </span>
      </header>

      {/* Stat strip */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        <BigStat big={o.totalLb.toLocaleString()} unit="lb" label="Combined weight" icon={Package} />
        <BigStat big={o.lineCount.toString()} label="Line items" icon={FileText} />
        <BigStat big={o.contributingFarms.toString()} label="Contributing farms" icon={Truck} />
        <BigStat big="1" label="Food-safety packet" icon={ShieldCheck} />
      </div>

      {/* Delivery card */}
      <div className="mt-6 rounded-2xl bg-forest-900 text-cream-50 p-6 md:p-7 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 size-72 rounded-full bg-forest-700/40 blur-3xl" />
        <div className="relative grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-forest-200">Delivery</div>
            <div className="font-display text-2xl mt-1.5 leading-tight">{o.delivery}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-forest-200">Buyer</div>
            <div className="font-display text-2xl mt-1.5 leading-tight">{o.buyer}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-forest-200">Invoice</div>
            <div className="font-display text-2xl mt-1.5 leading-tight">{o.invoiceId}</div>
          </div>
        </div>
      </div>

      {/* Order lines */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-2xl text-forest-900">Line items</h2>
          <span className="text-xs text-ink-subtle">Click a row to see contributing farms</span>
        </div>

        <div className="rounded-2xl border border-forest-100 bg-cream-50 overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 bg-cream-100/50 border-b border-forest-100 text-[10px] uppercase tracking-[0.14em] text-ink-subtle">
            <div className="col-span-4">Crop</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-2">Pack</div>
            <div className="col-span-2">Contributors</div>
            <div className="col-span-2 text-right">Amount</div>
          </div>

          {o.lines.map((line, i) => {
            const isOpen = expanded === line.crop;
            return (
              <motion.div
                key={line.crop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: Math.min(i, 12) * 0.025 }}
                className={clsx(
                  "border-b border-forest-100/70 last:border-b-0",
                  isOpen ? "bg-cream-100/40" : "bg-cream-50 hover:bg-cream-100/30 transition"
                )}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : line.crop)}
                  className="w-full text-left px-5 py-4 grid grid-cols-2 md:grid-cols-12 gap-4 items-center"
                >
                  <div className="md:col-span-4 flex items-center gap-3">
                    <ChevronRight
                      className={clsx(
                        "size-4 text-ink-subtle transition shrink-0",
                        isOpen && "rotate-90 text-forest-600"
                      )}
                    />
                    <span className="font-medium text-forest-900">{line.crop}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span
                      className="inline-flex items-center gap-1.5 text-[11px] text-ink-muted"
                      style={{ color: categoryColors[line.category] }}
                    >
                      <span
                        className="size-2 rounded-full"
                        style={{ backgroundColor: categoryColors[line.category] }}
                      />
                      {line.category}
                    </span>
                  </div>
                  <div className="md:col-span-2 text-xs text-ink-muted">{line.packedAs}</div>
                  <div className="md:col-span-2 text-xs text-ink-muted">{line.contributors.length} farms</div>
                  <div className="md:col-span-2 text-right">
                    <span className="font-display text-lg text-forest-900">
                      {line.amountLb}
                      <span className="text-xs text-ink-subtle font-sans font-normal ml-1">lb</span>
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                    className="px-5 pb-5"
                  >
                    <div className="rounded-xl bg-cream-50 border border-forest-100 p-4">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-ink-subtle mb-3">
                        Contributing farms for this line
                      </div>
                      <ContributorBar contributors={line.contributors} total={line.amountLb} />
                      <div className="mt-4 grid sm:grid-cols-2 gap-2">
                        {line.contributors.map((c) => {
                          const f = farmsById[c.farmId];
                          if (!f) return null;
                          const pct = Math.round((c.lb / line.amountLb) * 100);
                          return (
                            <div
                              key={c.farmId}
                              className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-cream-100/60 border border-forest-100/70"
                            >
                              <div className="min-w-0">
                                <div className="text-sm font-medium text-forest-900 truncate">{f.name}</div>
                                <div className="text-[11px] text-ink-subtle">{f.county} · {f.steward}</div>
                              </div>
                              <div className="text-right shrink-0">
                                <div className="font-display text-base text-forest-900 leading-none">
                                  {c.lb}<span className="text-[10px] text-ink-subtle font-sans font-normal ml-0.5">lb</span>
                                </div>
                                <div className="text-[10px] text-ink-subtle mt-0.5">{pct}%</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 text-xs text-ink-subtle">
        Allocation across contributing farms is determined by AggieLink&rsquo;s internal balancing system, which
        considers each farm&rsquo;s available supply, recent participation, and standing commitments.
      </div>
    </div>
  );
}

function BigStat({
  big,
  unit,
  label,
  icon: Icon,
}: {
  big: string;
  unit?: string;
  label: string;
  icon: typeof Truck;
}) {
  return (
    <div className="rounded-2xl bg-cream-100/60 border border-forest-100 p-5">
      <Icon className="size-4 text-forest-600 mb-3" strokeWidth={1.75} />
      <div className="font-display text-3xl text-forest-900 leading-none">
        {big}
        {unit && <span className="text-sm text-ink-subtle font-sans font-normal ml-1">{unit}</span>}
      </div>
      <div className="text-[11px] uppercase tracking-[0.14em] text-ink-subtle mt-2">{label}</div>
    </div>
  );
}

function ContributorBar({
  contributors,
  total,
}: {
  contributors: { farmId: string; lb: number }[];
  total: number;
}) {
  const palette = ["#143f25", "#286c3c", "#458c55", "#74ad7e", "#a9ccae"];
  return (
    <div className="h-3 w-full rounded-full overflow-hidden flex bg-forest-50">
      {contributors.map((c, i) => {
        const pct = (c.lb / total) * 100;
        const f = farmsById[c.farmId];
        return (
          <div
            key={c.farmId}
            style={{ width: `${pct}%`, backgroundColor: palette[i % palette.length] }}
            title={`${f?.name}: ${c.lb} lb (${Math.round(pct)}%)`}
          />
        );
      })}
    </div>
  );
}
