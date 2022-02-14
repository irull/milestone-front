import React, { Fragment } from "react";
import { FaShoppingBag, FaAngleDown, FaRegMoon } from "react-icons/fa";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const auth = {
    check: false,
    user: {
      name: "Dwinawan Susilo",
    },
  };
  return (
    <>
      <div className="bg-gray-900">
        <MobileNav />
        <div className="hidden lg:block border-b border-white/10 py-1">
          <div className="container">
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <NavLink to={"/"} className="font-semibold text-md mr-6">
                  milestone
                </NavLink>
                <NavLink to={"/dyo"}>DYO</NavLink>
                <Menu as={"div"} className="relative inline-block text-left">
                  <Menu.Button className="flex justify-center w-auto  text-sm font-medium text-white ">
                    <NavLink to={""} className="flex items-center">
                      Shop
                      <FaAngleDown className="ml-1" />
                    </NavLink>
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
                    <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-gray-900 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                          to="/dyo"
                          className="px-4 py-2 hover:bg-slate-200 text-gray-200 hover:text-black flex"
                        >
                          DYO
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to="/dyo"
                          className="px-4 py-2 hover:bg-slate-200 text-gray-200 hover:text-black flex"
                        >
                          DYO
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as={"div"} className="relative inline-block text-left">
                  <Menu.Button className="flex justify-center w-auto text-sm font-medium text-white ">
                    <NavLink to={""} className="flex items-center">
                      Order by
                      <FaAngleDown className="ml-1" />
                    </NavLink>
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
                    <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-gray-900 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                          to="/dyo"
                          className="px-4 py-2 hover:bg-slate-200 text-gray-200 hover:text-black flex"
                        >
                          DYO
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to="/dyo"
                          className="px-4 py-2 hover:bg-slate-200 text-gray-200 hover:text-black flex"
                        >
                          DYO
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <NavLink to={"/about"}>About Us</NavLink>
                <NavLink to={"/contact"}>Contact Us</NavLink>
                <NavLink to={"/blog"}>Blog</NavLink>
              </div>
              {auth.check ? (
                <div className="flex items-center gap-x-2">
                  <div className="flex ">
                    <NavLink
                      to={"/login"}
                      className="flex items-center font-semibold text-sm"
                    >
                      {auth.user.name}
                      <FaAngleDown className="ml-1" />
                    </NavLink>
                  </div>
                  <NavLink to={"/bag"}>
                    <FaShoppingBag size={20} />
                  </NavLink>
                  <NavLink to={"/"}>
                    <FaRegMoon size={20} />
                  </NavLink>
                </div>
              ) : (
                <div className="flex items-center gap-x-2">
                  <NavLink
                    className="font-semibold text-sm hover:bg-none"
                    to={"/login"}
                  >
                    Login
                  </NavLink>
                  <NavLink to={"/bag"}>
                    <FaShoppingBag size={20} />
                  </NavLink>
                  <NavLink to={"/"}>
                    <FaRegMoon size={20} />
                  </NavLink>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
