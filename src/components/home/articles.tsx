import { Link } from "react-router-dom";
import MobileArticles from "./mobile-articles";

interface Article {
  id: string;
  number: string;
  title: string;
  slug: string;
}

const articles: Article[] = [
  {
    id: "1",
    number: "01",
    title:
      "How to Build an Enterprise Game Platform for Millions of Players (1/3)",
    slug: "build-enterprise-game-platform",
  },
  {
    id: "2",
    number: "02",
    title: "Get the most out of the framework you are using",
    slug: "maximize-framework-usage",
  },
  {
    id: "3",
    number: "03",
    title: "How to write good automated text?",
    slug: "write-good-automated-text",
  },
];

export default function ArticlesInsights() {
  return (
    <div className="w-full px-8  mx-auto lg:max-w-7xl 2xl:max-w-9xl relative my-10">
      <div className="flex text-sm text-[#003262] mb-6">
        <span className="xl:absolute -left-10">/ 04</span>
        <span className="mx-2">/</span>
        <span>Articles</span>
      </div>

      <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-[#65A30D] my-10">
        Welcome to our Insights where technology meets real-world problem
        solving.
      </h2>

      <p className="text-[#4B5563] mb-12 max-w-2xl">
        We share hands-on tips, industry trends, and lessons learned from
        building software that scales. Whether you're a developer, product
        thinker, or just tech-driven soul, you'll find our articles worth your
        time.
      </p>

      <div className="space-y-6 hidden md:block">
        {articles.map((article) => (
          <div key={article.id}>
            <div className="flex items-start py-4">
              <span className="text-[#003262] w-12">{article.number}</span>
              <Link
                to={`/articles/${article.slug}`}
                className="text-[#003262] hover:text-blue-900 font-medium"
              >
                {article.title}
              </Link>
            </div>
            <div className="h-[1px] bg-[#003262]"></div>
          </div>
        ))}
      </div>
      <div className="block md:hidden">
        <MobileArticles />
      </div>

      <div className="flex justify-start md:justify-end mt-8">
        <Link to="/articles" className="flex items-center text-[#003262]">
          Explore Articles
          <img src="/svg/Property 54.svg" alt="Arrow Right" className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
