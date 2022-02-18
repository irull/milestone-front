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
      <Carousel />
    </>
  );
}

export default Home;
