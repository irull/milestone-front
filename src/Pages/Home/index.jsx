import React from "react";
import { Helmet } from "react-helmet";
import Button from "../../Components/Button";
import Card from "../../Components/Card";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <div className="text-center space-x-2">
        <h1>Halaman Home</h1>
        <button className="bg-blue-500 px-6 py-2.5 rounded-full font-semibold text-white hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200">
          Button inline
        </button>
        <Button>Hallo button primary</Button>
        <Button>Hallo button secondary</Button>
        <Button className="bg-cyan-500 focus:ring-cyan-200 hover:bg-cyan-700">
          Hallo
        </Button>
        <div className="flex mx-5">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
