import { ChevronRight } from "lucide-react";
import ContentTimeline from "./mobile-listing";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Articles() {
  const articles = [
    {
      id: "01",
      title:
        "How to Build an Enterprise Game Platform for Millions of Players (1/3)",
      img: "/png/work_1.png", // Matches caseStudies[0].img
    },
    {
      id: "02",
      title: "Get the most out of the framework you are using",
      img: "/png/mobile-blog.png", // Matches caseStudies[1].img
    },
    {
      id: "03",
      title: "How to write good automated test?",
      img: "/png/blog5.png", // Matches caseStudies[2].img
    },
    {
      id: "04",
      title: "Get the most out of the framework you are using",
      img: "/png/blog8.png", // Matches caseStudies[3].img
    },
    {
      id: "05",
      title: "How to write good automated test?",
      img: "/png/work_1.png", // Matches caseStudies[4].img
    },
    {
      id: "06",
      title:
        "How to Build an Enterprise Game Platform for Millions of Players (1/3)",
      img: "/png/tab_1.png", // Matches caseStudies[5].img
    },
    {
      id: "07",
      title: "Title of the article that can short or longer",
      img: "/png/blog6.png", // Matches caseStudies[6].img
    },
    {
      id: "08",
      title: "How to write good automated test?",
      img: "/png/blog9.png", // Matches caseStudies[7].img
    },
    {
      id: "09",
      title: "Get the most out of the framework you are using",
      img: "/png/work_1.png", // Matches caseStudies[8].img
    },
    {
      id: "10",
      title: "Title of the article that can short or longer",
      img: "/png/mobile-blog.png", // Repeats from caseStudies[1].img
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Main Content */}
      <main className="w-full mx-auto px-8 lg:max-w-6xl 2xl:max-w-9xl relative">
        <div className="mb-12">
          <div className="text-[#65A30D] mb-2 md:mb-4 flex items-center gap-2">
            <span className="xl:absolute -left-7">/ 01</span>
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
              <div key={article.id} className="pb-6 group relative">
                <div className="flex justify-between items-center group-hover:opacity-0">
                  <span className="text-[#003262] text-lg font-mono">
                    {article.id}
                  </span>
                  <h3 className="text-xl font-semibold text-[#003262] text-right flex-1 ml-8">
                    {article.title}
                  </h3>
                </div>
                <div className="h-[1px] bg-[#003262] group-hover:bg-[#65A30D] mt-10 mb-5"></div>

                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0, y: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 -top-10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-20">
                        <motion.span
                          className="text-xl font-bold text-[#65A30D] mb-10"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          {article.id}
                        </motion.span>
                        <motion.img
                          src={article.img}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                          className="w-[300px] max-w-full origin-center"
                        />
                      </div>
                      <Link
                        to={`/article-details/${article.id}`}
                        className="mb-10"
                      >
                        <motion.span
                          className="text-xl font-semibold text-[#65A30D] flex items-center gap-2"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          Read the article
                          <ChevronRight />
                        </motion.span>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
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
