import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  const bg = () => {
    switch (pathname) {
      case "/":
        return "bg-[#002454]";
      default:
        return "bg-[#fff]";
    }
  };
  return (
    <nav className={`${bg()}`}>
      <div className="w-full lg:max-w-7xl 2xl:max-w-9xl mx-auto flex justify-between md:justify-end gap-4 items-center p-6">
        <Link to="/" className="z-10">
          <img
            src="/svg/Vector.svg"
            alt="Infinity Mesh Logo"
            className="w-8 h-8"
          />
        </Link>
        <button className="z-10 text-[#9eff00] cursor-pointer">
          <img
            src="/svg/menu.svg"
            alt="Menu"
            onClick={() => setShowMenu(true)}
          />
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
