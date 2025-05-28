export default function InFinityMesh() {
  return (
    <main className=" bg-[#002454] text-white overflow-hidden">
      {/* Main Content */}
      <div className="w-full mx-auto px-8 lg:max-w-7xl 2xl:max-w-9xl flex flex-col md:flex-row items-center justify-between relative">
        <div className="z-10">
          <div className="text-[#84CC16] mb-2 md:mb-4 flex items-center gap-2">
            <span className="xl:absolute -left-10">/ 01</span>
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
            <p className="text-sm">Scroll</p>
          </div>
        </div>

        <div className="relative mt-12 md:mt-0">
          <div className="rounded-full relative overflow-hidden flex items-center justify-center">
            <img
              src="/png/desktop.png"
              alt="Infinity Mesh Icon"
              className="w-[600px] h-full z-10"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
