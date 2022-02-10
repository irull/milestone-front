import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

export default function index() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 antialiased tracking-tighter text-gray-800">
        <div className="w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h1 className="font-semibold text-2xl uppercase mb-5">Login</h1>
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block mb-2 font-medium text-sm text-gray-500"
              >
                Nama
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
                className="block mb-2 font-medium text-sm text-gray-500"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border w-full px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition duration-200 shadow-sm"
                placeholder="Jhon@mail.com"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block mb-2 font-medium text-sm text-gray-500"
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
              <label
                htmlFor="password"
                className="block mb-2 font-medium text-sm text-gray-500"
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
              <div className="my-5 flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="accent-cyan-500 mr-2"
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="/" className="visited:text-cyan-500">
                  Forgot Password?
                </a>
              </div>
              <button className="bg-blue-500 px-6 py-2.5 rounded-full font-semibold text-white hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full">
                Login
              </button>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2 mt-3">
                  <span className="h-px bg-gray-300 w-32"></span>
                  <span className="font-normal text-gray-500">
                    or register with
                  </span>
                  <span className="h-px bg-gray-300 w-32"></span>
                </span>
                <div className="flex items-center justify-center space-x-2">
                  <button className="bg-blue-700 p-2 rounded-full">
                    <FaFacebookF className="text-white" />
                  </button>
                  <button className="bg-blue-700 p-2 rounded-full">
                    <FaGoogle className="text-white" />
                  </button>
                  <button className="bg-blue-500 p-2 rounded-full">
                    <FaTwitter className="text-white" />
                  </button>
                </div>
              </div>
              <p className="pt-5">
                Alredy registered ?
                <a href="/login" className="text-cyan-500 pl-1">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
