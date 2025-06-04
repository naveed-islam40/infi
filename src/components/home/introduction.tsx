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
      className="bg-white text-black pt-10 pb-20 md:pt-20 md:pb-28 w-full "
    >
      <section className="grid lg:grid-cols-12 w-[90%] mx-auto 2xl:max-w-9xl">
        <div className="lg:col-span-10 xl:col-span-8 self-center grid lg:grid-cols-12">
          <div className="hidden lg:col-span-2 text-base xl:text-xl font-semibold text-[#003262] mb-2 md:mb-4 lg:flex  gap-2 ">
            / 02
          </div>

          <div className="lg:col-span-10 lg:-ml-8">
            <div className="mb-2 md:mb-4 flex  gap-2 items-center text-base xl:text-xl font-semibold">
              <span className="block lg:hidden text-[#003262]">/ 02</span>

              <span className="text-[#003262]">/</span>
              <span className="text-[#003262]">Introduction</span>
            </div>

            <motion.div
              className="mt-32 md:mt-40"
              initial={{ color: "#65A30D", y: 100 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                color: { duration: 1.5, ease: "easeInOut" },
              }}
              whileInView={{ color: "#003262", y: 0 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-8 leading-tight">
                We were founded on a simple belief: that great code can spark
                real, lasting change in the way businesses grow, scale, and
                lead.
              </h2>

              <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-12 max-w-xl font-semibold md:w-[60%]">
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
          </div>
        </div>
      </section>
    </motion.main>
  );
}
