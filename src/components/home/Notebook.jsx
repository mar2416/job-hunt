import OptionsContainer from "../OptionsMenu/OptionsContainer";

const Notebook = ({
  entries = ["Your First job", "Your second job"],
  numLines = 13,
}) => {
  return (
    <div className="relative max-w-md md:max-w-2xl h-150 mb-10 sm:ml-10 md:ml-30 mt-10 p-6 bg-purple-50 shadow-lg rounded-md border border-gray-300">
      <div className="absolute top-28 left-5 w-4 h-4 bg-stone-100 rounded-full border border-stone-300"></div>
      <div className="absolute top-115 left-5 w-4 h-4 bg-stone-100 rounded-full border border-stone-300"></div>
      <div className="absolute top-0 left-14 w-0.5 h-full bg-red-500"></div>
      <div className="absolute top-0 left-15 w-0.5 h-full bg-red-500"></div>
      <div className="relative flex flex-col gap-4">
        {Array.from({ length: numLines }).map((_, index) => (
          <div
            key={index}
            className="pl-13 border-b border-gray-300 text-gray-700 font-['Patrick_Hand_SC'] text-2xl h-7 flex items-center justify-between"
          >
            <span className="flex-1 truncate">
              {entries.length === 0 && index === 0
                ? "No entries yet..."
                : entries[index] || ""}
            </span>
            {entries[index] && <OptionsContainer className="z-90" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notebook;
