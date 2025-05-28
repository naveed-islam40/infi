import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <main className="bg-white text-black my-10">
      <section className="mx-auto w-full px-8 lg:max-w-7xl 2xl:max-w-9xl relative">
        <div className="mb-8 flex items-center gap-2 text-sm">
          <span className="text-[#003262] xl:absolute -left-10">/02</span>
          <span className="text-[#003262] mx-2">/</span>
          <span className="text-[#003262]">Introduction</span>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-[#65A30D] mb-8 leading-tight">
            We were founded on a simple belief: that great code can spark real,
            lasting change in the way businesses grow, scale, and lead.
          </h2>

          <p className="text-sm md:text-base text-[#003262] mb-12 max-w-xl">
            We are a world—class team of industry—leading professionals, who
            constantly push new technology to its limits.
          </p>

          <Link
            to="/who-we-are"
            className="inline-flex items-center gap-3 text-sm font-medium text-[#003262] hover:text-[#65A30D] transition-colors"
          >
            Who We Are
            <img src="/svg/arrow-top-right.svg" alt="" />
          </Link>
        </div>
      </section>
    </main>
  );
}
