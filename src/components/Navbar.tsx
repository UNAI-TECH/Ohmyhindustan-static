import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../lib/constants";
import MagneticButton from "./shared/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 50);
  });

  return (
    <>
      <motion.header
        className="fixed top-0 w-full z-50 transition-colors duration-300"
        animate={{
          backgroundColor: scrolled
            ? "rgba(252,252,252,0.85)"
            : "rgba(252,252,252,0.0)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          borderBottomColor: scrolled
            ? "rgba(26,17,17,0.08)"
            : "rgba(26,17,17,0)",
          boxShadow: scrolled
            ? "0 20px 40px rgba(26,17,17,0.04)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        style={{ borderBottomWidth: 1, borderBottomStyle: "solid" }}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
          >
            <img src="/logo.png" alt="PostsApp Logo" className="h-10 md:h-14 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center font-headline font-bold tracking-tight text-sm uppercase">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-on-surface/80 hover:text-primary hover:scale-105 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <MagneticButton className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-sm cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-shadow">
            Download App
          </MagneticButton>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-on-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.1 },
                }}
                exit={{ opacity: 0, y: -20 }}
                className="text-white text-3xl font-headline font-bold uppercase tracking-tight hover:text-white/80"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 0.4 },
              }}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg mt-4 shadow-xl"
              onClick={() => setMobileOpen(false)}
            >
              Download App
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
