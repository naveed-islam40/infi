"use client";

import { useState } from "react";

export default function CoreValues() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const values = [
    {
      id: "excellence",
      title: "Excellence",
      content:
        "We strive for the highest quality in everything we do, from code architecture to client communication. Our commitment to excellence drives continuous improvement and innovation.",
    },
    {
      id: "trusted-partner",
      title: "Trusted Partner",
      content:
        "We build lasting relationships based on transparency, reliability, and mutual respect. Our clients trust us to deliver on our promises and provide honest, strategic guidance.",
    },
    {
      id: "collaboration",
      title: "Collaboration",
      content:
        "We believe the best solutions emerge from diverse perspectives and open communication. We work closely with our clients and team members to achieve shared goals.",
    },
    {
      id: "innovation",
      title: "Innovation",
      content:
        "We embrace new technologies and creative approaches to solve complex problems. Innovation is at the heart of how we help our clients stay ahead of the curve.",
    },
  ];

  return (
    <div>
      <div className="w-[90%] 2xl:max-w-9xl mx-auto mt-10 md:mt-28">
        <div className=" self-center grid lg:grid-cols-12">
          <div className=" hidden lg:col-span-1 text-[#84CC16] mb-2 md:mb-4 lg:flex  gap-2 text-base xl:text-xl font-semibold">
            / 02
          </div>

          <div className="lg:col-span-11">
            <div className="text-[#003262] mb-2 md:mb-4 flex items-center gap-2 font-semibold text-xl md:text-2xl">
              <span className="block lg:hidden">/ 02</span>

              <span>/</span>
              <span>Our Core Values</span>
            </div>
            <div className="rounded-lg mt-10">
              <p className="text-[#65A30D] md:w-[30rem] text-base md:text-2xl font-semibold">
                We code with excellence, act as a trusted partner, work
                together, and lead with innovation. These values shape how we
                work, how we think, and how we help our clients grow — with
                purpose and precision.
              </p>
            </div>

            <div className="space-y-8 my-20">
              {values.map((value, index) => (
                <div
                  key={value.id}
                  className=" bg-white border-b border-[#003262]"
                >
                  <button
                    onClick={() => toggleSection(value.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-[#003262] font-medium relative text-base md:text-2xl pl-2 md:pl-8">
                      <span className="absolute -left-6 -top-5 text-base md:text-xl">{`0${
                        index + 1
                      }`}</span>
                      {value.title}
                    </span>
                    <div className="flex-shrink-0 ml-4 cursor-pointer">
                      <img
                        src="/svg/Plus.svg"
                        alt=""
                        className="w-10 h-10 md:w-14 md:h-14"
                      />
                    </div>
                  </button>
                  {openSection === value.id && (
                    <div className="px-6 pb-4 transition ">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">
                          {value.content}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative  mt-10 mx-auto w-full 2xl:max-w-9xl group overflow-hidden">
        <img
          src="/png/meeting.png"
          alt=""
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
        />

        <img
          src="/png/who-we-are-2.png"
          alt=""
          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}
