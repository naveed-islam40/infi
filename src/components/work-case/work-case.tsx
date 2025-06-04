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
    <main className="w-full py-12 pt-40">
      <div className="mx-auto w-full px-8 lg:max-w-6xl 2xl:max-w-7xl relative">
        <div className="mb-12">
          <div className="mb-12">
            <div className="text-[#65A30D] mb-2 md:mb-4 flex items-center gap-2 font-semibold text-base md:text-2xl">
              <span className="xl:absolute -left-32">/ 01</span>
              <span>/</span>
              <span>Work</span>
            </div>
            <div className=" pt-5 rounded-lg">
              <p className="text-[#003262] md:w-[45rem] text-xl md:text-6xl font-semibold">
                We turn ideas into reality, blending strategy with creativity
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <p className="text-[#4B5563] text-base md:text-xl leading-relaxed w-[25rem] ">
              Each project is a unique story driven by passion, precision, and
              results. Discover how we help brands grow and stand out in the
              digital world.
            </p>
          </div>
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
        <div className="md:hidden">
          <WorkCaseMobile />
        </div>
      </div>
    </main>
  );
}
