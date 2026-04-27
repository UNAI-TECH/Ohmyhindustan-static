import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Newspaper, MessageSquare, ThumbsUp, Bookmark, UserPlus, Bell,
  LayoutDashboard, FileVideo, BarChart3, Subtitles, TrendingUp, Banknote,
  BadgeCheck, Shield, Activity, PieChart,
} from "lucide-react";
import TiltCard from "../shared/TiltCard";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";
import { CITIZEN_FEATURES, CREATOR_FEATURES, ADMIN_FEATURES } from "../../lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  Newspaper: <Newspaper size={24} />, MessageSquare: <MessageSquare size={24} />,
  ThumbsUp: <ThumbsUp size={24} />, Bookmark: <Bookmark size={24} />,
  UserPlus: <UserPlus size={24} />, Bell: <Bell size={24} />,
  LayoutDashboard: <LayoutDashboard size={24} />, FileVideo: <FileVideo size={24} />,
  BarChart3: <BarChart3 size={24} />, Subtitles: <Subtitles size={24} />,
  TrendingUp: <TrendingUp size={24} />, Banknote: <Banknote size={24} />,
  BadgeCheck: <BadgeCheck size={24} />, Shield: <Shield size={24} />,
  Activity: <Activity size={24} />, PieChart: <PieChart size={24} />,
};

const TABS = [
  { id: "citizens", label: "For Citizens", data: CITIZEN_FEATURES },
  { id: "creators", label: "For Creators", data: CREATOR_FEATURES },
  { id: "admins", label: "For Admins", data: ADMIN_FEATURES },
] as const;

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<string>("citizens");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const currentTab = TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="features" className="py-20 md:py-28 px-6 bg-surface-container-highest">
      <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"} className="max-w-7xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4">Platform Features</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Powerful tools for citizens, creators, and administrators — all in one platform.</p>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex bg-surface-container rounded-full p-1.5 gap-1">
            {TABS.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`relative px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${activeTab === tab.id ? "text-on-primary" : "text-on-surface-variant hover:text-on-surface"}`}>
                {activeTab === tab.id && <motion.div layoutId="ftab" className="absolute inset-0 bg-primary rounded-full" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className={`grid gap-6 ${currentTab.data.length <= 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
            {currentTab.data.map((f) => (
              <TiltCard key={f.title} className="bg-surface p-7 rounded-2xl border border-outline-variant/10 h-full hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-500">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl mb-5">{ICONS[f.icon]}</div>
                <h3 className="text-lg font-bold mb-2 font-headline">{f.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{f.description}</p>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
