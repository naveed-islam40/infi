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
      <div className="relative w-full lg:max-w-6xl 2xl:max-w-7xl mx-auto md:px-8">
        <div className="backdrop-blur-md md:rounded-3xl p-8 md:p-10 shadow-lg bg-gradient-to-r from-white to-[#B8DAFB99] h-[300px]">
          <div className=" flex items-start justify-between">
            {/* Tabs */}
            <div className="flex gap-6 mb-8 text-sm md:text-base">
              <button
                className={`text-[#003262] flex items-center ${
                  activeTab === "vision" ? "font-medium" : "opacity-60"
                }`}
                onMouseEnter={() => setActiveTab("vision")}
              >
                / Vision
              </button>
              <button
                className={`text-[#003262] flex items-center ${
                  activeTab === "mission" ? "font-medium" : "opacity-60"
                }`}
                onMouseEnter={() => setActiveTab("mission")}
              >
                / Mission
              </button>
            </div>
            {/* Navigation Button */}
            <button
              className="w-10 h-10 rounded-full border border-[#003262] flex items-center justify-center text-[#003262] transition-colors  hover:text-white"
              onClick={() =>
                setActiveTab(activeTab === "vision" ? "mission" : "vision")
              }
            >
              <ArrowRight
                size={18}
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
                className="text-[#003262] text-sm md:text-base max-w-xl mb-4 absolute"
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
