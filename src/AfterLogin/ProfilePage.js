import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function ProfilePage() {
    const navigate = useNavigate();

    const [name,setname]=useState("")

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
      };


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          axios.post(`${process.env.REACT_APP_BASE_URL}/profile`, null, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              setname(res.data.authdata.verification.FirstName+" "+res.data.authdata.verification.LastName);
              // console.log(res.data.authdata.verification.FirstName);
              // console.log(res.data.authdata.verification.LastName);
              if(res.status!==200 || res.data.code !==200){
                localStorage.removeItem("token");
                navigate("/login");
                // console.log(res.data.code);
                
              }
              // console.log(res);
            })
            .catch((err) => {
              localStorage.removeItem("token");
                navigate("/login");
            });
        }
      }, []);
      
    
  return (
    <div className='flex justify-center lg:gap-40 gap-10 '>
      <p className='text-3xl text-center font-serif font-semibold'>{name}</p>
      <button onClick={logout} className='bg-red-300'>Logout</button>
      {/* <p>{process.env.REACT_APP_BASE_URL}</p> */}
    </div>
  )
}
