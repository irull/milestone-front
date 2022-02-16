import React, { Fragment } from "react";
import { FaShoppingBag, FaAngleDown, FaRegMoon } from "react-icons/fa";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Line from "./Line";
import logo from "../assets/logo/logo-dark.png";

export default function Navbar() {
  const auth = {
    check: true,
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
                  <img src={logo} alt="logo" className="h-9 rounded-full" />
                </NavLink>
                <NavLink to={"/dyo"}>DYO</NavLink>
                {/* Shop */}

                <Menu as={"div"} className="relative inline-block text-left">
                  {({ open }) => (
                    <>
                      <Menu.Button className="flex justify-center w-auto  text-sm font-medium text-white group">
                        <span className="flex items-center font-medium text-sm text-gray-300 hover:text-white px-4 py-2">
                          Shop
                          <FaAngleDown
                            className={`${
                              open
                                ? "transform transition duration-300 rotate-180"
                                : ""
                            } text-gray-300 ml-1 transition duration-300`}
                          />
                        </span>
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-gray-900  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm font-medium">
                          <Menu.Item>
                            <Link
                              to="/dewasa"
                              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 flex"
                            >
                              Dewasa
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link
                              to="/anak"
                              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 flex"
                            >
                              Anak
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link
                              to="/aksesoris"
                              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 flex"
                            >
                              Aksesoris
                            </Link>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>

                {/* End Shop */}

                {/* Order by */}
                <Menu as={"div"} className="relative inline-block text-left">
                  {({ open }) => (
                    <>
                      <Menu.Button className="flex justify-center w-auto  text-sm font-medium text-white group">
                        <span className="flex items-center font-medium text-sm text-gray-300 hover:text-white px-4 py-2">
                          Order by
                          <FaAngleDown
                            className={`${
                              open
                                ? "transform transition duration-300 rotate-180"
                                : ""
                            } text-gray-300 ml-1 transition duration-300`}
                          />
                        </span>
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-gray-900  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm font-medium">
                          <Menu.Item>
                            <Link
                              to="/pricelist"
                              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 flex"
                            >
                              Pricelist
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link
                              to="/custom"
                              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 flex"
                            >
                              Custom Order
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link
                              to="/catalog"
                              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 flex"
                            >
                              Catalog
                            </Link>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
                {/* End Orderby */}

                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/blog"}>Blog</NavLink>
              </div>
              {/* Menu Profile (Login Session) */}
              {auth.check ? (
                <div className="flex items-center gap-x-2">
                  <div className="flex ">
                    <Menu
                      as={"div"}
                      className="relative inline-block text-left"
                    >
                      {({ open }) => (
                        <>
                          <Menu.Button className="flex justify-center w-auto text-sm font-medium text-white group">
                            <span className="flex items-center font-medium text-sm text-gray-300 hover:text-white px-4 py-2">
                              {auth.user.name}
                              <FaAngleDown
                                className={`${
                                  open
                                    ? "transform transition duration-300 rotate-180"
                                    : ""
                                } text-gray-300 ml-1 transition duration-300`}
                              />
                            </span>
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Menu.Items className="absolute right-0 w-52 mt-2 origin-top-right bg-gray-900 d rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm font-medium">
                              <Menu.Item>
                                <Link
                                  to="/"
                                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 flex"
                                >
                                  View profile
                                </Link>
                              </Menu.Item>
                              <Menu.Item>
                                <Link
                                  to="/"
                                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 flex"
                                >
                                  Edit Profile
                                </Link>
                              </Menu.Item>
                              <Menu.Item>
                                <Link
                                  to="/dyo"
                                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 flex"
                                >
                                  Change password
                                </Link>
                              </Menu.Item>
                              <Line />
                              <Menu.Item>
                                <Link
                                  to="/dyo"
                                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 flex"
                                >
                                  Logout
                                </Link>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                    {/* End Menu Profile (Login Session) */}
                  </div>
                  <NavLink to={"/bag"}>
                    <FaShoppingBag size={20} />
                  </NavLink>
                  <NavLink to={"/"}>
                    <FaRegMoon size={20} />
                  </NavLink>
                </div>
              ) : (
                // menu login (session not login)
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
