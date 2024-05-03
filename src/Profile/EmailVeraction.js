import React, { useState } from 'react';
import { useLocation, Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EmailVeraction() {
    const navigation=useNavigate();
    const [errors, setErrors] = useState(false);
    const [otp, setOtp] = useState('')
    const location = useLocation();
    // console.log(location.state.Form.username);

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault()
        // document.getElementById('vali').style.display = 'none';
        if (otp === '') {
            setErrors(true);
        }
        else{
            document.getElementById('vali').style.display = 'none';
            setErrors(false)
        }
        if(!errors){
            axios.post(`${process.env.REACT_APP_BASE_URL}/otp-vif`,{
                username: location.state.Form.username,
                otp: otp
            })
            .then((data)=>{
                if(data.data.code===200){
                    navigation('/registation')
                }
                else{
                    document.getElementById('vali').style.display = 'block';
                }

                // console.log(data.data.code)
                
            })
            .catch((err)=>{
                document.getElementById('vali').style.display = 'block';
                // console.log(err)
            })
            

        }

        // console.log(errors);

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
                                        htmlFor="otp"
                                    >
                                        OTP <span className='text-red-500 '>*</span>
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="OTP"
                                        name="OTP"
                                        value={otp}
                                        onChange={handleChange}

                                    />
                                    {errors && <p className='text-red-500 text-xs'>This field is required</p>}
                                    <p className='text-red-500 text-xs hidden' id='vali'>please enter valid otp</p>
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
                                htmlFor="otp"
                            >
                                OTP <span className='text-red-500 '>*</span>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="number"
                                placeholder="OTP"
                                name="OTP"
                                value={otp}
                                onChange={handleChange}

                            />
                            {errors && <p className='text-red-500 text-xs'>This field is required</p>}
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
