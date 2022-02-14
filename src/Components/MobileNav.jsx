import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <Menu
      as="div"
      className="w-full flex justify-between items-center lg:hidden py-2 px-4 border-b border-gray-700"
    >
      <Link to="/" className="font-semibold text-md text-white">
        milestone
      </Link>
      <Menu.Button>
        <RiMenu4Fill size={30} className="text-white focus:outline-none" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="div"
          className="absolute bg-gray-100 right-0 mr-0 top-0 rounded-lg mt-12 py-1 w-full overflow-hidden text-sm font-medium"
        >
          <Menu.Item>
            <Link
              to="/"
              className="px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-black block"
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/dyo"
              className="px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-black block"
            >
              DYO
            </Link>
          </Menu.Item>
          <div className="w-full h-px bg-gray-300 my-1" />
          <Menu.Item>
            <Link
              to="/blog"
              className="px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-black block"
            >
              Blog
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/contact"
              className="px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-black block"
            >
              Contact Us
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/contact"
              className="px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-black block"
            >
              Contact Us
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/contact"
              className="px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-black block"
            >
              Contact Us
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/contact"
              className="px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-black block"
            >
              Contact Us
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/contact"
              className="px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-black block"
            >
              Contact Us
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
