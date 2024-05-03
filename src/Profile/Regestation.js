import './Sinup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

export default function Regestation() {

    const [showpassword, setshowpassword] = useState(false);
    const [showrepassword, setshowrepassword] = useState(false);
    const navigator = useNavigate();
    const [errors, setErrors] = useState({
        username: false,
        FirstName: false,
        LastName: false,
        password: false,
        repassword: false,
        PhoneNumber: false,
        RememberMe: false,
    });

    const [Form, setForm] = useState({
        username: "",
        FirstName: '',
        LastName: '',
        password: '',
        repassword: '',
        PhoneNumber: '',
        RememberMe: '',
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setForm({ ...Form, [name]: newValue });
    }

    const handleLogin = (e) => {
        document.getElementById("vali").style.display = "none";
        document.getElementById("invalid").style.display = "none";
        e.preventDefault();
        const newErrors = {};
        let count = 0;

        // Validate form fields
        Object.keys(Form).forEach((key) => {
            if (Form[key] === "") {
                count++;
                newErrors[key] = true;
            } else {
                newErrors[key] = false;
            }
        });
        // Update errors state
        setErrors(newErrors);
        if (Form.password === Form.repassword) {
            if (count === 0) {
                axios.post(`${process.env.REACT_APP_BASE_URL}/registration`, Form)
                    .then((response) => {
                        if (response.data.code === 200) {
                            navigator("/login")
                        }
                        else {
                            document.getElementById("invalid").style.display = "block";
                        }
                        // console.log(response);

                        // Handle successful response here
                    })
                    .catch((error) => {
                        // console.error(error);
                        document.getElementById("invalid").style.display = "block";
                        // Handle error here
                    });
            } else {
                // console.log("Form has errors");
            }
        }
        else {
            document.getElementById("vali").style.display = "block";
            // document.getElementById("vali").innerHTML = "";

        }
    };

    const showpass = () => {
        setshowpassword(!showpassword);
    }
    const showrepass=()=>{
        setshowrepassword(!showrepassword);
    }


    return (
        <>
            <div className='fitnessimgsinup py-32'>

                <div className="col-lg-5 col-xl-4  ">

                    <div className='lg:block hidden h-full '>
                        <div className=" flex justify-center items-center h-screen  ">

                            <form
                                onSubmit={handleLogin}
                                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full"
                            >
                                <div>
                                    <img alt='' src='https://www.fitnessfirst.com/-/media/project/evolution-wellness/fitness-first/root/country-selection/membership/ff-logo-horizontal-on-light.svg?extension=webp' />
                                    <p className='text-center text-4xl font-semibold my-3'>Registration Page</p>
                                </div>

                                <div className="mb-3">
                                    <p className='text-xs text-red-500 hidden' id='invalid'>invalid verification</p>
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="username"
                                    >
                                        Username <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        value={Form.username}
                                        onChange={handleChange}
                                    />
                                    {errors.username && <p className='text-red-500 text-xs'>This field is required</p>}
                                </div>

                                <div className="mb-3">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="FirstName"
                                    >
                                        First Name <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="First Name"
                                        name="FirstName"
                                        value={Form.FirstName}
                                        onChange={handleChange}
                                    />

                                    {errors.FirstName && <p className='text-red-500 text-xs'>This field is required</p>}
                                </div>

                                <div className="mb-3">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="LastName"
                                    >
                                        Last Name <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Last Name"
                                        name="LastName"
                                        value={Form.LastName}
                                        onChange={handleChange}
                                    />
                                    {errors.LastName && <p className='text-red-500 text-xs'>This field is required</p>}
                                </div>

                                <div className="mb-3">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="password"
                                    >
                                        Password <span className='text-red-500'>*</span>
                                    </label>
                                    <div className='flex gap-2'>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type={showpassword ? 'text' : 'password'}
                                            // id="Password"
                                            placeholder="Password"
                                            name="password"
                                            value={Form.password}
                                            onChange={handleChange}
                                        />
                                        <div className='my-auto'>{showpassword ? <GoEye onClick={showpass} /> : <GoEyeClosed onClick={showpass} />}</div>
                                    </div>
                                    {errors.password && <p className='text-red-500 text-xs'>This field is required</p>}

                                </div>

                                <div className="mb-3">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="repassword"
                                    >
                                        Confirm Password <span className='text-red-500'>*</span>
                                    </label>
                                    <div className='flex gap-2'>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type={showrepassword ? 'text' : 'password'}
                                        placeholder="Confirm Password"
                                        name="repassword"
                                        value={Form.repassword}
                                        onChange={handleChange}
                                    />
                                    <div className='my-auto'>{showrepassword ? <GoEye onClick={showrepass} /> : <GoEyeClosed onClick={showrepass} />}</div>
                                    </div>
                                    {errors.repassword && <p className='text-red-500 text-xs'>This field is required</p>}
                                    <p className='text-red-500 text-xs hidden' id='vali'>Password and Re-Password not match</p>
                                </div>

                                <div className="mb-3">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="PhoneNumber"
                                    >
                                        Phone Number <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="tel"
                                        placeholder="Phone Number"
                                        name="PhoneNumber"
                                        value={Form.PhoneNumber}
                                        onChange={handleChange}
                                    />
                                    {errors.PhoneNumber && <p className='text-red-500 text-xs'>This field is required</p>}
                                </div>

                                <div className="mb-3">
                                    <input
                                        className="mr-2 leading-tight h-4 w-4"
                                        type="checkbox"
                                        name="RememberMe"
                                        checked={Form.RememberMe}
                                        onChange={handleChange}
                                    />
                                    <label className="text-sm" htmlFor="remember_me">
                                        I have read and accepted the Terms and Conditions, Privacy Policy and Health Statement.
                                        <span className='text-red-500'>*</span>
                                    </label>
                                    {errors.RememberMe && <p className='text-red-500 text-xs'>This field is required</p>}
                                </div>

                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                        type="submit"
                                    >
                                        Next
                                    </button>
                                </div>

                                <div className='flex justify-center my-3 font-semibold'>
                                    Back To <Link to='/login' className='text-red-600 hover:underline'> Login</Link>
                                </div>
                            </form>


                        </div>
                    </div>





                </div>

            </div>

            <div className='block lg:hidden'>
                <div className=" flex justify-center items-center h-screen ">

                    <form
                        onSubmit={handleLogin}
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full"
                    >
                        <div>
                            <img alt='' src='https://www.fitnessfirst.com/-/media/project/evolution-wellness/fitness-first/root/country-selection/membership/ff-logo-horizontal-on-light.svg?extension=webp' />
                            <p className='text-center text-4xl font-semibold my-3'>Registration Page</p>
                        </div>

                        <div className="mb-3">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                Username <span className='text-red-500'>*</span>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={Form.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>

                        <div className="mb-3">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="FirstName"
                            >
                                First Name <span className='text-red-500'>*</span>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="First Name"
                                name="FirstName"
                                value={Form.FirstName}
                                onChange={handleChange}
                            />
                            {errors.FirstName && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>

                        <div className="mb-3">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="LastName"
                            >
                                Last Name <span className='text-red-500'>*</span>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Last Name"
                                name="LastName"
                                value={Form.LastName}
                                onChange={handleChange}
                            />
                            {errors.LastName && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>

                        <div className="mb-3">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password <span className='text-red-500'>*</span>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={Form.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>

                        <div className="mb-3">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="repassword"
                            >
                                Confirm Password <span className='text-red-500'>*</span>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Confirm Password"
                                name="repassword"
                                value={Form.repassword}
                                onChange={handleChange}
                            />
                            {errors.repassword && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>

                        <div className="mb-3">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="PhoneNumber"
                            >
                                Phone Number <span className='text-red-500'>*</span>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="tel"
                                placeholder="Phone Number"
                                name="PhoneNumber"
                                value={Form.PhoneNumber}
                                onChange={handleChange}
                            />
                            {errors.PhoneNumber && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>

                        <div className="mb-3">
                            <input
                                className="mr-2 leading-tight h-4 w-4"
                                type="checkbox"
                                name="RememberMe"
                                checked={Form.RememberMe}
                                onChange={handleChange}
                            />
                            <label className="text-sm" htmlFor="remember_me">
                                I have read and accepted the Terms and Conditions, Privacy Policy and Health Statement.
                                <span className='text-red-500'>*</span>
                            </label>
                            {errors.RememberMe && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                type="submit"
                            >
                                Next
                            </button>
                        </div>

                        <div className='flex justify-center my-3 font-semibold'>
                            Back To <Link to='/login' className='text-red-600 hover:underline'> Login</Link>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}
