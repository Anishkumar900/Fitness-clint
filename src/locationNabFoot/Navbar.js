import React from 'react';
import { LuCalendarDays } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import './Navbar.css';

export default function Navbar() {
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
        <div className="icon-container"><LuCalendarDays  size={32}/></div>
        <div className="icon-container"><FaLocationDot size={32}/></div>
        <div className="icon-container"><CgProfile size={32}/></div>
      </div>


    </div>
    </div>

    <div className='block lg:hidden' >

      <div className='fixed bg-black p-5'><FaBars size={48} color='white'/></div>


    </div>
    
    </>
  )
}
