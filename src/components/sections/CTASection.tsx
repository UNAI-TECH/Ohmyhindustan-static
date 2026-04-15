import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MagneticButton from "../shared/MagneticButton";
import { fadeUpVariant } from "../../lib/animations";

export default function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="mx-6 mb-24">
      <motion.div
        ref={ref}
        variants={fadeUpVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="py-24 rounded-[2rem] bg-gradient-to-br from-primary-container to-[#8E1F4F] relative overflow-hidden"
      >
        {/* Globe Watermark */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="30"
              ry="80"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="80"
              ry="30"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-8 tracking-tighter">
            Ready to be India's Next Voice?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MagneticButton className="bg-white text-primary-container px-10 py-5 rounded-full font-black cursor-pointer text-lg shadow-2xl hover:shadow-white/20 transition-shadow">
              Download for Android
            </MagneticButton>
            <MagneticButton className="bg-transparent border-2 border-white/50 text-white px-10 py-5 rounded-full font-black cursor-pointer hover:bg-white/10 transition-all text-lg">
              iOS Version Beta
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
