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

    let phi = DEFAULT_PHI;
    let animationId: number;
    const width = canvas.offsetWidth;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: DEFAULT_PHI,
      theta: DEFAULT_THETA,
      dark: 0,
      diffuse: 1.4,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1.0, 0.65, 0.2],
      markerColor: [0.75, 0.23, 0.17],
      glowColor: [1.0, 0.55, 0.1],
      markers: [],
      scale: DEFAULT_SCALE,
    });

    function animate() {
      phi += 0.003;
      globe.update({
        phi,
      });
      animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      globe.destroy();
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
