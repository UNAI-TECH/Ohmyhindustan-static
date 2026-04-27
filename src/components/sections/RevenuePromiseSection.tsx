import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";

const CREATOR_BENEFITS = [
  "You keep the majority of the value you create",
  "Revenue includes: Ad shares, sponsorships, platform monetization",
  "Paid directly to your bank account",
  "No hidden deductions or surprise fees",
];

const PLATFORM_USES = [
  "Keeps our infrastructure fast and secure",
  "Funds product development and new features",
  "Supports moderation and community management",
  "Keeps us free from outside influence",
];

export default function RevenuePromiseSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="revenue" className="py-20 md:py-28 bg-on-background text-surface px-6">
      <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"} className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-fixed-dim mb-4 block">Revenue Transparency</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">The 60/40 Promise</h2>
          <p className="text-surface/60 text-base md:text-lg max-w-2xl mx-auto">
            For too long, platforms have taken the lion's share while creators did the heavy lifting. We're changing the economics of digital media.
          </p>
        </motion.div>

        {/* Visual Split */}
        <motion.div variants={fadeUpVariant} className="flex justify-center mb-14">
          <div className="flex items-end gap-4 md:gap-6">
            {/* Creator bar */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ height: 0 }} animate={inView ? { height: 180 } : {}}
                transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-20 md:w-28 bg-gradient-to-t from-primary to-primary-fixed rounded-t-xl overflow-hidden relative"
              >
                <span className="absolute inset-0 flex items-center justify-center text-white font-headline font-bold text-2xl md:text-3xl">60%</span>
              </motion.div>
              <span className="text-sm font-bold mt-3 text-primary-fixed">Creators</span>
            </div>
            {/* Platform bar */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ height: 0 }} animate={inView ? { height: 120 } : {}}
                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-20 md:w-28 bg-gradient-to-t from-surface/20 to-surface/40 rounded-t-xl overflow-hidden relative"
              >
                <span className="absolute inset-0 flex items-center justify-center text-surface/80 font-headline font-bold text-2xl md:text-3xl">40%</span>
              </motion.div>
              <span className="text-sm font-bold mt-3 text-surface/60">Platform</span>
            </div>
          </div>
        </motion.div>

        {/* Two Column Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-14">
          {/* Creator column */}
          <motion.div variants={fadeUpVariant} className="bg-primary/15 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold font-headline mb-2 text-primary-fixed">60% to Creators</h3>
            <ul className="space-y-3 mt-5">
              {CREATOR_BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-surface/70 text-sm">
                  <span className="w-1.5 h-1.5 bg-primary-fixed rounded-full mt-1.5 shrink-0" />{b}
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Platform column */}
          <motion.div variants={fadeUpVariant} className="bg-surface/5 border border-surface/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold font-headline mb-2 text-surface/80">40% to OMH Platform</h3>
            <ul className="space-y-3 mt-5">
              {PLATFORM_USES.map((b) => (
                <li key={b} className="flex items-start gap-3 text-surface/50 text-sm">
                  <span className="w-1.5 h-1.5 bg-surface/30 rounded-full mt-1.5 shrink-0" />{b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>



        {/* Quote */}
        <motion.p variants={fadeUpVariant} className="text-center text-primary-fixed-dim font-headline text-lg md:text-xl italic mt-16">
          "No fine print. No hidden fees. Just a clear, transparent partnership."
        </motion.p>
      </motion.div>
    </section>
  );
}
