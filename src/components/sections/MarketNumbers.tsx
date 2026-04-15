import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MARKET_STATS } from "../../lib/constants";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";

/** Simple animated counter hook – no external dependency */
function useCounter(end: number, duration: number, start: boolean, decimals = 0) {
  const [value, setValue] = useState(0);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [start, end, duration, decimals]);

  return value;
}

function StatCounter({
  stat,
  inView,
}: {
  stat: (typeof MARKET_STATS)[number];
  inView: boolean;
}) {
  const decimals = stat.value % 1 !== 0 ? 1 : 0;
  const count = useCounter(stat.value, 2.5, inView, decimals);

  return (
    <div className="text-center">
      <div className="text-5xl font-headline font-bold text-primary mb-2">
        {stat.prefix}
        {decimals > 0 ? count.toFixed(1) : Math.round(count)}
        {stat.suffix}
      </div>
      <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
        {stat.label}
      </div>
    </div>
  );
}

export default function MarketNumbers() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-24 bg-surface-container-low">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {MARKET_STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUpVariant}
          >
            <StatCounter stat={stat} inView={inView} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
