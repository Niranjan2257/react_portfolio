import React from 'react';
import googleDataAnalyticsImage from './image/data analysis.png';
import ibmCybersecurityImage from './image/IBM_Cybersecurity_Analyst.png';

const Certifications = () => {
  const certificationsData = [
    {
      imageUrl: googleDataAnalyticsImage,
      title: "Google Data Analytics Certificate",
      link: "https://www.credly.com/badges/cc3b0bbd-4f8b-4a46-a988-0ca0f4c77ba7/public_url"
    },
    {
      imageUrl: ibmCybersecurityImage,
      title: "IBM Cybersecurity Analyst Certificate",
      link: "https://www.credly.com/badges/5da4ee62-3cd4-4fca-a402-b1412effb1ce/public_url"
    }
  ];

  return (
    <div className="skill" id="certifications">
      <div>
        <center>
          <h2>CERTIFICATION</h2>
        </center>
      </div>
      <div className="skill_bar">
        {certificationsData.map((certification, index) => (
          <div className="badge_item" key={index}>
            <div>
              <a style={{ textDecoration: 'none', color: 'inherit' }} href={certification.link}>
                <img className="badge_img" src={certification.imageUrl} alt={certification.title} />
                <center>{certification.title}</center>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

