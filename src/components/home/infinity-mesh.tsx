import HomeAnimation from "../general-components/home-animation";
import ScrollAnimation from "../general-components/scroll-animation";

export default function InFinityMesh() {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <main className=" bg-gradient-to-r from-[#014789] to-[#001930] text-white overflow-hidden pt-20 pb-10 md:pb-20 lg:pb-0  flex flex-col justify-center">
      {/* Main Content */}
      <div className="grid lg:grid-cols-2 w-[90%]  2xl:max-w-9xl mx-auto pt-5 md:pt-10 lg:pt-20 pb-0 xl:pt-20 xl:pb-10">
        <div className="self-center grid lg:grid-cols-12 xl:mt-20">
          <div className="hidden  lg:col-span-2 text-[#84CC16] mb-2 md:mb-4 lg:flex  gap-2 text-base xl:text-xl font-semibold">
            / 01
          </div>

          <div className="lg:col-span-10">
            <div className="text-[#84CC16] mb-2 md:mb-4 flex  gap-2 text-base xl:text-xl font-semibold">
              <span className="block lg:hidden">/ 01</span>
              <span className="">/</span>
              <span className="">Infinity Mesh</span>
            </div>

            <h1 className="mt-5 lg:mt-0 text-xl md:text-3xl xl:text-[44px] font-semibold font-inter leading-tight mb-6 md:w-[70%]">
              Think Bigger, Build Smarter and Scale Faster
            </h1>

            <p className="w-[70%] md:w-auto text-sm lg:text-xl xl:text-[22px] text-[#84CC16] max-w-md">
              We deliver full-scale digital development solutions that turn bold
              ideas into high-impact products.
            </p>

            <div className="hidden lg:block mt-40">
              <ScrollAnimation handleClick={handleClick} />
            </div>
          </div>
        </div>

        <div className="md:w-[80%] mx-auto lg:mr-0 lg:ml-auto mt-20 lg:mt-0">
          <HomeAnimation />
        </div>
      </div>
    </main>
  );
}
