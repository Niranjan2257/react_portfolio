import React from 'react';
import gooderaImage from './image/goodera.png';


const WorkExperience = () => {
  const workData = [
    {
      companyLogo: gooderaImage,
      jobTitle: "DATA ANALYST | INTERN",
      duration: "January 2022 to April 2022",
      description: [
        "Migrating dashboards from one platform to another to increase the loading process of data onto the dashboards. Building a business requirement document (BRD) for various product modules. Create workflows and SQL snippets, then deployed them on the Goodera platform and maintained BRD for the deployments and configurations. Visualization of dashboards to show the impact of their project (Canvas)"
      ]
    }
    /*{
      companyLogo: anotherCompanyImage,
      jobTitle: "SOFTWARE ENGINEER",
      duration: "May 2022 to Present",
      description: [
        "Developing and maintaining web applications using React.js and Node.js.",
        "Collaborating with the team to design and implement new features.",
        "Writing clean and efficient code following best practices.",
        "Participating in code reviews and contributing to the overall improvement of the codebase."
      ]
    }*/
  ];

  return (
    <div className="work" id="work">
      <center>
        <h2>WORK EXPERIENCE</h2>
      </center>
      {workData.map((work, index) => (
        <div className="work_item" key={index}>
          <div>
            <img className="work_logo" src={work.companyLogo} alt="company-logo" />
          </div>
          <div className="work_txt">
            <h3>{work.jobTitle}</h3>
            <h4>{work.duration}</h4>
            <p>{work.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
