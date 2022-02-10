import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function index() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 antialiased tracking-tighter text-gray-800">
        <div className="w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h1 className="font-semibold text-2xl mb-5 text-center text-gray-600">
              Login
            </h1>
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
              <button className="bg-blue-600 py-2.5 rounded-full font-semibold text-white hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full">
                Login
              </button>
              <div class="flex flex-col space-y-5">
                <span class="flex items-center justify-center space-x-2 mt-3">
                  <span class="h-px bg-gray-300 w-32"></span>
                  <span class="font-normal text-gray-500">or login with</span>
                  <span class="h-px bg-gray-300 w-32"></span>
                </span>
                <div class="flex items-center justify-center space-x-2">
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
              <p className="pt-5">
                Don't have an account?
                <a href="/register" className="text-cyan-500 pl-1">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
