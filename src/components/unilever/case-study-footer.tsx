import { ArrowRight, ArrowLeft } from "lucide-react";

export default function CaseStudyMobile() {
  return (
    <div className=" max-w-md mx-auto bg-white px-7">
      {/* Next Case Study Link */}
      <div className="border-b-2 border-green-400 pt-4 pb-3">
        <a
          href="#"
          className="flex items-center justify-between text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          <span>Next Case Study</span>
          <div className="w-8 h-8 rounded-full border-2 border-green-400 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-green-600" />
          </div>
        </a>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8 mt-10">
        <h3 className="text-lg font-semibold text-[#003262] mb-3">
          Infinity Mesh Newsletter
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          Stay in touch with the latest news, articles, and resources.
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Type your email address"
            className="px-4 py-3 border border-gray-200 text-black bg-[#FFFFFF] rounded-lg text-sm w-[218px] outline-0"
          />
          <button
            type="submit"
            className="flex items-center justify-start space-x-2 w-full text-[#003262] py-3 rounded-lg  transition-colors duration-200 text-base font-medium"
          >
            <span>Subscribe</span>
            <img src="/svg/arrow-top-right.svg" alt="" />
          </button>
        </div>
      </div>

      {/* Share Section */}
      <div className="pt-4 border-t border-b pb-4 border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Share this article</span>
          <div className="flex items-center space-x-3">
            {/* Instagram */}
            <img src="/svg/Instagram.svg" alt="" />

            {/* Facebook */}
            <img src="/svg/IFacebook.svg" alt="" />

            {/* LinkedIn */}
            <img src="/svg/ILinkedIn.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Back to All Case Studies */}
      <div className="border-b-2 border-green-400 pt-4 my-10 pb-5">
        <a
          href="#"
          className="flex items-center gap-3 text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          <div className="w-8 h-8 rounded-full border-2 border-green-400 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-green-600" />
          </div>
          <span>Back to All Case Studies</span>
        </a>
      </div>
    </div>
  );
}
