import React from 'react'
import profile from './image/profile.jpg'

export default function About() {
  return (
    <div class="work" id="about">
        <center><h2>ABOUT ME</h2></center>    
        <div className="work_item">
             <div><img className="about_pic" src={profile} alt="about pic"/></div>
             <div className="work_txt">
                <h3>NIRANJAN KUMAR</h3>
                        <p>
                            Hey there! I'm a web developer with a passion for creating great websites and web applications. 
                            I have a strong background in computer science engineering and proficiency in a variety of programming languages,
                            including Python, HTML-CSS, SQL, JavaScript, and React.js.
                            During my internship at Goodera,I had the opportunity to work on a range of projects, including migrating dashboards and 
                            creating workflows and SQL snippets for the Goodera platform.
                            I also created business requirement documents for various product modules and visualized dashboards to show project impact.
                            These experiences helped me develop a deep understanding of data analytics and cybersecurity, 
                            which I'm eager to apply in future roles.
                            I hold a bachelor's degree in computer science engineering from Chandigarh University and 
                            have earned certifications in Google Data Analyst and IBM Cybersecurity Analyst.
                            Additionally, I've freelanced as a Subject Matter Expert in computer science for Chegg.
                            I pride myself on my strong work ethic, my ability to learn quickly and adapt to new challenges,
                            and my commitment to delivering high-quality web applications that exceed expectations.
                            Whether working independently or as part of a team, I'm always looking for ways to grow and improve as a developer.
                        </p>
                    </div>
                </div>
            </div>
  )
}
