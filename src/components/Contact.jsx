import React, { useState } from 'react'

import { SiLeetcode } from "react-icons/si";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import heroImage from '../assets/hero.png'; 
import Vector from '../assets/Vector.svg';

function Contact() {

  return (
    <div id='contact' className="container contact-container">
      <div className="contact-info">
      <h2 className="contact-h2">Contact</h2>
      <p className='contact-para'>I’m always open to collaborating on projects that solve real problems with smart design and clean code.
      Have an idea, a question, or just want to say hi? Let’s connect and make something awesome together.</p>
      <p className="email">omkarhadole38@gmail.com</p>
      <div className="socials">
        <a href="https://www.linkedin.com/in/omkar-hadole/"><span><FaLinkedin /></span></a>
        <a href="https://github.com/omkar-hadole"><span><IoLogoGithub /></span></a>
        <a href="mailto:omkarhadole38@gmail.com"><span><TbMailFilled /></span></a>
        <a href="https://leetcode.com/u/omkar-hadole/"><span><SiLeetcode /></span></a>
      </div>
      </div>
      <div className="contact-form">
        <div className="form-section">
          <div>
            <h4>Get in touch</h4>
            <p>Let’s connect and create something that not only works—but inspires.</p>
          </div>
          <form className="from" action="https://formsubmit.co/omkarhadole38@gmail.com" method="POST">
            <div>
            <input type="text" name="firstName" placeholder='First Name' required/><input type="text" name="lastName" placeholder='Last Name' required/>
            </div>
            <input type="email" name="email" placeholder='Email' required/>
            <textarea name="message" cols="30" rows="10" placeholder='Message' required></textarea>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <button type="submit" disabled={loading} style={{ opacity: loading ? 0.6 : 1 }}>
              {loading ? "Sending..." : submitted ? "Sent Successfully!" : "Send Message"}
              <span><img src={Vector} alt="" /></span>
            </button>
          </form>
        </div>
        <div className="hide-on-large">
          <div className="contact-img">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact