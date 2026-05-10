"use client";

import { Sprout, Combine, BarChart3 } from "lucide-react";
import clsx from "clsx";

export type Section = "network" | "order" | "impact";

const items: { id: Section; label: string; icon: typeof Sprout; desc: string }[] = [
  { id: "network", label: "Farm Network", icon: Sprout, desc: "Growers in the pool" },
  { id: "order", label: "Aggregated Order", icon: Combine, desc: "This week's combined supply" },
  { id: "impact", label: "Impact Insights", icon: BarChart3, desc: "What the network has built" },
];

export default function Sidebar({
  active,
  onChange,
}: {
  active: Section;
  onChange: (s: Section) => void;
}) {
  return (
    <nav className="p-4 lg:p-5 lg:pt-7">
      <div className="hidden lg:block px-3 pb-3 text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
        Workspace
      </div>
      <ul className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible">
        {items.map((it) => {
          const isActive = it.id === active;
          return (
            <li key={it.id} className="flex-shrink-0">
              <button
                onClick={() => onChange(it.id)}
                className={clsx(
                  "w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl transition",
                  isActive
                    ? "bg-forest-800 text-cream-50 shadow-soft"
                    : "text-ink hover:bg-forest-50 hover:text-forest-800"
                )}
              >
                <it.icon
                  className={clsx("size-4 shrink-0", isActive ? "text-cream-50" : "text-forest-600")}
                  strokeWidth={2}
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-medium whitespace-nowrap">{it.label}</span>
                  <span
                    className={clsx(
                      "hidden lg:block text-[11px]",
                      isActive ? "text-forest-200" : "text-ink-subtle"
                    )}
                  >
                    {it.desc}
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
