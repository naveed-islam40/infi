export default function EndToEndProductDetails() {
  return (
    <section className="bg-white">
      <div className="w-full mx-auto px-8 lg:max-w-7xl 2xl:max-w-9xl relative my-5">
        {/* Header with breadcrumb and icon */}
        <div className="flex justify-between items-center mb-16  border-b border-[#84CC16] pb-5">
          <div className="text-sm flex flex-col ">
            <div>
              <span className="text-[#84CC16] font-medium">01</span>
              <span className="text-[#84CC16] mx-2">/</span>
              <span className="text-[#84CC16]">04</span>
            </div>
            <span className="text-[#003262] md:ml-6 font-bold">
              End-to-End Digital Products
            </span>
          </div>
          <div className="w-14 h-14 rounded-full flex items-center justify-center">
            <img src="/svg/arrow_brown.svg" alt="" className="cursor-pointer" />
          </div>
        </div>

        {/* Main heading */}
        <div className="md:text-end mb-20">
          <h2 className="hidden md:block text-5xl md:text-6xl font-bold text-[#0060BA] leading-tight">
            From Concept to
            <br />
            Digital Solution
          </h2>
          <h2 className="md:hidden text-xl font-bold text-[#0060BA] leading-tight">
            From Concept to Digital Solution
          </h2>
        </div>

        {/* Content grid */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left side - Code editor mockup */}
          <img
            src="/png/code.png"
            alt=""
            className="md:w-1/2 order-2 md:order-1"
          />

          {/* Right side - Text content */}
          <div className="order-1 md:order-2">
            <p className="text-gray-600 text-sm md:text-lg  leading-relaxed">
              We help turn your ideas into working digital solutions, starting
              with expert IT consulting and rapid prototyping to quickly
              validate concepts. From there, we design tailored solutions and
              build PoCs or MVPs to get you to market faster. Our experienced
              team then develops robust, high-quality software, handles smooth
              deployment, and stays with you post-launch to ensure everything
              runs seamlessly. Every step is designed to bring real value to
              your business, quickly and efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
