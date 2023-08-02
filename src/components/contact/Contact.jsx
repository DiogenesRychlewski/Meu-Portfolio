import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zem4ftl', 'template_70i0y5p', form.current, 'zaCkYcPDkFphyQPRI');

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Entre em contato</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>dirychlewski@gmail.com</h5>
                        <a href="mailto:dirychlewski@gmail.com">Entre em contato</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+55 11 987912196</h5>
                        <a href="https://api.whatsapp.com/send?phone=5511987912196">Entre em contato</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Nome' required />
                    <input type="email" name='email' placeholder='Email' required />
                    <textarea name="message" rows="7" placeholder='Sua mensagem...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
                </form>
            </div>
        </section>
    )
}

export default Contact