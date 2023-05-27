import React from 'react';
import portfolio from './image/portfolio.png'
import gitfinder from './image/gitfinder.png'

const  Project = () => {
  const projectData = [
    {
      companyLogo: portfolio,
      jobTitle: "React Portfolio Site",
      duration: "May 2023",
      description: [
        " A sleek and modern portfolio website showcasing my work and skills. Built using React, this site offers an interactive platform to display my projects, experience, and expertise. It features a clean design, responsive layouts, and smooth transitions for a seamless user experience. Explore my portfolio, view project details, and easily get in touch. Highlighting my technical skills, education, and work experience, this dynamic React portfolio site represents my professional profile and demonstrates my web development and design capabilities."
    ]
    },
    {
      companyLogo: gitfinder,
      jobTitle: "GitHub Profile Viewer",
      duration: "May 2023",
      description: [
        "A web application created with HTML, CSS, and JavaScript that allows users to explore GitHub profiles. It utilizes the GitHub API to fetch and display information such as repositories, followers, and public activity. The app provides a user-friendly interface for discovering projects and contributions."
      ]
    }
  ];

  return (
    <div className="work" id="work">
      <center>
        <h2>PROJECTS</h2>
      </center>
      {projectData.map((project, index) => (
        <div className="work_item" key={index}>
          <div>
            <img className="work_logo" src={project.companyLogo} alt="company-logo" />
          </div>
          <div className="work_txt">
            <h3>{project.jobTitle}</h3>
            <h4>{project.duration}</h4>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
