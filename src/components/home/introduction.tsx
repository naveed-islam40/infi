import { motion } from "framer-motion";
import AnimateButton from "../general-components/animate-button";

export default function Introduction() {
  return (
    <motion.main
      initial={{
        backgroundImage: "linear-gradient(to right, #FFFFFF, #FFFFFF)",
      }}
      whileInView={{
        backgroundImage: "linear-gradient(to right, #FFFFFF, #B8DAFB99)",
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      className="bg-white text-black py-10 h-full w-full"
    >
      <section className="mx-auto w-full px-8 lg:max-w-6xl 2xl:max-w-7xl relative">
        <div className="mb-8 flex items-center gap-2 text-sm">
          <span className="text-[#003262] xl:absolute -left-7">/02</span>
          <span className="text-[#003262] mx-2">/</span>
          <span className="text-[#003262]">Introduction</span>
        </div>

        <motion.div
          className="max-w-3xl"
          initial={{ color: "#65A30D", y: 100 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            color: { duration: 1.5, ease: "easeInOut" },
          }}
          whileInView={{ color: "#003262", y: 0 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-4xl font-medium mb-8 leading-tight">
            We were founded on a simple belief: that great code can spark real,
            lasting change in the way businesses grow, scale, and lead.
          </h2>

          <p className="text-sm md:text-base mb-12 max-w-xl">
            We are a world-class team of industry-leading professionals, who
            constantly push new technology to its limits.
          </p>

          <AnimateButton
            buttonText="Who We Are"
            icon="/svg/arrow-top-right.svg"
            parentclasName="relative inline-block"
            cicleClassName="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#8BC500] w-[60px] h-[60px] rounded-full z-0"
            linkClassName="inline-flex items-center gap-3 text-sm group font-medium relative"
            path="/who-we-are"
          />
        </motion.div>
      </section>
    </motion.main>
  );
}
