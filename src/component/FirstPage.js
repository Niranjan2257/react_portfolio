import React,{useState} from 'react'
import profile from './image/profile.jpg'
import SideBar from './SideBar';

export default function FirstPage() {
  const [showSidebar, setShowSidebar] = useState(false);

  const openNav = () => {
    setShowSidebar(true);
  };
  const hideNav = () => {
    setShowSidebar(false);
  };


  return (
    <div className="profile_page" id="home">
      <button classname="openbtn" onclick={openNav}>☰</button>
      {showSidebar && <SideBar closeNav={hideNav}/>}
      <div className='profile'>
        <div className='profile_pic'>
            <img src={profile} className="avatar" alt='profile'/></div>
        <div>
        <div classname="profile_text">
          <center><h1>NIRANJAN KUMAR</h1>
          <p>COMPUTER SCIENCE ENGINEER</p>
          <button className="resume"><a href="./Resume.pdf" download>DOWNLOAD CV</a></button></center>
        </div>
      </div>
      
    </div>                
</div>
  )
}

