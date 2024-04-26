import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default function FitnessClasses() {
    return (
        <div className=' bg-amber-50 my-10'>
            <div className='py-5'>
            <p className=' md:text-5xl text-2xl   text-center lg:mx-32 md:mx-16 mx-2 font-bold font-mono'>OVER 2,000 GROUP FITNESS CLASSES EVERY MONTH</p>
            <p className='text-xl text-center my-2 underline'>The toughest part is which one to start with</p>
            </div>
            <div className='mx-40 py-10 z-0'>
                <Swiper
                    // install Swiper modules
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    autoplay={{ delay: 300 }}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={"auto"}
                    coverflowEffect={
                        {
                            rotate:45,
                            stretch:45,
                            depth:100,
                            modifier:2.5,
                        }
                    }
                    className='swiper_container'
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><img alt='img' src='https://th.bing.com/th/id/R.f4c95a73b71e7a71fa4515f316364274?rik=ZqpsGNRPpx1sHQ&riu=http%3a%2f%2fsnhfoto.com%2fwp-content%2fuploads%2f2015%2f01%2fIMG_0240-2.jpg&ehk=AJL%2ftDHdYL2ViIBTLV1I7ODJqXe728gY62boQBkY%2f8g%3d&risl=&pid=ImgRaw&r=0'/></SwiperSlide>
                    <SwiperSlide><img alt='img' src='https://th.bing.com/th/id/R.f4c95a73b71e7a71fa4515f316364274?rik=ZqpsGNRPpx1sHQ&riu=http%3a%2f%2fsnhfoto.com%2fwp-content%2fuploads%2f2015%2f01%2fIMG_0240-2.jpg&ehk=AJL%2ftDHdYL2ViIBTLV1I7ODJqXe728gY62boQBkY%2f8g%3d&risl=&pid=ImgRaw&r=0'/></SwiperSlide>
                    <SwiperSlide><img alt='img' src='https://th.bing.com/th/id/R.f4c95a73b71e7a71fa4515f316364274?rik=ZqpsGNRPpx1sHQ&riu=http%3a%2f%2fsnhfoto.com%2fwp-content%2fuploads%2f2015%2f01%2fIMG_0240-2.jpg&ehk=AJL%2ftDHdYL2ViIBTLV1I7ODJqXe728gY62boQBkY%2f8g%3d&risl=&pid=ImgRaw&r=0'/></SwiperSlide>
                    <SwiperSlide><img alt='img' src='https://th.bing.com/th/id/R.f4c95a73b71e7a71fa4515f316364274?rik=ZqpsGNRPpx1sHQ&riu=http%3a%2f%2fsnhfoto.com%2fwp-content%2fuploads%2f2015%2f01%2fIMG_0240-2.jpg&ehk=AJL%2ftDHdYL2ViIBTLV1I7ODJqXe728gY62boQBkY%2f8g%3d&risl=&pid=ImgRaw&r=0'/></SwiperSlide>
                    <SwiperSlide><img alt='img' src='https://th.bing.com/th/id/R.f4c95a73b71e7a71fa4515f316364274?rik=ZqpsGNRPpx1sHQ&riu=http%3a%2f%2fsnhfoto.com%2fwp-content%2fuploads%2f2015%2f01%2fIMG_0240-2.jpg&ehk=AJL%2ftDHdYL2ViIBTLV1I7ODJqXe728gY62boQBkY%2f8g%3d&risl=&pid=ImgRaw&r=0'/></SwiperSlide>
                    <SwiperSlide><img alt='img' src='https://th.bing.com/th/id/R.f4c95a73b71e7a71fa4515f316364274?rik=ZqpsGNRPpx1sHQ&riu=http%3a%2f%2fsnhfoto.com%2fwp-content%2fuploads%2f2015%2f01%2fIMG_0240-2.jpg&ehk=AJL%2ftDHdYL2ViIBTLV1I7ODJqXe728gY62boQBkY%2f8g%3d&risl=&pid=ImgRaw&r=0'/></SwiperSlide>
                    <SwiperSlide><img alt='img' src='https://th.bing.com/th/id/R.f4c95a73b71e7a71fa4515f316364274?rik=ZqpsGNRPpx1sHQ&riu=http%3a%2f%2fsnhfoto.com%2fwp-content%2fuploads%2f2015%2f01%2fIMG_0240-2.jpg&ehk=AJL%2ftDHdYL2ViIBTLV1I7ODJqXe728gY62boQBkY%2f8g%3d&risl=&pid=ImgRaw&r=0'/></SwiperSlide>
                    <SwiperSlide><img alt='img' src='https://th.bing.com/th/id/R.f4c95a73b71e7a71fa4515f316364274?rik=ZqpsGNRPpx1sHQ&riu=http%3a%2f%2fsnhfoto.com%2fwp-content%2fuploads%2f2015%2f01%2fIMG_0240-2.jpg&ehk=AJL%2ftDHdYL2ViIBTLV1I7ODJqXe728gY62boQBkY%2f8g%3d&risl=&pid=ImgRaw&r=0'/></SwiperSlide>
                    <SwiperSlide><img alt='img' src='https://th.bing.com/th/id/R.f4c95a73b71e7a71fa4515f316364274?rik=ZqpsGNRPpx1sHQ&riu=http%3a%2f%2fsnhfoto.com%2fwp-content%2fuploads%2f2015%2f01%2fIMG_0240-2.jpg&ehk=AJL%2ftDHdYL2ViIBTLV1I7ODJqXe728gY62boQBkY%2f8g%3d&risl=&pid=ImgRaw&r=0'/></SwiperSlide>
                    <SwiperSlide><img alt='img' src='https://th.bing.com/th/id/R.f4c95a73b71e7a71fa4515f316364274?rik=ZqpsGNRPpx1sHQ&riu=http%3a%2f%2fsnhfoto.com%2fwp-content%2fuploads%2f2015%2f01%2fIMG_0240-2.jpg&ehk=AJL%2ftDHdYL2ViIBTLV1I7ODJqXe728gY62boQBkY%2f8g%3d&risl=&pid=ImgRaw&r=0'/></SwiperSlide>
                    <SwiperSlide><img alt='img' src='https://th.bing.com/th/id/R.f4c95a73b71e7a71fa4515f316364274?rik=ZqpsGNRPpx1sHQ&riu=http%3a%2f%2fsnhfoto.com%2fwp-content%2fuploads%2f2015%2f01%2fIMG_0240-2.jpg&ehk=AJL%2ftDHdYL2ViIBTLV1I7ODJqXe728gY62boQBkY%2f8g%3d&risl=&pid=ImgRaw&r=0'/></SwiperSlide>
                    <SwiperSlide><img alt='img' src='https://th.bing.com/th/id/R.f4c95a73b71e7a71fa4515f316364274?rik=ZqpsGNRPpx1sHQ&riu=http%3a%2f%2fsnhfoto.com%2fwp-content%2fuploads%2f2015%2f01%2fIMG_0240-2.jpg&ehk=AJL%2ftDHdYL2ViIBTLV1I7ODJqXe728gY62boQBkY%2f8g%3d&risl=&pid=ImgRaw&r=0'/></SwiperSlide>
                    
                </Swiper>
            </div>
            <div className=' flex justify-center '><button className=' text-white font-bold p-4 bg-red-500 hover:bg-red-600'>Discover More Classes</button></div>
        </div>
    )
}
