import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, X, Minus } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";

const COMPARISON_DATA = [
  {
    feature: "Revenue Share",
    legacy: "10-30% (After hidden fees)",
    traditional: "Fixed Salary / No Share",
    omh: "60% (Net & Transparent)",
    isOmhPositive: true,
  },
  {
    feature: "Content Ownership",
    legacy: "Platform License (Heavy)",
    traditional: "Corporate Owned",
    omh: "100% Creator Owned",
    isOmhPositive: true,
  },
  {
    feature: "Algorithmic Control",
    legacy: "Black-Box Algorithms",
    traditional: "Editorial Gatekeeping",
    omh: "Zero Secret Algorithms",
    isOmhPositive: true,
  },
  {
    feature: "Reach Priority",
    legacy: "Engagement Bait / Pay-to-Play",
    traditional: "Corporate Interests",
    omh: "Chronological Merit",
    isOmhPositive: true,
  },
  {
    feature: "Data Privacy",
    legacy: "Aggressive Data Mining",
    traditional: "Tracking & Profiling",
    omh: "Zero Personal Tracking",
    isOmhPositive: true,
  },
  {
    feature: "Shadowbanning",
    legacy: "Secret & Common",
    traditional: "Total Suppression",
    omh: "Never — Strictly Merit",
    isOmhPositive: true,
  },
];

export default function ComparisonTableSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-6">
            The Digital Reformation
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto">
            See how OMH fundamentally rewrites the rules of the creator economy compared to legacy systems.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeUpVariant}
          className="overflow-x-auto -mx-6 px-6"
        >
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b-2 border-outline-variant/30">
                <th className="py-6 px-4 text-left font-headline font-bold text-on-surface-variant/50 uppercase tracking-widest text-xs">Feature</th>
                <th className="py-6 px-4 text-center font-headline font-bold text-on-surface-variant/50 uppercase tracking-widest text-xs">Legacy Platforms</th>
                <th className="py-6 px-4 text-center font-headline font-bold text-on-surface-variant/50 uppercase tracking-widest text-xs">Traditional Media</th>
                <th className="py-6 px-4 text-center bg-primary/5 rounded-t-2xl font-headline font-bold text-primary uppercase tracking-widest text-xs border-x border-t border-primary/20">OMH Platform</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, index) => (
                <tr key={row.feature} className="border-b border-outline-variant/10 group hover:bg-surface-container-lowest transition-colors">
                  <td className="py-6 px-4 font-bold text-on-surface">{row.feature}</td>
                  <td className="py-6 px-4 text-center text-on-surface-variant/70 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <X size={14} className="text-red-400" />
                      {row.legacy}
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center text-on-surface-variant/70 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Minus size={14} className="text-amber-400" />
                      {row.traditional}
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center bg-primary/5 border-x border-primary/20 relative">
                    <div className="flex items-center justify-center gap-2 font-bold text-primary">
                      <Check size={18} className="text-primary" />
                      {row.omh}
                    </div>
                    {index === COMPARISON_DATA.length - 1 && (
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/20" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}></td>
                <td className="bg-primary/5 rounded-b-2xl border-x border-b border-primary/20 py-4 text-center">
                  <span className="text-[10px] font-black text-primary uppercase tracking-tighter">Winner: Creators</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </motion.div>

        <motion.p variants={fadeUpVariant} className="text-center mt-12 text-on-surface-variant text-sm italic">
          * Market averages based on 2024 creator economy reports and standard media contracts.
        </motion.p>
      </motion.div>
    </section>
  );
}
