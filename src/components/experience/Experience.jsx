import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Minhas Habilidades</h5>
            <h2>SkillSet</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Desenvolvimento Front-end</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>React.js</h4>
                                <small className='text-light'>Experiente</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Redux</h4>
                                <small className='text-light'>Experiente</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experiente</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML5</h4>
                                <small className='text-light'>Experiente</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Angular</h4>
                                <small className='text-light'>Intermediário</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS3</h4>
                                <small className='text-light'>Experiente</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* END OF FRONTEND */}

                <div className="experience__backend">
                    <h3>Desenvolvimento Back-end / Infra</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Node.js</h4>
                                <small className='text-light'>Básico</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>C#</h4>
                                <small className='text-light'>Intermediário</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>.NET</h4>
                                <small className='text-light'>Intermediário</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>SQL Server</h4>
                                <small className='text-light'>Experiente</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Básico</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>AWS</h4>
                                <small className='text-light'>Básico</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience