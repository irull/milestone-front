import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dyo from "./Pages/Dyo";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import OrderBy from "./Pages/OrderBy";
import About from "./Pages/About";
import ContactUs from "./Pages/Contacts";
import Login from "./Pages/Login";
import Header from "./Pages/Partials/Header/Hedaer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dyo" element={<Dyo />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orderby" element={<OrderBy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
