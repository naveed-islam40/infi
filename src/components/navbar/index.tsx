import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import useClickOutside from "../../hook/useClickOutside";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();
  const menuRef: any = useRef(null);

  const bg = () => {
    switch (pathname) {
      case "/":
        return "bg-transparent";
      default:
        return "bg-transparent";
    }
  };

  useClickOutside(menuRef, () => {
    if (showMenu) {
      const closeButton = document.getElementById("menu-close-button");
      closeButton?.click();
    }
  });

  return (
    <nav className={`w-full fixed z-50 top-0 py-5 ${bg()}`} ref={menuRef}>
      <div className="w-full lg:max-w-6xl xl:max-w-[1400px] 2xl:max-w-9xl mx-auto flex justify-between md:justify-end gap-4 items-center px-8">
        <Link to="/" className="z-10">
          <img
            src="/svg/Vector.svg"
            alt="Infinity Mesh Logo"
            className="w-8 h-8"
          />
        </Link>

        <button
          className="z-10 cursor-pointer group"
          onClick={() => setShowMenu(true)}
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className="block h-0.5 w-full bg-[#65A30D] transition-all duration-300 ease-in-out group-hover:translate-y-1.5"></span>
            <span className="block h-0.5 w-full bg-[#65A30D] transition-all duration-300 ease-in-out group-hover:-translate-y-1.5"></span>
          </div>
        </button>

        {showMenu && (
          <Menu
            onClose={() => {
              setShowMenu(false);
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
