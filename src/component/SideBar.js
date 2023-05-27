import React from 'react';


export default function SideBar() {
  function openContact() {
    document.getElementById("contact_window").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
    return (
      <div>
        <div id="mySidebar" classname="sidebar">
          <button classname="closebtn" onclick={closeNav}>×</button>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Work</a>
          <a href="./Resume.pdf" download>Resume</a>
          <button onclick={openContact}>Contact</button>
          
        </div>
      </div>
    )
  }
