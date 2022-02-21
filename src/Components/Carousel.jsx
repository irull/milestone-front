import React from "react";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide relative z-0"
        data-bs-ride="carousel"
      >
        <div className="relative w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
            className="block w-full"
            alt="Wild Landscape"
          />
        </div>
      </div>
    </>
  );
}
