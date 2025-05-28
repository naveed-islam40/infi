import { ArrowRight } from "lucide-react";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      {/* Navigation */}
      <nav className="space-y-6 mb-12">
        <a href="#" className="block text-2xl font-medium text-[#003262]">
          Home
        </a>
        <a href="#" className="block text-2xl font-medium text-[#003262]">
          Who We Are
        </a>
        <a href="#" className="block text-2xl font-medium text-[#003262]">
          What We Do
        </a>
        <a href="#" className="block text-2xl font-medium text-[#003262]">
          Work
        </a>
        <a href="#" className="block text-2xl font-medium text-[#003262]">
          Articles
        </a>
        <a href="#" className="block text-2xl font-medium text-[#003262]">
          Contact
        </a>
      </nav>

      {/* Footer Links */}
      <div className="flex gap-6 mb-8">
        <a
          href="#"
          className="text-slate-600 hover:text-blue-600 transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-slate-600 hover:text-blue-600 transition-colors"
        >
          Cookie Policy
        </a>
      </div>

      {/* Separator Line */}
      <div className="border-t border-slate-300 mb-8"></div>

      {/* Newsletter Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-800">
          Subscribe to Infinity Mesh
        </h3>

        <input
          type="email"
          placeholder="Type your email address"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <button className="flex items-center gap-2 text-slate-800 font-medium hover:text-blue-600 transition-colors">
          Subscribe
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Separator Line */}
        <div className="border-t border-slate-300 my-6"></div>

        {/* Social Media and Copyright */}
        <div className="space-y-4">
          <div>
            <p className="text-slate-600 mb-4">Follow us</p>
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

          <p className="text-sm text-slate-600">
            © 2025 Infinity Mesh. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
