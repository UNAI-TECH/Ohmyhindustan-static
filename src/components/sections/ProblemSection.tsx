import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Bot,
  Wallet,
  EyeOff,
  ShieldOff,
  Building2,
  Users,
  PiggyBank,
  Eye,
  ShieldCheck,
  Megaphone,
} from "lucide-react";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";
import { PROBLEM_ITEMS, SOLUTION_ITEMS } from "../../lib/constants";

const PROBLEM_ICONS: Record<string, React.ReactNode> = {
  Bot: <Bot size={20} />,
  Wallet: <Wallet size={20} />,
  EyeOff: <EyeOff size={20} />,
  ShieldOff: <ShieldOff size={20} />,
  Building2: <Building2 size={20} />,
};

const SOLUTION_ICONS: Record<string, React.ReactNode> = {
  Users: <Users size={20} />,
  PiggyBank: <PiggyBank size={20} />,
  Eye: <Eye size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  Megaphone: <Megaphone size={20} />,
};

export default function ProblemSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4">
            Why PostsApp?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            The digital media landscape is broken. Here's the reality — and how
            we're changing the game.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — Problems */}
          <motion.div variants={fadeUpVariant}>
            <div className="bg-on-background text-surface rounded-2xl p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-3 h-3 bg-error rounded-full" />
                <h3 className="text-xl font-headline font-bold uppercase tracking-wider">
                  The Current Reality
                </h3>
              </div>
              <div className="space-y-5">
                {PROBLEM_ITEMS.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUpVariant}
                    className="flex items-start gap-4 group"
                  >
                    <span className="mt-0.5 text-error/70 shrink-0 p-2 bg-surface/5 rounded-lg group-hover:bg-surface/10 transition-colors">
                      {PROBLEM_ICONS[item.icon]}
                    </span>
                    <p className="text-surface/70 leading-relaxed text-sm md:text-base">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Solutions */}
          <motion.div variants={fadeUpVariant}>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-outline-variant/20 rounded-2xl p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <h3 className="text-xl font-headline font-bold uppercase tracking-wider text-on-surface">
                  PostsApp Changes the Game
                </h3>
              </div>
              <div className="space-y-5">
                {SOLUTION_ITEMS.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUpVariant}
                    className="flex items-start gap-4 group"
                  >
                    <span className="mt-0.5 text-primary shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-colors">
                      {SOLUTION_ICONS[item.icon]}
                    </span>
                    <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
