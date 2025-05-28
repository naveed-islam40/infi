import { X } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./mobile-menu";
import { Link } from "react-router-dom";

export default function Menu({ onClose }: { onClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Enable the slide-in after mounting
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    // Trigger slide-out
    setIsVisible(false);
    // Wait for animation before unmounting
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto md:overflow-hidden bg-white rounded-l-4xl">
      {/* Slide-in Panel */}
      <div
        className={`bg-gradient-to-l from-[#B8DAFB99] to-[#FFFFFF] min-h-screen w-full p-4 md:p-8 absolute top-0 right-0 transition-transform duration-300 ease-in-out  ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close and content */}
        <div className="w-full lg:max-w-7xl 2xl:max-w-9xl mx-auto">
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <img src="/svg/Logotype.svg" alt="" className="w-44" />

            <button
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-slate-400 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer"
              onClick={handleClose}
            >
              <X className="w-4 h-4 md:w-5 md:h-5 text-slate-600 " />
            </button>
          </div>

          {/* Mobile Layout */}
          <MobileMenu />

          {/* Desktop Layout */}
          <div className="hidden md:grid lg:grid-cols-2 gap-16 h-[calc(100vh-170px)]">
            {/* Left Side - Newsletter */}
            <div className="space-y-8 flex flex-col justify-end w-[360px]">
              <div>
                <h3 className="text-3xl font-semibold text-[#003262] mb-4">
                  Subscribe to Infinity Mesh
                </h3>
                <p className="text-black mb-6">
                  Stay in touch with the latest news, articles,
                  <br />
                  and resources.
                </p>

                <div className="space-y-4 border-b border-[#003262] pb-10">
                  <input
                    type="email"
                    placeholder="Type your email address"
                    className="w-[350px] px-4 py-3 border border-[#003262] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003262] focus:border-transparent text-[#003262]"
                  />

                  <button className="flex items-center gap-2 text-[#003262] transition-colors mt-5">
                    Subscribe
                    <img src="/svg/arrow-top-right.svg" alt="" />
                  </button>
                </div>
              </div>

              {/* Social Media and Copyright */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <p className="text-[#003262]">Follow us</p>
                  <div className="flex gap-4">
                    <button className="w-8 h-8 flex items-center justify-center hover:text-blue-600 transition-colors">
                      <img src="/svg/Instagram.svg" alt="" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center hover:text-blue-600 transition-colors">
                      <img src="/svg/IFacebook.svg" alt="" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center hover:text-blue-600 transition-colors">
                      <img src="/svg/ILinkedIn.svg" alt="" />
                    </button>
                  </div>
                </div>

                <p className="text-base text-[#003262]">
                  © 2025 Infinity Mesh. All rights reserved.
                </p>
              </div>
            </div>

            {/* Right Side - Navigation */}
            <div className="space-y-8 flex flex-col justify-between">
              <nav className="space-y-6">
                <Link
                  to="/"
                  onClick={handleClose}
                  className="block text-2xl font-medium text-[#003262] transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/who-we-are"
                  onClick={handleClose}
                  className="block text-2xl font-medium text-[#003262] transition-colors"
                >
                  Who We Are
                </Link>
                <Link
                  to="/what-we-do"
                  onClick={handleClose}
                  className="block text-2xl font-medium text-[#003262] transition-colors"
                >
                  What We Do
                </Link>
                <Link
                  to="/our-work"
                  onClick={handleClose}
                  className="block text-2xl font-medium text-[#003262] transition-colors"
                >
                  Work
                </Link>
                <Link
                  to="/articles-list"
                  onClick={handleClose}
                  className="block text-2xl font-medium text-[#003262] transition-colors"
                >
                  Articles
                </Link>
                <Link
                  to="/contact"
                  onClick={handleClose}
                  className="block text-2xl font-medium text-[#003262] transition-colors"
                >
                  Contact
                </Link>
              </nav>

              {/* Footer Links */}
              <div className="flex gap-6 pt-8">
                <Link
                  to="/privacy-policy"
                  className="text-[#003262] transition-colors"
                  onClick={handleClose}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/privacy-policy"
                  className="text-[#003262] transition-colors"
                  onClick={handleClose}
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
