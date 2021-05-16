import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HeaderOption({ Icon, title, Selected }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div
            className={`flex items-center 
      space-x-1 border-b-4 border-transparent
      hover:border-blue-500 pb-3
      hover:text-blue-500 cursor-pointer ${
        Selected && "text-blue-500 border-blue-500"
      }`}
          >
            {Icon ? (
              <Menu.Button className="inline-flex items-center border-white">
                <Link href="/">
                  <a className="lg:inline-flex lg:w-auto w-full rounded items-center justify-center">
                    {title}
                  </a>
                </Link>
                <Icon
                  className={`h-4 hidden ${
                    Icon && "text-gray-500 md:inline-flex pl-1"
                  }`}
                  aria-hidden="true"
                />
              </Menu.Button>
            ) : (
              <Link href="/">
                <a className="lg:inline-flex lg:w-auto w-full rounded items-center justify-center">
                  {title}
                </a>
              </Link>
            )}
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default HeaderOption;
