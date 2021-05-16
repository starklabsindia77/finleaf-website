import HeaderOption from "./HeaderOption";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";

function HeaderOptions() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <button
        className=" inline-flex p-3 hover:bg-blue-400 rounded lg:hidden text-gray-600 ml-auto hover:text-gray-600 outline-none"
        onClick={handleClick}
      >
        <MenuIcon className="h-5" />
      </button>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <div className="flex space-x-10">
            <HeaderOption title="About Us" Selected />
            <HeaderOption Icon={ChevronDownIcon} title="Services" />
            <HeaderOption Icon={ChevronDownIcon} title="Guide" />
            <HeaderOption title="FAQ" />
            <HeaderOption title="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderOptions;
