import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiMenu4Fill } from "react-icons/ri";
import { FaRegMoon, FaShoppingBag, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Line from "./Line";

export default function MobileNav() {
  return (
    <Menu
      as="div"
      className="w-full flex justify-between items-center lg:hidden py-2 px-4 border-b border-gray-700"
    >
      <Link to="/" className="font-semibold text-md text-white">
        milestone
      </Link>
      <div className="flex items-center">
        <FaRegMoon size={20} className="text-white mr-3" />
        <FaShoppingBag size={23} className="text-white mr-3" />
        <Menu.Button>
          <RiMenu4Fill size={30} className="text-white focus:outline-none" />
        </Menu.Button>
      </div>
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
          className="absolute bg-gray-900 top-0 rounded-b-2xl left-0 right-0 mr-auto ml-auto  mt-12 py-1 w-full overflow-hidden text-sm font-medium"
        >
          <Menu.Item>
            <Link
              to="/dyo"
              className="px-4 py-2 hover:bg-slate-200 text-gray-200 hover:text-black flex"
            >
              DYO
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/shop"
              className="px-4 py-2 hover:bg-gray-100 text-gray-200 hover:text-black flex items-center"
            >
              Shop <FaAngleDown className="ml-1" />
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/orderby"
              className="px-4 py-2 hover:bg-gray-100 text-gray-200 hover:text-black flex items-center"
            >
              Order by <FaAngleDown className="ml-1" />
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/about"
              className="px-4 py-2 hover:bg-gray-100 text-gray-200 hover:text-black flex"
            >
              About Us
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/contact"
              className="px-4 py-2 hover:bg-gray-100 text-gray-200 hover:text-black flex"
            >
              Contact Us
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/blog"
              className="px-4 py-2 hover:bg-gray-100 text-gray-200 hover:text-black flex"
            >
              Blog
            </Link>
          </Menu.Item>
          <Line />
          <Menu.Item>
            <Link
              to="/login"
              className="px-4 py-2 hover:bg-gray-100 text-gray-200 hover:text-black flex"
            >
              Login
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
