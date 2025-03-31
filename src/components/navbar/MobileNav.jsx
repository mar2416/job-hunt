import { useState } from "react";
import NavLinks from "./NavLinks";
import logo from "../../assets/logo.svg";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5">
      <img src={logo} alt="logo" className="w-70 ml-10" />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-around items-end w-10 h-9 mr-7 ml-auto group cursor-pointer"
      >
        <div className="h-0.5 w-9 bg-black transition-all duration-300 group-hover:w-6"></div>
        <div className="h-0.5 w-7 bg-black transition-all duration-300"></div>
        <div className="h-0.5 w-5 bg-black transition-all duration-300 group-hover:w-9"></div>
      </button>
      <div
        className={`fixed z-100 top-0 right-0 h-screen w-1/2 bg-black/5 backdrop-blur-md shadow-xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700 ease-in-out`}
      >
        <button
          className="absolute top-11 right-12 text-black text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <div className="flex flex-col items-center mt-40 h-full text-2xl text-black">
          <NavLinks isMobile />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
