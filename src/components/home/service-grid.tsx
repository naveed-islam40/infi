import { Link } from "react-router-dom";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  path: string;
}

const services: ServiceItem[] = [
  {
    id: "creating-digital-products",
    number: "01",
    title: "Creating Digital",
    description: "Products",
    path: "/services/creating-digital-products",
  },
  {
    id: "digital-services-support",
    number: "02",
    title: "Digital Services",
    description: "Support",
    path: "/services/digital-services-support",
  },
  {
    id: "digital-asset-management",
    number: "03",
    title: "Digital Asset",
    description: "Management",
    path: "/services/digital-asset-management",
  },
  {
    id: "digital-business-strategies",
    number: "04",
    title: "Digital Business",
    description: "Strategies",
    path: "/services/digital-business-strategies",
  },
];

export default function ServicesGrid() {
  return (
    <div className="container mx-auto px-6 md:px-20 py-16 md:py-24 bg-[#F3F4F6] rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <Link
            key={service.id}
            to={service.path}
            className=" rounded-lg  transition-colors duration-300"
          >
            <div className="mb-2">
              <span className="text-[#003262] font-semibold text-4xl">
                {service.number}
              </span>
            </div>
            <div>
              <h3 className="text-[#003262] font-medium text-xl">
                {service.title}
              </h3>
              <p className="text-[#003262] font-medium text-xl">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
