import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Globe from "../Globe";
import MagneticButton from "../shared/MagneticButton";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";

export default function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="features"
      className="relative min-h-screen pt-32 pb-20 bg-white flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative z-10"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full border border-outline-variant/20 mb-8"
          >
            <span className="w-2.5 h-2.5 bg-primary rounded-full active-dot" />
            <span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">
              India's #1 Citizen Journalism Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpVariant}
            className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter text-on-surface mb-8"
          >
            Every Citizen, <br />
            <span className="relative inline-block">
              Reporter.
              <svg
                className="absolute -bottom-2 left-0 w-full h-4 text-secondary-container"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 0 100 5 L 100 10 Q 50 5 0 10 Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariant}
            className="text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed"
          >
            OMH puts the tools of journalism into every Indian's smartphone.
            Real-time updates, local voices, and a creator economy built for
            truth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap gap-4 mb-12"
          >
            <MagneticButton className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-primary/20">
              Get the App
            </MagneticButton>
            <MagneticButton className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 cursor-pointer hover:bg-primary/5 transition-all">
              Become a Creator <ArrowRight size={18} />
            </MagneticButton>
          </motion.div>

          {/* Trust Avatars */}
          <motion.div
            variants={fadeUpVariant}
            className="flex items-center gap-6 pt-8 border-t border-outline-variant/30"
          >
            <div className="flex -space-x-3">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDRcwrBrU_7waJstbI5VFesfzTwGOqAP61GNUBGZwnHEimIeJJvCGYkkUIDPU8NIPKUhZz9eaaKOufJCQzKfb1bktSTwRSMMbL6Bz5U5Vs-1dB8mRcSG1dbyMzomWCGNs-2mMQC_1hPJ0ERUmYOyGC5ZdZztka-fUs8LEEYlggr5mUu-3hWlatsO4t9GQ_NFkBlXf1tXPozCTjG_Qq0TsytilpZq5I6DayXjSW7te1IviOvb6NeGxumBt5rGRhBb8M0birE8k3XunR0",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAnOYzZIRWj2f9ovTY02I9m0zQPIz4eEb_JUyPqXjukBjvuyFR7Uam4HIRT4rrm4OLb6_4vpYaNE9nAImhFDJSyOok-sK2TAws_25A_WZUeEA9m0e8YDlt12ZBVJVtYZS5iFW0Rxjf4_Juq7b8E5tLdgb4fBONnbe3BZbTU2A5S2HfvLtyMj88YJ5VvrjW5j6ssQGylxwn6Nd0M2WpOrpb31NwijCXi6Ql3sJ-uPPMQPo8e3elWe0MUGZIbb_2d_7hJII--DSHDXWYT",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuANKAzb7V32yhJvqfth3BGnJUF8Oy3Cz30LnZt9Vq5SC4VKkb13iucndeTzHD3AjtDAbt_zzOWmKiiRoq5cQtLycqztloIqkauSQwTVQ6IOnyrZgQ0sAtkskSqmbrTIr5tOt72KB_CTkrk9K9JNeIysY1y_mKIkmxFvauzH-Z9vqC5NPAiAcrI-Uoi-me6yqdbz1uoKQO70BmcS1O73JSBTFQm__7V_lLcucSJkp87H3k2oJ5k5ZLYrb3JhJPrEfgpAt6oVTCkRPsdj",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Creator avatar"
                  className="w-10 h-10 rounded-full border-2 border-surface object-cover"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-on-surface-variant">
              Trusted by 12,000+ local reporters across India
            </p>
          </motion.div>
        </motion.div>

        {/* Right Content — Globe + Floating Cards */}
        <div className="relative flex justify-center items-center">
          {/* Background glow */}
          <div className="absolute w-[120%] h-[120%] -right-1/4 opacity-30 mix-blend-multiply blur-3xl rounded-full bg-gradient-to-br from-orange-400 to-amber-300" />

          <div className="relative w-full flex items-center justify-center">
            <Globe />

            {/* Floating Stat Cards */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-1/4 -left-4 lg:-left-8 glass-card p-4 lg:p-6 rounded-lg shadow-xl"
            >
              <span className="text-primary mb-2 block text-2xl">💰</span>
              <h4 className="text-xl lg:text-2xl font-bold">₹38,500/mo</h4>
              <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">
                Avg Creator Earn
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-1/4 right-0 glass-card p-4 lg:p-6 rounded-lg shadow-xl"
            >
              <span className="text-secondary mb-2 block text-2xl">⚡</span>
              <h4 className="text-xl lg:text-2xl font-bold">500ms</h4>
              <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">
                Live Delivery
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
