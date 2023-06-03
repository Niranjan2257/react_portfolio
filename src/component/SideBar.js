import React ,{useState} from 'react';
import Contact from './Contact';

export default function SideBar({closeNav}) {
  const [showContact, setShowContact] = useState(false);

  const openContact = () => {
    setShowContact(true);
  };
  const closeContact = () => {
    setShowContact(false);
  };

    return (
      <div>
        <div id="mySidebar" classname="sidebar">
          <button classname="closebtn" onclick={closeNav}>×</button>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Work</a>
          <a href="./Resume.pdf" download>Resume</a>
          <button onclick={openContact}>Contact</button>
          {showContact && <Contact hideContact={closeContact}/>}
          
        </div>
      </div>
    )
  }
