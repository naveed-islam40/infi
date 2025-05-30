import ServicesGrid from "./service-grid";
import { MobileServiceGrid } from "./mobile-service-grid";
import AnimateButton from "../general-components/animate-button";

const ServicesSection = () => {
  return (
    <div>
      <section className="h-full bg-white flex items-center my-10">
        <div className="w-full mx-auto px-8 lg:max-w-6xl 2xl:max-w-9xl relative">
          <div className="mb-8 flex items-center gap-2 text-sm">
            <span className="text-[#003262] xl:absolute -left-7">/03</span>
            <span className="text-[#003262] mx-2">/</span>
            <span className="text-[#003262]">Our Services</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-[#8BC500] hover:text-[#003262] transition-colors duration-500 leading-tight">
                From strategy to code, we deliver end-to-end software
                development that drives innovation, accelerates growth, and
                creates lasting value.
              </h2>
            </div>

            <AnimateButton
              parentclasName="relative inline-block w-max"
              buttonText="What We Do"
              icon="/svg/arrow-top-right.svg"
              cicleClassName="absolute left-20 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#8BC500] w-[60px] h-[60px] rounded-full z-0"
              linkClassName="inline-flex items-center gap-2 text-sm font-medium text-[#003262] transition-colors relative z-10 px-4 py-2"
              path="/what-we-do"
            />
          </div>
        </div>
      </section>
      <div className="hidden md:block">
        <ServicesGrid />
      </div>
      <div className="block md:hidden">
        <MobileServiceGrid />
      </div>
    </div>
  );
};

export default ServicesSection;
