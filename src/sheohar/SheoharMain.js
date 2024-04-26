import React from 'react'
import Navbar from '../locationNabFoot/Navbar'
import "./SheoharMain.css";
import { FaRegCirclePlay } from "react-icons/fa6";
import ChoiceOption from './ChoiceOption';
import FitnessClasses from './FitnessClasses';
import FreeTrailFrom from './FreeTrailFrom';
import Footbar from '../locationNabFoot/Footbar';

export default function SheoharMain() {
  return (
    <div className=''>
      <div className=''>
      <Navbar />
      </div>


      
      <div className='fitnessimg lg:pt-20 pt-28' >
      <div className='text-white lg:p-20  p-2'>
        <p className=' font-serif lg:text-7xl text-3xl my-5'>NO LIMITS, ONLY POSSIBILITIES</p>
        <p className='lg:text-2xl '>From heart-pumping cardio to precision weightlifting, push your limits and discover what you're truly made of. #MAKEITCOUNT</p>
        <p className=' text-xl font-sans font-bold'>Get 60 days FREE.* Limited time offer. </p>
        <p>*Terms & conditions apply</p>
        <div className=' flex grid-cols-2 gap-10 mt-10'>
          <div><button className='lg:p-4 p-2 bg-red-500 hover:bg-red-700'>Find out More</button></div>
          <div className='flex gap-10'><button><FaRegCirclePlay size={24}/></button><button><p className=' underline'>Watch full video</p></button></div>
        </div>
      </div>
      
      </div>

        <div>
          <ChoiceOption/>
        </div>

        <div className='md:flex grid-cols-2 lg:mx-28 md:mx-16 mx-2 gap-40 justify-between items-center'>
          <div><p className='lg:text-6xl my-4 text-4xl font-serif font-bold '>GET INSPIRED GO FURTHER IN LIFE</p>
          <p className='text-gray-600 font-serif'>Here's what to expect when you join us now.</p>
          <button className='p-3 my-5 bg-red-500 text-white'>Discover Our Membership Plans</button>
          </div>
          <div className='text-red-700 my-5 py-20' style={{
                backgroundImage: "url('https://d.newsweek.com/en/full/1524142/cardio-workout.jpg')",
                width: '100vw',
                height: '50vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
              <p className='text-2xl font-bold text-center'>ELEVATE YOUR FITNESS</p>
              <p className='font-bold  text-center text-green-700'>Workout at 10 state-of-the art gyms nationwide.</p>
            </div>
        </div>
        <FitnessClasses/>
        <FreeTrailFrom/>
        <Footbar/>

    </div>
  )
}
