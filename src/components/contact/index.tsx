import AnimateButton from "../general-components/animate-button";
import Navbar from "../navbar";
import Contactmobile from "./contact-mobile";

export function ContactForm() {
  return (
    <div className="">
      <Navbar />
      <main className="w-full mx-auto 2xl:max-w-9xl min-h-screen sm:flex flex-col justify-between lg:flex-row hidden">
        {/* Left Side - Dark Blue */}
        <div className="lg:w-1/2 bg-[#003262] text-white p-8 flex flex-col justify-between px-6 md:px-20 order-2 lg:order-1">
          <div>
            <h1 className="text-4xl font-semibold mb-8 leading-tight">
              Let's work together
            </h1>
            <div className="mb-12">
              <p className="text-[#84CC16] text-sm">hello@infinitymesh.com</p>
              <p className="text-[#84CC16] text-sm">infinitymesh.com</p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-8 text-[#84CC16] border-b border-[#84CC16] pb-5">
              OUR OFFICES
            </h2>
            <div className="space-y-8">
              {/* Office 01 */}
              <div className="flex items-start gap-6 justify-between border-b border-[#84CC16] pb-5">
                <div className="text-white">
                  <h3 className="text-white font-medium mb-2 text-lg">
                    Bosnia and Herzegovina
                  </h3>
                  <p className="text-sm mb-1">
                    Bulevar JA, Zmaja Od Bosne 8, L.
                  </p>
                  <p className=" text-sm mb-2">71000 Sarajevo</p>
                  <p className=" text-sm">+387 65 888 330</p>
                </div>
                <span className="text-[#84CC16] text-5xl font-semibold">
                  01
                </span>
              </div>
              {/* Office 02 */}
              <div className="flex items-start justify-between gap-6 border-b border-[#84CC16] pb-5">
                <div className="text-white">
                  <h3 className="text-white font-medium mb-2 text-lg">
                    United States
                  </h3>
                  <p className=" text-sm mb-1">175 SW 7th St Suite 1017</p>
                  <p className=" text-sm mb-2">Miami, FL 33130 USA</p>
                  <p className=" text-sm">+1 347 881 7502</p>
                </div>
                <span className="text-[#84CC16] text-5xl font-semibold">
                  02
                </span>
              </div>
              {/* Office 03 */}
              <div className="flex items-start justify-between gap-6 border-b border-[#84CC16] pb-5">
                <div>
                  <h3 className="text-white font-medium mb-2 text-lg">
                    United States
                  </h3>
                  <p className=" text-sm mb-1">
                    2472 Old Castle Tr Wilmington,
                  </p>
                  <p className=" text-sm mb-2">DE 19808, USA</p>
                  <p className=" text-sm">+1 347 881 7502</p>
                </div>
                <span className="text-[#84CC16] text-5xl font-semibold">
                  03
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side - Light Background */}
        <div className="w-full bg-[#FFFFFF] p-8 flex flex-col justify-center pr-6 md:pr-20 order-1 lg:order-2">
          <div className="lg:px-20">
            <h2 className="text-4xl font-bold text-[#003262] mb-2">
              We'd love to hear from you
            </h2>
            <p className="text-[#65A30D] text-sm mb-8">
              Contact us regarding any <br />
              <span>concerns</span> or <span>inquiries.</span>
            </p>
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#003262] font-semibold text-sm mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 text-[#003262] bg-[#E5E7EB] border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-[#003262] font-semibold text-sm mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#E5E7EB] border text-[#003262] border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>
              {/* Company Field */}
              <div>
                <label className="block text-[#003262] font-semibold text-sm mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#E5E7EB] text-[#003262] border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>
              {/* Message Field */}
              <div>
                <label className="block text-[#003262] font-semibold text-sm mb-2">
                  Additional Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-[#E5E7EB] border text-[#003262] border-gray-200 rounded-lg focus:outline-none focus:border-green-500 resize-none"
                ></textarea>
              </div>
              {/* Submit Button */}
              <AnimateButton
                buttonText="Send Message"
                icon="/svg/arrow-top-right.svg"
                path="#"
                parentclasName="inline-flex relative"
                cicleClassName="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 bg-[#8BC500] w-[60px] h-[60px] rounded-full z-0"
                linkClassName="flex items-center gap-2 text-[#003262] transition-colors mt-5 relative z-10"
              />
            </form>
          </div>
        </div>
      </main>
      <div className="sm:hidden">
        <Contactmobile />
      </div>
    </div>
  );
}
