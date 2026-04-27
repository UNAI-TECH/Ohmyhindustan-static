import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Newspaper, LockOpen } from "lucide-react";
import Globe from "../Globe";
import MagneticButton from "../shared/MagneticButton";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";

export default function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[650px] lg:h-[92vh] bg-white overflow-hidden flex flex-col"
    >
      {/* Mobile & Desktop Container */}
      <div className="flex-1 flex flex-col items-center justify-center lg:items-start pt-12 lg:pt-20 pb-4 lg:pb-8 px-6 max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center w-full h-full">
          
          {/* Main Content (Centered on mobile, left-aligned on desktop) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 w-full">
            {/* Headline */}
            <motion.h1
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold leading-[1.1] lg:leading-[0.95] tracking-tighter text-on-surface mb-4 lg:mb-6"
            >
              Reclaim Your{" "}
              <span className="relative inline-block">
                Voice.
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3 text-secondary-container"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 0 100 5 L 100 10 Q 50 5 0 10 Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <br />
              Own Your Platform. <br className="hidden lg:block" />
              <span className="text-primary">Change Your Future.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              className="text-[13px] md:text-base lg:text-lg text-on-surface-variant max-w-lg mb-6 lg:mb-8 leading-relaxed px-2 lg:px-0"
            >
              OMH is the platform where creators and voices like yours thrive 
              without algorithms deciding your worth, with real rewards for your work.
            </motion.p>

            {/* Mobile Globe - Matched to Canva Design */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:hidden relative w-full aspect-square max-w-[260px] md:max-w-[300px] flex items-center justify-center mb-8"
            >

              <Globe />
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-3 w-full sm:max-w-[300px] lg:max-w-none lg:flex-row lg:gap-4 lg:w-auto"
            >
              <MagneticButton className="bg-primary text-on-primary px-8 py-3.5 lg:py-4 rounded-full font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/20 text-sm lg:text-base w-full lg:w-auto">
                Download Now
              </MagneticButton>
              <MagneticButton className="border-2 border-primary text-primary px-8 py-3.5 lg:py-4 rounded-full font-bold flex items-center justify-center gap-2 cursor-pointer hover:bg-primary/5 transition-all text-sm lg:text-base w-full lg:w-auto">
                Become a Creator <ArrowRight size={16} />
              </MagneticButton>
            </motion.div>
          </div>

          {/* Desktop Globe Container - Hidden on mobile */}
          <div className="hidden lg:flex relative items-center justify-center h-full">
            <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center">

              <Globe />
              
              {/* Floating Stat Cards — Desktop Only */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-1/4 -left-8 glass-card p-6 rounded-lg shadow-xl"
              >
                <span className="text-primary mb-2 block"><Newspaper size={28} /></span>
                <h4 className="text-2xl font-bold">60%</h4>
                <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">
                  Creator Revenue
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-1/4 right-0 glass-card p-6 rounded-lg shadow-xl"
              >
                <span className="text-secondary mb-2 block"><LockOpen size={28} /></span>
                <h4 className="text-2xl font-bold">Zero</h4>
                <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">
                  Hidden Algorithms
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
