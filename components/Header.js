import Image from "next/image";
import HeaderOptions from "./HeaderOptions";
import TopBar from "./TopBar";

function Header() {
  return (
    <div>
      <TopBar />
      <header className="flex w-full top-0 bg-white justify-between p-6">
        <div className="flex items-center">
          <Image
            src="https://www.google.kz/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
            height={40}
            width={120}
            onClick={() => router.push("/")}
            className="cursor-pointer "
          />
        </div>
        {/* HeaderOptions */}
        <div className="flex items-center">
          <HeaderOptions />
        </div>
      </header>
    </div>
  );
}

export default Header;
