export default function StatsComponentMobile() {
  const stats = [
    { label: "Years", value: "10" },
    { label: "Employees", value: "50+" },
    { label: "Projects", value: "60+" },
    { label: "Growth", value: "400%" },
    { label: "Referrals", value: "92%" },
  ];

  return (
    <div className="bg-white max-w-2xl mx-auto mt-10">
      <div className="space-y-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-slate-700 font-medium text-lg mb-1">
                {stat.label}
              </h3>
              <div className="h-px bg-gray-200 w-full"></div>
            </div>
            <div className="ml-8">
              <span className="text-5xl font-bold text-lime-500">
                {stat.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
