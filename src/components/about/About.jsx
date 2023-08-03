import React from 'react'
import './about.css'
import ME from '../../assets/me_2.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const About = () => {
    return (
        <section id='about'>
            <h5>Conheça Mais</h5>
            <h2>Sobre Mim</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experiência</h5>
                            <small>+2 anos na área de tecnologia</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Acadêmico</h5>
                            <small>Ensino técnico, superior e +10 cursos online</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projetos</h5>
                            <small>+40 Completos</small>
                        </article>
                    </div>

                    <p>
                        Analista Desenvolvedor FullStack Junior, com experiência Front-end (web e aplicativo), Back-End, análise de dados, infraestrutura e suporte.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
                    <a href="https://www.linkedin.com/in/diógenes-rychlewski-ab4b1718a/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                    <a href="https://github.com/DiogenesRychlewski" target="_blank" rel="noreferrer"><FaGithub /></a>
                </div>
            </div>
        </section>
    )
}

export default About