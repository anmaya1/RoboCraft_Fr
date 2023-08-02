import React from 'react'
import './Login.css'
import Loginrobo from '/Images/Loginrobo.png'

function Login() {
  return (
<div class="sp_bodyL">
      <div class="inputsL">
        <h2>Welcome!!</h2>
        <div class="info"> 
        <h2>Resume your journey here.</h2>
        </div>
        <p>Email</p>
        <input
          type="text"
          placeholder="Enter your email address"
          class="name"
        />
        <p>Enter the password</p>
        <input type="text" placeholder="Enter the password" class="field" />
        <br />
        <input type="button" value="Login" class="button_sp" />
        <div class="forgot">
            <p>New to Robocraft Register now! forgot password</p>
        </div>
      </div>
         <div class="image_divL">
        <img src={Loginrobo} alt="" />
        </div>
    </div>
  )
}

export default Login