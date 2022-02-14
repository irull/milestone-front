import React from "react";
import { FaShoppingBag, FaAngleDown, FaRegMoon } from "react-icons/fa";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";

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
                <NavLink to={"/shop"} className="flex items-center">
                  Shop
                  <FaAngleDown className="ml-1" />
                </NavLink>
                <NavLink to={"/orderby"} className=" flex items-center ">
                  Order by
                  <FaAngleDown className="ml-1" />
                </NavLink>
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
