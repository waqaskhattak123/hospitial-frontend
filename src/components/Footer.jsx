import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Footer Started */}
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="none"
                  className=" flex flex-shrink-0 w-[100px] mt-2"
                >
                  <g filter="url(#filter0_d_25_500)">
                    <path
                      d="M34 40V37.1428C34 36.7676 33.9354 36.3961 33.8097 36.0494C33.6841 35.7029 33.5 35.3879 33.2679 35.1224C33.0356 34.8571 32.76 34.6467 32.4568 34.5031C32.1534 34.3596 31.8283 34.2857 31.5 34.2857H21.4993C18.1841 34.2857 15.0047 32.7806 12.6604 30.1015C10.3162 27.4224 8.99918 23.7889 8.99913 20C8.99913 18.124 9.32246 16.2663 9.95066 14.5331C10.5789 12.7998 11.4996 11.225 12.6604 9.89843C13.8211 8.57189 15.1991 7.51963 16.7157 6.80172C18.2323 6.0838 19.8578 5.71433 21.4993 5.71435H31.4993C31.8276 5.71445 32.1529 5.64064 32.4562 5.49711C32.7596 5.35357 33.0354 5.14313 33.2675 4.87781C33.4998 4.61247 33.6839 4.29746 33.8097 3.95076C33.9354 3.60406 34 3.23246 34 2.85717V0H21.4999C19.2017 -1.50743e-10 16.9261 0.517317 14.8029 1.52241C12.6797 2.52751 10.7505 4.00071 9.12554 5.85787C7.50051 7.71505 6.21148 9.91984 5.33204 12.3464C4.45261 14.7729 3.99998 17.3736 4 20C4 25.3042 5.84372 30.3914 9.12557 34.1421C12.4074 37.8928 16.8586 40 21.4999 40H34Z"
                      fill="url(#paint0_linear_25_500)"
                    />
                    <path
                      d="M13.9993 20C13.9993 22.2733 14.7894 24.4533 16.1959 26.0606C17.6024 27.6681 19.51 28.5711 21.499 28.5711H34.0001C35.3262 28.5711 36.5978 29.1732 37.5355 30.2448C38.4731 31.3164 39 32.7699 39 34.2854V39.9998H44.0001V34.2857C44.0001 31.2547 42.9465 28.3478 41.0712 26.2044C39.1957 24.0612 36.6522 22.8572 34.0001 22.8572H21.4994C20.8363 22.8572 20.2004 22.5561 19.7316 22.0204C19.2627 21.4845 18.9993 20.7578 18.9993 20C18.9993 19.2422 19.2627 18.5155 19.7316 17.9797C20.2004 17.4438 20.8363 17.1428 21.4994 17.1428H34.0001C36.6522 17.1428 39.1957 15.9388 41.0712 13.7955C42.9465 11.6523 44.0001 8.74536 44.0001 5.71435V0H38.9992V5.71435C38.9992 7.22967 38.4726 8.68297 37.5351 9.75455C36.5976 10.8261 35.3261 11.4282 34.0001 11.4285H21.4994C20.5144 11.4284 19.5391 11.6501 18.6292 12.0808C17.7192 12.5116 16.8923 13.143 16.1959 13.9389C15.4994 14.7348 14.947 15.6798 14.5701 16.7198C14.1932 17.7597 13.9992 18.8744 13.9993 20Z"
                      fill="url(#paint1_linear_25_500)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_25_500"
                      x={0}
                      y={0}
                      width={48}
                      height={48}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={2} />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_25_500"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_25_500"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_25_500"
                      x1="8.53"
                      y1={20}
                      x2="47.0201"
                      y2={20}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#817696" />
                      <stop offset={1} stopColor="#817698" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_25_500"
                      x1="8.50913"
                      y1="19.9999"
                      x2="47.0301"
                      y2="19.9999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#8575D2" />
                      <stop offset={1} stopColor="#9083D5" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Health Care
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  Quick Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <Link to={"/contact"}>
                    <li className="mb-4">
                      <h1>Contact</h1>
                    </li>
                  </Link>

                  <Link to={"/register"}>
                    <li className="mb-4 cursor-pointer">
                      <h1>CheckUp</h1>
                    </li>
                  </Link>
                  <Link to={"/contact"}>
                    <li className="mb-4 cursor-pointer">
                      <h1>Contact</h1>
                    </li>
                  </Link>
                  <Link to={"/about"}>
                    <li className="mb-4 cursor-pointer">
                      <h1>About Us</h1>
                    </li>
                  </Link>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to={"/about"} className="hover:underline ">
                      Who we Are
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about"} className="hover:underline">
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Follow us */}
            <div>
              <h2 className="mb-6 text-sm font-bold mt-4 text-gray-900 uppercase dark:text-white">
                Working Hours
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 ">
                  <h1 className="font-bold">Monday: 09:00 : 18:00 </h1>
                  <h1 className="font-bold">Tuesday: 09:00 : 18:00 </h1>
                  <h1 className="font-bold">Wedday: 09:00 : 18:00 </h1>
                  <h1 className="font-bold">Thursday: 09:00 : 18:00 </h1>
                  <h1 className="font-bold">Friday: 09:00 : 18:00 </h1>
                  <h1 className="font-bold">Sunday: 09:00 : 18:00 </h1>
                </li>
              </ul>
            </div>
            {/* Follow us ended */}
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                MediLab™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Started Ended */}
    </div>
  );
};

export default Footer;
