import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: "https://media-exp1.licdn.com/dms/image/D4E35AQGr6g-xI4l6Cg/profile-framedphoto-shrink_200_200/0/1635513106132?e=2147483647&v=beta&t=bWr1Bm1Tjg-xpsC5n-yJjZ1WaWtpMoqOu5pjqtqcpUs",
        name: 'Paulo L. Bertotti',
        review: 'Muito legal!'
    },
    {
        avatar: "https://media-exp1.licdn.com/dms/image/D4E35AQGr6g-xI4l6Cg/profile-framedphoto-shrink_200_200/0/1635513106132?e=2147483647&v=beta&t=bWr1Bm1Tjg-xpsC5n-yJjZ1WaWtpMoqOu5pjqtqcpUs",
        name: 'Paulo L. Bertotti',
        review: 'Muito legal!'
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }} >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials