import { useState } from "react";
import Hamburger from "../buttons/Hamburger/Hamburger";
import CloseHamburger from "../buttons/Hamburger/CloseHamburger";
import NavLinks from "./NavLinks";
import logo from "../../assets/logo.svg";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const SideBar = `fixed z-100 top-0 right-0 h-screen w-1/2 bg-black/2 backdrop-blur-md shadow-xl transform ${
    isOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-700 ease-in-out`;

  return (
    <nav className="flex items-center justify-between p-5">
      <img src={logo} alt="logo" className="w-70" />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={SideBar}>
        <CloseHamburger setIsOpen={setIsOpen} />
        <div className="flex flex-col items-center mt-40 h-full text-2xl text-black">
          <NavLinks isMobile />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
