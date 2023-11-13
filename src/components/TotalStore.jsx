import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from '../components/assets/css/style.css'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const TotalStore = () => {
    const [ApiData, setData] = useState([])
    const FetchingData = async () => {
        try {
            const getingData = await axios.get('http://localhost:8080/ap2/v2/getMedcine')
            // console.log(getingData.data)
            const response = getingData.data
            setData(response.store)
        }
        catch (error) {
            console.log('Error Fetching Data' + error)
        }
    }
    useEffect(() => {
        FetchingData()
    }, [])
    console.log(ApiData)

    return (
        <div>
            <Navbar />
            <Link to={'/admin'}>
                <button
                    type="button"
                    className="text-white mt-[80px] ml-[100px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Back
                </button>

            </Link>

            <h1 className='my-5 mx-[200px] text-2xl font-bold'>Remaing Medicines:</h1>

            <div className="relative overflow-x-auto ">
                <table className="w-[900px] text-lg mx-[100px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Medicines:
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quanity :
                            </th>

                        </tr>
                    </thead>
                    {
                        ApiData.map((element) => {
                            return (
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {element.medicine1}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {element.quantity1}
                                        </th>

                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {element.medicine2}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {element.quantity2}
                                        </th>

                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {element.medicine3}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {element.quantity3}
                                        </th>

                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {element.medicine4}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {element.quantity4}
                                        </th>

                                    </tr>
                                    {/* <tr>
                                        <th>{element.medicine3}</th>
                                        <th>{element.quantity3}</th>
                                    </tr>
                                    <tr>
                                        <th>{element.medicine4}</th>
                                        <th>{element.quantity4}</th>
                                    </tr> */}

                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
            <Footer />
        </div>
    )
};
export default TotalStore;