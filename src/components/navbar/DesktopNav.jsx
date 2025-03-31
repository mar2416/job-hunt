import NavLinks from "./NavLinks";
import logo from "../../assets/logo.svg";

const DesktopNav = () => {
  return (
    <nav className="flex items-center justify-between p-5">
      <img src={logo} alt="logo" className="w-70 ml-20" />
      <NavLinks />
    </nav>
  );
};

export default DesktopNav;
