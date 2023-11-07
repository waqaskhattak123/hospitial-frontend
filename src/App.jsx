import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registeration from "./components/Registeration";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import About from "./components/About";
import Contact from "./components/contact";
import Store from "./components/Store";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Payment from "./components/Payment";

function App() {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Home></Home>}/>
      <Route path="/register" element={<Registeration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<UserProfile/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/Payment" element={<Payment/>}/>
    </Routes>
    </BrowserRouter>
    
  
    </>
  );
}

export default App;
