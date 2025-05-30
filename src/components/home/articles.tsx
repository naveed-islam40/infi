import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateButton from "../general-components/animate-button";
import MobileArticles from "./mobile-articles";

interface Article {
  id: string;
  number: string;
  title: string;
  slug: string;
  imageSrc: string;
}

const articles: Article[] = [
  {
    id: "1",
    number: "01",
    title:
      "How to Build an Enterprise Game Platform for Millions of Players (1/3)",
    slug: "build-enterprise-game-platform",
    imageSrc: "/png/mobile-blog.png",
  },
  {
    id: "2",
    number: "02",
    title: "Get the most out of the framework you are using",
    slug: "maximize-framework-usage",
    imageSrc: "/png/mobile-blog.png",
  },
  {
    id: "3",
    number: "03",
    title: "How to write good automated text?",
    slug: "write-good-automated-text",
    imageSrc: "/png/mobile-blog.png",
  },
];

export default function ArticlesInsights() {
  return (
    <div className="w-full px-8  mx-auto lg:max-w-6xl 2xl:max-w-9xl relative my-10">
      <div className="flex text-sm text-[#003262] mb-6">
        <span className="xl:absolute -left-7">/ 04</span>
        <span className="mx-2">/</span>
        <span>Articles</span>
      </div>

      <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-[#65A30D] my-10 hover:text-[#003262] transition-colors duration-500 max-w-2xl">
        Welcome to our Insights where technology meets real-world problem
        solving.
      </h2>

      <p className="text-[#4B5563] mb-12 max-w-2xl ">
        We share hands-on tips, industry trends, and lessons learned from
        building software that scales. Whether you're a developer, product
        thinker, or just tech-driven soul, you'll find our articles worth your
        time.
      </p>

      <div className="space-y-6 hidden md:block">
        {articles.map((article) => (
          <div key={article.id} className="pb-6 group relative">
            <div className="flex items-start justify-between py-4 group-hover:opacity-0">
              <span className="text-[#003262] w-12">{article.number}</span>
              <Link
                to={`/articles/${article.slug}`}
                className="text-[#003262] hover:text-blue-900 font-medium"
              >
                {article.title}
              </Link>
            </div>
            <div className="h-[1px] bg-[#003262] group-hover:bg-[#65A30D]"></div>

            {/* Hide By default  */}
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0, y: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 -top-10"
              >
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-20">
                    <motion.span
                      className="text-xl font-bold text-[#65A30D] mb-10"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {article.number}
                    </motion.span>
                    <motion.img
                      src={article.imageSrc}
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
                    to={`/article-details/${article.slug}`}
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
      <div className="block md:hidden">
        <MobileArticles />
      </div>

      <div className="flex justify-start md:justify-end mt-8">
        <AnimateButton
          buttonText="Explore Articles"
          path="/articles-list"
          icon="/svg/Property 54.svg"
          parentclasName="relative inline-block"
          cicleClassName="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#8BC500] w-[60px] h-[60px] rounded-full z-0"
          linkClassName="flex items-center text-[#003262] relative z-10"
        />
      </div>
    </div>
  );
}
