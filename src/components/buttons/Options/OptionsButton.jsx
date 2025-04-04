import { HiDotsVertical } from "react-icons/hi";

const btnStyle =
  "text-xl text-gray-500 hover:text-gray-700 hover:rotate-180 duration-500 cursor-pointer";

const OptionsButton = ({ onClick }) => {
  return <HiDotsVertical className={btnStyle} onClick={onClick} />;
};

export default OptionsButton;
