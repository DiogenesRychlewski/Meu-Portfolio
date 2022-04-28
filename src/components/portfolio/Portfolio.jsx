import React from 'react'
import './portfolio.css'
import FocoTotalIMG from '../../assets/Foco_Total.png'
import SistemaVacinasIMG from '../../assets/Sistema_Vacinas.png'
import DSMovieIMG from '../../assets/dsmovie.png'
import FreelaWayIMG from '../../assets/freelaway.png'
import RedStoreIMG from '../../assets/redstore.png'
import ArchAPIIMG from '../../assets/archapi.jpg'
import NetflixIMG from '../../assets/netflix.png'

let data = [
    {
        id: 1,
        image: NetflixIMG,
        title: 'Netflix Home Clone',
        github: 'https://github.com/NetoTV/Netflix',
        demo: 'https://netflixhome-plb.netlify.app'
    },
    {
        id: 2,
        image: RedStoreIMG,
        title: 'RedStore E-Commerce',
        github: 'https://github.com/NetoTV/RedStore',
        demo: 'https://redstore-plb.netlify.app/'
    },
    {
        id: 3,
        image: DSMovieIMG,
        title: 'DS Movie',
        github: 'https://github.com/NetoTV/dsmovie',
        demo: 'https://dsmovie-plb.netlify.app/'
    },
    {
        id: 4,
        image: FocoTotalIMG,
        title: 'Foco Total',
        github: 'https://github.com/NetoTV/Foco-Total',
        demo: null
    },
    {
        id: 5,
        image: SistemaVacinasIMG,
        title: 'Controle de Vacinação',
        github: 'https://github.com/NetoTV/Sistema-de-Vacinas',
        demo: null
    },

    {
        id: 6,
        image: FreelaWayIMG,
        title: 'Freela Way',
        github: 'https://github.com/NetoTV/FreelaWay',
        demo: null
    },
    {
        id: 7,
        image: ArchAPIIMG,
        title: 'ArchAPI',
        github: 'https://github.com/NetoTV/ArchAPI',
        demo: null
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    {demo ? <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> : null}
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio