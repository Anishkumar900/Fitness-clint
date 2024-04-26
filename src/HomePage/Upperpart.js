import React from 'react';
import { useNavigate } from "react-router-dom"

export default function Upperpart() {
    const navigate = useNavigate()


    const SheoharProfile = () => {
        // window.location.href = 'http://localhost:3000/bihar/sheohar';
        navigate("/bihar/sheohar")

    }

    const divStyle = {
        backgroundImage: 'url("https://www.fitnessfirst.com/-/media/project/evolution-wellness/fitness-first/root/country-selection/banner/root-domain-country-selection-banner.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // width: '100%',
        // height: '120vh', // Adjust the height as per your requirement
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
       
      };
      const overlayStyle = {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust the opacity (0.5 for 50% darkness)
      };
  return (
    <div className='w-full h-full' style={divStyle}>
        <div className='' style={overlayStyle}>
        <div className='py-20'>
        <div className='lg:px-28 px-1 md:px-12'>
        <img alt='logo' className=' w-40 h-40' src="https://www.fitnessfirst.com/-/media/project/evolution-wellness/fitness-first/shared/base/logos/ff-logo-mark-on-light.svg"></img>
        
        <div>
            <p className=' text-6xl my-2 font-bold text-white'>OUR BIHAR PRESENCE</p>
            <p className='text-white my-2'>We are fitness leaders who inspire our members to go further in life.Today, we are a trusted brand with a portfolio of 90 over clubs across six countries.</p>
        </div>
        <div>
            <button className='text-white bg-green-700 hover:bg-green-600 p-2 rounded-3xl text-lg mt-10'>Bihar Pacific</button>
            <p className='text-white text-lg my-2'>Visit the respective country website by clicking below.</p>
        </div>
        </div>

        <div className='  lg:mx-20 md:mx-8 mx-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between'>
            
            <div className=' my-4'><button onClick={SheoharProfile} className='lg:p-12 p-6 bg-white bg-opacity-60 hover:bg-opacity-65'><img alt='sheohar' className='w-20 h-20 rounded-full' src='https://th.bing.com/th/id/OIP.DjIUnsbHpMos9UYSL7XEfQHaEK?w=330&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7'/><p className='mt-8 text-xl font-serif underline'>Sheohar</p></button></div>
            <div className=' my-4'><button className='lg:p-12 p-6 bg-white bg-opacity-60 hover:bg-opacity-65'><img alt='sitamarhi' className='w-20 h-20 rounded-full' src='https://th.bing.com/th/id/OIP.AHJXV2_saP5NBJbskzURvwHaHa?rs=1&pid=ImgDetMain'></img><p className='mt-8 text-xl font-serif underline'>Sitamarhi</p></button></div>
            <div className=' my-4'><button className='lg:p-12 p-6 bg-white bg-opacity-60 hover:bg-opacity-65'><img alt='patna' className='w-20 h-20 rounded-full' src='https://www.bing.com/th/id/OIP.cxeeqQS-oF3B-rV_k08aoAAAAA?w=244&h=176&c=7&r=0&o=5&dpr=1.5&pid=1.7'/><p className='mt-8 text-xl font-serif underline'>Patna</p></button></div>
            <div className=' my-4' ><button className='lg:p-12 p-6 bg-white bg-opacity-60 hover:bg-opacity-65'><img alt='sivan' className='w-20 h-20 rounded-full' src='https://th.bing.com/th/id/OIP.pfjByT14HugJ3PU6U3kH_AAAAA?w=222&h=176&c=7&r=0&o=5&dpr=1.5&pid=1.7'/><p className='mt-8 text-xl font-serif underline'>Sivan</p></button></div>
            <div className=' my-4'><button className='lg:p-12 p-6 bg-white bg-opacity-60 hover:bg-opacity-65'><img alt='gaya' className='w-20 h-20 rounded-full' src='https://th.bing.com/th/id/OIP.KX3uKxP2DgZBgQb3_Lx63QHaEK?w=273&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'/><p className='mt-8 text-xl font-serif underline'>Gaya</p></button></div>
        </div>
        </div>

        

        </div>
    </div>
  )
}
