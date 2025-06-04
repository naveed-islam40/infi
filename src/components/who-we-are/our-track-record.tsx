import StatsComponentMobile from "./our-track-records-mobile";
import StatsComponent from "./OurTrackRecord2";

const OurTrackRecord = () => {
  return (
    <div className="bg-white py-10 md:py-28">
      <div className="w-full mx-auto px-8 sm:px-6 lg:px-8 lg:max-w-6xl 2xl:max-w-7xl relative">
        <div className="mb-12 space-y-8">
          {/* Section Title */}
          <div className="text-[#003262] flex items-center gap-2 text-base font-semibold md:text-2xl">
            <span className="1500:absolute -left-32">/ 02</span>
            <span>/</span>
            <span>Our Track Record</span>
          </div>

          {/* Description */}
          <div className="flex justify-end">
            <p className="text-[#4B5563] text-sm md:text-lg w-full lg:w-[35rem] leading-relaxed">
              We’ve earned the trust of global brands by delivering digital
              solutions that perform and scale. Our track record shows our
              quality work and strong partnerships. This means you get a team
              with proven experience, deep technical insight, and a focus on
              helping your business grow — with fewer risks, faster results, and
              long-term value.
            </p>
          </div>

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
  );
};

export default OurTrackRecord;
