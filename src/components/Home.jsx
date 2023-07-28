import React from 'react'
import '../App.css'
import homerobo from '/Images/homerobo.png'

export default function Home() {
  return (
      <div>
           {/* <!-------------------------- Header Area --------------------------> */}
    <header className="header-area">
        <div className="containerN">
            <div className="header">
                <div className="logo">
                <a href="">
                    <h2>ROBOCRAFT</h2>
                </a>
                </div>
                <ul className="navbar">
                    <li><a href="#About">About Us</a></li>
                    <li><a href="#Login">Login</a></li>
                    <li><a href="#FAQ">FAQ's</a></li>
                </ul>
            </div>
        </div> 
    </header>

    {/* <!-------------------------- landing page area --------------------------> */}
    <div className = "container">
        <div className="text">
            <p className="line">DIVE INTO THE WORLD OF</p><h1>ROBOTICS!</h1>
            <p>Building Bridges with Robotics: Explore, Engineer, Excel!</p>
            <button>REGISTER NOW</button>
        </div>
        <div class="image_div">
        <img src={homerobo} alt="" />
        </div>
        </div>
        </div>
  )
}