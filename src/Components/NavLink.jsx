import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ children, to }) {
  return (
    <>
      <Link
        to={to}
        className="font-medium md:text-sm lg:text-tiny px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg"
      >
        {children}
      </Link>
    </>
  );
}
