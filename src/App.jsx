import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import WebFont from "webfontloader";
import Dyo from "./Pages/Dyo";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import OrderBy from "./Pages/OrderBy";
import About from "./Pages/About";
import ContactUs from "./Pages/Contacts";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./Components/Navbar";
import Bag from "./Pages/Bag";
import Page404 from "./Pages/Page404";

WebFont.load({
  google: {
    families: ["Poppins:200,300,400,500,600", "sans-serif"],
  },
});

function App() {
  return (
    <div className="App font-sans bg-gray-200 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dyo" element={<Dyo />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orderby" element={<OrderBy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
