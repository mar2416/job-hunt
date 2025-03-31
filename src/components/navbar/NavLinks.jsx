const NavLinks = ({ isMobile }) => {
  return (
    <ul
      className={`flex ${
        isMobile ? "flex-col items-center gap-20" : "gap-5 pr-10 text-xl"
      }`}
    >
      <li className="font-['Patrick_Hand_SC'] text-4xl hover:border border-red-500 p-2 rounded-lg hover:shadow-md cursor-pointer">
        Log In
      </li>
      <li className="font-['Patrick_Hand_SC'] text-4xl border border-red-500 p-2 rounded-lg shadow-md hover:text-red-500 cursor-pointer">
        Sign Up
      </li>
    </ul>
  );
};

export default NavLinks;
