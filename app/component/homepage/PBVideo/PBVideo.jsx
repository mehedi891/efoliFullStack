import { motion, useReducedMotion } from "framer-motion";
import pbThumbnail from "./pbVthumbnail.webp";

const PBVideo = () => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0, y: 28, scale: 0.965, filter: "blur(6px)" }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={
        prefersReduced
          ? { duration: 0.35, ease: "easeOut" }
          : { type: "spring", stiffness: 140, damping: 22, mass: 0.9 }
      }
      viewport={{ once: true, amount: 0.55, margin: "-80px" }}
      className="pt-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20 lg:pb-24 pt-10">
        <motion.div
          initial={{ borderRadius: 24, boxShadow: "0 30px 80px rgba(0,0,0,.08)" }}
          animate={{ borderRadius: 24, boxShadow: "0 30px 80px rgba(0,0,0,.12)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid overflow-hidden rounded-2xl"
        >
          {/* Image: gentle de-zoom for a cinematic feel */}
          <motion.img
            src={pbThumbnail}
            alt="PushBundle"
            className="col-start-1 row-start-1 h-full w-full object-cover"
            initial={{ scale: 1.3 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.55 }}
          />

          {/* Optional soft top gradient for polish */}
          <div className="col-start-1 row-start-1 pointer-events-none bg-gradient-to-b from-black/10 to-transparent h-1/2 w-full" />

          {/* Play pill */}
          <motion.button
            type="button"
            whileHover={
              prefersReduced ? {} : { y: -2, scale: 1.035, boxShadow: "0 14px 34px rgba(0,0,0,.18)" }
            }
            whileTap={prefersReduced ? {} : { scale: 0.985 }}
            className="col-start-1 row-start-1 z-10 place-self-center flex h-[145px] w-[145px]
                       items-center justify-center rounded-full bg-white text-2xl font-display font-bold
                       shadow-2xl"
          >
            Play
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PBVideo;
