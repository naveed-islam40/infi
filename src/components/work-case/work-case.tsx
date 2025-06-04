import { AnimatePresence, motion } from "framer-motion";
import WorkCaseMobile from "./work-case-mobile";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function WorkSection() {
  const caseStudies = [
    {
      id: "01",
      title: "Unilever",
      img: "/png/work_1.png",
    },
    {
      id: "02",
      title: "Valtech",
      img: "/png/mobile-blog.png",
    },
    {
      id: "03",
      title: "Live Tech Games",
      img: "/png/blog5.png",
    },
    {
      id: "04",
      title: "Title of the Case Study that can short or longer",
      img: "/png/blog8.png",
    },
    {
      id: "05",
      title: "Title of the Case Study that can short or longer",
      img: "/png/work_1.png",
    },
    {
      id: "06",
      title: "Title of the Case Study that can short or longer",
      img: "/png/tab_1.png",
    },
    {
      id: "07",
      title: "Title of the Case Study that can short or longer",
      img: "/png/blog6.png",
    },
    {
      id: "08",
      title: "Title of the Case Study that can short or longer",
      img: "/png/blog9.png",
    },
    {
      id: "09",
      title: "Title of the Case Study that can short or longer",
      img: "/png/work_1.png",
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
              <span>Work</span>
            </div>

            <div className="rounded-lg">
              <h1 className="md:w-[50%] text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#003262] leading-tight lg:leading-none xl:py-10">
                We turn ideas into reality, blending strategy with creativity 
              </h1>

              <p className="mt-5 md:mt-10 lg:mt-0 text-base md:text-lg lg:text-lg text-[#4B5563] font-normal md:w-[70%] lg:w-[40%] lg:ml-auto ">
                Each project is a unique story driven by passion, precision, and results. Discover how we help brands grow and stand out in the digital world.
              </p>
            </div>

            <div className="space-y-8 hidden md:block pt-20">
              {caseStudies.map((study) => (
                <div key={study.id} className="pb-6 group relative">
                  <div className="flex justify-between items-center group-hover:opacity-0">
                    <span className="text-[#003262] text-3xl font-mono">
                      {study.id}
                    </span>
                    <h3 className="text-3xl font-semibold text-[#003262] text-right flex-1 ml-8">
                      {study.title}
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
                            {study.id}
                          </motion.span>
                          <motion.img
                            src={study.img}
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
                        <Link to={`/work-case/${study.id}`} className="mb-10">
                          <motion.span
                            className="text-3xl font-semibold text-[#65A30D] flex items-center gap-2"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                          >
                            See the Case Study
                            <ChevronRight />
                          </motion.span>
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className="md:hidden mt-10">
              <WorkCaseMobile />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
