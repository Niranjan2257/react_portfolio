import React from 'react';

export default function Contact() {
    function closeContact() {
        document.getElementById("contact_window").style.width = "0%";
      }
  return (
    <div classname="contact_window" id="contact_window">
            <div classname="contact_box">
              <img classname="contact_img" src="./image/contact.jpg" alt="contact"/>
              <button classname="closebtn" onclick={closeContact}>×</button>
              <div classname="contact">
                <h1>CONTACT ME</h1>                
                <img style="width: 16px;" src="./image/gmail-logo.png" alt="gmail"/>&nbsp;niranjan2257@gmail.com <br/><br/>
                <img style="width: 16px;" src="./image/call.png" alt="call"/>&nbsp;+91 7909060717
                <h1>GET IN TOUCH</h1>
                <div>
                  <ul>
                    <li><a href="https://www.linkedin.com/in/niranjann2257/"><img classname="contact_logo" src="./image/linkedin.png" alt="linkedin"/></a></li>
                    <li><a href="https://www.instagram.com/niranjan_nishutosh/"><img classname="contact_logo" src="./image/instagram.png" alt="instagram"/></a></li>
                    <li><a href="https://github.com/Niranjan2257"><img classname="contact_logo" src="./image/github.png" alt="github"/></a></li>
                    <li><a href="https://www.facebook.com/nishutosh.niranjan/"><img classname="contact_logo" src="./image/facebook.png" alt="facebook"/></a></li>
                  </ul>
                </div>                
              </div>                
            </div>
          </div>
  )
}
