import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { RiMenu4Fill } from "react-icons/ri";
import { FaShoppingBag, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Line from "./Line";
import Toggle from "./Toggle";

export default function MobileNav() {
  return (
    <Menu
      as="div"
      className="w-full flex justify-between items-center lg:hidden py-2 px-4 border-b border-gray-700"
    >
      <Link to="/" className="font-semibold text-md text-white">
        milestone
      </Link>
      <div className="flex items-center gap-2">
        <Toggle />
        <FaShoppingBag size={23} className="text-white" />
        <Menu.Button className="hover:animate-pulse">
          <RiMenu4Fill size={30} className="text-white focus:outline-none" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Menu.Items
          as="div"
          className="absolute bg-gray-900 top-1.5 rounded-xl left-0 right-0 mr-2 ml-2  mt-12 py-2 overflow-hidden text-sm font-medium"
        >
          <Menu.Item>
            <Link
              to="/dyo"
              className="px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-700/40 flex"
            >
              DYO
            </Link>
          </Menu.Item>
          <Menu.Item>
            <>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-700/40 flex items-center text-sm font-medium w-full
                    "
                    >
                      <span>Shop</span>
                      <FaAngleDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        } text-gray-300 ml-1 transition duration-300`}
                      />
                    </Disclosure.Button>
                    <Transition
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Disclosure.Panel className="px-4 text-sm text-gray-500">
                        <Menu.Item>
                          <Link
                            to="/"
                            className="px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-700/40 flex"
                          >
                            Shop 1
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/"
                            className="px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-700/40 flex"
                          >
                            Shop 2
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/"
                            className="px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-700/40 flex"
                          >
                            Shop 3
                          </Link>
                        </Menu.Item>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-0">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-700/40 flex items-center text-sm font-medium w-full">
                      <span>Order by</span>
                      <FaAngleDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        }  text-gray-300 ml-1 transition duration-300`}
                      />
                    </Disclosure.Button>
                    <Transition
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Disclosure.Panel className="px-4 text-sm text-gray-500">
                        <Menu.Item>
                          <Link
                            to="/"
                            className="px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-700/40 flex"
                          >
                            Order by 1
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/about"
                            className="px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-700/40 flex"
                          >
                            Order by 2
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/about"
                            className="px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-700/40 flex"
                          >
                            Order by 3
                          </Link>
                        </Menu.Item>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </>
          </Menu.Item>

          <Menu.Item>
            <Link
              to="/about"
              className="px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-700/40 flex"
            >
              About
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/contact"
              className="px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-700/40 flex"
            >
              Contact
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/blog"
              className="px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-700/40 flex"
            >
              Blog
            </Link>
          </Menu.Item>
          <Line />
          <Menu.Item>
            <Link
              to="/login"
              className="px-4 py-2  text-gray-200 hover:text-white hover:bg-gray-700/40 flex"
            >
              Login
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
