import { useRef, useState } from "react";
import AnimateButton from "../general-components/animate-button";
import Navbar from "../navbar";
import Contactmobile from "./contact-mobile";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_f31f49o", // e.g. 'service_xxx'
        "template_pxohfas", // e.g. 'template_yyy'
        form.current,
        "e_7ct127NsOiQaUny" // e.g. 'user_zzz'
      )
      .then(
        (result: any) => {
          console.log("Email sent:", result.text);
          setIsSent(true);
        },
        (error: any) => {
          console.error("Email error:", error.text);
        }
      );
  };

  return (
    <div className="">
      <Navbar />
      <main className="w-full min-h-screen sm:flex flex-col justify-between lg:flex-row hidden">
        {/* Left Side - Dark Blue */}
        <div className="w-[600px] bg-[#003262] text-white p-8 flex flex-col justify-between px-6 md:px-20 order-2 lg:order-1">
          <div>
            <h1 className="text-4xl font-semibold mb-8 leading-tight pt-20">
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
        <div className="w-full bg-[#FFFFFF] p-8 flex flex-col justify-center pr-6 md:pr-20 order-1 lg:order-2 max-w-4xl mx-auto py-40">
          <div className="lg:px-20">
            <h2 className="text-4xl font-bold text-[#003262] mb-2">
              We'd love to hear from you
            </h2>
            <p className="text-[#65A30D] text-xl mb-8 font-medium">
              Contact us regarding any <br />
              <span>concerns</span> or <span>inquiries.</span>
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-6 mt-20">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1e3a5f]">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full px-4 text-[#1e3a5f] py-3 bg-gray-200 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1e3a5f]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full px-4 text-[#1e3a5f] py-3 bg-gray-200 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[#1e3a5f]">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-4 text-[#1e3a5f] py-3 bg-gray-200 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[#1e3a5f]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 text-[#1e3a5f] py-3 bg-gray-200 border border-gray-300 rounded-lg"
                />
              </div>

              <AnimateButton
                type="submit" // ← Important!
                buttonText="Send Message"
                icon="/svg/arrow-top-right.svg"
                parentclasName="inline-flex relative"
                cicleClassName="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 bg-[#8BC500] w-[60px] h-[60px] rounded-full z-0"
                linkClassName="cursor-pointer flex items-center gap-2 text-[#003262] transition-colors mt-5 relative z-10 font-medium"
              />

              {isSent && (
                <p className="text-green-600 mt-4">
                  Message sent successfully!
                </p>
              )}
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
