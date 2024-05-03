import React, { useState } from 'react';
import './Sinup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Sinup() {
    const navigation = useNavigate();

    const [errors, setErrors] = useState({
        username: false,
        RememberMe: false
    });

    const [Form, setForm] = useState({
        username: "",
        RememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setForm({ ...Form, [name]: newValue });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        document.getElementById('vali').style.display = 'none';
        let count = 0;
        if (Form.username === "") {
            setErrors(prevErrors => ({
                ...prevErrors,
                username: true
            }));
            count++;
        }
        else {
            setErrors(prevErrors => ({
                ...prevErrors,
                username: false
            }));
        }

        if (Form.RememberMe === false) {
            setErrors(prevErrors => ({
                ...prevErrors,
                RememberMe: true
            }));
            count++;
        }
        else {
            setErrors(prevErrors => ({
                ...prevErrors,
                RememberMe: false
            }));
        }
        // console.log(Form.username)
        // const fromdata=new FormData();
        // fromdata.append("username", Form.username);
        // console.log(fromdata);
        if (count === 0) {
            axios.post(`${process.env.REACT_APP_BASE_URL}/sinup`, Form)
                .then((res) => {
                    if (res.data.code === 200) {

                        // console.log("success");
                        navigation("/emailverify", { state: { Form: Form } });
                    }
                    else {
                        document.getElementById('vali').style.display = 'block';
                        // console.log("not Succes");
                    }
                    // console.log(res.data.code);
                })
                .catch(function (error) {
                    document.getElementById('vali').style.display = 'block';
                    // console.log(error);
                });
        }

        // console.log(Form);
    }


    return (
        <>
            <div className='fitnessimgsinup'>

                <div className="col-lg-5 col-xl-4  ">

                    <div className='lg:block hidden'>
                        <div className=" flex justify-center items-center h-screen ">

                            <form

                                onSubmit={handleLogin}
                                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full"
                            >

                                <div><img alt='' src='https://www.fitnessfirst.com/-/media/project/evolution-wellness/fitness-first/root/country-selection/membership/ff-logo-horizontal-on-light.svg?extension=webp' />
                                    <p className='text-center text-4xl font-semibold my-3'>Sign up</p>
                                    <p className='text-gray-500 my-8'>The email has to be the same email registered under your membership</p>
                                </div>

                                <div className="mb-3">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2 "
                                        htmlFor="username"
                                    >
                                        Username <span className='text-red-500 '>*</span>
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
                                    <p className='text-red-500 text-xs hidden' id='vali'>please enter valid email'id</p>
                                </div>

                                <div className="mb-3">
                                    <input
                                        className="mr-2 leading-tight h-4 w-4 "

                                        type="checkbox"
                                        name="RememberMe"
                                        checked={Form.RememberMe}
                                        onChange={handleChange}

                                    />
                                    <label className="text-sm " htmlFor="remember_me">
                                        I have read and accepted the Terms and Conditions, Privacy Policy and Health Statement.<span className='text-red-500 '>*</span>
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
                                <div className=' flex justify-center my-3  font-semibold '>Back To <Link to='/login' className='text-red-600  hover:underline'> Login</Link> </div>
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

                        <div><img alt='' src='https://www.fitnessfirst.com/-/media/project/evolution-wellness/fitness-first/root/country-selection/membership/ff-logo-horizontal-on-light.svg?extension=webp' />
                            <p className='text-center text-4xl font-semibold my-3'>Sign up</p>
                            <p className='text-gray-500 my-8'>The email has to be the same email registered under your membership</p>
                        </div>

                        <div className="mb-3">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 "
                                htmlFor="username"
                            >
                                Username <span className='text-red-500 '>*</span>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                                type="email"
                                placeholder="Username"
                                name="username"
                                value={Form.username}
                                onChange={handleChange}

                            />
                            {errors.username && <p className='text-red-500 text-xs'>This field is required</p>}
                        </div>

                        <div className="mb-3">
                            <input
                                className="mr-2 leading-tight h-4 w-4 "

                                type="checkbox"
                                name="RememberMe"
                                checked={Form.RememberMe}
                                onChange={handleChange}

                            />
                            <label className="text-sm " htmlFor="remember_me">
                                I have read and accepted the Terms and Conditions, Privacy Policy and Health Statement.<span className='text-red-500 '>*</span>
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
                        <div className=' flex justify-center my-3  font-semibold '>Back To <Link to='/login' className='text-red-600  hover:underline'> Login</Link> </div>
                    </form>

                </div>
            </div>

        </>
    )
}
