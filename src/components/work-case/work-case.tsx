import WorkCaseMobile from "./work-case-mobile";

export function WorkSection() {
  const caseStudies = [
    {
      id: "01",
      title: "Unilever",
    },
    {
      id: "02",
      title: "Valtech",
    },
    {
      id: "03",
      title: "Live Tech Games",
    },
    {
      id: "04",
      title: "Title of the Case Study that can short or longer",
    },
    {
      id: "05",
      title: "Title of the Case Study that can short or longer",
    },
    {
      id: "06",
      title: "Title of the Case Study that can short or longer",
    },
    {
      id: "07",
      title: "Title of the Case Study that can short or longer",
    },
    {
      id: "08",
      title: "Title of the Case Study that can short or longer",
    },
    {
      id: "09",
      title: "Title of the Case Study that can short or longer",
    },
  ];
  return (
    <main className="w-full px-6 py-12">
      <div className="mx-auto max-w-3xl px-8 lg:max-w-7xl 2xl:max-w-9xl relativemax-w-7xl">
        <div className="mb-12">
          <div className="mb-12">
            <div className="text-[#65A30D] mb-2 md:mb-4 flex items-center gap-2">
              <span className="xl:absolute -left-7">/ 01</span>
              <span className="mx-2">/</span>
              <span className="text-lg font-semibold">Work</span>
            </div>
            <div className=" pt-5 rounded-lg">
              <p className="text-[#003262] md:w-[32rem] text-xl md:text-4xl font-semibold">
                We turn ideas into reality, blending strategy with creativity
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <p className="text-[#4B5563] text-sm leading-relaxed w-[25rem]">
              Each project is a unique story driven by passion, precision, and
              results. Discover how we help brands grow and stand out in the
              digital world.
            </p>
          </div>
        </div>
        <div className="space-y-8 hidden md:block">
          {caseStudies.map((study) => (
            <div key={study.id} className="border-b border-[#003262] pb-6">
              <div className="flex justify-between items-center">
                <span className="text-[#003262] text-sm font-mono">
                  {study.id}
                </span>
                <h3 className="text-lg text-[#003262] text-right flex-1 ml-8">
                  {study.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <WorkCaseMobile />
        </div>
      </div>
    </main>
  );
}
