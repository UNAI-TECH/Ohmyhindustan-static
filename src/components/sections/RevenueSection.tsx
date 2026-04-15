import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TiltCard from "../shared/TiltCard";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";
import { REVENUE_ENGINES } from "../../lib/constants";

export default function RevenueSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="revenue" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <motion.h2
        ref={ref}
        variants={fadeUpVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-3xl md:text-4xl font-headline font-bold mb-10 md:mb-16 text-center md:text-left"
      >
        Sustainable Revenue Ecosystem
      </motion.h2>

      {/* Revenue Engines */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
      >
        {REVENUE_ENGINES.map((eng) => (
          <motion.div key={eng.title} variants={fadeUpVariant}>
            <TiltCard className="bg-surface-container-high p-6 md:p-8 rounded-[1rem] h-full">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{eng.title}</h3>
              <p className="text-on-surface-variant text-sm md:text-base">{eng.description}</p>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
