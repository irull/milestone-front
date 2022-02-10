import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

export default function Navbar() {
  const auth = {
    check: false,
    user: {
      name: "Dwinawan Susilo",
    },
  };
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <MobileNav />
        <div className="hidden md:block border-b border-white/10 py-3">
          <div className="container">
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <NavLink to={"/"}>milestone</NavLink>
                <NavLink to={"/dyo"}>DYO</NavLink>
                <NavLink to={"/shop"}>Shop</NavLink>
                <NavLink to={"/orderby"}>Order by</NavLink>
                <NavLink to={"/about"}>About Us</NavLink>
                <NavLink to={"/contact"}>Contact Us</NavLink>
              </div>
              {auth.check ? (
                <div className="flex items-center gap-x-2">
                  <NavLink to={"/login"}>{auth.user.name}</NavLink>
                  <NavLink to={"/bag"}>
                    {" "}
                    <FaShoppingBag size={20} />
                  </NavLink>
                </div>
              ) : (
                <div className="flex items-center gap-x-2">
                  <NavLink to={"/login"}>Login</NavLink>
                  <NavLink to={"/bag"}>
                    {" "}
                    <FaShoppingBag size={20} />
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
