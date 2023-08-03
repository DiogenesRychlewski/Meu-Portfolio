import React from 'react'
import './portfolio.css'
import CrachaVirtual from '../../assets/cracha_virtual.png'
import IgniteFeed from '../../assets/ignite_feed.png'
import DtMonet from '../../assets/dt_money.png'
import IgNews from '../../assets/ig_news.png'
import WeDesign from '../../assets/we_design.png'
import JsCurso from '../../assets/js_curso.png'

let data = [
    {
        id: 1,
        image: CrachaVirtual,
        title: 'Crachá Virtual',
        github: 'https://github.com/DiogenesRychlewski/NLW-Heat-Origin',
        demo: null
    },
    {
        id: 2,
        image: IgniteFeed,
        title: 'Ignite Feed',
        github: 'https://github.com/DiogenesRychlewski/Ignite-Feed-TSX',
        demo: null
    },

    {
        id: 3,
        image: DtMonet,
        title: 'Dt Money',
        github: 'https://github.com/DiogenesRychlewski/Ignite-Dt-Money',
        demo: null
    },
    {
        id: 4,
        image: IgNews,
        title: 'Ig News',
        github: 'https://github.com/DiogenesRychlewski/Ig-News',
        demo: null
    },
    {
        id: 5,
        image: WeDesign,
        title: 'WeDesign',
        github: 'https://github.com/DiogenesRychlewski/WeDesign-Site',
        demo: null
    },
    {
        id: 6,
        image: JsCurso,
        title: 'Curso JS, JQuery, html, css',
        github: 'https://github.com/DiogenesRychlewski/Curso-JS',
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
                                    <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                                    {demo ? <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a> : null}
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