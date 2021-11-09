import React, { useState } from 'react'
import { useRef } from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';


const Contact = () => {
    const formRef = useRef()
    const [done,setDone] = useState(false);
    const handleSubmit = (e) =>{
        emailjs.sendForm('service_r95ongi', 'template_zr9oqlp', formRef.current, 'user_kmmMxE2eIpDD5Aa2QFwfX')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
        e.preventDefault();
    }
    
    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Let's discuss something</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <i class="fa-solid fa-phone"></i>
                            +91 7414940988
                        </div>
                        <div className="contact-info-item">
                            <i class="fa-solid fa-envelope"></i>
                            prasadrpatil23@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <i class="fa-solid fa-location-dot"></i>
                            Chalisgaon ,424101 ,Jalgaon
                        </div>
                    
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-description">
                        <b>Hey, What's your next plan</b> Please get in touch, Contact me for more details.
                    </p>
                    <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button>Get in touch</button>
                        {done && "Thank You"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
