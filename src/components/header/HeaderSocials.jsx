import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/paulo-leandro-bertotti-0346a0221/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/NetoTV" target="_blank"><FaGithub /></a>
        </div>
    )
}

export default HeaderSocials