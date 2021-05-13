function HeaderOption({ Icon, title, Selected }) {
  return (
    <div
      className={`flex items-center 
      space-x-1 border-b-4 border-transparent
      hover:border-blue-500 pb-3
      hover:text-blue-500 cursor-pointer ${
        Selected && "text-blue-500 border-blue-500"
      }`}
    >
      <p className="hidden md:inline-flex sm:hidden">{title}</p>
      {Icon ? (
        <Icon
          className={`h-4 hidden ${Icon && "text-gray-500 md:inline-flex"}`}
        />
      ) : null}
    </div>
  );
}

export default HeaderOption;
