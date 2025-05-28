import { ArrowRight } from "lucide-react";

export default function TestimonialCardMobile() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
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
          High quality, delivery exceeds. High value, great value for the money.
          Fast turnaround, working in multiple zones makes turn around time
          faster.{" "}
          <span className="font-semibold text-gray-900">
            The team is a pleasure to work with.
          </span>
        </p>
      </div>

      {/* Company name */}
      <div className="text-blue-600 font-medium text-sm">Unilever</div>
    </div>
  );
}
