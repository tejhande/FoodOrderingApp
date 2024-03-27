import React, {useState} from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'

const NavBar = () => {
  const [menu,setMenu] = useState('Home');

  return (
    <div className="NavBar">
        <img src={assets.logo} alt='Logo' className='logo'/>
        <ul className='NavBar-Menu'>
          <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
          <a href='#ExploreMenu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
          <a href='#AppDownload' onClick={() => setMenu("MobileApp")} className={menu === "MobileApp" ? "active" : ""}>Mobile-App</a>
          <a href='#Footer' onClick={() => setMenu("ContactUs")} className={menu === "ContactUs" ? "active" : ""}>Contact Us</a>
        </ul>
        <div className="NavBar-Right">  
          <img src={assets.search_icon} alt="" />
          <div className="NavBar-SearchIcon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>Sign In</button>
        </div>
    </div>
  )
}
export default NavBar