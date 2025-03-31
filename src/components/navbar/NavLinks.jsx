const NavLinks = ({ isMobile }) => {
  return (
    <ul
      className={`flex ${
        isMobile ? "flex-col items-center gap-20" : "gap-5 pr-10 text-xl"
      }`}
    >
      <li className="font-['Patrick_Hand_SC'] text-4xl hover:border border-red-500 p-3 rounded-lg hover:shadow-md">
        Log In
      </li>
      <li className="font-['Patrick_Hand_SC'] text-4xl hover:border border-red-500 p-3 rounded-lg hover:shadow-md">
        Sign Up
      </li>
    </ul>
  );
};

export default NavLinks;
