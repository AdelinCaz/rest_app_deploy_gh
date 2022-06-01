import React from 'react'
import "../Footer.css"
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <footer>
        <section className='container'>
            <div className='about'>
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quaerat sint quae reprehenderit vero numquam quas quis. 
                    Laboriosam omnis unde possimus molestiae aspernatur consectetur 
                    alias voluptatem numquam in distinctio tempore repudiandae, 
                    aperiam quam! Earum neque fuga sapiente voluptates, 
                    molestias sunt itaque?</p>
            </div>
            <div className='services'>
                <h3>Services</h3>
                  <AiOutlineFacebook/>
                  <FiTwitter/>
            </div>
            <div className='contact'>
                <h3>Contact</h3>
                <ul>
                    <li>
                        Address: 123 Main St. New York, NY
                    </li>
                    <li>Phone: +1-2345-6789</li>
                    <li>Email: service@company-name.com</li>
                </ul>
            </div>
        </section>
        <section className='copyright'>
            Copyright &copy; Company Name 2022
        </section>
    </footer>
  )
}

export default Footer