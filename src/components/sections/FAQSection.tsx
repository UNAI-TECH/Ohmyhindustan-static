import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";
import { FAQ_GENERAL, FAQ_CREATOR, FAQ_CITIZEN } from "../../lib/constants";

const TABS = [
  { id: "general", label: "General", data: FAQ_GENERAL },
  { id: "creator", label: "Creator", data: FAQ_CREATOR },
  { id: "citizen", label: "Citizen", data: FAQ_CITIZEN },
] as const;

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-outline-variant/20 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-5 text-left cursor-pointer group">
        <span className="font-bold font-headline text-base pr-4 group-hover:text-primary transition-colors">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-on-surface-variant">
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="faq-answer">
            <p className="pb-5 text-on-surface-variant text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<string>("general");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const currentTab = TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="faq" className="py-20 md:py-28 px-6 bg-surface-container-low">
      <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"} className="max-w-3xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant text-lg">Everything you need to know about PostsApp.</p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div variants={fadeUpVariant} className="flex justify-center mb-10">
          <div className="inline-flex bg-surface-container rounded-full p-1.5 gap-1">
            {TABS.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`relative px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${activeTab === tab.id ? "text-on-primary" : "text-on-surface-variant hover:text-on-surface"}`}>
                {activeTab === tab.id && <motion.div layoutId="faq-tab" className="absolute inset-0 bg-primary rounded-full" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Accordion */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} className="bg-surface rounded-2xl p-6 md:p-8 border border-outline-variant/10">
            {currentTab.data.map((item) => (
              <AccordionItem key={item.q} q={item.q} a={item.a} />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
