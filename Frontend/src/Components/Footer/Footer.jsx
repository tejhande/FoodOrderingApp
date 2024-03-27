import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="FooterContent">
            <div className="FooterContentLeft">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia perferendis suscipit, a optio ipsa nulla odit ex laudantium amet eum!</p>
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
                        <li>+91 8600828734</li>
                        <li>tejasamolhande@gmail.com</li>
                    </ul>

            </div>
        </div>
        <hr />
        <p className='FooterCopyright'>Copyright 2024 © Tejas - All rights reserved.</p>
    </div>
  )
}

export default Footer