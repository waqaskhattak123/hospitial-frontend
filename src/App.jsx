import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registeration from "./components/Registeration";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import About from "./components/About";
import Contact from "./components/contact";
import Store from "./components/Store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Payment from "./components/Payment";
import Admin from "./components/Admin";
import Child from "./components/ChildCompo";
import TotalStore from "./components/TotalStore";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
    <div className="bg-gray-300">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home></Home>} />
          <Route path="/register" element={<Registeration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/child" element={<Child />} />
          <Route path="/totalstore" element={<TotalStore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
