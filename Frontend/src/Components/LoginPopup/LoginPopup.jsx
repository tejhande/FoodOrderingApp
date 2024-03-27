import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign Up")

  return (
    <div className="LoginPopup">
            <form className="LoginPopupContainer">
            <div className="LoginPopupTitle">
                <h2>{currState}</h2>
                <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="LoginPopupInputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign Up"?"Create Account": "Login"}</button>
            <div className="LoginPopupCondition">
                <input type="checkbox" required />
                <p>By Continuing, I agree to the terms of use & Privacy Policy. </p>
            </div>
            {currState==="Login" ? <p>Create A New Account? <span onClick={()=> setCurrState("Sign Up")}>Click Here</span></p> :
            <p>Already Have an Account? <span onClick={()=> setCurrState("Login")}>Login Here</span></p>}</form>
    </div>
)
}


export default LoginPopup