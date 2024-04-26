import React from 'react'

export default function Middlepart() {
  return (
    <div className='bg-black text-white lg:px-28 md:px-12 px-2 py-20 font-serif'>
      <div>
        <p className='text-6xl font-sans font-bold'>OTHER STATE</p>
        <p className='my-3'>As a Fitness First member, you’re never far away from your next workout. Whether you’re travelling for work or pleasure, don’t forget to pack your kit. You might be away from home, but you’re still near a Fitness First club*.</p>
        
        <button className='hover:bg-rose-500 bg-rose-600 my-4 mt-10 p-2 font-bold'>Fitness First Affiliated Countries</button>
        <p>Click on the countries below for the club listing details.</p>
      </div>
      <div className=' grid grid-cols-2 md:grid-cols-5 justify-between my-5'>
        <div className='my-2'><button className='p-4 text-2xl underline border hover:bg-white hover:text-blue-800'>Sheohar.</button></div>
        <div className='my-2'><button className='p-4 text-2xl underline border hover:bg-white hover:text-blue-800'>Sitamarhi</button></div>
        <div className='my-2'><button className='p-4 text-2xl underline border hover:bg-white hover:text-blue-800'>Patna</button></div>
        <div className='my-2'><button className='p-4 text-2xl underline border hover:bg-white hover:text-blue-800'>Sivan.</button></div>
        <div className='my-2'><button className='p-4 text-2xl underline border hover:bg-white hover:text-blue-800'>Gaya.</button></div>
      </div>
      <div className='mt-16'>
        <p>*Only applicable to selected memberships, please refer to your club for further details.</p>
        <p>*The Fitness First international passport privilege is by special reciprocal arrangement and on a complimentary basis between the independent owning companies of Fitness First Asia, Middle East and North Africa (MENA), and Australia, and are subject to periodic review. Please check at Front of House for more details, or <button className='text-red-600'>click here.</button></p>
      </div>
    </div>
  )
}
