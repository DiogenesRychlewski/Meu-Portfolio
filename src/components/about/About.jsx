import React from 'react'
import './about.css'
import ME from '../../assets/me_2.png'
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
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experiência</h5>
                            <small>Acadêmica</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Social</h5>
                            <small>300+ Conexões no LinkedIn</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projetos</h5>
                            <small>12+ Completos</small>
                        </article>
                    </div>

                    <p>
                        Estudante de TI na área de Análise e Desenvolvimento de Sistemas, formado em Técnico em Informática e Programador de Sistemas, com experiência acadêmica no gerenciamento de projetos, implantação e manutenção de sistemas.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
                    <a href="https://www.linkedin.com/in/paulo-leandro-bertotti-0346a0221/:"><BsLinkedin /></a>
                    <a href="https://github.com/NetoTV"><FaGithub /></a>
                </div>
            </div>
        </section>
    )
}

export default About