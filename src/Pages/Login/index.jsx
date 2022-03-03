import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Index() {
  //define state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //define state validation
  const [validation, setValidation] = useState("");

  //define history
  const history = useNavigate();

  //hook useEffect
  useEffect(() => {
    //check token
    if (localStorage.getItem("token")) {
      //redirect page
      history("/");
    }
  }, []);

  //function "loginHandler"
  const loginHandler = async (e) => {
    e.preventDefault();

    //initialize formData
    const formData = new FormData();

    //apend data to formData
    formData.append("email", email);
    formData.append("password", password);

    //send data to server
    await axios
      .post("http://localhost:8000/api/login", formData)
      .then((response) => {
        //set token on localstorage
        localStorage.setItem("token", response.data.token);
        //redirect to
        history("/");
      })
      .catch((error) => {
        //assign error to state "validation"
        setValidation(error.response.data);
      });
  };

  //popup forgot password
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 antialiased tracking-tighter text-gray-800">
        <div className="md:w-1/2.5">
          <form onSubmit={loginHandler}>
            <div className="bg-gray-800 p-6 rounded-2xl shadow">
              <h1 className="font-semibold text-2xl mb-5 text-center text-gray-300 tracking-wider">
                Login
              </h1>
              {validation.message && (
                <div className="bg-red-500/75 text-white py-2 px-4 rounded font-light text-sm tracking-wider">
                  {validation.message}
                </div>
              )}

              <div className="mb-0">
                <label className="block">
                  <span className="block font-medium text-sm tracking-wider text-gray-300 mb-2">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border w-full px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition duration-200 shadow-sm mb-4 invalid:text-pink-500 invalid:focus:ring-pink-500 invalid:focus:border-pink-500"
                    placeholder="name@mail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                {validation.email && (
                  <div className="bg-red-500/75 text-white py-2 px-4 rounded font-light text-sm tracking-wider">
                    {validation.email[0]}
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block mb-2 font-medium text-sm tracking-wider text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border w-full px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition duration-200 shadow-sm placeholder:"
                  placeholder="******"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {validation.password && (
                  <div className="bg-red-500/75 text-white py-2 px-4 rounded font-light text-sm tracking-wider">
                    {validation.password[0]}
                  </div>
                )}
                <div className="my-5 flex justify-between">
                  <div>
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="accent-cyan-500 mr-2"
                    />
                    <label
                      className="text-gray-300 font-medium text-sm tracking-wider"
                      htmlFor="remember"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={openModal}
                    className="text-cyan-500 font-medium text-sm tracking-wider"
                  >
                    Forgot Password?
                  </button>
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={closeModal}
                    >
                      <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                          className="inline-block h-screen align-middle"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-cyan-500 shadow-xl rounded-2xl">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-800"
                            >
                              Forgot Password ???
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-700">
                                Relax, and try to remember your passwords, such
                                as your birthday, or your ex's birthday, or your
                                pet's name. Remember?
                              </p>
                            </div>

                            <div className="mt-4 flex justify-between">
                              <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-800 hover:text-blue-900 transition"
                                onClick={closeModal}
                              >
                                Yes, thanks!
                              </button>
                              <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                onClick={closeModal}
                              >
                                No, Stil forgot!
                              </button>
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition>
                </div>
                <button
                  className="bg-blue-600 py-2.5 rounded-full font-semibold text-white hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full tracking-wider"
                  type="submit"
                >
                  Login
                </button>
                <div className="flex flex-col space-y-5">
                  <span className="flex items-center justify-center space-x-2 mt-3">
                    <span className="h-px bg-gray-300 md:w-32"></span>
                    <span className=" text-gray-300 font-medium text-sm tracking-tight">
                      or login with
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
                <p className="pt-5 text-gray-300 font-medium text-sm tracking-tight">
                  Don't have an account?
                  <Link to="/register" className="text-cyan-500 pl-1">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
