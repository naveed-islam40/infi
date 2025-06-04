import TestimonialDesktop from "./testimonial-desktop";
import TestimonialCardMobile from "./testimonial-mobile";

export default function TestimonialSection() {
  return (
    <div className="bg-[#F3F4F6] py-10 md:py-20">
      <div className="w-[90%] 2xl:max-w-9xl mx-auto">
        <div className=" self-center grid lg:grid-cols-12">
          <div className=" hidden lg:col-span-1 text-[#003262] mb-2 md:mb-4 lg:flex  gap-2 text-base xl:text-xl font-semibold">
            / 03
          </div>
          <div className="lg:col-span-11">
            <div className="text-[#003262] mb-2 md:mb-4 flex items-center gap-2 font-semibold text-xl md:text-2xl">
              <span className="block lg:hidden">/ 03</span>

              <span>/</span>
              <span>What Our Clients Say</span>
            </div>

            <div className="md:py-6 rounded-lg">
              <p className="text-[#65A30D] md:w-[40rem] text-base md:text-3xl">
                We believe the best measure of our success is the success of our
                clients. Hear directly from the businesses we've helped - their
                experiences, results, and why they continue to trust us as their
                digital partner.
              </p>
            </div>
            <TestimonialDesktop />
            <div className="md:hidden">
              <TestimonialCardMobile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
