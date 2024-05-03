import React, { useState } from 'react';
import "./ForgotPassword.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    username: false,

  });

  const [Form, setForm] = useState({
    username: "",

  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setForm({ ...Form, [name]: newValue });
  }

  const handleLogin = (e) => {
    document.getElementById('vali').style.display="none";
    e.preventDefault();

    if (Form.username === "") {
      setErrors(prevErrors => ({
        ...prevErrors,
        username: true
      }));
    }
    else {
      setErrors(prevErrors => ({
        ...prevErrors,
        username: false
      }));
    }

    if(errors.username===false){
      axios.post(`${process.env.REACT_APP_BASE_URL}/forgotpasswordUserverifaction`,Form)
      .then((res)=>{
        if(res.data.code===200){
          navigate("/resetpassword",{state:{username:Form.username}});
        }
        else{
          document.getElementById('vali').style.display="block";
        }
          // console.log(res.data.code)
      })
      .catch((err)=>{
        document.getElementById('vali').style.display="block";
        // console.log(err);
      })
    }

    
      



    // console.log(Form);
  }


  return (
    <>
      <div className='fitnessimgfor'>
        <div className="col-lg-5 col-xl-4  ">

          <div className='lg:block hidden'>
            <div className=" flex justify-center items-center h-screen ">

              <form

                onSubmit={handleLogin}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full"
              >

                <div><img alt='' src='https://www.fitnessfirst.com/-/media/project/evolution-wellness/fitness-first/root/country-selection/membership/ff-logo-horizontal-on-light.svg?extension=webp' />
                  <p className='text-center text-4xl font-semibold my-3'>Password reset</p>
                  <p className='text-gray-500 my-8'>Please enter your registered email address. An email notification with a password reset code will then be sent to you.</p>
                </div>
                <p className='text-red-500 text-xs hidden' id='vali'>Invalid username</p>
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


                <div className="flex items-center justify-between">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="submit"
                  >
                    RESET PASSWORD
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
              <p className='text-center text-4xl font-semibold my-3'>Password reset</p>
              <p className='text-gray-500 my-8'>Please enter your registered email address. An email notification with a password reset code will then be sent to you.</p>
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


            <div className="flex items-center justify-between">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                RESET PASSWORD
              </button>
            </div>
            <div className=' flex justify-center my-3  font-semibold '>Back To <Link to='/login' className='text-red-600  hover:underline'> Login</Link> </div>
          </form>

        </div>
      </div>
    </>
  )
}
