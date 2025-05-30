import { useNavigate } from "react-router-dom";
import AnimatedButton2 from "../general-components/animated-button2";
import CaseStudyMobile from "./case-study-footer";
import AnimateButton from "../general-components/animate-button";
import { Instagram } from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import TestimonialDesktop from "../what-we-do/testimonial-desktop";

export function CaseStudyPage() {
  const navigate = useNavigate();
  return (
    <main className="w-full">
      {/* Breadcrumb and Title */}
      <div className="md:px-6 py-8">
        <div className="max-w-3xl lg:max-w-6xl 2xl:max-w-9xl mx-auto  relative">
          <div className="text-[#65A30D] mb-2 md:mb-4 flex items-center gap-2 pl-5">
            <span className="xl:absolute -left-7">/ 02</span>
            <span className="mx-2">/</span>
            <span className="text-lg font-semibold">Case Study</span>
          </div>
        </div>
      </div>
      {/* Hero Image */}
      <div className="md:px-6 mb-12">
        <div className="max-w-3xl lg:max-w-6xl 2xl:max-w-9xl mx-auto ">
          <img
            src="/png/blog4.png"
            alt="Unilever building exterior"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      {/* Case Study Content */}
      <div className="px-6 mb-16">
        <div className="max-w-3xl lg:max-w-6xl 2xl:max-w-9xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Get to Know Unilever */}
              <section>
                <h2 className="text-2xl font-semibold text-[#0060BA] mb-6">
                  Get to Know Unilever
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Unilever is a British-Dutch transnational consumer goods
                  company co-headquartered in London, United Kingdom and
                  Rotterdam, Netherlands. Its products include food and
                  beverages, personal care products, cleaning agents and
                  personal care products. It is the world's largest consumer
                  goods company measured by revenue. Unilever is the largest
                  producer of soap in the world and one of the oldest
                  multinational companies. Its products are available in around
                  190 countries.
                </p>
              </section>
              {/* The Challenge */}
              <section>
                <h2 className="text-2xl font-semibold text-[#0060BA] mb-6">
                  The Challenge
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  With the diverse number of projects, Unilever was working on,
                  it was becoming increasingly difficult to manage them.
                  Consolidating available data and getting proper status updates
                  to clients was becoming a problem. We needed to develop a tool
                  to help them deal with these issues. Proposed solution was to
                  develop a custom project management tool that would help them
                  keep track of their projects. Unilever wanted to have a grasp
                  of all any time the second challenge was to coordinate and
                  personalize their internal business logic into the application
                  so were developing. One of the core requirements was to be
                  able to track the progress of their projects in real time and
                  get insights about their performance. The application needed
                  to be user-friendly and provide comprehensive reports and
                  metrics so an intuitive and unique solution to ensure key
                  information was understood by the stakeholders.
                </p>
              </section>
              {/* The Solution */}
              <section>
                <h2 className="text-2xl font-semibold text-[#0060BA] mb-6">
                  The Solution
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  While the client was still figuring out the nuances of their
                  large business data model, we were engaged to develop a
                  content project management tool on top of that model. We
                  performed live data synchronization with their existing
                  systems and databases to ensure that the data was always up to
                  date. The solution included a comprehensive dashboard that
                  provided real-time insights into project status, timeline, and
                  finished them to record time, only a couple of weeks after the
                  kickoff meeting.
                </p>
              </section>
              {/* The Results */}
              <section>
                <h2 className="text-2xl font-semibold text-[#0060BA] mb-6">
                  The Results
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Even though we delivered the project within the given
                  timeframe, the client was very satisfied with the final
                  result. By providing various information on one page in a
                  smart manner and introducing the use of different forms for
                  data input, we minimized the amount of clicking user needs to
                  get to where they want to be.
                </p>
              </section>
            </div>
            {/* Sidebar */}
            <div className="lg:col-span-1 border-t border-gray-200 pt-5 hidden md:block">
              <div className="sticky top-10">
                <div className="bg-[#F9FAFB]  p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-[#003262] mb-4">
                    Infinity Mesh Newsletter
                  </h3>
                  <p className="text-[#374151] text-sm mb-4">
                    Stay in touch with the latest news, articles, and resources.
                  </p>
                  <input
                    type="email"
                    placeholder="Type your email address"
                    className="w-full bg-white border text-[#003262] border-gray-200 rounded-md py-2 px-4 mb-4 outline-0"
                  />
                  {/* <button className="flex items-center gap-2 text-lg text-[#003262]">
                    Subscribe
                    <img src="/svg/arrow-top-right.svg" alt="" />
                  </button> */}
                  <AnimateButton
                    buttonText="Subscribe"
                    icon="/svg/arrow-top-right.svg"
                    path="#"
                    parentclasName="inline-flex relative"
                    cicleClassName="absolute left-[35%] top-[60%] -translate-x-1/2 -translate-y-1/2 bg-[#8BC500] w-[60px] h-[60px] rounded-full z-0"
                    linkClassName="inline-flex items-center gap-2 text-sm font-medium text-[#003262] transition-colors relative z-10 px-4 py-2"
                  />
                </div>
                <div className="mt-8 flex flex-col justify-center items-center border-y border-gray-200 py-8">
                  <p className="text-gray-600 text-lg mb-4">
                    Share the Case Study
                  </p>
                  <div className="flex justify-center gap-3">
                    <Instagram className="w-6 h-6 text-[#003262] hover:text-[#84CC16] transition duration-300" />

                    {/* Facebook */}
                    <FaFacebook className="w-6 h-6 text-[#003262] hover:text-[#84CC16] transition duration-300" />

                    {/* LinkedIn */}
                    <FaLinkedin className="w-6 h-6 text-[#003262] hover:text-[#84CC16] transition duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="px-6 mb-16 hidden md:block">
        <div className="max-w-3xl lg:max-w-6xl 2xl:max-w-9xl mx-auto ">
          <div className="flex justify-between items-center">
            <AnimatedButton2
              buttonText="All Case Study"
              orderIcon="order-1"
              orderText="order-2"
              handleClick={() => navigate("/our-work")}
            />

            <AnimatedButton2
              buttonText="Next Case Study"
              orderIcon="order-2"
              orderText="order-1"
              handleClick={() => navigate("/work-case/02")}
            />
          </div>
        </div>
      </div>
      {/* Testimonial Section */}
      <div className="bg-gray-100 py-16 px-6 hidden md:block">
        <div className="max-w-3xl lg:max-w-7xl 2xl:max-w-9xl mx-auto relative">
          <div className="text-[#003262] mb-2 md:mb-4 flex items-center gap-2">
            <span className="xl:absolute -left-7">/ 02</span>
            <span className="mx-2">/</span>
            <span className="text-lg font-semibold">What Our Clients Say</span>
          </div>

          <TestimonialDesktop />
        </div>
      </div>
      <div className="md:hidden">
        <CaseStudyMobile />
      </div>
    </main>
  );
}
