export default function Footer() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/png/footer.png"
          alt="Laptop with colorful keyboard"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-blue-900/50"></div> */}
      </div>

      {/* Content overlay */}
      <div className="relative px-8 z-10 h-full flex flex-col justify-end text-white lg:max-w-7xl 2xl:max-w-9xl mx-auto">
        <div>
          <p className="text-lg md:text-xl opacity-90 mb-2">Have an idea?</p>
          <div className="flex justify-between lg:hidden items-center border-b border-[#84CC16] mb-10">
            <span className="flex items-center gap-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#84CC16]">
                Let's Talk
              </h2>
              <img src="/svg/arrow_brown.svg" alt="" className="w-14 mb-4" />
            </span>
            <img src="/svg/chevron-double-up.svg" alt="" className="w-6" />
          </div>

          <h2 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl font-bold mb-8 border-b border-[#84CC16] pb-10">
            Let's Talk
          </h2>

          <div className="justify-between items-start hidden lg:flex">
            <div className="gap-5 text-[#9CA3AF] flex">
              <div>
                <h3 className="font-semibold uppercase tracking-wider mb-2">
                  Bosnia and Herzegovina
                </h3>
                <p>+387 62 363 320</p>
                <p className="w-[15rem]">
                  Robot 7A, Zmaj od Bosne b.b. 71000 Sarajevo
                </p>
              </div>
              <div>
                <h3 className="font-semibold uppercase tracking-wider mb-2">
                  United States
                </h3>
                <p>+1 347 851 7152</p>
                <p className="w-[15rem]">
                  175 SW 7th St Suite 1517, Miami, FL 33130, USA
                </p>
              </div>
              <div>
                <h3 className="font-semibold uppercase tracking-wider mb-2">
                  United States
                </h3>
                <p>+1 347 851 7152</p>
                <p className="w-[15rem]">
                  175 SW 7th St Suite 1517, Miami, FL 33130, USA
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <button className="px-3 py-3 text-white font-medium rounded-md transition-colors">
                Back to Top
              </button>
              <img src="/svg/chevron-double-up.svg" alt="" className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
