import { useNavigate } from "react-router-dom";

export function MobileServiceGrid() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/our-work");
  };
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-lg mx-auto bg-gray-50">
        {/* Header with number and arrow */}
        <div className="flex justify-between items-start mb-8">
          <div className="text-6xl font-bold text-[#84CC16]">01</div>
          <img
            src="/svg/arrow_brown.svg"
            alt=""
            onClick={handleNavigate}
            className="cursor-pointer"
          />
        </div>
        {/* Title */}
        <h1 className="text-3xl font-semibold text-[#003262] mb-8 leading-tight">
          Creating Digital Products
        </h1>
        {/* Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/png/service_grid.png"
            alt="Hands working on business documents and charts on a desk"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
