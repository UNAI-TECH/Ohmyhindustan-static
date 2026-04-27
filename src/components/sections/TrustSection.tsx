import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building, Code2, Heart, Award } from "lucide-react";
import TiltCard from "../shared/TiltCard";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";
import { TRUST_BUILDERS } from "../../lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  Building: <Building size={28} />,
  Code2: <Code2 size={28} />,
  Heart: <Heart size={28} />,
  Award: <Award size={28} />,
};

export default function TrustSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
      <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <motion.div variants={fadeUpVariant} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4">Why Trust OMH?</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_BUILDERS.map((item) => (
            <motion.div key={item.title} variants={fadeUpVariant}>
              <TiltCard className="bg-surface-container-low p-8 rounded-2xl h-full border border-outline-variant/10 hover:border-primary/20 transition-colors duration-500">
                <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-xl mb-6">
                  {ICONS[item.icon]}
                </div>
                <h3 className="text-lg font-bold font-headline mb-3">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
