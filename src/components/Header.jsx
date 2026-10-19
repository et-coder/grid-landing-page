import { useState } from "react";
import { menu, close, navLinks } from "../constants";
import { useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // cleanup in case component unmounts while open
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  return (
    <header>
      <div className="relative flex justify-between w-full h-[72px] items-center border-b border-b-white/30 p-5 text-white z-10 lg:px-10">
        <div className="flex items-center gap-1 text-[14px] font-medium">
          <span className="inline-block rounded-full w-[10px] h-[10px] bg-white"></span>
          Bridge Collective
        </div>
        <button onClick={() => setMenuOpen((prev) => !prev)}>
          <img src={!menuOpen ? menu : close} alt="Menu" />
        </button>
      </div>
      <div
        className={`${menuOpen ? "opacity-100" : "opacity-0"} fixed bg-black/20 h-screen w-full z-1 transition-opacity ease-in-out duration-300`}
        onClick={() => setMenuOpen(false)}
      />
      <nav
        className={`fixed w-full py-11 text-[32px] font-medium text-white z-5 bg-Blue-700 transition-all duration-300 lg:w-[27.5%] lg:h-full lg:right-0 ${!menuOpen ? "opacity-0 hidden" : "opacity-100"}`}
      >
        <ul className="flex flex-col justify-center items-center gap-1 lg:items-end pr-15">
          {navLinks.map((link) => (
            <li className="hover:underline">
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
