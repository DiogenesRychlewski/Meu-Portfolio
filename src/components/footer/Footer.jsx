import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/DiogenesRychlewski" className='footer__logo'>Diógenes Rychlewski</a>

            <ul className='permalinks'>
                <li><a href="_">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Comments</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/paulo-leandro-bertotti-0346a0221/"><BsLinkedin /></a>
                <a href="https://github.com/NetoTV"><FaGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Paulo Leandro Bertotti. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer