import { motion } from "framer-motion";

export default function FloatingBlob() {
  return (
    <div className="p-8 flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* First Large Blob - Moving Only on X-axis */}
        <motion.div
          className="absolute w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full opacity-70 blur-md"
          style={{
            background: `conic-gradient(from 0deg, 
              #0060BA 0%, 
              #60AEF9 14%, 
              #86C4E6 28%, 
              #AFDBD3 42%, 
              #D9F99D 56%, 
              #84CC16 70%, 
              #65A30D 84%, 
              #0060BA 100%)`,
          }}
          animate={{
            x: [-50, 50, -30, 40, -50],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Second Blob - Circular Motion */}
        <motion.div
          className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full opacity-60 blur-md"
          style={{
            background: `radial-gradient(circle at 30% 70%, 
              #9747FF 0%, 
              #0060BA 15%, 
              #60AEF9 25%, 
              #86C4E6 35%, 
              #AFDBD3 45%, 
              #D9F99D 55%, 
              #84CC16 65%, 
              #65A30D 75%, 
              #FFFFFF 85%, 
              #86C4E6 100%)`,
          }}
          animate={{
            x: [0, 60, 0, -60, 0],
            y: [0, -60, 0, 60, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Third Blob for more depth */}
        <motion.div
          className="absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full opacity-50 blur-lg"
          style={{
            background: `linear-gradient(135deg, 
              #9747FF 0%, 
              #0060BA 12%, 
              #60AEF9 24%, 
              #86C4E6 36%, 
              #AFDBD3 48%, 
              #D9F99D 60%, 
              #84CC16 72%, 
              #65A30D 84%, 
              #9747FF 100%)`,
          }}
          animate={{
            x: [0, -40, 0, 40, 0],
            y: [0, 40, 0, -40, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Static Image Container */}
        <div className="relative z-10 rounded-full flex items-center justify-center shadow-2xl">
          <img
            src="/svg/homeanime_1.svg"
            alt=""
            className="w-[400px] md-base:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
