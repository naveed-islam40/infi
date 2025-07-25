import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  const tabContent = {
    vision:
      "To become a global leader in transformative digital development where businesses of all sizes turn for cutting-edge technology, trusted partnership, and measurable results.",
    mission:
      "To empower companies at every stage of growth with scalable, high-impact digital solutions that drive innovation, accelerate performance, and maximize value",
  };

  return (
    <main className="flex flex-col md:flex-row items-center justify-center relative overflow-hidden md:h-screen">
      {/* Background Image */}
      <div className="md:absolute inset-0 w-full h-full">
        <img
          src="/png/Mobile foto.png"
          alt="Infinity background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Card Container */}
      <div className="relative w-full md:w-[90%] lg:w-[75%] mx-auto 2xl:max-w-9xl">
        <div className="backdrop-blur-md md:rounded-3xl p-8 lg:p-20 shadow-lg bg-gradient-to-r from-white to-[#B8DAFB99] h-[300px] lg:h-[500px]">
          <div className=" flex items-start justify-between">
            {/* Tabs */}
            <div className="flex gap-6 mb-8 text-sm md:text-base">
              <button
                className={`text-[#003262] flex items-center text-xl xl:text-4xl ${
                  activeTab === "vision" ? "font-medium" : "opacity-60"
                }`}
                onMouseEnter={() => setActiveTab("vision")}
              >
                / Vision
              </button>
              <button
                className={`text-[#003262] flex items-center text-xl xl:text-4xl ${
                  activeTab === "mission" ? "font-medium" : "opacity-60"
                }`}
                onMouseEnter={() => setActiveTab("mission")}
              >
                / Mission
              </button>
            </div>
            {/* Navigation Button */}
            <button
              className="w-12 h-12 lg:w-24 lg:h-25 rounded-full border border-[#003262] flex items-center justify-center text-[#003262] transition-colors"
              onClick={() =>
                setActiveTab(activeTab === "vision" ? "mission" : "vision")
              }
            >
              <ArrowRight
                size={25}
                className={activeTab === "vision" ? "" : "rotate-45"}
              />
            </button>
          </div>

          {/* Content */}
          <p className="text-[#003262] text-sm md:text-base max-w-xl mt-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-[#003262] text-base md:text-xl xl:text-2xl font-semibold max-w-xl mb-4 absolute py-8 lg:py-20"
              >
                {tabContent[activeTab]}
              </motion.p>
            </AnimatePresence>
          </p>
        </div>
      </div>
    </main>
  );
}
