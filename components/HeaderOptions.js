import HeaderOption from "./HeaderOption";
import { ChevronDownIcon } from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700">
      <div className="flex space-x-6">
        <HeaderOption Icon={ChevronDownIcon} title="About Us" Selected />
        <HeaderOption Icon={ChevronDownIcon} title="Services" />
        <HeaderOption Icon={ChevronDownIcon} title="Guide" />
        <HeaderOption Icon={ChevronDownIcon} title="FAQ" />
        <HeaderOption Icon={ChevronDownIcon} title="Contact Us" />
      </div>
    </div>
  );
}

export default HeaderOptions;
