import CaseStudyMobile from "./case-study-footer";

export function CaseStudyPage() {
  return (
    <main className="w-full">
      {/* Breadcrumb and Title */}
      <div className="md:px-6 py-8">
        <div className="max-w-3xl lg:max-w-7xl 2xl:max-w-9xl mx-auto  relative">
          <div className="text-[#65A30D] mb-2 md:mb-4 flex items-center gap-2 pl-5">
            <span className="xl:absolute -left-7">/ 02</span>
            <span className="mx-2">/</span>
            <span className="text-lg font-semibold">Case Study</span>
          </div>
        </div>
      </div>
      {/* Hero Image */}
      <div className="md:px-6 mb-12">
        <div className="max-w-3xl lg:max-w-7xl 2xl:max-w-9xl mx-auto ">
          <img
            src="/png/blog4.png"
            alt="Unilever building exterior"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      {/* Case Study Content */}
      <div className="px-6 mb-16">
        <div className="max-w-3xl lg:max-w-7xl 2xl:max-w-9xl mx-auto">
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
              <div>
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
                  <button className="flex items-center gap-2 text-lg text-[#003262]">
                    Subscribe
                    <img src="/svg/arrow-top-right.svg" alt="" />
                  </button>
                </div>
                <div className="mt-8 flex flex-col justify-center items-center border-y border-gray-200 py-8">
                  <p className="text-gray-600 text-lg mb-4">
                    Share the Case Study
                  </p>
                  <div className="flex justify-center gap-3">
                    <img src="/svg/Instagram.svg" alt="" />
                    <img src="/svg/IFacebook.svg" alt="" />
                    <img src="/svg/ILinkedIn.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="px-6 mb-16 hidden md:block">
        <div className="max-w-3xl lg:max-w-7xl 2xl:max-w-9xl mx-auto ">
          <div className="flex justify-between items-center">
            <button className="flex items-center text-lg md:text-3xl font-bold pb-2 gap-2 text-[#0060BA] border-b border-[#84CC16]">
              All Case Study
            </button>
            <button className="flex items-center text-lg md:text-3xl font-bold gap-2 text-[#0060BA] border-b border-[#84CC16] pb-2">
              Next Case Study
            </button>
          </div>
        </div>
      </div>
      {/* Testimonial Section */}
      <div className="bg-gray-100 py-16 px-6 hidden md:block">
        <div className="max-w-3xl lg:max-w-7xl 2xl:max-w-9xl mx-auto ">
          <div className="text-[#003262] mb-2 md:mb-4 flex items-center gap-2">
            <span className="xl:absolute -left-7">/ 02</span>
            <span className="mx-2">/</span>
            <span className="text-lg font-semibold">What Our Clients Say</span>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm relative">
            <img src="/svg/Quote icon.svg" alt="" className="w-16 h-16" />
            <blockquote className="text-sm md:text-lg text-[#4B5563] mb-6 leading-relaxed md:ml-20 md:w-[40rem]">
              High quality, delivery exceeds. High value, great value for the
              money. Fast turnaround, working in multiple zones makes turn
              around time faster.{" "}
              <span className="font-semibold">
                The team is a pleasure to work with.
              </span>
            </blockquote>
            <div className="flex justify-between items-center">
              <p className="text-blue-600 font-medium ml-20">Unilever</p>
              <button className="w-14 h-14  rounded-full flex items-center justify-center text-white cursor-pointer">
                <img src="/svg/Arrow_left.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <CaseStudyMobile />
      </div>
    </main>
  );
}
