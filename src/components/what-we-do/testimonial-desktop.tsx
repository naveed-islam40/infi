import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { testimonialData } from "./tabs-data";

const TestimonialDesktop = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleClickTab = (inx: number) => {
    const isLastElement = inx === testimonialData.length;
    if (isLastElement) {
      setCurrentTab(1);
    } else {
      setCurrentTab(inx + 1);
    }
  };
  return (
    <div>
      <AnimatePresence mode="wait">
        {testimonialData.map((item, index) => {
          if (index + 1 !== currentTab) return null;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FFFFFF] rounded-lg p-8 md:p-12 relative border shadow-sm hidden md:block cursor-pointer"
              onClick={() => handleClickTab(index + 1)}
            >
              {/* Large quotation mark */}
              <img src="/svg/Quote icon.svg" alt="" />

              {/* Testimonial text */}
              <blockquote
                className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-8 max-w-3xl ml-28"
                dangerouslySetInnerHTML={{ __html: item.message }}
              ></blockquote>

              {/* Author */}
              <div className="flex flex-col">
                <cite className="text-[#0060BA] font-medium not-italic ml-28 text-2xl">
                  {item.user}
                </cite>
                <cite className="text-[#4B5563] font-medium not-italic ml-28">
                  {item.role}
                </cite>
              </div>

              {/* Circular arrow icon */}
              <div className="absolute bottom-8 right-8">
                <div className="w-14 h-14 border-2 border-[#0060BA] rounded-full flex items-center justify-center cursor-pointer">
                  <svg
                    className="w-5 h-5 text-[#0060BA]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialDesktop;
