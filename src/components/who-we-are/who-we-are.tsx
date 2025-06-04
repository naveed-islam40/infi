export default function WhoWeAre() {
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
              <span>Who We Are</span>
            </div>

            <div className="mb-8 lg:mb-12 px-5 md:px-10 lg:px-0">
              <h1 className="pl-5 md:pl-0 text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#003262] leading-tight lg:leading-none xl:py-10">
                Driven by Talent,
                <br />
                Powered by Passion
              </h1>
            </div>

            <div className="lg:border-l border-[#65A30D] w-full ml-auto lg:max-w-8xl pt-20 md:pt-0">
              <div className="relative mt-20 md:mt-40">
                <div className="px-5 md:px-0 absolute md:right-5 md:left-[50%] -top-36 w-[90%] md:w-[400px]">
                  <div className="md:border-l-2 border-[#65A30D] h-96 rounded lg:rounded-none ">
                    <p className="text-base md:text-lg lg:text-lg text-[#65A30D] font-normal md:px-4 pl-5 ">
                      We are a team of professionals — engineers, designers,
                      strategists, and project managers — united by a shared
                      passion for building digital solutions that make a real
                      impact.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="relative">
                    <div className="overflow-hidden">
                      <img
                        src="/png/01.png"
                        alt="Blue brick wall perspective"
                        className="w-full lg:w-[150vw] md:h-screen object-cover hover:scale-110 transition duration-500 ease-in-out"
                      />
                    </div>
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

              <div className="h-[80%] w-[1px] bg-[#65A30D] absolute left-5 md:left-10 -bottom-36 md:bottom-0 md:hidden"></div>

              <div className="flex justify-end">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="flex flex-col justify-between gap-10 pt-10 px-10 md:px-8">
                    <div className="space-y-4">
                      <p className="text-[#4B5563] text-base md:text-xl lg:text-2xl leading-relaxed font-semibold ">
                        Since 2016, our journey has been driven by a lifelong
                        passion for coding — not just as a craft, but as a tool
                        for solving complex challenges and unlocking
                        opportunity.
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

                  <div className="bg-[#F3F4F6] flex flex-col justify-end py-4 h-full px-10 md:px-8">
                    <div className="space-y-4">
                      <p className="text-[#4B5563] text-base md:text-xl lg:text-2xl leading-relaxed font-semibold">
                        We don’t just write software. We share expertise,
                        co-create value, and stay hands-on throughout the
                        process — because we believe technology should serve
                        your goals, not complicate them
                      </p>
                      <p className="text-[#4B5563] text-base md:text-xl lg:text-2xl leading-relaxed font-semibold">
                        Our culture is built for continuous learning,
                        resilience, and agility — so we can move fast when it
                        matters and stay aligned with what matters to you.
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
