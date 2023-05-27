import React from 'react'
import profile from './image/profile.jpg'

export default function FirstPage() {
  return (
    <div className="profile_page" id="home">
      <button classname="openbtn" onclick="openNav()">☰</button>
      <div className='profile'>
        <div>
            <img src={profile} className="avatar" alt='profile'/></div>
        <div>
        <div classname="profile_text"><center><h1>NIRANJAN KUMAR</h1>
                <p>COMPUTER SCIENCE ENGINEER</p>
                <button className="resume"><a href="./Resume.pdf" download>DOWNLOAD CV</a></button></center>
        </div>
      </div>
      
    </div>                
</div>
  )
}

