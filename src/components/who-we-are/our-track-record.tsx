import StatsComponentMobile from "./our-track-records-mobile";
import StatsComponent from "./OurTrackRecord2";

const OurTrackRecord = () => {
  return (
    <div className="bg-white py-10 md:py-20">
      <div className="w-[90%] 2xl:max-w-9xl mx-auto">
        <div className=" self-center grid lg:grid-cols-12">
          <div className=" hidden lg:col-span-1 text-[#003262] mb-2 md:mb-4 lg:flex  gap-2 text-base xl:text-xl font-semibold">
            / 04
          </div>

          <div className="lg:col-span-11">
            <div className="text-[#003262] mb-2 md:mb-4 flex items-center gap-2 font-semibold text-xl md:text-2xl">
              <span className="block lg:hidden">/ 04</span>

              <span>/</span>
              <span>Our Track Record</span>
            </div>

            <div className="flex justify-end">
              <p className="text-[#4B5563] text-sm md:text-lg w-full lg:w-[35rem] leading-relaxed">
                We’ve earned the trust of global brands by delivering digital
                solutions that perform and scale. Our track record shows our
                quality work and strong partnerships. This means you get a team
                with proven experience, deep technical insight, and a focus on
                helping your business grow — with fewer risks, faster results,
                and long-term value.
              </p>
            </div>

        <div className="mb-12 space-y-8">
          {/* Stats Component (Desktop & Mobile) */}
          <div className="hidden md:block">
            <StatsComponent />
          </div>
          <div className="block md:hidden">
            <StatsComponentMobile />
          </div>
        </div>

          </div>
        </div>


      </div>
    </div>
  );
};

export default OurTrackRecord;
