import HomeAnimation from "../general-components/home-animation";

export default function InFinityMesh() {
  return (
    <main className=" bg-[#002454] text-white overflow-hidden py-20">
      {/* Main Content */}
      <div className="w-full mx-auto px-8 lg:max-w-6xl 2xl:max-w-9xl flex flex-col md-base:flex-row items-center relative">
        <div className="z-10">
          <div className="text-[#84CC16] mb-2 md:mb-4 flex items-center gap-2">
            <span className="xl:absolute -left-7">/ 01</span>
            <span className="mx-2">/</span>
            <span className="text-sm">Infinity Mesh</span>
          </div>

          <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold font-inter leading-tight mb-6 md:w-[70%]">
            Think Bigger, Build Smarter and Scale Faster
          </h1>

          <p className="text-sm md:text-base text-[#84CC16] max-w-md">
            We deliver full-scale digital development solutions that turn bold
            ideas into high-impact products.
          </p>

          <div className="hidden md:block mt-32">
            <p className="text-sm hidden md-base:block">Scroll</p>
          </div>
        </div>

        <HomeAnimation />
      </div>
    </main>
  );
}
