import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileText,
  Video,
  Podcast,
  Radio,
  Images,
  BarChart3,
  Map,
  FileCheck,
} from "lucide-react";
import TiltCard from "../shared/TiltCard";
import { fadeUpVariant, staggerContainer } from "../../lib/animations";
import { CONTENT_FORMATS } from "../../lib/constants";

const ICON_MAP: Record<string, React.ReactNode> = {
  FileText: <FileText size={36} />,
  Video: <Video size={36} />,
  Podcast: <Podcast size={36} />,
  Radio: <Radio size={36} />,
  Images: <Images size={36} />,
  BarChart3: <BarChart3 size={36} />,
  Map: <Map size={36} />,
  FileCheck: <FileCheck size={36} />,
};

export default function ContentFormats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2
        ref={ref}
        variants={fadeUpVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-4xl font-headline font-bold text-center mb-16"
      >
        Universal Formats for Every Story
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {CONTENT_FORMATS.map((fmt) => (
          <motion.div key={fmt.label} variants={fadeUpVariant}>
            <TiltCard className="flex flex-col items-center p-8 bg-surface-container-low rounded-[1rem]">
              <span className="text-primary mb-4">{ICON_MAP[fmt.icon]}</span>
              <span className="font-bold">{fmt.label}</span>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
