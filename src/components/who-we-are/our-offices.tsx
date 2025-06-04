const OurOffices = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="w-[90%] 2xl:max-w-9xl mx-auto py-10 md:py-20">
        <div className=" self-center grid lg:grid-cols-12">
          <div className=" hidden lg:col-span-1 text-[#003262] mb-2 md:mb-4 lg:flex  gap-2 text-base xl:text-xl font-semibold">
            / 03
          </div>
          <div className="lg:col-span-11">
            <div className="text-[#003262] mb-2 md:mb-4 flex items-center gap-2 font-semibold text-xl md:text-2xl">
              <span className="block lg:hidden">/ 03</span>

              <span>/</span>
              <span>Our Offices</span>
            </div>

            <div className="rounded-lg">
              <p className="text-[#65A30D] w-full md:w-[30rem] font-semibold text-base md:text-2xl">
                We operate globally, with consulting offices in Milton Keynes,
                UK, and Cambridge, USA, and a high-performance development
                center in Sarajevo, Bosnia and Herzegovina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffices;
