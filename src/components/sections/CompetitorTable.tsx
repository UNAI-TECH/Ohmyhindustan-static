import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, XCircle } from "lucide-react";
import { fadeUpVariant } from "../../lib/animations";
import { COMPETITOR_FEATURES } from "../../lib/constants";

export default function CompetitorTable() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-x-auto">
      <motion.h2
        ref={ref}
        variants={fadeUpVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-4xl font-headline font-bold mb-12 text-center"
      >
        OMH vs Everyone Else.
      </motion.h2>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-outline-variant">
              <th className="py-6 font-headline font-bold text-xl">Feature</th>
              <th className="py-6 font-headline font-bold text-xl text-primary">
                OMH
              </th>
              <th className="py-6 font-headline font-bold text-xl opacity-40">
                NewsPoint
              </th>
              <th className="py-6 font-headline font-bold text-xl opacity-40">
                InShorts
              </th>
            </tr>
          </thead>
          <tbody className="text-on-surface-variant">
            {COMPETITOR_FEATURES.map((row) => (
              <tr
                key={row.feature}
                className="border-b border-outline-variant/10"
              >
                <td className="py-6 font-bold">{row.feature}</td>
                <td className="py-6">
                  {row.omh ? (
                    <CheckCircle size={22} className="text-green-600" />
                  ) : (
                    <XCircle size={22} className="opacity-20" />
                  )}
                </td>
                <td className="py-6">
                  {row.newspoint ? (
                    <CheckCircle size={22} className="text-green-600" />
                  ) : (
                    <XCircle size={22} className="opacity-20" />
                  )}
                </td>
                <td className="py-6">
                  {row.inshorts ? (
                    <CheckCircle size={22} className="text-green-600" />
                  ) : (
                    <XCircle size={22} className="opacity-20" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
