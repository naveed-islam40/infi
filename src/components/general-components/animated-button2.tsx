import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function AnimatedButton2({
  buttonText,
  orderIcon,
  orderText,
  handleClick,
}: {
  buttonText: string;
  orderIcon: string;
  orderText: string;
  handleClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <motion.button
        onClick={handleClick}
        className="relative flex items-center gap-2 py-4 bg-white rounded-lg overflow-hidden cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className={`flex items-center justify-center ${orderIcon} rounded-full border-2 border-[#84CC16]`}
          animate={{
            width: isHovered ? 32 : 0,
            height: isHovered ? 32 : 0,
            marginRight: isHovered ? 12 : 0,
            opacity: isHovered ? 1 : 0,
            borderWidth: isHovered ? 2 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.5,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: isHovered ? 0.1 : 0,
            }}
          >
            <ArrowLeft
              className={`w-4 h-4 text-[#84CC16] ${
                orderIcon === "order-2" ? "rotate-180" : ""
              }`}
            />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.span
          className={`${orderText} text-4xl font-bold order-1 whitespace-nowrap`}
          animate={{
            color: isHovered ? "#84CC16" : "#0060BA",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {buttonText}
        </motion.span>

        {/* Underline */}
        <motion.div
          className="absolute bottom-2 h-0.5"
          animate={{
            backgroundColor: isHovered ? "#84CC16" : "#84CC16",
            right: isHovered ? 56 : 24,
            left: 24,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </motion.button>
    </div>
  );
}
