import React from "react";
import { Helmet } from "react-helmet";
import crew_back from "./assets/image/crew_back.png";
import crew_front from "./assets/image/crew_front.png";

function Dyo() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DYO | Draw Your Own</title>
      </Helmet>
      <div className="container mt-5">
        <h1 className="text-center mb-5 text-3xl font-bold">Draw Your Own</h1>
        <div className="flex gap-x-5 justify-center">
          <div className="flex-col">
            <div className="bg-gray-300 w-40 h-48 mb-11 grow">
              <h3 className="text-center pt-2">Front</h3>
              <img src={crew_front} alt="crew front" />
            </div>
            <div className="bg-gray-300 w-40 h-48 grow">
              <h3 className="text-center pt-2">Back</h3>
              <img src={crew_back} alt="crew back" />
            </div>
          </div>
          <div className="bg-gray-300 w-[32rem] h-[39rem] grow-1">
            <h3 className="text-center pt-2">Preview area</h3>
            <img src={crew_front} alt="crew" className="w-[30rem] mx-auto" />
          </div>
          <div className="bg-gray-400 w-36">tenagh</div>
          <div className="bg-gray-500 w-[28rem]">kiri</div>
        </div>
      </div>
    </>
  );
}

export default Dyo;
