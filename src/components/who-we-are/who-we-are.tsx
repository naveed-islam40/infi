export default function WhoWeAre() {
  return (
    <div className="border-b border-gray-300 pt-40">
      {/* Main Content */}
      <main className="w-full ml-auto lg:max-w-7xl-base 2xl:max-w-9xl 2xl:mx-auto relative">
        <div>
          <div className="xl:max-w-7xl 2xl:max-w-8xl ml-auto px-8 xl:px-0">
            {/* Mobile Section Header */}
            <div className="text-[#84CC16] mb-2 md:mb-4 flex items-center gap-2 font-semibold text-2xl">
              <span className="1500:absolute -left-20 2xl:-left-0">/ 01</span>
              <span>/</span>
              <span>Who We Are</span>
            </div>

            {/* Main Heading */}
            <div className="mb-8 lg:mb-12">
              <h1 className="text-2xl xl:text-5xl font-semibold text-[#003262] leading-tight lg:leading-none py-10">
                Driven by Talent,
                <br />
                Powered by Passion
              </h1>
            </div>
          </div>
          <div className="border-l border-[#65A30D] w-full ml-auto max-w-8xl pt-20 md:pt-0">
            {/* Content Layout */}
            <div className="relative mt-40">
              <div className="absolute right-5 md:left-[50%] -top-36 w-[300px] md:w-[400px]">
                <div className="md:border-l-2 border-[#65A30D] h-96 rounded lg:rounded-none">
                  <p className="text-sm lg:text-lg text-[#65A30D] font-normal px-4">
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
                      src="/png/01.png"
                      alt="Blue brick wall perspective"
                      className="w-[150vw] md:h-screen object-cover hover:scale-110 transition duration-500 ease-in-out"
                    />
                  </div>
                  {/* Green logo overlay */}
                  <div className="absolute top-6 left-6 hidden lg:block lg:w-28 lg:h-28">
                    <img
                      src="/svg/Vector.svg"
                      alt=""
                      className="w-full h-full"
                    />
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
                <div className="bg-[#F3F4F6] flex flex-col justify-end py-4 h-full px-8">
                  <div className="space-y-4">
                    <p className="text-[#4B5563] text-base md:text-xl lg:text-2xl leading-relaxed font-semibold">
                      We don’t just write software. We share expertise,
                      co-create value, and stay hands-on throughout the process
                      — because we believe technology should serve your goals,
                      not complicate them
                    </p>
                    <p className="text-[#4B5563] text-base md:text-xl lg:text-2xl leading-relaxed font-semibold">
                      Our culture is built for continuous learning, resilience,
                      and agility — so we can move fast when it matters and stay
                      aligned with what matters to you.
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
