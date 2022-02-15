import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 antialiased tracking-tighter text-gray-800">
        <div className="md:w-1/2.5  ">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h1 className="font-semibold text-2xl mb-5 text-center text-gray-600 tracking-wider">
              Please Register
            </h1>
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block mb-2 font-medium tracking-wider text-sm text-gray-500"
              >
                Name
              </label>
              <input
                type="username"
                name="username"
                id="username"
                className="border w-full px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition duration-200 shadow-sm"
                placeholder="Username"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-sm tracking-wider text-gray-500"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border w-full px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition duration-200 shadow-sm"
                placeholder="email@mail.com"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 font-medium text-sm tracking-wider text-gray-500"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border w-full px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition duration-200 shadow-sm"
                placeholder="******"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 font-medium text-sm tracking-wider text-gray-500"
              >
                Confirm Password
              </label>
              <input
                type="password_confirm"
                name="password_confirm"
                id="password_confirm"
                className="border w-full px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition duration-200 shadow-sm"
                placeholder="******"
              />
            </div>

            <div className="mb-2">
              <div className="my-5 flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="accent-cyan-500 mr-2"
                  />
                  <label htmlFor="remember" className="text-gray-400 text-sm">
                    Saya setuju dengan{" "}
                    <a className="text-cyan-500" href="/">
                      Ketentuan Layanan
                    </a>{" "}
                    dan{" "}
                    <a className="text-cyan-500" href="/">
                      Kebijakan Privasi
                    </a>
                  </label>
                </div>
              </div>
              <button className="bg-blue-600 px-6 py-2.5 rounded-full font-semibold text-white hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full tracking-wider">
                Register
              </button>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2 mt-3">
                  <span className="h-px bg-gray-300 md:w-32"></span>
                  <span className=" text-gray-500 text-sm font-medium tracking-tight">
                    or register with
                  </span>
                  <span className="h-px bg-gray-300 md:w-32"></span>
                </span>
                <div className="flex items-center justify-center space-x-2">
                  <button className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition duration-300">
                    <FaFacebookF className="text-white" />
                  </button>
                  <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-300">
                    <FcGoogle size={"20"} />
                  </button>
                  <button className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition duration-300">
                    <FaTwitter className="text-white" />
                  </button>
                </div>
              </div>
              <p className="pt-5 text-gray-500 text-sm font-medium tracking-tight">
                Alredy registered ?
                <Link to="/login" className="text-cyan-500 pl-1">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
