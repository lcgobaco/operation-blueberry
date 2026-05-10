import Link from "next/link";
import { Sprout } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-forest-100 px-6 lg:px-10 py-14 bg-cream-100/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <div className="size-8 rounded-full bg-forest-800 grid place-items-center text-cream-50">
              <Sprout className="size-4" strokeWidth={2.25} />
            </div>
            <span className="font-display text-xl tracking-tight text-forest-900">AggieLink</span>
          </Link>
          <p className="mt-4 text-sm text-ink-muted max-w-md leading-relaxed">
            One order. Many farms. Real impact. AggieLink is a hackathon prototype reimagining institutional procurement
            for the small-farm economy.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-2 text-sm text-ink-muted">
          <span>Made with care, not algorithms.</span>
          <span className="text-xs text-ink-subtle">© {new Date().getFullYear()} AggieLink — demo build</span>
        </div>
      </div>
    </footer>
  );
}
