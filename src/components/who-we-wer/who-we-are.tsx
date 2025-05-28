export default function WhoWeAre() {
  return (
    <div className="border-b border-gray-300">
      {/* Main Content */}
      <main className="w-full ml-auto 2xl:mx-auto lg:max-w-7xl-base 2xl:max-w-9xl relative">
        <div className="">
          {/* Mobile Section Header */}
          <div className="text-[#84CC16] mb-2 md:mb-4 flex items-center gap-2 pl-8">
            <span className="xl:absolute -left-12">/ 01</span>
            <span className="mx-2">/</span>
            <span className="text-sm">Who We Are</span>
          </div>

          {/* Main Heading */}
          <div className="mb-8 lg:mb-12 pl-8">
            <h1 className="text-2xl xl:text-3xl font-semibold text-[#003262] leading-tight lg:leading-none">
              Driven by Talent,
              <br />
              Powered by Passion
            </h1>
          </div>

          <div className="border-l border-[#65A30D] w-full ml-auto max-w-7xl-base pt-20 md:pt-0">
            {/* Content Layout */}
            <div className="relative mt-20">
              <div className="absolute right-0 -top-36 w-[300px] md:w-[400px]">
                <div className="md:border-l-4 border-[#65A30D] h-96 rounded lg:rounded-none">
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
                  <img
                    src="/png/01.png"
                    alt="Blue brick wall perspective"
                    className=" w-screen md:h-[500px] object-cover"
                  />
                  {/* Green logo overlay */}
                  <div className="absolute top-6 left-6 w-12 h-12 lg:w-16 lg:h-16">
                    <img src="/svg/Vector.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex justify-end">
              <div className="flex justify-end flex-col md:flex-row items-center w-full max-w-screen-xl">
                {/* Left Text Block */}
                <div className="flex flex-col justify-between gap-10 pt-10 px-8">
                  <div className="space-y-4">
                    <p className="text-[#4B5563] text-sm lg:text-base leading-relaxed font-semibold">
                      Since 2016, our journey has been driven by a lifelong
                      passion for coding — not just as a craft, but as a tool
                      for solving complex challenges and unlocking opportunity.
                    </p>
                    <p className="text-[#4B5563] text-sm lg:text-base leading-relaxed font-semibold">
                      We build smart, scalable digital products that help our
                      clients thrive in demanding business environments.
                    </p>
                    <p className="text-[#4B5563] text-sm lg:text-base leading-relaxed font-semibold">
                      We build smart, scalable digital products that help our
                      clients thrive in demanding business environments. Our
                      approach combines technical excellence with strategic
                      thinking, ensuring every project we undertake drives
                      meaningful results.
                    </p>
                  </div>
                  <div className="flex gap-36 justify-center">
                    <div className="bg-gray-200 h-[300px] w-[2px]"></div>
                    <div className="bg-gray-200 h-[300px] w-[2px]"></div>
                    <div className="bg-gray-200 h-[300px] w-[2px]"></div>
                  </div>
                </div>

                {/* Right Text Block */}
                <div className="bg-[#F3F4F6] flex flex-col justify-end py-4 h-full px-8">
                  <div className="space-y-4">
                    <p className="text-[#4B5563] text-sm lg:text-base leading-relaxed">
                      We don't just write software. We drive innovation,
                      accelerate digital transformation, and create solutions
                      that deliver real business value. Our commitment to
                      quality, innovation, and client satisfaction has made us a
                      trusted partner.
                    </p>
                    <p className="text-[#4B5563] text-sm lg:text-base leading-relaxed">
                      From startups to enterprise organizations, we partner with
                      forward-thinking companies to build the digital products
                      that power their success. Our team brings together diverse
                      expertise in modern technologies, user experience design,
                      and business strategy.
                    </p>
                    <p className="text-[#4B5563] text-sm lg:text-base leading-relaxed">
                      Every project is an opportunity to push boundaries,
                      explore new possibilities, and create something that makes
                      a difference. We believe in the power of technology to
                      transform businesses and improve lives.
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
