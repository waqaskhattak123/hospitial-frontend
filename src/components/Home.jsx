import React, { useState } from "react";
import { Link } from "react-router-dom";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import four from "../images/four.png";
import five from "../images/five.jpg";
import six from "../images/six.jpg";
import seven from "../images/seven.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* BG Charackter */}
      <div className="flex flex-col md:grid md:grid-cols-2 flex-grow-0 lg:flex lg:flex-row lg:mx-20 mt-14">
        <div
          className="w-auto flex-shrink-0 flex-nowrap mt-4 md:w-[500px]  lg:w-[500px] xl:w-[600px]"
          data-aos="fade-down"
          data-aos-anchor-placement="bottom-bottom"
        >
          <h1 className="text-center font-black text-xl leading-10 font-serif md:text-3xl md:font-bold md:mt-[70px] md:mb-5 lg:inline-flex lg:text-[50px] lg:leading-10">
            We help people to get appointment in online
          </h1>
          <p className="text-justify leading-8 mx-10 md:flex-shrink-1">
            Lorem Media is a full-service social media agency. We offer
            businesses innovative solutions that deliver the right type of
            audience to you in the most effective strategies possible. We strive
            to develop a community around your business, polishing your
            branding, and improving your public relations. Lorem Media is a
            full-service social media agency. We offer businesses innovative
            solutions that deliver the right type of audience to you in the most
            effective strategies possible. We strive to develop a community
            around your business, polishing your branding, and improving your
            public relations.
            <br></br>
            <Link to={"/register"}>
              <button
                type="button"
                className="text-white  bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              >
                CheckUp Now
              </button>
            </Link>
          </p>
        </div>
        <div className="flex bg-blue-100 justify-center sm:justify-center md:justify-center lg:justify-center rounded-full flex-row-reverse mt-4 md:mx-auto md:flex-shrink-1 lg:w-[700px] ">
          <img src={two} className="w-[200px]  md:w-[200px] lg:w-[300px] " />
          <img src={one} className="w-[200px] md:flex-shrink-1 lg:w-[300px] " />
        </div>
      </div>

      {/* BG Charackter ended*/}
      {/* main div */}
      <div
        className="md:grid md:grid-cols-2 md:mt-[100px] lg:mx-20 "
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div>
          <img src={three} className="w-[600px] " />
        </div>
        <div className="text-center">
          <h1 className="font-bold font-serif">Biblography</h1>
          <h1 className="text-center font-black text-xl leading-10 font-serif">
            Who We Are
          </h1>
          <p className="font-serif text-justify leading-8 mx-10">
            Lorem Media is a full-service social media agency. We offer
            businesses innovative solutions that deliver the right type of
            audience to you in the most effective strategies possible. We strive
            to develop a community around your business, polishing your
            branding, and improving your public relations. Social Media is now
            one of the most powerful marketing tools with the ability to
            communicate with a target audience in real time. It's 2019: time to
            sink or swim. We are your Social Media Marketing Agency.
          </p>
          <div>
            <button
              type="button"
              className="text-white inline-flex mt-3 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
            >
              See more
              <i>
                {" "}
                <svg
                  className="w-3.5 h-3.5 ml-2 mt-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>
      </div>
      {/* main div */}
      {/* NeroScince Cards */}
      {/* Card -1 */}
      <div
        className="sm:grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:mx-20"
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className="max-w-sm bg-white border mt-[30px] mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={four} alt="" />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div></div>
            <button
              type="button"
              className="text-white inline-flex mt-3 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
            >
              See more
              <i>
                {" "}
                <svg
                  className="w-3.5 h-3.5 ml-2 mt-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>
        {/* Card1 */}
        {/* Card2 */}
        <div className="max-w-sm bg-white border mt-[30px] mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={five} alt="" />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div></div>
            <button
              type="button"
              className="text-white inline-flex mt-3 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
            >
              See more
              <i>
                {" "}
                <svg
                  className="w-3.5 h-3.5 ml-2 mt-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>
        {/* card-2 */}
        {/* card-3 */}
        <div className="max-w-sm bg-white border mt-[30px] mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={six} alt="" />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div></div>
            <button
              type="button"
              className="text-white inline-flex mt-3 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
            >
              See more
              <i>
                {" "}
                <svg
                  className="w-3.5 h-3.5 ml-2 mt-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>
        {/* card-3 */}
        {/* card-4 */}
        <div className="max-w-sm bg-white border mt-[30px] mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={seven} alt="" />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div></div>
            <button
              type="button"
              className="text-white inline-flex mt-3 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
            >
              See more
              <i>
                {" "}
                <svg
                  className="w-3.5 h-3.5 ml-2 mt-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>
        {/* card-4  */}
      </div>
      {/* NeroScince Cards ended */}

      <div className="sm:grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:mx-20">
        {/* our Doctors Cards 1 */}
        <div className="w-full max-w-sm mx-auto mt-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-row  items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={seven}
              alt="Bonnie image"
            />
            <div>
              <h5 className="mb-1 text-xl mx-3 font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <h1 className="text-md mx-3 text-gray-500 dark:text-gray-400">
                Visual Designer
              </h1>
            </div>
          </div>
        </div>
        {/* our Doctors Cards Ended 1 */}
        {/* our Doctors Cards 2 */}
        <div className="w-full max-w-sm mx-auto mt-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-row  items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={seven}
              alt="Bonnie image"
            />
            <div>
              <h5 className="mb-1 text-xl mx-3 font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <h1 className="text-md mx-3 text-gray-500 dark:text-gray-400">
                Visual Designer
              </h1>
            </div>
          </div>
        </div>
        {/* our Doctors Cards Ended 2 */}
        {/* our Doctors Cards 3 */}
        <div className="w-full max-w-sm mx-auto mt-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-row  items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={seven}
              alt="Bonnie image"
            />
            <div>
              <h5 className="mb-1 text-xl mx-3 font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <h1 className="text-md mx-3 text-gray-500 dark:text-gray-400">
                Visual Designer
              </h1>
            </div>
          </div>
        </div>
        {/* our Doctors Cards Ended 3 */}
        {/* our Doctors Cards 4 */}
        <div className="w-full max-w-sm mx-auto mt-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-row  items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={seven}
              alt="Bonnie image"
            />
            <div>
              <h5 className="mb-1 text-xl mx-3 font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <h1 className="text-md mx-3 text-gray-500 dark:text-gray-400">
                Visual Designer
              </h1>
            </div>
          </div>
        </div>
        {/* our Doctors Cards Ended 4 */}
      </div>
      <h1 className="font-serif text-2xl font-semibold text-center mt-3">
        Send Us a Message
      </h1>
      <div
        className="flex flex-col sm:flex-row w-full  md:pl-8"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        {/* sene us messsage */}
        {/* cards started */}
        <div className="w-full mb-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span className="sr-only">Open dropdown</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            {/* Dropdown menu */}
            <div
              id="dropdown"
              className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={one}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Mr X CEO
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              CEO of The Department
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Mob: 4444444
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Email: Email@gmail.com
            </span>
          </div>
        </div>

        {/* cards ended */}
        {/* sene us messsage ended */}
        {/* sene us messsage */}
        {/* cards started */}
        <div className="w-full max-w-sm mb-4 mx-auto lg:mr-[150px] xl:mr-[250px] bg-white border md:mx-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span className="sr-only">Open dropdown</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            {/* Dropdown menu */}
            <div
              id="dropdown"
              className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={four}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Mr Y CEO
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              CEO of The Department
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Mob: 85340580
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Email: gdfgmd485@gmail.com
            </span>
          </div>
        </div>

        {/* cards ended */}
        {/* sene us messsage ended */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
