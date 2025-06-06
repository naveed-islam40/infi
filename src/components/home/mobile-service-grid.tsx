import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const slides = [
  { number: "01", title: "Creating Digital Products", image: "/png/service_grid.png" },
  { number: "02", title: "Digital Services", image: "/png/blog5.png" },
  { number: "03", title: "Digital Asset", image: "/png/blog7.png" },
  { number: "04", title: "Digital Business", image: "/png/blog9.png" },
];

export function MobileServiceGrid() {
const sliderRef = useRef<InstanceType<typeof Slider> | null>(null);

  const handleNavigate = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full  bg-gray-50 p-6">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="max-w-lg mx-auto bg-gray-50">
            <div className="flex justify-between items-start mb-8">
             <p className="text-6xl font-bold text-[#84CC16]">{slide.number}</p>
              <img
                onClick={handleNavigate}
                src="/svg/arrow_brown.svg"
                alt="Next"
                className="cursor-pointer"
              />
            </div>
            <Link to={'/articles-list'} >
              <h1
              className="text-2xl font-semibold text-[#003262] mb-8 leading-tight"
              >{slide.title}</h1>
            </Link>
          <Link to={'/articles-list'} className="rounded-2xl overflow-hidden">
            
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-64 object-cover"
              />
</Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
