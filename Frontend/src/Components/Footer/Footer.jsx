import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="FooterContent">
            <div className="FooterContentLeft">
                <img src={assets.logo} alt="" />
                <p>WindSpeed Food Delivery App revolutionizes food delivery with lightning-fast service and a user-friendly interface. Enjoy swift delivery of your favorite cuisines, powered by cutting-edge technology.</p>
                <div className="FooterSocialIcons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

                    <div className="FooterContentCenter">
                        <h2>Company</h2>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>

                </div>
                <div className="FooterContentRight">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li><a href="https://tejashande.vercel.app" target='_blank'>Creators Portfolio🚀</a></li>
                        <li><a href="https://tejashande.vercel.app" target='_blank'>Tejas Hande</a></li>
                        <li><a href="https://tejashande.vercel.app" target='_blank'>+91 8600828734</a></li>
                        <li><a href="https://tejashande.vercel.app" target='_blank'>tejasamolhande@gmail.com</a></li>
                        <li><a href="https://tejashande.vercel.app" target='_blank'>Pune, India</a></li>
                    </ul>

            </div>
        </div>
        <hr />
        <p className='FooterCopyright'>Copyright 2024 © Tejas - All rights reserved.</p>
    </div>
  )
}

export default Footer
