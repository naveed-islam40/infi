import { useNavigate } from "react-router-dom";

export default function MobileArticles() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/article-details/01");
  };
  return (
    <div className=" bg-white rounded-lg border overflow-hidden">
      {/* Header with number and icon */}
      <div className="flex justify-between items-center pb-2 border-b border-lime-500">
        <span className="text-2xl font-bold text-lime-500">01</span>
        <img
          src="/svg/arrow_brown.svg"
          alt=""
          className="w-14 h-14 cursor-pointer"
          onClick={handleNavigate}
        />
      </div>

      {/* Title */}
      <div className="pb-4">
        <h2 className="text-lg font-semibold text-[#003262] leading-tight pt-3">
          How to Build an Enterprise Game Platform for Millions of Players (1/3)
        </h2>
      </div>

      {/* Featured Image */}
      <div className=" pb-6">
        <div className="relative w-full rounded-lg overflow-hidden">
          <img
            src="/png/mobile-blog.png"
            alt="Isometric 3D gaming platform with neon blue and purple colors showing game controllers and gaming elements"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
