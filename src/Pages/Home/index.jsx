import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Card from "../../Components/Card";

function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Milestone</title>
        </Helmet>
        <div className="text-center space-x-2">
          <h1>Halaman Home</h1>
          <button className="bg-blue-500 px-6 py-2.5 rounded-full font-semibold text-white hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200">
            Button inline
          </button>
          <Button Link to="/blog">
            BUtton Compinent
          </Button>
          <Button>Hallo Component</Button>
          <Button className="bg-cyan-500 focus:ring-cyan-200 hover:bg-cyan-700">
            Blog
          </Button>

          <Link
            to={"/blog"}
            className="bg-blue-500 px-6 py-2.5 rounded-full font-semibold text-white hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
          >
            Blog With Link
          </Link>
          <div className="flex mx-5">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="container">
          <div className="w-full md:w-2/3">
            <div className="text-black py-4 sm:py-8 md:py-16">
              <h1 className="text-xl md:text-3xl font-bold">New Revolution</h1>
              <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <Link
                  to={"/"}
                  className="underline decoration-sky-500 text-sky-400 font-medium"
                >
                  Dolorem quam
                </Link>
                , recusandae quis dolorum veritatis nulla, nemo consequuntur
                temporibus quisquam expedita libero est facere ipsum laboriosam
                eveniet itaque. Rem, dicta temporibus?
              </p>
              <Link
                to={"/"}
                className="bg-cyan-500 text-gray-900 px-6 py-2.5 rounded-xl font-medium inline-flex shadow-inner shadow-gray-400"
              >
                Browse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
