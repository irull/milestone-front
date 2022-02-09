import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 sticky top-0">
        <div className="border-b border-white/10 py-3">
          <div className="container">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-x-2">
                <Link to="/" className="text-white font-medium mr-6">
                  Smiletone
                </Link>
                <Link
                  to={"/dyo"}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg"
                >
                  DYO
                </Link>
                <Link
                  to={"/shop"}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg inline-flex items-center"
                >
                  Shop
                </Link>
                <Link
                  to={"/orderby"}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg"
                >
                  Order By
                </Link>
                <Link
                  to={"/about"}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg"
                >
                  About Us
                </Link>
                <Link
                  to={"/contact"}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex items-center gap-x-2">
                <Link
                  to={"/login"}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg"
                >
                  Login
                </Link>
                <Link
                  to={"/chart"}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg"
                >
                  Chart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
