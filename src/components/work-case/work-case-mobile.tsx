import { ArrowRight } from "lucide-react";

export default function WorkCaseMobile() {
  const timelineItems = [
    {
      id: "01",
      title: "Unilever",
      image: "/png/blog4.png",
      imageAlt: "Gaming platform visualization",
    },
    {
      id: "02",
      title: "Valtech",
      image: "/png/blog8.png",
      imageAlt: "Gaming platform architecture",
    },
    {
      id: "03",
      title: "Live Tech Games",
      image: "/png/blog9.png",
      imageAlt: "Gaming platform implementation",
    },
    {
      id: "04",
      title: "Title of the Case Study that can short or longer",
      image: "/png/blog4.png",
      imageAlt: "Framework optimization",
    },
    {
      id: "05",
      title: "Title of the Case Study that can short or longer",
      image: "/png/blog8.png",
      imageAlt: "Automation and AI",
    },
    {
      id: "06",
      title: "Title of the Case Study that can short or longer",
      image: "/png/blog9.png",
      imageAlt: "Abstract geometric design",
    },
    {
      id: "06",
      title: "Title of the Case Study that can short or longer",
      image: "/png/blog4.png",
      imageAlt: "Abstract geometric design",
    },
    {
      id: "06",
      title: "Title of the Case Study that can short or longer",
      image: "/png/blog9.png",
      imageAlt: "Abstract geometric design",
    },
    {
      id: "06",
      title: "Title of the Case Study that can short or longer",
      image: "/png/blog8.png",
      imageAlt: "Abstract geometric design",
    },
  ];

  return (
    <div className="max-w-md mx-auto mt-10 mb-5">
      <div className="space-y-8">
        {timelineItems.map((item) => (
          <div key={item.id} className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center flex-1">
                <span className="text-[#84CC16] font-medium text-sm mr-4">
                  {item.id}
                </span>
              </div>
              <button className="ml-4 w-8 h-8 rounded-full border border-[#84CC16] flex items-center justify-center text-[#84CC16] hover:bg-lime-50 transition-colors">
                <ArrowRight size={14} />
              </button>
            </div>
            <div className="flex-1 h-px bg-[#84CC16] mb-2"></div>

            {/* Title */}
            <h3 className="text-[#003262] font-medium text-sm mb-4 leading-relaxed">
              {item.title}
            </h3>

            {/* Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
