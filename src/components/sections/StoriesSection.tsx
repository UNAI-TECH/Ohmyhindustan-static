import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";
import { USE_CASES } from "../../lib/constants";

const AVATAR_COLORS: Record<string, string> = {
  P: "avatar-p",
  R: "avatar-r",
  A: "avatar-a",
  V: "avatar-v",
};

export default function StoriesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 md:py-28 px-6">
      <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"} className="max-w-7xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4">Real Stories. Real Impact.</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {USE_CASES.map((story) => (
            <motion.div key={story.name} variants={fadeUpVariant} className="bg-surface-container-low rounded-2xl p-6 md:p-8 border border-outline-variant/10 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${AVATAR_COLORS[story.avatar]} flex items-center justify-center text-white font-bold text-lg`}>
                  {story.avatar}
                </div>
                <div>
                  <h3 className="font-bold font-headline text-lg">{story.name}</h3>
                  <p className="text-xs text-on-surface-variant font-medium">{story.role}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="relative flex-1 mb-6">
                <Quote size={20} className="text-primary/20 mb-2" />
                <p className="text-on-surface-variant text-sm leading-relaxed italic">{story.quote}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/20">
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">Published</p>
                  <p className="text-sm font-bold">{story.stats.published}</p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">Followers</p>
                  <p className="text-sm font-bold">{story.stats.followers}</p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">Earnings</p>
                  <p className="text-sm font-bold text-primary">{story.stats.earnings}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
