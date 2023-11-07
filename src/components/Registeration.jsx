import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Registeration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sucess, setsuccess] = useState(false);
  const [sucess1, setsuccess1] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birth: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/vi/create1", formData);
      setsuccess(true);
      setTimeout(() => {
        setsuccess(false);
      }, 3000);
      toast.success("SignUp Successfull", {
        position: "top-right",
        autoClose: 2000, // in milliseconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/login')
      // console.log("ghfhjkl")
    } catch (error) {
      console.error("Error adding user:", error);
      toast.info("error Successfull", {
        position: "top-right",
        autoClose: 2000, // in milliseconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setFormData({
      name: "",
      email: "",
      password: "",
      birth: "",
    });
  };
  return (
    <div>
      <Navbar />
      {/* sene us messsage */}
      <div>
        <div>
          <form className="justify-center mt-[100px]" onSubmit={handleSubmit}>
            <h1 className="font-serif text-2xl font-semibold text-center mt-3">
              Register Here
            </h1>
            <div className="mx-20 flex flex-col pt-2  lg:mx-[400px] ">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="outline-none h-[40px] text-center  mb-3 bg-blue-100 rounded-xl placeholder:text-center"
              />

              <input
                type="number"
                placeholder="Mobile Number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="outline-none h-[40px] text-center mb-3 bg-blue-100 rounded-xl placeholder:text-center"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="outline-none  h-[40px] mb-3 bg-blue-100 text-center rounded-xl placeholder:text-center"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="outline-none  h-[40px] mb-3 bg-blue-100 text-center rounded-xl placeholder:text-center"
              />

              <button
                type="submit"
                className="text-white  lg:w-[50%] lg:mx-auto bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* sene us messsage ended */}
      <Footer />
    </div>
  );
};

export default Registeration;
