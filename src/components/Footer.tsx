import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-10 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8">
        {/* Left: Branding & Copyright */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="PostsApp Logo" className="h-10 w-auto" />
          </Link>
          <div className="text-on-surface/60 font-body text-xs tracking-wide">
            © 2026 PostsApp. All rights reserved.
          </div>
        </div>

        {/* Center: Nav Links */}
        <div className="flex gap-8 font-body text-sm tracking-wide">
          <Link to="/terms-conditions" className="text-on-surface/60 hover:text-primary transition-colors">
            Terms
          </Link>
          <Link to="/privacy-policy" className="text-on-surface/60 hover:text-primary transition-colors">
            Privacy
          </Link>
          <a href="#" className="text-on-surface/60 hover:text-primary transition-colors">
            Careers
          </a>
          <a href="#" className="text-on-surface/60 hover:text-primary transition-colors">
            Press
          </a>
        </div>

        {/* Right: Crafted By Badge */}
        <a 
          href="https://www.unaitech.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center gap-4 bg-surface-container-high hover:bg-surface-container-highest px-6 py-4 rounded-2xl border border-outline-variant/10 transition-all duration-300"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface/40 mb-1">Crafted By</span>
            <div className="text-xl md:text-2xl font-headline font-black tracking-tight leading-none">
              <span className="text-secondary group-hover:text-secondary-container transition-colors">UNAI</span>
              <span className="text-on-surface">TECH</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary shadow-inner group-hover:bg-secondary group-hover:text-white transition-all duration-300">
            <ArrowUpRight size={20} />
          </div>
        </a>
      </div>
    </footer>
  );
}
