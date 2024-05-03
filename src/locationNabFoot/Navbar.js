import React, { useState } from 'react';
import { LuCalendarDays } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import './Navbar.css';
import { Link,useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();
  const [navoption, setnavoption] = useState(false);


  const navoptionshow = () => {
    setnavoption(!navoption);
  }

  const Gotoprofile=()=>{
      navigate('/login')
  }


  return (
    <>

      <div className='lg:block hidden'>
        <div className='flex justify-between px-10 fixed bg-white w-full h-16 z-10  gap-5'>
          <div className=''><img alt='' className='w-24 h-32' src='https://www.fitnessfirst.com/id/en/-/media/project/evolution-wellness/fitness-first/shared/base/logos/ff-logo-on-light.svg' /></div>
          <div className='flex justify-between my-auto gap-5'>
            <ul className='flex  lg:gap-5 text-md  font-bold'>
              <li>MEMBERSHIP</li>
              <li>PERSONAL TRAINING</li>
              <li>WHY FITNESS FIRST</li>
              <li>CLASSES</li>
              <li>HIGHLIGHTS</li>
            </ul>
            <div><button className='px-5 py-2 bg-red-500 hover:bg-red-700 text-white'>Join Online</button></div>
            <div className="icon-container"><LuCalendarDays size={32} /></div>
            <div className="icon-container"><FaLocationDot size={32} /></div>
            <div className="icon-container" onClick={Gotoprofile}><CgProfile size={32} /></div>
          </div>


        </div>
      </div>

      <div className='block z-10 lg:hidden fixed w-full' >

        <div className=' bg-black p-5 z-10  w-full'><FaBars size={36} color='white' onClick={navoptionshow} /></div>
        {
          navoption && <div className='text-white bg-black w-full z-10 px-5'>
            <ul>
            <li className=' border-2 border-zinc-50'></li>
              <li className='py-2 font-bold text-xl z-10'>MEMBERSHIP</li>
              
              <li className='py-2 font-bold text-xl z-10'>PERSONAL TRAINING</li>
              <li className='py-2 font-bold text-xl z-10'>WHY FITNESS FIRST</li>
              <li className='py-2 font-bold text-xl z-10'>CLASSES</li>
              <li className='py-2 font-bold text-xl z-10'>HIGHLIGHTS</li>
              <li className='py-2 font-bold text-xl z-10'>join Online</li>
              <li className='py-2 font-bold text-xl z-10'>Calendar</li>
              <li className='py-2 font-bold text-xl z-10'>Location</li>
              <li className='py-2 font-bold text-xl z-10'>Profile</li>
            </ul>
          </div>
        }

      </div>

    </>
  )
}
