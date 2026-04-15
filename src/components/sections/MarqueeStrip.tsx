import { MARQUEE_ITEMS } from "../../lib/constants";

export default function MarqueeStrip() {
  // Duplicate items for seamless infinite scroll
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="bg-primary-container py-4 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {items.map((item, i) => (
          <span
            key={i}
            className="text-on-primary-container font-headline font-bold text-xl uppercase tracking-tighter mx-6 flex items-center gap-6"
          >
            {item}
            <span className="opacity-60">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
