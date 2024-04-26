import React from 'react'

export default function ChoiceOption() {
    return (
        <div className='  my-5   '>

           <div className='lg:block hidden mx-20 '>
           <div className='flex grid-cols-3 justify-between gap-10 '>
           <button className='text-white   grid grid-cols-1 gap-4 content-end py-6'  style={{
                backgroundImage: "url('https://wallpapercave.com/wp/wp6285200.jpg')",
                width: '25vw',
                height: '50vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <p className='text-2xl font-serif font-bold'>FIND YOUR REASON</p>
                <p className='font-semibold'>It’s your WHY that fuels your relentless determination and keeps you going.</p>
                <p className=' underline align-text-bottom text-xl font-semibold'>Experience It Now</p>
            </button>
            <button className='text-white   grid grid-cols-1 gap-4 content-end py-6' style={{
                backgroundImage: "url('https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/sites/1858/images/bJNBEw4Tti5hIKKUS1ge_file.jpg')",
                width: '25vw',
                height: '50vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                 <p className='text-2xl font-serif font-bold'>PERSONAL TRAINING</p>
                <p className='font-semibold'>Unlock your full fitness potential with our Certified Fitness Coaches.</p>
                <p className=' underline align-text-bottom text-xl font-semibold'>Learn More</p>
            </button>
            <button className='text-white   grid grid-cols-1 gap-4 content-end py-6' style={{
                backgroundImage: "url('https://image.freepik.com/free-photo/barbell-weight-lifting-group-workout-exercise-gym_79295-3821.jpg')",
                width: '25vw',
                height: '50vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                 <p className='text-2xl font-serif font-bold'>CHOOSE YOUR CLASSES</p>
                <p className='font-semibold'>Gym newbie or getting back in the game, we’ve got a wide variety of classes to choose from.</p>
                <p className=' underline align-text-bottom text-xl font-semibold'>Learn More</p>
            </button>
           </div>
           </div>
           <div className='block lg:hidden'>
           <button className='text-white my-3  grid grid-cols-1 gap-4 content-end py-6'  style={{
                backgroundImage: "url('https://wallpapercave.com/wp/wp6285200.jpg')",
                width: '100vw',
                height: '50vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <p className='text-2xl font-serif font-bold'>FIND YOUR REASON</p>
                <p className='font-semibold'>It’s your WHY that fuels your relentless determination and keeps you going.</p>
                <p className=' underline align-text-bottom text-xl font-semibold'>Experience It Now</p>
            </button>
            <button className='text-white  my-3 grid grid-cols-1 gap-4 content-end py-6' style={{
                backgroundImage: "url('https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/sites/1858/images/bJNBEw4Tti5hIKKUS1ge_file.jpg')",
                width: '100vw',
                height: '50vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                 <p className='text-2xl font-serif font-bold'>PERSONAL TRAINING</p>
                <p className='font-semibold'>Unlock your full fitness potential with our Certified Fitness Coaches.</p>
                <p className=' underline align-text-bottom text-xl font-semibold'>Learn More</p>
            </button>
            <button className='text-white my-3  grid grid-cols-1 gap-4 content-end py-6' style={{
                backgroundImage: "url('https://image.freepik.com/free-photo/barbell-weight-lifting-group-workout-exercise-gym_79295-3821.jpg')",
                width: '100vw',
                height: '50vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                 <p className='text-2xl font-serif font-bold'>CHOOSE YOUR CLASSES</p>
                <p className='font-semibold'>Gym newbie or getting back in the game, we’ve got a wide variety of classes to choose from.</p>
                <p className=' underline align-text-bottom text-xl font-semibold'>Learn More</p>
            </button>
           </div>
        </div>

    )
}
