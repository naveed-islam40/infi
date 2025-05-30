import TestimonialDesktop from "./testimonial-desktop";
import TestimonialCardMobile from "./testimonial-mobile";

export default function TestimonialSection() {
  return (
    <div className="bg-[#F3F4F6]">
      <div className="w-full mx-auto px-8 lg:max-w-6xl 2xl:max-w-9xl relative py-5 ">
        <div className="mb-12">
          <div className="text-[#003262] mb-2 md:mb-4 flex items-center gap-2">
            <span className="xl:absolute -left-7">/ 03</span>
            <span className="mx-2">/</span>
            <span className="text-lg font-semibold">What Our Clients Say</span>
          </div>
          <div className="md:p-6 rounded-lg">
            <p className="text-[#65A30D] md:w-[30rem] text-sm md:text-lg">
              We believe the best measure of our success is the success of our
              clients. Hear directly from the businesses we've helped - their
              experiences, results, and why they continue to trust us as their
              digital partner.
            </p>
          </div>
        </div>

        <TestimonialDesktop />
        <div className="md:hidden">
          <TestimonialCardMobile />
        </div>
      </div>
    </div>
  );
}
