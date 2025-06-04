import { useState } from "react";
import { tabsData } from "./tabs-data";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function EndToEndProductDetails() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(1);

  const handleClickTab = (inx: number) => {
    const isLastElement = inx === tabsData.length;
    if (isLastElement) {
      setCurrentTab(1);
    } else {
      setCurrentTab(inx + 1);
    }
  };

  const handleNavigate = () => {
    navigate("/our-work");
  };

  return (
    <section className="pb-40">
      <div className="w-full mx-auto px-8 lg:max-w-6xl 2xl:max-w-7xl relative">
        {/* Header with breadcrumb and icon */}
        <div className="flex justify-between items-center mb-16  border-b border-[#84CC16] pb-5">
          <div className="text-sm md:text-xl flex flex-col">
            <div>
              <span className="text-[#84CC16] font-medium">01</span>
              <span className="text-[#84CC16] mx-2">/</span>
              <span className="text-[#84CC16]">04</span>
            </div>
            <span className="text-[#003262]  md:ml-20 font-semibold">
              End-to-End Digital Products
            </span>
          </div>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
            <img
              src="/svg/arrow_brown.svg"
              alt=""
              className="cursor-pointer"
              onClick={handleNavigate}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {tabsData.map((tab, idx) => {
            if (idx !== currentTab - 1) return null;
            return (
              <motion.div
                key={idx}
                onClick={() => handleClickTab(idx + 1)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="cursor-pointer"
              >
                {/* Main heading */}
                <div className="md:text-end mb-20">
                  <h2
                    className="hidden md:block text-5xl md:text-8xl font-bold text-[#0060BA] leading-tight 
            hover:text-[#84CC16] transition-colors duration-500"
                  >
                    {tab.title}
                    <br />
                    {tab.subtitle}
                  </h2>
                  <h2 className="md:hidden text-xl font-bold text-[#0060BA] leading-tight">
                    {tab.title}
                    {tab.subtitle}
                  </h2>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="w-full overflow-hidden rounded-2xl">
                    <img
                      src={tab.imgSrc}
                      alt=""
                      className="w-full hover:scale-150 transition duration-500 ease-in-out"
                    />
                  </div>

                  <div className="order-1 md:order-2">
                    <p className="text-[#4B5563] text-sm md:text-xl leading-relaxed font-semibold">
                      {tab.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
