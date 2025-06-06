import { useEffect, useRef, useState } from "react";
import HomeAnimation from "../general-components/home-animation";
import ScrollAnimation from "../general-components/scroll-animation";
import Introduction from "./introduction";

export default function InFinityMesh() {
 const mainRef = useRef<HTMLElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    // Desktop breakpoint check
    const isDesktop = () => window.innerWidth >= 1024;

    // Wheel event handler with typing
    const handleWheel = (e: WheelEvent) => {
      if (!isDesktop()) return;

      e.preventDefault();

      if (isScrolling) return;

      setIsScrolling(true);

      const delta = Math.sign(e.deltaY); // 1 for down scroll, -1 for up

      window.scrollBy({
        top: delta * window.innerHeight,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    mainEl.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      mainEl.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling]);

  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <main
      ref={mainRef}
  className="lg:h-screen overflow-y-scroll scrollbar-hide"
      style={{ scrollSnapType: "y mandatory" }}
    >
      {/* Section 1 */}
      <section
        className=" bg-gradient-to-r from-[#014789] to-[#001930] text-white pb-20 lg:pb-0 pt-20 lg:pt-10  flex flex-col justify-center px-5"
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="grid lg:grid-cols-2 w-[90%] 2xl:max-w-9xl mx-auto pt-5 md:pt-10 lg:pt-20 pb-0 xl:pt-20 xl:pb-10">
          <div className="self-center grid lg:grid-cols-12 xl:mt-20">
            <div className="hidden lg:col-span-2 text-[#84CC16] mb-2 md:mb-4 lg:flex gap-2 text-base xl:text-xl font-semibold">
              / 01
            </div>

            <div className="lg:col-span-10">
              <div className="text-[#84CC16] mb-2 md:mb-4 flex gap-2 text-base xl:text-xl font-semibold">
                <span className="block lg:hidden">/ 01</span>
                <span>/</span>
                <span>Infinity Mesh</span>
              </div>

              <h1 className="mt-5 lg:mt-0 text-xl md:text-3xl xl:text-[44px] font-semibold font-inter leading-tight mb-6 md:w-[70%]">
                Think Bigger, Build Smarter and Scale Faster
              </h1>

              <p className="w-[70%] md:w-auto text-sm lg:text-xl xl:text-[22px] text-[#84CC16] max-w-md">
                We deliver full-scale digital development solutions that turn bold
                ideas into high-impact products.
              </p>

              <div className="hidden lg:block mt-40">
                <ScrollAnimation handleClick={handleClick} />
              </div>
            </div>
          </div>

          <div className="md:w-[80%] mx-auto lg:mr-0 lg:ml-auto mt-20 lg:mt-0">
            <HomeAnimation />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className=" lg:h-screen bg-gray-900 text-white flex items-center justify-center text-3xl font-bold"
        style={{ scrollSnapAlign: "start" }}
      >
    <Introduction />
      </section>

      {/* Add more full screen sections here if needed */}
    </main>
  );
}
