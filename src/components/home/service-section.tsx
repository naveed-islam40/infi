import ServicesGrid from "./service-grid";
import { MobileServiceGrid } from "./mobile-service-grid";
import AnimateButton from "../general-components/animate-button";

const ServicesSection = () => {
  return (
    <div>
      <section className="h-full bg-white  mt-10 mb-20 lg:my-28">
        <div className="grid lg:grid-cols-12  w-[90%] mx-auto 2xl:max-w-9xl">
          <div className="lg:col-span-10 xl:col-span-8 self-center grid lg:grid-cols-12">
            <div className="hidden lg:col-span-2 text-base xl:text-xl font-semibold text-[#003262] mb-2 md:mb-4 lg:flex  gap-2 ">
              / 03
            </div>

            <div className="lg:col-span-10 lg:-ml-8">
              <div className="mb-2 md:mb-4 flex  gap-2 items-center text-base xl:text-xl font-semibold">
                <span className="block lg:hidden text-[#003262]">/ 03</span>
                <span className="text-[#003262]">/</span>
                <span className="text-[#003262]">Our Services</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div className="lg:max-w-xl ">
                  <h2 className="mt-5 text-xl md:text-2xl lg:text-4xl font-medium text-[#65A30D] md:text-[#003262] hover:text-[#8BC500] transition-colors duration-500 leading-tight">
                    From strategy to code, we deliver end-to-end software
                    development that drives innovation, accelerates growth, and
                    creates lasting value.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-span-4 lg:self-end lg:ml-auto mt-10 lg:mt-0">
            <AnimateButton
              parentclasName="relative inline-block w-max "
              buttonText="What We Do"
              icon="/svg/arrow-top-right.svg"
              cicleClassName="absolute left-20 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#8BC500] w-[60px] h-[60px] rounded-full z-0"
              linkClassName="inline-flex items-center gap-2 text-sm font-medium text-[#003262] transition-colors relative z-10 md:px-4 py-2"
              path="/what-we-do"
            />
          </div>
        </div>
      </section>
      <div className="hidden md:block w-full lg:max-w-6xl xl:max-w-8xl 2xl:max-w-9xl mx-auto">
        <ServicesGrid />
      </div>
      <div className="block md:hidden">
        <MobileServiceGrid />
      </div>
    </div>
  );
};

export default ServicesSection;
