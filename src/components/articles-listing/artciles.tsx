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
    <main className="w-full pt-24 lg:pt-32 xl:pt-40 pb-10 md:pb-20">
      <div className="w-[90%] 2xl:max-w-9xl mx-auto">
        <div className=" self-center grid lg:grid-cols-12">
          <div className=" hidden lg:col-span-1 text-[#65A30D] mb-2 md:mb-4 lg:flex  gap-2 text-base xl:text-xl font-semibold">
            / 01
          </div>
          <div className="lg:col-span-11">
            <div className="text-[#65A30D] mb-2 md:mb-4 flex items-center gap-2 font-semibold text-xl md:text-2xl">
              <span className="block lg:hidden">/ 01</span>

              <span>/</span>
              <span>Articles</span>
            </div>

            <div className="rounded-lg">
              <h1 className="md:w-[60%] text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#003262] leading-tight lg:leading-none xl:py-10">
                Welcome to our Insights where technology meets real-world
                problem solving
              </h1>

              <p className="mt-5 md:mt-10 lg:mt-0 text-base md:text-lg lg:text-lg text-[#4B5563] font-normal md:w-[70%] lg:w-[40%] lg:ml-auto ">
                We share hands-on tips, industry trends, and lessons learned
                from building software that scales. Whether you're a developer,
                product thinker, or just love clean code, you'll find our
                articles worth your time.
              </p>
            </div>

        {/* Articles List */}
        <div className="mt-16 hidden md:block">
          <div className="space-y-2 w-full">
            {articles.map((article) => (
              <div key={article.id} className="pb-6 group relative">
                <div className="flex justify-between items-center group-hover:opacity-0">
                  <span className="text-[#003262] text-2xl font-semibold font-mono">
                    {article.id}
                  </span>
                  <h3 className="text-3xl font-semibold text-[#003262] text-right flex-1 ml-8">
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
                          className="text-2xl font-bold text-[#65A30D] mb-10"
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
                        to={`/article-details/${article.id}?title=${article.title}`}
                        className="mb-10"
                      >
                        <motion.span
                          className="text-3xl font-semibold text-[#65A30D] flex items-center gap-2"
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

            </div>
            </div>
            </div>


      </main>
  );
}
