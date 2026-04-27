import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";
import { CITIZEN_JOURNEY, CREATOR_JOURNEY } from "../../lib/constants";

const TABS = [
  { id: "citizen", label: "For Citizens", data: CITIZEN_JOURNEY },
  { id: "creator", label: "For Creators", data: CREATOR_JOURNEY },
] as const;

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<string>("citizen");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const currentTab = TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 bg-surface-container-low">
      <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"} className="max-w-4xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4">How It Works</h2>
          <p className="text-on-surface-variant text-lg">Your journey from sign-up to impact — in a few simple steps.</p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div variants={fadeUpVariant} className="flex justify-center mb-14">
          <div className="inline-flex bg-surface-container rounded-full p-1.5 gap-1">
            {TABS.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`relative px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${activeTab === tab.id ? "text-on-primary" : "text-on-surface-variant hover:text-on-surface"}`}>
                {activeTab === tab.id && <motion.div layoutId="hiw-tab" className="absolute inset-0 bg-primary rounded-full" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/20 via-primary/40 to-primary/10 rounded-full" />

            <div className="space-y-8">
              {currentTab.data.map((step, i) => (
                <div key={step.step} className="relative flex gap-6 md:gap-8 pl-2">
                  {/* Step node */}
                  <div className={`relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 font-headline font-bold text-lg ${i === currentTab.data.length - 1 ? "bg-primary text-on-primary shadow-lg shadow-primary/20" : "bg-surface-container-high text-on-surface border-2 border-outline-variant/30"}`}>
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="bg-surface rounded-2xl p-6 md:p-8 border border-outline-variant/10 flex-1 hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold font-headline mb-4">{step.title}</h3>
                    <ul className="space-y-2.5">
                      {step.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-3 text-on-surface-variant text-sm">
                          <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mt-1.5 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
