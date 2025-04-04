const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col justify-around items-end w-10 h-9 mr-7 ml-auto group cursor-pointer"
    >
      <div className="h-0.5 w-9 bg-black transition-all duration-300 group-hover:w-6"></div>
      <div className="h-0.5 w-7 bg-black transition-all duration-300"></div>
      <div className="h-0.5 w-5 bg-black transition-all duration-300 group-hover:w-9"></div>
    </button>
  );
};

export default Hamburger;
