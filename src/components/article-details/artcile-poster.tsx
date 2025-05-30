import { Instagram } from "lucide-react";
import type React from "react";

import { useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import AnimateButton from "../general-components/animate-button";

export default function BlogSidebar() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="bg-white md:p-6 space-y-8 sticky top-0">
      {/* Author Profile Section */}
      <div className="flex items-start space-x-4 border-b border-gray-200 pb-4">
        <div className="relative">
          <div className="w-16 h-16 bg-blue-500 rounded-xl overflow-hidden">
            <img
              src="/png/Rectangle 40.png"
              alt="Admir Mujkic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
            WRITTEN BY
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Admir Mujkic
          </h3>
          <p className="text-sm text-gray-600">Chief Technology Officer</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="space-y-4 bg-[#F9FAFB] px-2 py-6 flex flex-col items-center rounded-lg">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#003262] mb-2">
            Infinity Mesh Newsletter
          </h3>
          <p className="text-gray-600 text-sm md:text-lg md:w-[70%] px-2">
            Stay in touch with the latest news, articles, and resources.
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="flex flex-col gap-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email address"
            className="px-4 py-3 border border-gray-200 text-black bg-[#FFFFFF] rounded-lg text-sm lg:w-[218px] outline-0"
            required
          />
          <AnimateButton
            buttonText="Subscribe"
            icon="/svg/arrow-top-right.svg"
            path="#"
            parentclasName="inline-flex relative"
            cicleClassName="absolute left-[25%] top-[60%] -translate-x-1/2 -translate-y-1/2 bg-[#8BC500] w-[60px] h-[60px] rounded-full z-0"
            linkClassName="inline-flex items-center gap-2 text-sm font-medium text-[#003262] transition-colors relative z-10 px-4 py-2"
          />
        </form>
      </div>

      {/* Social Sharing Section */}
      <div className="pt-4 border-t border-b pb-4 border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Share this article</span>
          <div className="flex items-center space-x-3">
            {/* Instagram */}
            <Instagram className="w-6 h-6 text-[#003262] hover:text-[#84CC16] transition duration-300" />

            {/* Facebook */}
            <FaFacebook className="w-6 h-6 text-[#003262] hover:text-[#84CC16] transition duration-300" />

            {/* LinkedIn */}
            <FaLinkedin className="w-6 h-6 text-[#003262] hover:text-[#84CC16] transition duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
