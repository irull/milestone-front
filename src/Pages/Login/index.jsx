import React from "react";
import Button from "../../Components/Button";

export default function index() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 antialiased tracking-tighter text-gray-800">
        <div className="w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h1 className="font-semibold text-2xl uppercase mb-5">Login</h1>
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
            <div className="mb-5">
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
                  Forgot Password
                </a>
              </div>
              <Button>Login</Button>
              <p className="pt-5">
                Don't have an account?
                <a href="/register" className="text-blue-500 pl-1">
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
