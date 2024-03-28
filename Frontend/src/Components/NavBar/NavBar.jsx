import React, {useState} from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const NavBar = ({setShowLogin}) => {
  
  const [menu,setMenu] = useState('Home');
  const {GetTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="NavBar">
        <Link to={'/'}><img src={assets.logo} alt='Logo' className='logo'/></Link>
        <ul className='NavBar-Menu'>
          <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
          <a href='#ExploreMenu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
          <a href='#AppDownload' onClick={() => setMenu("MobileApp")} className={menu === "MobileApp" ? "active" : ""}>Mobile-App</a>
          <a href='#Footer' onClick={() => setMenu("ContactUs")} className={menu === "ContactUs" ? "active" : ""}>Contact Us</a>
        </ul>
        <div className="NavBar-Right">  
          <img src={assets.search_icon} alt="" />
          <div className="NavBar-SearchIcon">
            <Link to={'/Cart'}><img src={assets.basket_icon} alt="" /></Link>
            <div className={GetTotalCartAmount()===0?"":"dot"}></div>
          </div>  
          <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}
export default NavBar