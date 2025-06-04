export default function WhatWeDo() {
  return (
    <div className="border-b border-gray-300 pt-24 lg:pt-32">
      {/* Main Content */}
      <main className=" lg:pl-10 xl:pl-20 lg:ml-auto  2xl:mx-auto 2xl:max-w-9xl">
        <div className=" self-center grid lg:grid-cols-12">
          <div className=" hidden lg:col-span-1 text-[#84CC16] mb-2 md:mb-4 lg:flex  gap-2 text-base xl:text-xl font-semibold">
            / 01
          </div>

          <div className="lg:col-span-11">
            <div className=" text-[#84CC16] mb-2 md:mb-4 flex  gap-2 text-base xl:text-xl font-semibold px-5 md:px-10 lg:px-0">
              <span className="block lg:hidden pl-5 md:pl-0">/ 01</span>
              <span>/</span>
              <span>What We Do</span>
            </div>

            <div className="mb-8 lg:mb-12 px-5 md:px-10 lg:px-0">
              <h1 className="pl-5 md:pl-0 text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#003262] leading-tight lg:leading-none xl:py-10">
                Innovative Digital <br /> Solutions for <br /> Sustainable
                Growth
              </h1>
            </div>

            <div className="lg:border-l border-[#65A30D] w-full ml-auto lg:max-w-8xl pt-20 md:pt-0">
              <div className="relative mt-20 md:mt-40">
                <div className="px-5 md:px-0 absolute md:right-5 md:left-[50%] -top-44 md:-top-52 w-[90%] md:w-[400px]">
                  <div className="md:border-l-2 border-[#65A30D] h-96 rounded lg:rounded-none ">
                    <p className="text-base md:text-lg lg:text-lg text-[#65A30D] font-normal md:px-4 pl-5 ">
                      We develop digital products tailored to your business
                      goals. We combine strategy, design, and technology to help
                      you move faster, work smarter, and grow stronger. We solve
                      problems, add value, and integrate seamlessly with your
                      team.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="relative">
                    <div className="overflow-hidden">
                      <img
                        src="/png/what_we_do.png"
                        alt="Blue brick wall perspective"
                        className="w-full lg:w-[150vw] md:h-screen object-cover hover:scale-110 transition duration-500 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[80%] w-[1px] bg-[#65A30D] absolute left-5 md:left-10 -bottom-36 md:bottom-0 md:hidden"></div>

              <div className="flex justify-end">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="flex flex-col justify-between gap-10 pt-10 px-10 md:px-8">
                    <div className="space-y-4">
                      <p className="text-[#4B5563] text-base md:text-xl lg:text-2xl leading-relaxed font-semibold ">
                        Think of us as your tech partner who’s all in, the one
                        who listens, understands your goals, and helps you bring
                        them to life without the overwhelm.
                      </p>
                      <p className="text-[#4B5563] text-base md:text-xl lg:text-2xl leading-relaxed font-semibold">
                        Whether you're building something from scratch,
                        improving what you already have, or trying to figure out
                        the next digital move, we're here to make it easier,
                        smarter, and way more effective.
                      </p>
                    </div>
                    <div className="flex gap-36 justify-center">
                      <div className="bg-[#65A30D] h-[300px] w-[1px]"></div>
                      <div className="bg-[#65A30D] h-[300px] w-[1px]"></div>
                      <div className="bg-[#65A30D] h-[300px] w-[1px]"></div>
                    </div>
                  </div>

                  <div className="bg-[#F3F4F6] flex flex-col justify-end py-4 h-full px-10 md:px-8">
                    <div className="space-y-4">
                      <p className="text-[#4B5563] text-base md:text-xl lg:text-2xl leading-relaxed font-semibold">
                        We combine deep technical expertise with business-first
                        thinking to deliver solutions that actually work — for
                        you, your team, and your customers. You focus on your
                        vision. We'll handle the digital side of making it real.
                      </p>
                    </div>
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
