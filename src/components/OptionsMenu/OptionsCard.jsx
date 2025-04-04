const OptionsCard = () => {
  const liStyle = "p-3 text-md text-gray-700 hover:text-red-500 cursor-pointer";

  return (
    <div className="shadow h-auto w-32 bg-white rounded-md absolute top-0 right-0 mt-2 mr-4">
      <ul className="flex flex-col divide-y px-4 divide-gray-300">
        <li className={liStyle}>Edit</li>
        <li className={liStyle}>Delete</li>
      </ul>
    </div>
  );
};

export default OptionsCard;
