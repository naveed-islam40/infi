import { Link } from "react-router-dom";
import ServicesGrid from "./service-grid";
import { MobileServiceGrid } from "./mobile-service-grid";

const ServicesSection = () => {
  return (
    <div>
      <section className="h-full bg-white flex items-center my-10">
        <div className="w-full mx-auto px-8 lg:max-w-7xl 2xl:max-w-9xl relative">
          <div className="mb-8 flex items-center gap-2 text-sm">
            <span className="text-[#003262] xl:absolute -left-7">/03</span>
            <span className="text-[#003262] mx-2">/</span>
            <span className="text-[#003262]">Our Services</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-[#8BC500] leading-tight">
                From strategy to code, we deliver end-to-end software
                development that drives innovation, accelerates growth, and
                creates lasting value.
              </h2>
            </div>

            <div className="flex-shrink-0 mt-4 md:mt-0">
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#003262] hover:text-[#8BC500] transition-colors"
              >
                What We Do
                <img src="/svg/arrow-top-right.svg" alt="" />
              </Link>
            </div>
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
