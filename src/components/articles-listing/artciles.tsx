import ContentTimeline from "./mobile-listing";

export default function Articles() {
  const articles = [
    {
      id: "01",
      title:
        "How to Build an Enterprise Game Platform for Millions of Players (1/3)",
    },
    {
      id: "02",
      title: "Get the most out of the framework you are using",
    },
    {
      id: "03",
      title: "How to write good automated test?",
    },
    {
      id: "04",
      title: "Get the most out of the framework you are using",
    },
    {
      id: "05",
      title: "How to write good automated test?",
    },
    {
      id: "06",
      title:
        "How to Build an Enterprise Game Platform for Millions of Players (1/3)",
    },
    {
      id: "07",
      title: "Title of the article that can short or longer",
    },
    {
      id: "08",
      title: "How to write good automated test?",
    },
    {
      id: "09",
      title: "Get the most out of the framework you are using",
    },
    {
      id: "10",
      title: "Title of the article that can short or longer",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-8 lg:max-w-7xl 2xl:max-w-9xl relative">
        <div className="mb-12">
          <div className="text-[#65A30D] mb-2 md:mb-4 flex items-center gap-2">
            <span className="xl:absolute -left-12">/ 01</span>
            <span className="mx-2">/</span>
            <span className="text-lg font-semibold"> Articles</span>
          </div>
          <div className="md:p-6 rounded-lg">
            <p className="text-[#003262] md:w-[32rem] text-lg md:text-4xl font-semibold">
              Welcome to our Insights where technology meets real-world problem
              solving
            </p>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <p className="text-[#4B5563] w-[25rem] text-base">
            We share hands-on tips, industry trends, and lessons learned from
            building software that scales. Whether you're a developer, product
            thinker, or just love clean code, you'll find our articles worth
            your time.
          </p>
        </div>

        {/* Articles List */}
        <div className="mt-16 hidden md:block">
          <div className="space-y-1 w-full">
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex  justify-between py-6 border-b border-[#003262] cursor-pointer"
              >
                <span className="text-[#003262] font-mono text-sm min-w-[2rem]">
                  {article.id}
                </span>
                <h3 className="text-[#003262] font-medium  transition-colors duration-200">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="md:hidden">
          <ContentTimeline />
        </div>
      </main>
    </div>
  );
}
