import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

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
    imageSrc: "/png/blog5.png",
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
    imageSrc: "/png/blog6.png",
  },
];

export default function MobileArticles() {
  const sliderRef = useRef<Slider>(null);
  const navigate = useNavigate();

  const handleNavigate = (slug: string) => {
    navigate(`/article-details/${slug}`);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // we'll use custom arrows
  };
  return (
    <div className="bg-white rounded-lg border overflow-hidden ">
      <Slider ref={sliderRef} {...settings}>
        {articles.map(({ id, number, title, slug, imageSrc }) => (
          <div key={id} className="">
            {/* Header with number and arrow */}
            <div className="flex justify-between items-center pb-2 border-b border-lime-500">
              <span className="text-2xl font-bold text-lime-500">{number}</span>
              <img
                onClick={() => sliderRef.current?.slickNext()}
                src="/svg/arrow_brown.svg"
                alt="Navigate"
                className="w-14 h-14 cursor-pointer"
              />
            </div>

            {/* Title */}
            <div className="pb-4">
              <h2
                onClick={() => handleNavigate(slug)}
                className="text-base font-semibold text-[#003262] leading-tight pt-3"
              >
                {title}
              </h2>
            </div>

            {/* Featured Image */}
            <div className="pb-6">
              <div className="relative w-full rounded-lg overflow-hidden">
                <img
                  onClick={() => handleNavigate(slug)}
                  src={imageSrc}
                  alt={title}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
