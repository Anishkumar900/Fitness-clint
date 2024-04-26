import React from 'react'

export default function Lowerpart() {
  return (
    <>
    <div className='bg-gray-300 lg:px-28 md:px-12 px-2 py-20'>
      <p className='text-5xl font-mono font-bold'>DUAL BRAND MEMBERSHIP</p>
      <p className='my-6'>A dual brand membership allows you to access both Celebrity Fitness and Fitness First clubs. Click on the countries below to find out more about how you can take advantage of our wide network of clubs and locate a club nearest to you.</p>
      <div className=' md:flex gap-6 sm:flex-none'>
        <div className='bg-white w-full p-8'><img alt='' src='https://www.fitnessfirst.com/-/media/project/evolution-wellness/fitness-first/root/country-selection/membership/logo-cf-on-color.svg'/>
        <p className=' border'></p>
        <button className='mt-10 hover:bg-red-500 bg-red-600 text-white rounded-full text-3xl p-3 '>JOIN US</button>
        </div>
        <div className='bg-white w-full p-8'><img alt='' className='h-16' src='https://www.fitnessfirst.com/-/media/project/evolution-wellness/fitness-first/root/country-selection/membership/ff-logo-horizontal-on-light.svg'/>
        <p className=' border'></p>
        <button className='mt-10 hover:bg-red-500 bg-red-600 text-white rounded-full text-3xl p-3 '>JOIN US</button>
        </div>
      </div>
    </div>
    <div className='bg-black text-white py-2 text-xl'>
      <p className='text-center'>Copyright©2024 Fitness First. All Rights Reserved.</p>
    </div>
    </>
  )
}
