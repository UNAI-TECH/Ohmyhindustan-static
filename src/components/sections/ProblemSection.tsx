import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Megaphone, BanknoteIcon, UserMinus } from "lucide-react";
import TiltCard from "../shared/TiltCard";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";
import { PROBLEM_CARDS } from "../../lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  Megaphone: <Megaphone size={24} />,
  BanknoteX: <BanknoteIcon size={24} />,
  UserMinus: <UserMinus size={24} />,
};

export default function ProblemSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mb-16"
      >
        <motion.h2
          variants={fadeUpVariant}
          className="text-5xl font-headline font-bold tracking-tighter mb-4"
        >
          India's Media is Broken.
        </motion.h2>
        <motion.div
          variants={fadeUpVariant}
          className="w-24 h-1 bg-primary mx-auto"
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {PROBLEM_CARDS.map((card) => (
          <motion.div key={card.title} variants={fadeUpVariant}>
            <TiltCard className="bg-surface-container-low p-8 rounded-[1rem] h-full">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6">
                {ICONS[card.icon]}
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {card.description}
              </p>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
