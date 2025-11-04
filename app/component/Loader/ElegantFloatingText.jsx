
import {useEffect} from "react";

import {motion, useAnimationControls} from "motion/react";

const ElegantFloatingText = ({ text = "Loading..." }) => {
  const controls = useAnimationControls();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
  };

  // soft wave loop per character
  const char = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: [10, 0, -6, 0, -2, 0],
      transition: {
        times: [0, 0.25, 0.5, 0.75, 0.9, 1],
        duration: 1.8,
        ease: "easeInOut",
        delay: i * 0.035,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.1,
      },
    }),
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={controls}
      className="font-display text-center font-extrabold leading-none tracking-tight
                 text-5xl sm:text-6xl lg:text-7xl"
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={char}
          className="
            inline-block will-change-transform
            text-transparent bg-clip-text
            /* hairline highlight for crisp edges on any bg */
            drop-shadow-[0_1px_0_rgba(255,255,255,0.35)]
          "
          style={{
            // On-brand gradient: base #0D99FF → lighter tint → base again
            backgroundImage:
              "linear-gradient(90deg, #0D99FF 0%, #62BEFF 50%, #0D99FF 100%)",
            backgroundSize: "200% 100%",
            // shimmer pan (offset per letter so it feels alive)
            animation: `brand-pan 6s ease-in-out ${i * 0.08}s infinite`,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}

      {/* keyframes for the gradient pan */}
      <style>{`
        @keyframes brand-pan {
          0% { background-position: 0% 0; }
          50% { background-position: 100% 0; }
          100% { background-position: 0% 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default ElegantFloatingText;