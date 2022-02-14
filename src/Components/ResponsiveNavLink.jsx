import React from "react";
import { Link } from "react-router-dom";

export default function ResponsiveNavLink(to, children) {
  return (
    <Link
      to={to}
      className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black"
    >
      {children}
    </Link>
  );
}
