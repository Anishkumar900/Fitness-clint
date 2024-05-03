import React, { useState, useEffect } from 'react';
import "./ForgotPassword.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

export default function PasswordChange() {
    const location = useLocation();

    const [showpassword, setshowpassword] = useState(false);
    const [showrepassword, setshowrepassword] = useState(false);


    const navigator = useNavigate();
    const [errors, setErrors] = useState({
        password: false,
        repassword: false,
        RememberMe: false
    });

    const [Form, setForm] = useState({
        username: location.state.username,
        password: "",
        repassword: "",
        RememberMe: false
    });


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setForm({ ...Form, [name]: newValue });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        document.getElementById("vali").style.display= "none";
        let count = 0
        if (Form.password === "") {
            setErrors(prevErrors => ({ ...prevErrors, password: true }));
            count++;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, password: false }));
        }

        if (Form.repassword === "") {
            setErrors(prevErrors => ({ ...prevErrors, repassword: true }));
            count++;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, repassword: false }));
        }

        if (!Form.RememberMe) {
            setErrors(prevErrors => ({ ...prevErrors, RememberMe: true }));
            count++;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, RememberMe: false }));
        }

        if (count === 0 ) {
            if(Form.password===Form.repassword){
                console.log(Form);
            axios.post(`${process.env.REACT_APP_BASE_URL}/resetpassword`,{
                Form
            })
            .then((res)=>{
                if(res.data.code===200){
                    navigator('/login')
                }
                else{
                    document.getElementById("vali").style.display= "block";
                }
                // console.log(res);
            })
            .catch((err)=>{
                // console.log(err);
                document.getElementById("vali").style.display= "block";
            })
            }else{
                document.getElementById("vali").style.display= "block";
            }
            
        }
        // else {
        //     console.log(Form);
        // }

    }

    const showpass = () => {
        setshowpassword(!showpassword);
    }
    const showrepass = () => {
        setshowrepassword(!showrepassword)
    }

    // console.log(location.state.username);

    useEffect(() => {
        // console.log(location.state);
        if (location.state === null) {
            navigator("/forgot-pass");
        }
    }, [])
    // console.log(errors.password);

    return (
        <>
            <div className='fitnessimg'>
                <div className="col-lg-5 col-xl-4 ">

                    <div className='lg:block hidden'>
                        <div className=" flex justify-center items-center h-screen ">

                            <form

                                onSubmit={handleLogin}
                                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full"
                            >

                                <div><img alt='' src='https://www.fitnessfirst.com/-/media/project/evolution-wellness/fitness-first/root/country-selection/membership/ff-logo-horizontal-on-light.svg?extension=webp' />
                                    <p className='text-center text-xl font-semibold my-3'>Let's get you started</p>
                                    <p className='text-gray-500 my-8'>Enter your Password and Conform Password For reset Password </p>
                                </div>

                                    <p className='text-xs text-red-500 hidden' id='vali'>Invalid Input</p>
                                <div className="mb-3">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="password"
                                    >
                                        Password <span className='text-red-500 '>*</span>
                                    </label>
                                    <div className='flex gap-2'>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"

                                            type={showpassword ? 'text' : 'password'}
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
                                        Conform Password <span className='text-red-500 '>*</span>
                                    </label>
                                    <div className='flex gap-2'>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"

                                            type={showrepassword ? 'text' : 'password'}
                                            placeholder="Conform Password"
                                            name="repassword"
                                            value={Form.repassword}
                                            onChange={handleChange}


                                        />
                                        <div className='my-auto'>{showrepassword ? <GoEye onClick={showrepass} /> : <GoEyeClosed onClick={showrepass} />}</div>
                                    </div>
                                    {errors.repassword && <p className='text-red-500 text-xs'>This field is required</p>}
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
                                        Remember Me<span className='text-red-500 '>*</span>
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
                                <div className=' flex justify-center my-3  font-semibold '> Log in <Link to='/login' className='text-red-600 hover:underline mx-3'>Login</Link> </div>
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
                            <p className='text-center text-xl font-semibold my-3'>Let's get you started</p>
                            <p className='text-gray-500 my-8'>Enter your Password and Conform Password For reset Password </p>
                        </div>


                        <div className="mb-3">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password <span className='text-red-500 '>*</span>
                            </label>
                            <div className='flex gap-2'>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"

                                    type={showpassword ? 'text' : 'password'}
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
                                Conform Password <span className='text-red-500 '>*</span>
                            </label>
                            <div className='flex gap-2'>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"

                                    type={showrepassword ? 'text' : 'password'}
                                    placeholder="Conform Password"
                                    name="repassword"
                                    value={Form.repassword}
                                    onChange={handleChange}


                                />
                                <div className='my-auto'>{showrepassword ? <GoEye onClick={showrepass} /> : <GoEyeClosed onClick={showrepass} />}</div>
                            </div>
                            {errors.repassword && <p className='text-red-500 text-xs'>This field is required</p>}
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
                                Remember Me<span className='text-red-500 '>*</span>
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
                        <div className=' flex justify-center my-3  font-semibold '> Log in <Link to='/login' className='text-red-600 hover:underline mx-3'>Login</Link> </div>
                    </form>

                </div>
            </div>

        </>
    )
}
