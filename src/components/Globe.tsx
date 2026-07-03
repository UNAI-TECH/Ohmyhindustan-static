import { useEffect, useRef } from "react";
import createGlobe from "cobe";

// India-centered phi/theta
const DEFAULT_PHI = 1.5;
const DEFAULT_THETA = 0.3;
const DEFAULT_SCALE = 1;

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let globe: any;
    let phi = DEFAULT_PHI;
    let animationId: number;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const rect = entry.contentRect;
        const width = rect.width;
        if (width <= 0) continue;

        if (globe) {
          globe.destroy();
        }

        globe = createGlobe(canvas, {
          devicePixelRatio: 2,
          width: width * 2,
          height: width * 2,
          phi: phi,
          theta: DEFAULT_THETA,
          dark: 0,
          diffuse: 1.4,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [0.718, 0.125, 0.118],
          markerColor: [0.9, 0.1, 0.1],
          glowColor: [0.85, 0.25, 0.25],
          markers: [],
          scale: DEFAULT_SCALE,
        });
      }
    });

    resizeObserver.observe(canvas.parentElement || canvas);

    function animate() {
      phi += 0.003;
      if (globe) {
        globe.update({
          phi,
        });
      }
      animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
      if (globe) {
        globe.destroy();
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-[600px] aspect-square">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ contain: "layout paint size" }}
      />
    </div>
  );
}
