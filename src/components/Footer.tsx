import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-10 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <div className="text-lg font-bold text-on-surface">OMH</div>
          <p className="text-on-surface/60 font-body text-sm tracking-wide flex items-center gap-1">
            Built with <Heart size={14} className="text-primary fill-primary" /> by UNAI TECH — Powering democratic digital infrastructure.
          </p>
        </div>
        <div className="flex gap-8 font-body text-sm tracking-wide">
          {["Terms", "Privacy", "Careers", "Press"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-on-surface/60 hover:text-primary-container transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="text-on-surface/60 font-body text-sm tracking-wide">
          © 2026 OMH by UNAI TECH. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
