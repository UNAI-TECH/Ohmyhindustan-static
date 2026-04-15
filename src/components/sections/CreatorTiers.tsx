import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CREATOR_TIERS } from "../../lib/constants";
import {
  staggerContainer,
  slideInLeftVariant,
  fadeUpVariant,
} from "../../lib/animations";

export default function CreatorTiers() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="creators" className="py-20 md:py-28 bg-on-background text-surface px-4 md:px-6">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={slideInLeftVariant} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Journalism That Pays.
          </h2>
          <p className="text-surface/60 text-base md:text-lg max-w-xl mx-auto">
            We've flipped the model. The more you report, the more you earn.
            Transparent, instant, and fair.
          </p>
        </motion.div>

        {/* Tier Ladder — Updated UI */}
        <div className="relative space-y-4 md:space-y-5">
          {/* Vertical accent line */}
          <div className="absolute left-5 md:left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-surface/10 via-primary/50 to-primary rounded-full" />

          {CREATOR_TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              variants={fadeUpVariant}
              className={`relative flex items-center gap-4 md:gap-6 pl-12 md:pl-16 pr-4 md:pr-8 py-4 md:py-5 rounded-xl md:rounded-2xl border transition-all duration-300 ${
                tier.highlight
                  ? "bg-primary/15 border-primary/40 shadow-lg shadow-primary/10 scale-[1.02]"
                  : "bg-surface/5 border-surface/10 hover:bg-surface/10 hover:border-surface/20"
              }`}
            >
              {/* Step node */}
              <div
                className={`absolute left-3 md:left-5 w-4 h-4 md:w-5 md:h-5 rounded-full border-[3px] z-10 ${
                  tier.highlight
                    ? "bg-primary border-primary-fixed active-dot"
                    : "bg-surface/20 border-surface/30"
                }`}
              />

              {/* Tier number */}
              <span className={`text-2xl md:text-3xl font-headline font-bold shrink-0 ${
                tier.highlight ? "text-primary-fixed" : "text-surface/20"
              }`}>
                0{i + 1}
              </span>

              {/* Tier info */}
              <div className="flex-1 min-w-0">
                <h3 className={`text-lg md:text-xl font-bold ${
                  tier.highlight ? "text-primary-fixed" : "text-surface/90"
                }`}>
                  {tier.name}
                </h3>
                <p className="text-xs md:text-sm text-surface/40 mt-0.5">
                  Revenue share with platform
                </p>
              </div>

              {/* Rev share badge */}
              <div className={`shrink-0 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-bold tracking-wide ${
                tier.highlight
                  ? "bg-primary text-on-primary shadow-md"
                  : "bg-surface/10 text-surface/60"
              }`}>
                {tier.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          variants={fadeUpVariant}
          className="text-center text-surface/30 text-xs md:text-sm mt-8 md:mt-12"
        >
          Tiers are based on cumulative contribution score · Instant payouts via UPI
        </motion.p>
      </motion.div>
    </section>
  );
}
