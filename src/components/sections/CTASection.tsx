import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import MagneticButton from "../shared/MagneticButton";
import { fadeUpVariant } from "../../lib/animations";

export default function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="mx-4 md:mx-6 mb-24">
      <motion.div
        ref={ref}
        variants={fadeUpVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="py-20 md:py-24 rounded-[2rem] bg-gradient-to-br from-primary-container to-[#721513] relative overflow-hidden"
      >
        {/* Globe Watermark */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="0.5" />
            <ellipse cx="100" cy="100" rx="30" ry="80" fill="none" stroke="white" strokeWidth="0.5" />
            <ellipse cx="100" cy="100" rx="80" ry="30" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-white mb-6 tracking-tighter">
            Ready to Reclaim Your Voice?
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10">
            Join thousands of citizens, journalists, and creators who are building the future of journalism together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <MagneticButton className="bg-white text-primary px-8 md:px-10 py-4 md:py-5 rounded-full font-black cursor-pointer text-base md:text-lg shadow-2xl hover:shadow-white/20 transition-shadow">
              Download PostsApp Now
            </MagneticButton>
            <a 
              href="https://www.postsapp.online/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MagneticButton className="bg-transparent border-2 border-white/50 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black cursor-pointer hover:bg-white/10 transition-all text-base md:text-lg flex items-center gap-2">
                Start as a Creator <ArrowRight size={18} />
              </MagneticButton>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
