import { PhoneIcon, MailIcon } from "@heroicons/react/outline";
import FacebookIcon from "@material-ui/icons/facebook";
import InstagramIcon from "@material-ui/icons/instagram";
import TwitterIcon from "@material-ui/icons/twitter";
import LinkedInIcon from "@material-ui/icons/linkedin";
function TopBar() {
  return (
    <header className="pl-6 pr-6 w-full top-0 mt-3 bg-white justify-between hidden sm:inline-flex">
      <div className="flex items-center space-x-4 ">
        <div className="flex items-center space-x-2 text-gray-500 border-gray-500 hover:text-blue-500 hover:border-blue-500">
          <PhoneIcon className="h-5 cursor-pointer" />
          <p>+91 9999219809</p>
        </div>
        <div className="flex items-center space-x-2 text-gray-500 border-gray-500 hover:text-blue-500 hover:border-blue-500">
          <MailIcon className="h-5 cursor-pointer" />
          <p>Varunps191@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FacebookIcon className="h-5 cursor-pointer text-gray-500 border-gray-500 hover:text-blue-500 hover:border-blue-500" />
        <TwitterIcon className="h-5 cursor-pointer text-gray-500 border-gray-500 hover:text-blue-500 hover:border-blue-500" />
        <InstagramIcon className="h-5 cursor-pointer text-gray-500 border-gray-500 hover:text-blue-500 hover:border-blue-500" />
        <LinkedInIcon className="h-5 cursor-pointer text-gray-500 border-gray-500 hover:text-blue-500 hover:border-blue-500" />
      </div>
    </header>
  );
}

export default TopBar;
