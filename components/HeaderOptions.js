import HeaderOption from "./HeaderOption";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/outline";
function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700">
      <div className="flex space-x-6">
        <HeaderOption title="About Us" Selected />
        <HeaderOption Icon={ChevronDownIcon} title="Services" />
        <HeaderOption Icon={ChevronDownIcon} title="Guide" />
        <HeaderOption title="FAQ" />
        <HeaderOption title="Contact Us" />
      </div>
      <div className="flex lg:hidden md:hidden sm:flex">
        <MenuIcon className="h-5 text-gray-500 border-gray-500 hover:text-blue-500 hover:border-blue-500" />
      </div>
    </div>
  );
}

export default HeaderOptions;
