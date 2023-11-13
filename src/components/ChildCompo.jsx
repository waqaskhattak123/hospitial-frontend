import React, { useState } from 'react';
import css from '../components/assets/css/style.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from './Navbar';

const Child = () => {
    const [formData, setFormData] = useState({
        username: '',
        fathername: '',
        disease: '',
        quantity1: "",
        quantity2: "",
        quantity3: "",
        quantity4: "",
        medicine1: 'Albuterol',
        medicine2: 'Cephalexin',
        medicine3: 'Azithromycin',
        medicine4: 'Fluticasone',
    });
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataWithNumbers = {
                ...formData,
                quantity1: parseInt(formData.quantity1, 10) || 0,
                quantity2: parseInt(formData.quantity2, 10) || 0,
                quantity3: parseInt(formData.quantity3, 10) || 0,
                quantity4: parseInt(formData.quantity4, 10) || 0,
            };
            console.log('formDataWithNumbers:', formDataWithNumbers);
            const response = await axios.post('http://localhost:8080/ap2/v2/deliver', formDataWithNumbers);
            // Toast Messagge for Succes
            toast.success("Patients is Added", {
                position: "top-right",
                autoClose: 2000, // in milliseconds
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setFormData({
                username: '',
                fathername: '',
                disease: '',
                quantity1: '',
                quantity2: '',
                quantity3: '',
                quantity4: '',
                medicine1: '',
                medicine2: '',
                medicine3: '',
                medicine4: '',

            })
            navigate('/admin');


        }
        catch (error) {
            console.log( "Error While Created User" + error)
            toast.info("Error", {
                position: "top-right",
                autoClose: 2000, // in milliseconds
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    };
    return (
        <div>
            <Navbar/>
            <div className="navigation mt-[60px]">
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="logo-apple" />
                            </span>
                            <span className="title text-2xl">Basic Health Care</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="icon">
                                <ion-icon name="home-outline" />
                            </span>
                            <Link to={'/admin'}>
                                <span className="title">Dashboard</span>

                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="people-outline" />
                            </span>
                            <Link to={'/child'}>
                                <span className="title">Check Patients</span>

                            </Link>
                        </a>
                    </li>

                </ul>
            </div>

            {/* tables started */}
            <form className='w-[500px] ml-[500px] mt-[100px] relative' onSubmit={handleSubmit}>
                <div className="relative z-0  mb-6 group">
                    <input
                        type="text"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                        name='username'
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Name
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        id="floating_password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                        name='fathername'
                        value={formData.fathername}
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        F.Name
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"

                        id="floating_repeat_password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                        name='disease'
                        value={formData.disease}
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor="floating_repeat_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Disease
                    </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <h1>{formData.medicine1}</h1>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="number"

                            id="floating_last_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required=""
                            name='quantity1'
                            value={formData.quantity1}
                            onChange={handleInputChange}
                        />
                        <label
                            htmlFor="floating_last_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Enter Quantitiy
                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <h1>{formData.medicine2}</h1>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"

                            id="floating_last_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required=""
                            name='quantity2'
                            value={formData.quantity2}
                            onChange={handleInputChange}
                        />
                        <label
                            htmlFor="floating_last_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Enter Quantitiy
                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <h1>{formData.medicine3}</h1>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"

                            id="floating_last_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required=""
                            name='quantity3'
                            value={formData.quantity3}
                            onChange={handleInputChange}
                        />
                        <label
                            htmlFor="floating_last_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Enter Quantitiy
                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <h1>{formData.medicine4}</h1>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"

                            id="floating_last_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required=""
                            name='quantity4'
                            value={formData.quantity4}
                            onChange={handleInputChange}

                        />
                        <label
                            htmlFor="floating_last_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Enter Quantitiy
                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>

            {/* tables ended */}
        </div>

    )
};
export default Child;