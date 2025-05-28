import TestimonialCardMobile from "./testimonial-mobile";

export default function TestimonialSection() {
  return (
    <div className="bg-[#F3F4F6]">
      <div className="w-full mx-auto px-8 lg:max-w-7xl 2xl:max-w-9xl relative py-5 ">
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

        {/* Testimonial card */}
        <div className="bg-[#FFFFFF] rounded-lg p-8 md:p-12 relative border shadow-sm hidden md:block">
          {/* Large quotation mark */}
          <img src="/svg/Quote icon.svg" alt="" />

          {/* Testimonial text */}
          <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl ml-28">
            High quality, delivery exceeds. High value, great value for the
            money. Fast turnaround, working in multiple zones makes team around
            the clock. The team is a pleasure to work with.
          </blockquote>

          {/* Author */}
          <cite className="text-[#0060BA] font-medium not-italic ml-28">
            Unilever
          </cite>

          {/* Circular arrow icon */}
          <div className="absolute bottom-8 right-8">
            <div className="w-10 h-10 border-2 border-[#0060BA] rounded-full flex items-center justify-center cursor-pointer">
              <svg
                className="w-5 h-5 text-[#0060BA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <TestimonialCardMobile />
        </div>
      </div>
    </div>
  );
}
