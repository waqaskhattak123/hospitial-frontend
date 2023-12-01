import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

// import Navbar from "../components/Navbar";
// import TopCharacterOne from "../components/TopCharacterOne";
// import WhoWeAre from "../components/WhoWeAre";
// import OurDoctors from "../components/OurDoctors";
// import SendUsMessage from "../components/SendUsMessage";
// import Footer from "../components/Footer";
// import Registeration from "../components/Registeration";
// import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      {/*       
      <BrowserRouter>
        <Routes>
          
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/topchartone" element={<TopCharacterOne />} />
          <Route path="/whoerare" element={<WhoWeAre />} />
          <Route path="/ourdoctors" element={<OurDoctors />} />
          <Route path="/sendusmessage" element={<SendUsMessage />} />
          <Route path="/footer" element={<Footer />} />
          <Route
            path="/registeration"  element={<Registeration />}
          ></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default LandingPage;
