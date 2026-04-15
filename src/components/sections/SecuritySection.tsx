import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShieldCheck, ScanFace, CloudUpload, BadgeCheck } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";
import { SECURITY_FEATURES } from "../../lib/constants";

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={28} />,
  ScanFace: <ScanFace size={28} />,
  CloudUpload: <CloudUpload size={28} />,
  BadgeCheck: <BadgeCheck size={28} />,
};

export default function SecuritySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="py-24 bg-on-background text-surface px-6">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div variants={fadeUpVariant}>
            <h2 className="text-5xl font-headline font-bold mb-4">
              Built Secure.
              <br />
              By Default.
            </h2>
            <p className="text-surface/60 max-w-md">
              Journalism requires privacy. We protect our creators with
              enterprise-grade encryption and anonymous reporting lanes.
            </p>
          </motion.div>
          <motion.div variants={fadeUpVariant}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaIdqw0LVXStHNo8jHQTYc1DgoiyzJsHxKG06osBoqDvcjDVlUG5hvkJ7BxmkRMs33vn864YDqrpcVelSAiEd-M0rH1uZRr6VuRWSO3StJ0Ld7jo5OB7bMeRNzrgw7UKB9OrULvdGjy7abzgnm5LKlqbV-oWepRaNPDhC7OkSVP6cRV0Pm85PSU5ODJRXGtMBwLzIZJ9N7Hh0ud__Q6TIWFlmiLRI_RF2RXUZ8oh0RdJlbiivopyFOEJbIKL7MWHGLt-jRzt_7dtZJ"
              alt="Security"
              className="w-64 h-40 object-cover rounded-lg opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {SECURITY_FEATURES.map((feat) => (
            <motion.div
              key={feat.title}
              variants={fadeUpVariant}
              className="p-8 border border-surface/10 rounded-[1rem] hover:border-surface/30 transition-colors"
            >
              <span className="text-tertiary-fixed mb-4 block">
                {ICON_MAP[feat.icon]}
              </span>
              <h4 className="font-bold mb-2">{feat.title}</h4>
              <p className="text-xs text-surface/50">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
