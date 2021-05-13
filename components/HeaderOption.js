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
      <p className="hidden sm:inline-flex">{title}</p>
      <Icon className="h-4 hidden sm:inline-flex" />
    </div>
  );
}

export default HeaderOption;
