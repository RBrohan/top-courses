const Navbar = ({ filterData, category, setCategory }) => {
  const handleCategory = (title) => {
    setCategory(title);
  };

  return (
    <div className="w-11/12 flex justify-center flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4">
      {filterData.map((items) => (
        <button
          className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 
          ${category === items.title ? "bg-opacity-60" : "border-white"}`}
          key={items.id}
          onClick={() => handleCategory(items.title)}
        >
          {items.title}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
