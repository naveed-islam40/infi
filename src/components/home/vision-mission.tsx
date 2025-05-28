import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  const tabContent = {
    vision:
      "To become a global leader in transformative digital development where businesses of all sizes turn for cutting-edge technology, trusted partnership, and measurable results.",
    mission:
      "To become a global leader in transformative digital development where businesses of all sizes turn for cutting-edge technology, trusted partnership, and measurable results.",
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
      <div className="relative w-full lg:max-w-7xl 2xl:max-w-9xl mx-auto md:px-8">
        <div className="bg-gradient-to-r from-white to-[#B8DAFB99] backdrop-blur-md md:rounded-3xl p-8 md:p-10 shadow-lg">
          {/* Tabs */}
          <div className="flex gap-6 mb-8 text-sm md:text-base">
            <button
              className={`text-blue-600 flex items-center ${
                activeTab === "vision" ? "font-medium" : "opacity-60"
              }`}
              onClick={() => setActiveTab("vision")}
            >
              / Vision
            </button>
            <button
              className={`text-blue-600 flex items-center ${
                activeTab === "mission" ? "font-medium" : "opacity-60"
              }`}
              onClick={() => setActiveTab("mission")}
            >
              / Mission
            </button>
          </div>

          {/* Content */}
          <p className="text-blue-900 text-sm md:text-base max-w-xl mb-4">
            {tabContent[activeTab]}
          </p>

          {/* Navigation Button */}
          <div className="flex justify-end mt-4">
            <button
              className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
              onClick={() =>
                setActiveTab(activeTab === "vision" ? "mission" : "vision")
              }
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
