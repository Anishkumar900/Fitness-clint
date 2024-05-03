import React from 'react'

export default function FreeTrailFrom() {
    return (
        <div className=' md:flex flex-none gap-16 lg:mx-32 md:-12 mx-2 md:grid-cols-2 '>
            <div className='w-full my-auto z-0'>
                <p className='text-3xl font-serif font-bold text-center'>ELEVATE YOUR FITNESS JOURNEY</p>
                <p className='text-gray-600 hover:underline my-3 text-center'>START YOUR 7-DAY FREE TRIAL</p>
                <p className='flex gap-10 my-3 z-0'>	<ion-icon size="large" color="danger" name="barbell-outline"></ion-icon><samp className='my-auto'>Premium equipment and group fitness classes</samp></p>
                <p className='flex gap-10 my-3 z-0'><ion-icon size="large" color="danger" name="medkit-outline"></ion-icon> <samp>Complimentary health and fitness assessment</samp></p>
                <p className='flex gap-10 my-3 z-0'><ion-icon size="large" color="danger" name="fitness-outline"></ion-icon><samp>Complimentary health and fitness assessment</samp></p>
                <p className='flex gap-10 my-3 z-0'> <ion-icon size="large" color="danger" name="sunny-outline"></ion-icon><samp>Supportive and uplifting community</samp></p>
                <p className='flex gap-10 my-3 z-0'><ion-icon size="large" color="danger" name="home-outline"></ion-icon> <samp>	10 clubs nationwide and over 70 clubs across South East Asia</samp></p>
            </div>
            <div className='w-full '>
                <form className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                        <input type="text" id="first_name" name="first_name" className="w-full px-3 py-2 text-gray-700 border  focus:outline-none focus:border-red-600" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="last_name" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                        <input type="text" id="last_name" name="last_name" className="w-full px-3 py-2 text-gray-700 border focus:outline-none focus:border-red-600" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 text-gray-700 border  focus:outline-none focus:border-red-600" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                        <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 text-gray-700 border  focus:outline-none focus:border-red-600" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">Department</label>
                        <select id="department" name="department" className="w-full px-3 py-2 text-gray-700 border  focus:outline-none focus:border-red-600">
                            <option value="" disabled >Selection Option</option>
                            <option value="Trainig">Trainig</option>
                            <option value="Free Trail">Free Trail</option>
                            <option value="3 Months Plane">3 Months Plane</option>
                            <option value="6 Months Plane">6 Months Plane</option>
                            <option value='Yearly Plane'>Yearly Plane</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="subscribe" className="inline-flex items-center">
                            <input type="checkbox" id="subscribe" name="subscribe" className="form-checkbox h-5 w-5  text-red-600" />
                            <span className="ml-2 text-gray-700 text-sm">Subscribe to our newsletter</span>
                        </label>
                    </div>

                    <div className="mb-4">
                        <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
