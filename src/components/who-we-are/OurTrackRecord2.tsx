export default function StatsComponent() {
  const stats = [
    { label: "Years", value: "10" },
    { label: "Employees", value: "50+" },
    { label: "Projects", value: "60+" },
    { label: "Growth", value: "400%" },
    { label: "Referrals", value: "92%" },
  ];

  return (
    <div className="bg-white px-4 py-8">
      <div className="space-y-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0"
          >
            <div className="text-[#003262] text-xl md:text-3xl font-medium border-b border-gray-200 w-full pb-3 md:pb-5">
              {stat.label}
            </div>
            <div className="text-gray-300 text-5xl md:text-7xl lg:text-[250px] font-bold md:pl-8 hover:text-lime-500 transition duration-300 ease-in-out">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
