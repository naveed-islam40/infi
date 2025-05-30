import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { testimonialData } from "./tabs-data";
import { ArrowRight } from "lucide-react";

export default function TestimonialCardMobile() {
  const [currentTab, setCurrentTab] = useState(1);

  const handleNext = () => {
    const isLast = currentTab === testimonialData.length;
    setCurrentTab(isLast ? 1 : currentTab + 1);
  };

  return (
    <div className="max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        {testimonialData.map((item, idx) => {
          if (idx + 1 !== currentTab) return null;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 "
              onClick={handleNext}
            >
              {/* Header with quote icon and arrow button */}
              <div className="flex justify-between items-start mb-6">
                <img src="/svg/Quote icon.svg" alt="" className="w-8" />
                <button className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Testimonial text */}
              <div className="mb-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.message}
                </p>
              </div>

              {/* Company / User */}
              <div className="text-blue-600 font-medium text-sm">
                {item.user}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
