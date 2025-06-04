import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
    path: "/png/blog6.png",
  },
  {
    id: "digital-services-support",
    number: "02",
    title: "Digital Services",
    description: "Support",
    path: "/png/blog5.png",
  },
  {
    id: "digital-asset-management",
    number: "03",
    title: "Digital Asset",
    description: "Management",
    path: "/png/blog7.png",
  },
  {
    id: "digital-business-strategies",
    number: "04",
    title: "Digital Business",
    description: "Strategies",
    path: "/png/blog9.png",
  },
];

export default function ServicesGrid() {
  return (
    <div className="px-6 md:px-40 py-16 md:py-28 bg-[#F3F4F6] rounded-4xl lg:mx-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <Link
            key={service.id}
            to={"#"}
            className="rounded-lg transition-colors duration-300 group relative min-h-[250px]"
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="group-hover:opacity-0"
            >
              <span className="text-[#003262] font-semibold text-2xl lg:text-4xl">
                {service.number}
              </span>
              <div className="pt-5">
                <h3 className="text-[#003262] font-medium text-2xl lg:text-4xl">
                  {service.title}
                </h3>
                <p className="text-[#003262] font-medium text-2xl lg:text-4xl">
                  {service.description}
                </p>
              </div>
            </motion.div>

            {/* Hover content (hidden by default) */}
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0, y: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <motion.span
                  className="absolute top-10 -left-10 text-7xl font-bold text-[#65A30D]"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {service.number}
                </motion.span>
                <motion.img
                  src={service.path}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-[400px] max-w-full origin-center"
                />
              </motion.div>
            </AnimatePresence>
          </Link>
        ))}
      </div>
    </div>
  );
}
