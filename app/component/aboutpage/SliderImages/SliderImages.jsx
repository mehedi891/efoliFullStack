// app/components/SliderImages.jsx
import { useMemo, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import img1 from "./slider1.png";
import img2 from "./slider2.png";

export default function SliderImages() {
  const images = useMemo(() => [img1, img2, img1, img2, img1, img2], []);
  return (
    <section className="bg-[#0A0C00] text-white">
      <div className="max-w-full mx-auto">
        <h2 className="text-5xl/[1.25] font-bold font-display text-center py-20">
          A culture of creativity, <br /> collaboration, and growth
        </h2>
        <div className="pb-20">
          <FMMarquee
            images={images}
            slotWidth={500}   // px width of each slide "lane"
            slotGap={-90}      // px horizontal gap between slides
            itemHeight={400}  // px image height (keeps aspect with object-contain)
            speedPx={30}     // pixels per second
            bg="#fff"      // for edge fade (optional)
            edgeFade
          />
        </div>
      </div>
    </section>
  );
}

 function FMMarquee({
  images,
  slotWidth = 300,
  slotGap = 12,
  itemHeight = 220,
  speedPx = 5000,
  edgeFade = false,
  bg = "#fff",
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const current = useRef(0);

  const trackDistance = images.length * (slotWidth + slotGap);

  useAnimationFrame((t, delta) => {
    if (reduce) return;
    // delta in ms; convert to seconds
    const dx = (speedPx * delta) / 1000;
    current.current -= dx;
    if (current.current <= -trackDistance) current.current += trackDistance;
    x.set(current.current);
  });

  return (
    <div className="relative overflow-hidden">
      {edgeFade && (
        <>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16"
            style={{ background: `linear-gradient(to right, ${bg}, ${bg}00)` }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16"
            style={{ background: `linear-gradient(to left, ${bg}, ${bg}00)` }}
          />
        </>
      )}

      {/* Two identical tracks back-to-back; x animates continuously */}
      <motion.div className="flex items-center" style={{ x, willChange: "transform" }}>
        <Track images={images} slotWidth={slotWidth} slotGap={slotGap} itemHeight={itemHeight} />
        <Track images={images} slotWidth={slotWidth} slotGap={slotGap} itemHeight={itemHeight} ariaHidden />
      </motion.div>
    </div>
  );
}

function Track({ images, slotWidth, slotGap, itemHeight, ariaHidden = false }) {
  return (
    <div className="flex shrink-0 items-center">
      {images.map((src, i) => (
        <div
          key={(ariaHidden ? "dup-" : "") + i}
          className="flex-none"
          style={{ width: slotWidth, marginRight: slotGap }}
          aria-hidden={ariaHidden}
        >
          <img
            src={src}
            alt=""
            className="block w-full h-auto object-contain rounded-xl"
            style={{ height: itemHeight }}
            loading="lazy"
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
}
