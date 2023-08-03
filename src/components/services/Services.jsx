import React from 'react'
import './services.css'

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
                            <p>Noções básicas de UI/UX.</p>
                        </li>
                        <li>
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
                            <p>Criação de APIs RESTful.</p>
                        </li>
                        <li>
                            <p>Redux.</p>
                        </li>
                        <li>
                            <p>Aplicações com Alta Disponibilidade.</p>
                        </li>
                        <li>
                            <p>Testes unitários.</p>
                        </li>
                        <li>
                            <p>AWS Plataform.</p>
                        </li>
                        <li>
                            <p><strong>E MUITO MAIS!</strong></p>
                        </li>
                    </ul>

                </article>
                {/* WEB DEV */}

                <article className="service">
                    <div className="service__head">
                        <h3>Desenvolvimento mobile</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <p>React Native.</p>
                        </li>
                        <li>
                            <p>Lojas de apps.</p>
                        </li>
                    </ul>

                </article>
                {/* END OF Content Creation*/}
            </div>
        </section>
    )
}

export default Services