import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import NavLink from "./NavLink";

export default function MobileNav() {
  return (
    <div className="text-white md:hidden flex items-center justify-between py-2 px-4 border-b border-gray-600">
      <NavLink to={"/"}>milestone</NavLink>
      <button className="focus:outline-none">
        <HiMenuAlt3 size={35} />
      </button>
    </div>
  );
}
