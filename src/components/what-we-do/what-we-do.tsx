export default function WhatWeDo() {
  return (
    <div className="border-b border-gray-300 pt-40">
      {/* Main Content */}
      <main className="ml-auto lg:max-w-7xl 2xl:max-w-9xl relative">
        <div>
          <div className="max-w-8xl ml-auto px-8 xl:px-0">
            {/* Mobile Section Header */}
            <div className="text-[#84CC16] mb-2 md:mb-4 flex items-center gap-2 font-semibold text-2xl py-10">
              <span className="1500:absolute -left-20">/ 01</span>
              <span>/</span>
              <span>What We Do</span>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-2xl xl:text-5xl font-semibold text-[#003262] leading-tight lg:leading-none">
                Driven by Talent,
                <br />
                Powered by Passion
              </h1>
            </div>
          </div>

          <div className="border-l border-[#65A30D] w-full ml-auto max-w-8xl pt-20 md:pt-0">
            {/* Content Layout */}
            <div className="relative mt-40">
              <div className=" absolute left-5 md:left-[50%] -top-40 w-[300px] md:w-[400px]">
                <div className="md:border-l-2 border-[#65A30D] h-96 px-8 rounded lg:rounded-none">
                  <p className="text-sm lg:text-lg text-[#65A30D] leading-relaxed font-normal">
                    We are a team of professionals — engineers, designers,
                    strategists, and project managers — united by a shared
                    passion for building digital solutions that make a real
                    impact.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                {/* Image */}
                <div className="relative">
                  <div className="overflow-hidden">
                    <img
                      src="/png/what_we_do.png"
                      alt="Blue brick wall perspective"
                      className="w-[150vw] md:h-screen object-cover hover:scale-110 transition duration-500 ease-in-out"
                    />
                  </div>
                  {/* Green logo overlay */}
                  <div className="absolute top-6 left-6 w-12 h-12 lg:w-16 lg:h-16">
                    <img src="/svg/Vector.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Line  */}
            <div className="h-[80%] w-[1px] bg-[#65A30D] absolute left-10 bottom-0 md:hidden"></div>

            {/* Text Content */}
            <div className="flex justify-end">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Text Block */}
                <div className="flex flex-col justify-between gap-10 pt-10 px-8">
                  <div className="space-y-4">
                    <p className="text-[#4B5563] text-base md:text-xl lg:text-2xl leading-relaxed font-semibold">
                      Since 2016, our journey has been driven by a lifelong
                      passion for coding — not just as a craft, but as a tool
                      for solving complex challenges and unlocking opportunity.
                    </p>
                    <p className="text-[#4B5563] text-base md:text-xl lg:text-2xl leading-relaxed font-semibold">
                      We build smart, scalable digital products that help our
                      clients thrive in demanding business environments.
                    </p>
                  </div>
                  <div className="flex gap-36 justify-center">
                    <div className="bg-[#65A30D] h-[300px] w-[1px]"></div>
                    <div className="bg-[#65A30D] h-[300px] w-[1px]"></div>
                    <div className="bg-[#65A30D] h-[300px] w-[1px]"></div>
                  </div>
                </div>

                {/* Right Text Block */}
                <div className="bg-[#F3F4F6] flex flex-col justify-end py-4 h-full px-8 font-semibold border-l border-[#65A30D]">
                  <div className="space-y-4">
                    <p className="text-[#4B5563] text-base md:text-xl lg:text-2xl leading-relaxed">
                      We don't just write software. We drive innovation,
                      accelerate digital transformation, and create solutions
                      that deliver real business value. Our commitment to
                      quality, innovation, and client satisfaction has made us a
                      trusted partner.
                    </p>
                    <p className="text-[#4B5563] text-base md:text-xl lg:text-2xl leading-relaxed">
                      From startups to enterprise organizations, we partner with
                      forward-thinking companies to build the digital products
                      that power their success. Our team brings together diverse
                      expertise in modern technologies, user experience design,
                      and business strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
