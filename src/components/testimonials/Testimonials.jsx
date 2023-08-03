import React from 'react'
import './testimonials.css'
import FotoPerfil from '../../assets/foto_perfil.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: FotoPerfil,
        name: 'Diógenes Rychlewski',
        review: 'Espero que você tenha gostado do site! 😃️'
    },
    {
        avatar: FotoPerfil,
        name: 'Diógenes Rychlewski',
        review: 'Feito com ❤️ e JavaScript.'
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review</h5>
            <h2>Comentários</h2>

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