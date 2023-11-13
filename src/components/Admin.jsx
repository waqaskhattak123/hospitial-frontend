import React, { useEffect, useState } from 'react';
import css from '../components/assets/css/style.css'
import imagesOne from '../components/assets/imgs/customer01.jpg'
import imagesTwo from '../components/assets/imgs/customer02.jpg'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Admin = () => {
    const [ApiData, setData] = useState([])
    const FetchingData = async () => {
        try {
            const getingData = await axios.get('http://localhost:8080/ap2/v2/getremaining')
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

            <>

                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Responsive Admin Dashboard | Korsat X Parmaga</title>
                {/* ======= Styles ====== */}
                <link rel="stylesheet" href="assets/css/style.css" />
                {/* =============== Navigation ================ */}
                <div className="container">
                    <div className="navigation">
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
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <ion-icon name="chatbubble-outline" />
                                    </span>
                                    <Link to={'/totalstore'}>
                                        <span className="title">Store</span>

                                    </Link>
                                </a>
                            </li>



                        </ul>
                    </div>
                    {/* ========================= Main ==================== */}
                    <div className="main">
                        <div className="topbar">
                            <div className="toggle">
                                <ion-icon name="menu-outline" />
                            </div>
                            <div className="search">
                                <label>
                                    <input type="text" placeholder="Search here" />
                                    <ion-icon name="search-outline" />
                                </label>
                            </div>
                            <div className="user">
                                <img src={imagesOne} alt="" />
                            </div>
                        </div>
                        {/* ======================= Cards ================== */}
                        <div className="cardBox">
                            <div className="card">
                                <div>
                                    <div className="numbers">1,504</div>
                                    <div className="cardName">Daily Views</div>
                                </div>
                                <div className="iconBx">
                                    <ion-icon name="eye-outline" />
                                </div>
                            </div>
                            <div className="card">
                                <div>
                                    <div className="numbers">80</div>
                                    <div className="cardName">Sales</div>
                                </div>
                                <div className="iconBx">
                                    <ion-icon name="cart-outline" />
                                </div>
                            </div>
                            <div className="card">
                                <div>
                                    <div className="numbers">284</div>
                                    <div className="cardName">Comments</div>
                                </div>
                                <div className="iconBx">
                                    <ion-icon name="chatbubbles-outline" />
                                </div>
                            </div>
                            <div className="card">
                                <div>
                                    <div className="numbers">$7,842</div>
                                    <div className="cardName">Earning</div>
                                </div>
                                <div className="iconBx">
                                    <ion-icon name="cash-outline" />
                                </div>
                            </div>
                        </div>
                        {/* ================ Order Details List ================= */}

                        {/* old tables started */}
                        <div className="details">
                            <div className="recentOrders">
                                <div className="cardHeader">
                                    <h2 className='text-2xl'>Patient Records:</h2>
                                    <Link to='/totalstore'>
                                        <a className="btn">
                                            View Store
                                        </a>

                                    </Link>
                                </div>
                                <table>

                                    <tr className='flex flex-row'>
                                        <tr>

                                            <td className='font-bold text-xl'>Name</td>
                                        </tr>
                                        <tr>
                                            <td className='font-semibold'>Medicine:1</td>

                                        </tr>
                                        <tr>
                                            <td className='font-semibold'>Quantity:</td>

                                        </tr>
                                        <tr>
                                            <td className='font-semibold'>Medicine:2</td>

                                        </tr>
                                        <tr>
                                            <td className='font-semibold'>Quantity</td>

                                        </tr>
                                        <tr>
                                            <td className='font-semibold'>Medicine:3</td>

                                        </tr>
                                        <tr>
                                            <td className='font-semibold'>Qunatity:</td>

                                        </tr>
                                        <tr>
                                            <td className='font-semibold'>Status:</td>

                                        </tr>
                                    </tr>



                                    <tbody>
                                        {
                                            ApiData.map((element) => {
                                                return (
                                                    <div>

                                                        <tr>
                                                            <td>{element.username.slice(0, 8)}...</td>
                                                          
                                                            <td>{element.medicine1}</td>
                                                            <td>{element.quantity1}</td>
                                                            <td>{element.medicine2}</td>
                                                            <td>{element.quantity2}</td>
                                                            <td>{element.medicine3}</td>
                                                            <td>{element.quantity3}</td>
                                                            <td>{element.medicine4}</td>
                                                            <td>{element.quantity4}</td>
                                                            <td>
                                                                <span className="status delivered">Delivered</span>
                                                            </td>
                                                        </tr>



                                                    </div>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            {/* ================= New Customers ================ */}

                        </div>
                        {/* old tables ended */}
                    </div>
                </div>
                {/* =========== Scripts =========  */}
                {/* ====== ionicons ======= */}
            </>

        </div>
    )
};
export default Admin;