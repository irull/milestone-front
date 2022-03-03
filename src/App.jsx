import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import WebFont from "webfontloader";
import Dyo from "./Pages/Dyo";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/Contacts";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./Components/Navbar";
import Bag from "./Pages/Bag";
import Page404 from "./Pages/Page404";
import Catalog from "./Pages/Order/Catalog";
import CustomOrder from "./Pages/Order/CustomOrder";
import Pricelist from "./Pages/Order/Pricelist";
import Aksesoris from "./Pages/Shop/Aksesoris";
import Anak from "./Pages/Shop/Anak";
import Dewasa from "./Pages/Shop/Dewasa";

WebFont.load({
  google: {
    families: ["Poppins:200,300,400,500,600,700", "sans-serif"],
  },
});

function App() {
  return (
    <div className="App font-sans bg-gray-900 h-full relative ">
      <div className="z-50 fixed top-0 left-0 right-0">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dyo" element={<Dyo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/custom" element={<CustomOrder />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/pricelist" element={<Pricelist />} />
        <Route path="/aksesoris" element={<Aksesoris />} />
        <Route path="/anak" element={<Anak />} />
        <Route path="/dewasa" element={<Dewasa />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
