import React from "react";
import { Helmet } from "react-helmet";
import Carousel from "../../Components/Carousel";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Milestone</title>
      </Helmet>
      <div className="z-0">
        <Carousel />
      </div>
    </>
  );
}

export default Home;
