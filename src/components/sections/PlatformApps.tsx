import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Film } from "lucide-react";
import TiltCard from "../shared/TiltCard";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";

export default function PlatformApps() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-24 bg-surface-container-highest px-6">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          variants={fadeUpVariant}
          className="text-4xl font-headline font-bold mb-12"
        >
          One Platform. Four Powerful Apps.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Mobile App — spans 2 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2">
            <TiltCard className="bg-surface p-10 rounded-[1rem] shadow-sm flex flex-col justify-between border border-outline-variant/10 h-full">
              <div>
                <h3 className="text-3xl font-bold mb-2">Mobile App</h3>
                <p className="text-on-surface-variant mb-6">
                  Hyper-local feeds, real-time alerts, and social-first video
                  consumption.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-surface-container text-xs font-bold rounded-full">
                    React Native
                  </span>
                  <span className="px-3 py-1 bg-surface-container text-xs font-bold rounded-full">
                    WebRTC
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjXiYPVxaSoxxDLqd6yi7lyxOnfKS3gYAt14B3QMTTkQ54gx89wlQW2-p6V_fScqpQtn0T7OMGsHAWG9MakndYJznlc0vg0wli1xAzLAQGzzdlu_xPF4u-JGnLwHne_KBW2lx4EV15LlXcQeigCzTMaGOGtCZ6AvwLSlu3W100qf_rlm2_CodkDDCbWtK9fab3_IUoW6BVTfQXg0j1_QNb7mGxdjE3fuWEtHjfTJvE6JZUGAq9tNENJW3JS8p3ETAF8KKhUq3uECj0"
                  alt="Mobile app screenshot"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </TiltCard>
          </motion.div>

          {/* Creator Studio */}
          <motion.div variants={fadeUpVariant}>
            <TiltCard className="bg-primary-container p-8 rounded-[1rem] text-on-primary-container h-full">
              <h3 className="text-2xl font-bold mb-4">Creator Studio</h3>
              <p className="text-sm opacity-90 mb-8">
                Professional editing, analytics, and instant payout dashboard
                for reporters.
              </p>
              <div className="w-full aspect-square bg-surface/10 rounded-lg flex items-center justify-center">
                <Film size={64} className="opacity-60" />
              </div>
            </TiltCard>
          </motion.div>

          {/* Admin & API */}
          <motion.div
            variants={fadeUpVariant}
            className="grid grid-rows-2 gap-6"
          >
            <TiltCard className="bg-surface p-6 rounded-[1rem] border border-outline-variant/10">
              <h3 className="font-bold text-lg">Admin Dashboard</h3>
              <p className="text-xs text-on-surface-variant">
                Global moderation & safety ops.
              </p>
            </TiltCard>
            <TiltCard className="bg-surface p-6 rounded-[1rem] border border-outline-variant/10">
              <h3 className="font-bold text-lg">Backend API</h3>
              <p className="text-xs text-on-surface-variant">
                Low-latency data pipeline.
              </p>
            </TiltCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
