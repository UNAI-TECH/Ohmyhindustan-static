import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Scale, Lightbulb, IndianRupee, Check } from "lucide-react";
import TiltCard from "../shared/TiltCard";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";
import { PHILOSOPHY_PILLARS } from "../../lib/constants";

const ICON_MAP: Record<string, React.ReactNode> = {
  Scale: <Scale size={32} />,
  Lightbulb: <Lightbulb size={32} />,
  IndianRupee: <IndianRupee size={32} />,
};

export default function PhilosophySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 md:py-28 bg-on-background text-surface px-6">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Philosophy Statement */}
        <motion.div variants={fadeUpVariant} className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-fixed-dim mb-6 block">
            The OMH Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold leading-tight mb-8">
            Expression Without Barriers.
          </h2>
          <p className="text-surface/60 text-base md:text-lg leading-relaxed">
            In a world of crowded feeds and hidden agendas, OMH was born from a
            simple, radical idea: every mind matters and every creator deserves a
            stage. We aren't just another app; we're a movement to return the
            power of digital expression to where it belongs —{" "}
            <span className="text-primary-fixed font-semibold">with you</span>.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PHILOSOPHY_PILLARS.map((pillar, i) => (
            <motion.div key={pillar.title} variants={fadeUpVariant}>
              <TiltCard
                className={`p-8 md:p-10 rounded-2xl h-full border transition-all duration-500 ${
                  i === 2
                    ? "bg-primary/15 border-primary/30 shadow-lg shadow-primary/10"
                    : "bg-surface/5 border-surface/10 hover:bg-surface/8 hover:border-surface/20"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    i === 2
                      ? "bg-primary text-on-primary"
                      : "bg-surface/10 text-primary-fixed"
                  }`}
                >
                  {ICON_MAP[pillar.icon]}
                </div>

                {/* Title */}
                <h3
                  className={`text-xl md:text-2xl font-bold font-headline mb-3 ${
                    i === 2 ? "text-primary-fixed" : "text-surface/90"
                  }`}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-surface/50 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-3">
                  {pillar.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 text-sm text-surface/60"
                    >
                      <Check
                        size={16}
                        className={
                          i === 2 ? "text-primary-fixed shrink-0" : "text-surface/30 shrink-0"
                        }
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
