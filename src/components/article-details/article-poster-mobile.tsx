import type React from "react";

import { Instagram } from "lucide-react";
import { useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import AnimateButton from "../general-components/animate-button";
import { useNavigate } from "react-router-dom";

export default function MobileBlogSidebar() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="bg-white p-4 space-y-6 max-w-4xl mx-auto">
      {/* Author Profile Section */}
      <div className="flex items-start space-x-3 border-b border-gray-200 pb-4">
        <div className="relative">
          <div className="w-12 h-12 bg-blue-500 rounded-xl overflow-hidden">
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
          <h3 className="text-base font-semibold text-gray-900 mb-1">
            Admir Mujkic
          </h3>
          <p className="text-sm text-gray-600">Chief Technology Officer</p>
        </div>
      </div>

      {/* Next Article Section */}
      <div
        className="flex items-center justify-center py-3 border-b cursor-pointer border-[#84CC16]"
        onClick={() => navigate("/article-details/01")}
      >
        <span className="font-bold text-xl text-[#0060BA]">Next Article</span>
        <img src="/svg/arrow-right.svg" alt="" />
      </div>

      {/* Newsletter Section */}
      <div className="space-y-4 bg-[#F3F4F6] p-4 rounded-lg">
        <div className="">
          <h3 className="text-lg font-semibold text-[#003262] mb-2">
            Infinity Mesh Newsletter
          </h3>
          <p className="text-gray-600 text-sm">
            Stay in touch with the latest news, articles, and resources.
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email address"
            className="w-full px-4 py-3 border border-gray-200 text-black bg-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8BC500] focus:border-transparent"
            required
          />
          <AnimateButton
            buttonText="Subscribe"
            icon="/svg/arrow-top-right.svg"
            parentclasName="inline-flex relative"
            cicleClassName="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 bg-[#8BC500] w-[60px] h-[60px] rounded-full z-0"
            linkClassName="flex items-center gap-2 text-[#003262] transition-colors mt-5 relative z-10"
            path="#"
          />
        </form>
      </div>

      {/* Social Sharing Section */}
      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Share this article</span>
          <div className="flex items-center space-x-4">
            <Instagram className="w-6 h-6 text-[#003262] hover:text-[#84CC16] transition duration-300 cursor-pointer" />
            <FaFacebook className="w-6 h-6 text-[#003262] hover:text-[#84CC16] transition duration-300 cursor-pointer" />
            <FaLinkedin className="w-6 h-6 text-[#003262] hover:text-[#84CC16] transition duration-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Back to Articles Section */}
      <div className="pt-4 border-t border-[#84CC16]">
        <button
          className="w-full border-[#8BC500] text-[#0060BA] text-xl cursor-pointer py-3 rounded-lg transition-colors flex items-center justify-center font-bold gap-2"
          onClick={() => navigate("/articles-list")}
        >
          <img src="/svg/arrow-left.svg" alt="" />
          Back to all Articles
        </button>
      </div>
    </div>
  );
}
