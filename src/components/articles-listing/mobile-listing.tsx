import { ArrowRight } from "lucide-react";

export default function ContentTimeline() {
  const timelineItems = [
    {
      id: "01",
      title:
        "How to Build an Enterprise Game Platform for Millions of Players (1/3)",
      image: "/png/mobile-blog.png",
      imageAlt: "Gaming platform visualization",
    },
    {
      id: "02",
      title:
        "How to Build an Enterprise Game Platform for Millions of Players (2/3)",
      image: "/png/mobile-blog.png",
      imageAlt: "Gaming platform architecture",
    },
    {
      id: "03",
      title:
        "How to Build an Enterprise Game Platform for Millions of Players (3/3)",
      image: "/png/mobile-blog.png",
      imageAlt: "Gaming platform implementation",
    },
    {
      id: "04",
      title: "Get the most out of the framework you are using",
      image: "/png/blog5.png",
      imageAlt: "Framework optimization",
    },
    {
      id: "05",
      title: "How to write good automated text?",
      image: "/png/blog6.png",
      imageAlt: "Automation and AI",
    },
    {
      id: "06",
      title: "Some title that can be short or longer in two or three lines",
      image: "/png/blog7.png",
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
                <span className="text-lime-500 font-medium text-sm mr-4">
                  {item.id}
                </span>
              </div>
              <button className="ml-4 w-8 h-8 rounded-full border border-lime-500 flex items-center justify-center text-lime-500 hover:bg-lime-50 transition-colors">
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
