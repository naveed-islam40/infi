import { useState } from "react";
import { motion } from "framer-motion";

export default function ScrollAnimation({
  handleClick,
}: {
  handleClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-start">
      <motion.button
        onClick={handleClick}
        className="relative flex flex-col items-center justify-center w-20 h-20 cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Circular Background - appears on hover */}
        <motion.div
          className="absolute inset-0 bg-[#84CC16] rounded-full shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-2">
          {/* Text */}
          <motion.span
            className={` text-sm font-semibold leading-none ${
              isHovered ? "text-[#003262]" : "text-white"
            }`}
            animate={{
              y: isHovered ? -1 : 0,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Scroll
          </motion.span>

          {/* Arrow Icon - appears on hover */}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 1 : -5,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: isHovered ? 0.1 : 0,
            }}
          >
            <img src="/svg/chevron-double-down.svg" alt="" />
          </motion.div>
        </div>
      </motion.button>
    </div>
  );
}
