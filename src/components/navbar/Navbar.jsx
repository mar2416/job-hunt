import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
