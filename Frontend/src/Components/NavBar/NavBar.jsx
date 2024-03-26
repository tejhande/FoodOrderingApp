import React, {useState} from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'

const NavBar = () => {
  const [menu,setMenu] = useState('Home');

  return (
    <div className="NavBar">
        <img src={assets.logo} alt='Logo' className='logo'/>
        <ul className='NavBar-Menu'>
            <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("MobileApp")} className={menu==="MobileApp"?"active":""}>Mobile-App</li>
            <li onClick={()=>setMenu("ContactUs")} className={menu==="ContactUs"?"active":""}>Contact Us</li>
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