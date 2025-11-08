"use client"
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';

// Import Swiper styles
import '/node_modules/swiper/swiper-bundle.min.css';
import './slider.css'


export default function Slider() {
    return (
        <main className='flex'>
            <Swiper
                modules={[Scrollbar, A11y, EffectFade, Autoplay]}
                effect='fade'
                loop={true}
                scrollbar={{ draggable: true }}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>
                    <div className='div1'>

                        <img
                            src="/slides/audience-1866738_1920.jpg"
                            className='swiper_img'
                        />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='div2'>
                        <img
                            src="/slides/boxing-89802_1920.jpg"
                            className='swiper_img'
                        />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='div3'>
                        <img
                            src="/slides/jc-gellidon-XmYSlYrupL8-unsplash.jpg"
                            className='swiper_img'
                        />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='div4'>
                        <img
                            src="/slides/tennis-court-4716300_1920.jpg"
                            className='swiper_img'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='div5'>

                        <img
                            src="/slides/2498318-wwe-chad-gable-bronson-reed.jpg"
                            className='swiper_img'
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </main>
    )
}
