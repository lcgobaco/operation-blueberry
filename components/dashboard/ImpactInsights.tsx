"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Sprout, Building2, Users, Quote } from "lucide-react";
import { impact } from "@/lib/mockData";

export default function ImpactInsights() {
  return (
    <div>
      <header>
        <span className="text-xs uppercase tracking-[0.16em] text-forest-600">Section · 3 of 3</span>
        <h1 className="mt-1.5 font-display text-3xl md:text-4xl text-forest-900 leading-tight">
          Impact Insights
        </h1>
        <p className="mt-2 text-ink-muted max-w-xl text-pretty">
          What the network has supplied this season — written in plain English, not formulas.
        </p>
      </header>

      {/* Hero stats */}
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
        <HeroStat
          big={impact.poundsThisSeason.toLocaleString()}
          unit="lb"
          label="Local food supplied this season"
        />
        <HeroStat
          big={impact.farmsSupported.toString()}
          label="Small farms in the network"
          icon={Sprout}
        />
        <HeroStat
          big={impact.institutionsServed.toString()}
          label="Institutions served"
          icon={Building2}
        />
        <HeroStat
          big={impact.acresInNetwork.toLocaleString()}
          unit="acres"
          label="Total acreage in pool"
        />
      </div>

      {/* Narrative highlights */}
      <div className="mt-8 grid md:grid-cols-3 gap-3">
        {impact.highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="rounded-2xl border border-forest-100 bg-cream-100/40 p-6"
          >
            <Quote className="size-4 text-forest-600 mb-3" strokeWidth={1.75} />
            <p className="text-ink leading-relaxed text-pretty">{h}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="mt-8 grid lg:grid-cols-3 gap-4">
        {/* Trend */}
        <div className="lg:col-span-2 rounded-2xl border border-forest-100 bg-cream-50 p-6">
          <div className="flex items-end justify-between mb-1">
            <div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-ink-subtle">Weekly aggregated supply</div>
              <h3 className="font-display text-xl text-forest-900 mt-1">
                Volume has grown <span className="italic text-forest-600">54%</span> since season opening
              </h3>
            </div>
            <span className="text-xs text-ink-subtle">12 weeks</span>
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer>
              <AreaChart data={impact.weeklyTrend} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#286c3c" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#286c3c" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="week"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "#8a8f88" }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "#8a8f88" }}
                  tickFormatter={(v) => `${v / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    background: "#fbf9f4",
                    border: "1px solid #d6e7d8",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                  formatter={(v: number) => [`${v.toLocaleString()} lb`, "Volume"]}
                  labelFormatter={(l) => `Week ${l.replace("W", "")}`}
                />
                <Area
                  type="monotone"
                  dataKey="lb"
                  stroke="#143f25"
                  strokeWidth={2}
                  fill="url(#area)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut */}
        <div className="rounded-2xl border border-forest-100 bg-cream-50 p-6">
          <div className="text-[10px] uppercase tracking-[0.14em] text-ink-subtle">Composition</div>
          <h3 className="font-display text-xl text-forest-900 mt-1">By crop category</h3>

          <div className="h-44 mt-3 relative">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={impact.byCategory}
                  dataKey="lb"
                  nameKey="category"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={2}
                  stroke="none"
                >
                  {impact.byCategory.map((c) => (
                    <Cell key={c.category} fill={c.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "#fbf9f4",
                    border: "1px solid #d6e7d8",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                  formatter={(v: number) => [`${v.toLocaleString()} lb`, ""]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <div className="text-center">
                <div className="font-display text-xl text-forest-900">8</div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-ink-subtle">Categories</div>
              </div>
            </div>
          </div>

          <ul className="mt-3 space-y-1.5">
            {impact.byCategory.slice(0, 5).map((c) => (
              <li key={c.category} className="flex items-center gap-2 text-xs">
                <span className="size-2 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="text-ink flex-1">{c.category}</span>
                <span className="text-ink-subtle tabular-nums">{c.lb.toLocaleString()} lb</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom: institutions served + counties */}
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-forest-100 bg-cream-50 p-6">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-ink-subtle">
            <Building2 className="size-3" />
            Institutions served
          </div>
          <ul className="mt-4 space-y-2">
            {impact.institutions.map((inst) => (
              <li
                key={inst.name}
                className="flex items-center justify-between py-2 border-b border-forest-100/60 last:border-b-0"
              >
                <span className="text-ink">{inst.name}</span>
                <span className="text-xs text-ink-subtle">since {inst.since}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-forest-100 bg-cream-50 p-6">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-ink-subtle">
            <Users className="size-3" />
            Where the farms are
          </div>
          <ul className="mt-4 space-y-3">
            {impact.byCounty.map((c) => {
              const max = Math.max(...impact.byCounty.map((x) => x.farms));
              const pct = (c.farms / max) * 100;
              return (
                <li key={c.county}>
                  <div className="flex items-end justify-between mb-1">
                    <span className="text-sm text-ink">{c.county} County</span>
                    <span className="font-display text-base text-forest-900">
                      {c.farms} <span className="text-xs text-ink-subtle font-sans font-normal">farms</span>
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-forest-50 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-forest-600 rounded-full"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-6 text-xs text-ink-subtle text-pretty">
        Figures are rolling totals for the current season. Methodology and definitions are documented in the
        AggieLink operating notes — they aren&rsquo;t shown here to keep the dashboard focused on outcomes rather than mechanics.
      </div>
    </div>
  );
}

function HeroStat({
  big,
  unit,
  label,
  icon: Icon,
}: {
  big: string;
  unit?: string;
  label: string;
  icon?: typeof Sprout;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-forest-100 bg-cream-100/40 p-5"
    >
      {Icon && <Icon className="size-4 text-forest-600 mb-3" strokeWidth={1.75} />}
      <div className="font-display text-4xl text-forest-900 leading-none">
        {big}
        {unit && <span className="text-base text-ink-subtle font-sans font-normal ml-1">{unit}</span>}
      </div>
      <div className="text-[11px] uppercase tracking-[0.14em] text-ink-subtle mt-3 leading-relaxed">{label}</div>
    </motion.div>
  );
}
