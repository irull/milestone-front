import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ children, to, className }) {
  return (
    <>
      <Link
        to={to}
        className={`${
          className ? className : "font-medium text-sm"
        } text-gray-300 hover:text-white px-4 py-2`}
      >
        {children}
      </Link>

      {/* <Link to={to}>
        <span
          className={`${
            className ? className : "font-medium text-sm"
          } text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg  px-4 py-2`}
        >
          {children}
        </span>
      </Link> */}
    </>
  );
}
