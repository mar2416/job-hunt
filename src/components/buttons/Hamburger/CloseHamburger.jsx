const CloseHamburger = ({ setIsOpen }) => {
  return (
    <button
      className="absolute top-11 right-12 text-black text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90"
      onClick={() => setIsOpen(false)}
    >
      ✕
    </button>
  );
};

export default CloseHamburger;
