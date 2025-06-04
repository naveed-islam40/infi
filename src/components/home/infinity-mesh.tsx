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
    <main className=" bg-gradient-to-r from-[#014789] to-[#001930] text-white overflow-hidden py-20 min-h-screen flex flex-col justify-center">
      {/* Main Content */}
      <div className="w-full mx-auto px-8 lg:max-w-6xl 2xl:max-w-7xl flex flex-col md-base:flex-row items-center relative">
        <div className="z-10">
          <div className="text-[#84CC16] mb-2 md:mb-4 flex items-center gap-2 text-base xl:text-xl font-semibold">
            <span className="1500:absolute -left-32 ">/ 01</span>
            <span className="">/</span>
            <span className="">Infinity Mesh</span>
          </div>

          <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold font-inter leading-tight mb-6 md:w-[70%]">
            Think Bigger, Build Smarter and Scale Faster
          </h1>

          <p className="text-sm md:text-xl text-[#84CC16] max-w-md">
            We deliver full-scale digital development solutions that turn bold
            ideas into high-impact products.
          </p>

          <div className="hidden md:block mt-40">
            <ScrollAnimation handleClick={handleClick} />
          </div>
        </div>

        <HomeAnimation />
      </div>
    </main>
  );
}
