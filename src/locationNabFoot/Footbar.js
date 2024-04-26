import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footbar() {





    const [email, setEmail] = useState('');
    const [subscribe, setSubscribe] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, subscribe });
       
    };

    const handleYoutubeButtonClick=()=>{
       
        window.open('https://www.youtube.com/@daily_practice_question', '_blank');
    }
    const handleFacebookButtonClick=()=>{
      
        window.open('https://www.facebook.com/profile.php?id=100004375758957&mibextid=ZbWKwL', '_blank');
    }
    const handleInstagramButtonClick=()=>{
      
        window.open('https://www.instagram.com/_suri_900?utm_source=qr&igsh=MnczeGlzNjdqZ3pu', '_blank');
    }
    const handleLinkedinButtonClick=()=>{
       
        window.open('https://www.linkedin.com/in/anish-kumar-978b34242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
    }



    return (
        <div className='bg-gray-800 text-white lg:px-32 md:px-10 px-2 '>
           <div className='lg:block hidden'>
           <div className='flex gap-20 '>
           <div>
                <img alt='' className='w-40 h-40' src='https://www.fitnessfirst.com/id/en/-/media/project/evolution-wellness/fitness-first/shared/base/logos/ff-logo-horizontal-on-dark.svg?extension=webp' />
                <div className='flex lg:gap-3 xl:gap-10 xxl-gap-20  font-medium text-sm'>
                    <div>
                        <div className='my-2'><button className=' hover:underline'>MEMBERSHIP</button></div>
                        <div className='my-2'><button className=' hover:underline'>PERSONAL TRAINING</button></div>
                        <div className='my-2'><button className=' hover:underline'>CLASSES</button></div>
                        <div className='my-2'><button className=' hover:underline'>FIRST PRIVILEGES</button></div>
                        <div className='my-2'><button className=' hover:underline'>WHY FITNESS FIRST</button></div>
                        <div className='my-2'><button className=' hover:underline'>CORPORATE PACKAGES</button></div>
                    </div>
                    <div>
                        <div className='my-2'><button className=' hover:underline'>TIMETABLE</button></div>
                        <div className='my-2'><button className=' hover:underline'>CLUBS</button></div>
                        <div className='my-2'><button className=' hover:underline'>PROFILE</button></div>
                        <div className='my-2 '><button className=' hover:underline'>REFER A FRIEND</button></div>
                    </div>
                    <div>
                        <div className='my-2 '><button className=' hover:underline'>CONTACT US</button></div>
                        <div className='my-2 '><button className=' hover:underline'>FAQS</button></div>
                        <div className='my-2 '><button className=' hover:underline'>CAREERS</button></div>
                    </div>
                </div>

                <div className='flex py-10 gap-6'><FaInstagram size={32} onClick={handleInstagramButtonClick}/><FaFacebookF size={32} onClick={handleFacebookButtonClick}/><FaYoutube size={32} onClick={handleYoutubeButtonClick}/><FaLinkedin size={32} onClick={handleLinkedinButtonClick}/></div>
                <div className=' text-sm font-semibold gap-4 flex'><p>CLUB RULES</p><p>COOKIES POLICY</p><p>PRIVACY POLICY</p><p>TERMS AND CONDITIONS</p></div>
                <p className='text-xs'>Copyright©2024 Fitness First. All rights reserved.;</p>
            </div>


            <div className='my-auto'>
                <p className='text-3xl font-semibold font-serif my-7'>STAY UP TO DATE</p>
                <p className='my-8'>Subscribe now and get the latest news!</p>

                <div className="flex flex-col items-center justify-center ">
                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 mb-4 text-gray-700 border focus:outline-none focus:border-red-600"
                            placeholder="Enter your email"
                            required
                        />
                        <label htmlFor="subscribe" className="inline-flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="subscribe"
                                name="subscribe"
                                checked={subscribe}
                                onChange={(e) => setSubscribe(e.target.checked)}
                                className="mr-2 leading-tight"
                            />
                            <span className="text-sm">Are you an existing customer?</span>
                        </label>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-red-600  focus:outline-none hover:bg-red-700"
                        >
                            Subscribe
                        </button>
                        <p className='text-xs text-red-600'>Recaptcha failed, please refresh page and try again.</p>
                    </form>
                </div>
            </div>
           </div>
           </div>


            <div className='lg:hidden block'>

            <div className='py-10'>
                <p className='text-3xl font-semibold font-serif my-7 text-center'>STAY UP TO DATE</p>
                <p className='my-8 text-center'>Subscribe now and get the latest news!</p>

                <div className="flex flex-col items-center justify-center ">
                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 mb-4 text-gray-700 border focus:outline-none focus:border-red-600"
                            placeholder="Enter your email"
                            required
                        />
                        <label htmlFor="subscribe" className="inline-flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="subscribe"
                                name="subscribe"
                                checked={subscribe}
                                onChange={(e) => setSubscribe(e.target.checked)}
                                className="mr-2 leading-tight"
                            />
                            <span className="text-sm">Are you an existing customer?</span>
                        </label>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-red-600  focus:outline-none hover:bg-red-700"
                        >
                            Subscribe
                        </button>
                        <p className='text-xs text-red-600'>Recaptcha failed, please refresh page and try again.</p>
                    </form>
                </div>
            </div>


            <div className='px-4'>
                <img alt='' className='w-40 h-40' src='https://www.fitnessfirst.com/id/en/-/media/project/evolution-wellness/fitness-first/shared/base/logos/ff-logo-horizontal-on-dark.svg?extension=webp' />
                <div className=' gap-10 font-medium'>
                    <div className='py-8'>
                        <div className='my-2'><button className=' hover:underline'>MEMBERSHIP</button></div>
                        <div className='my-2'><button className=' hover:underline'>PERSONAL TRAINING</button></div>
                        <div className='my-2'><button className=' hover:underline'>CLASSES</button></div>
                        <div className='my-2'><button className=' hover:underline'>FIRST PRIVILEGES</button></div>
                        <div className='my-2'><button className=' hover:underline'>WHY FITNESS FIRST</button></div>
                        <div className='my-2'><button className=' hover:underline'>CORPORATE PACKAGES</button></div>
                    </div>
                    <div className='py-8'>
                        <div className='my-2'><button className=' hover:underline'>TIMETABLE</button></div>
                        <div className='my-2'><button className=' hover:underline'>CLUBS</button></div>
                        <div className='my-2'><button className=' hover:underline'>PROFILE</button></div>
                        <div className='my-2 '><button className=' hover:underline'>REFER A FRIEND</button></div>
                    </div>
                    <div className='py-8'>
                        <div className='my-2 '><button className=' hover:underline'>CONTACT US</button></div>
                        <div className='my-2 '><button className=' hover:underline'>FAQS</button></div>
                        <div className='my-2 '><button className=' hover:underline'>CAREERS</button></div>
                    </div>
                </div>

                <div className='flex py-10 gap-6'><FaInstagram size={32} onClick={handleInstagramButtonClick}/><FaFacebookF size={32} onClick={handleFacebookButtonClick}/><FaYoutube size={32} onClick={handleYoutubeButtonClick}/><FaLinkedin size={32} onClick={handleLinkedinButtonClick}/></div>
                <div className=' text-sm font-semibold gap-4 flex'><p>CLUB RULES</p><p>COOKIES POLICY</p><p>PRIVACY POLICY</p><p>TERMS AND CONDITIONS</p></div>
                <p className='text-xs'>Copyright©2024 Fitness First. All rights reserved.;</p>
            </div>

            </div>

        </div>
    )
}
