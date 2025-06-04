const OurServies = () => {
  return (
    <div className="py-10 md:py-20 lg:py-32 xl:py-40 h-full">
      <div className="w-[90%] 2xl:max-w-9xl mx-auto">
        <div className=" self-center grid lg:grid-cols-12">
          <div className=" hidden lg:col-span-1 text-[#003262] mb-2 md:mb-4 lg:flex  gap-2 text-base xl:text-xl font-semibold">
            / 02
          </div>
          <div className="lg:col-span-11">
            <div className="text-[#003262] mb-2 md:mb-4 flex items-center gap-2 font-semibold text-xl md:text-2xl">
              <span className="block lg:hidden">/ 02</span>

              <span>/</span>
              <span>Our Services</span>
            </div>

            <div className="rounded-lg pt-10">
              <p className="hover:text-[#003262] text-[#65A30D] transition-colors duration-500 md:w-[35rem] font-semibold text-base md:text-2xl">
                By combining strategic thinking with hands-on execution, we help
                you move faster, reduce risk, and create digital solutions that
                support long-term growth. We don’t just build products — we
                build momentum.
              </p>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default OurServies;
