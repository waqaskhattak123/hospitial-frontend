import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
         <Navbar/>
        <hr></hr>
      <h1 className="text-center mt-[100px] text-5xl text-red-600 h-[50px] font-semibold">
        About Us{" "}
      </h1>
      {/* main div */}
      <div className="text-center mt-[50px]  ">
        <h1 className="font-semibold text-2xl">
          {" "}
          <span className=" text-[#C00B27] text-2xl font-bold">
            Trusted by{" "}
          </span>{" "}
          5,000+{" "}
          <span className=" text-[#C00B27] text-2xl font-bold">
            Doctors,{" "}
          </span>
          Since 2010{" "}
        </h1>
      
        <h1 className="font-semibold text-xl text-justify mx-[300px]">
          Dummy data is on a mission to create a brand-new life for second-hand
          clothes. Everyone deserves outfits they love that don't cost the
          Earth, literally.

        </h1>
        <hr></hr>
        {/* who we are */}
{/* main div */}
<div className="text-center mt-6 mx-[100px] leading-10">
        <h1 className="font-bold text-3xl ">Who We Are</h1>
        <span className="font-semibold">
          We are an American health-tech company headquartered at El-Paso,
          Texas. Our focus is on preventive healthcare with specialty in
          wellness and telemedicine. We believe everyone should have access to
          affordable healthcare from anywhere and at anytime. Our wellness check
          is one of the best in Nigeria using cutting-edge medical technology
          and boasts of tests available nowhere else in the country.
        </span>
      </div>
      {/* main div ended */}
        {/* who we are ended */}
      </div>
      {/* main div ended */}
      <Footer/>
    </div>
  );
};

export default About;
