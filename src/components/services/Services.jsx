import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>MindSet</h5>
            <h2>Hard Skills</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Noções básicas de UI/UX.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Foco em criação de telas de fácil utilização, visando melhorar a experiência do usuário.</p>
                        </li>
                    </ul>

                </article>
                {/* END OF UI/UX */}

                <article className="service">
                    <div className="service__head">
                        <h3>Desenvolvimento Web</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Criação de APIs RESTful.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Otimização de Aplicações com o Redis.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Aplicações com Alta Disponibilidade.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Criação de Sistemas Inteligentes e Seguros.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Bancos de dados Relacionais.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Bancos de dados Não Relacionais.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Google Cloud Plataform.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><strong>E MUITO MAIS!</strong></p>
                        </li>
                    </ul>

                </article>
                {/* WEB DEV */}

                <article className="service">
                    <div className="service__head">
                        <h3>Cybersecurity</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Conhecimentos fundamentais em Cybersegurança.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Facilidade de encontrar possíveis falhas em sistemas.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lógica de programação focada em cobrir possíveis falhas durante o desenvolvimento.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Conhecimento sobre Hacking em Games.</p>
                        </li>
                    </ul>

                </article>
                {/* END OF Content Creation*/}
            </div>
        </section>
    )
}

export default Services