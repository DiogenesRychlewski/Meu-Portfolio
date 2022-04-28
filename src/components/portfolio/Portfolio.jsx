import React from 'react'
import './portfolio.css'
import FocoTotalIMG from '../../assets/Foco_Total.png'

const data = [
    {
        id: 1,
        image: FocoTotalIMG,
        title: 'Foco Total',
        github: 'https://github.com/NetoTV/Foco-Total',
        demo: null
    },
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