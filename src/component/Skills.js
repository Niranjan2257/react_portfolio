import React from 'react';

import htmlImage from './image/html.png';
import cssImage from './image/css.png';
import javascriptImage from './image/javascript.png';
import sqlImage from './image/sql.png';
import reactImage from './image/react.png';
import pythonImage from './image/python.png';
import cImage from './image/c.png';
import cppImage from './image/c++.png';
import officeImage from './image/office.png';

const Skills = () => {
  const skills = [
    { src: htmlImage, title: "HTML" },
    { src: cssImage, title: "CSS" },
    { src: javascriptImage, title: "JavaScript" },
    { src: sqlImage, title: "SQL" },
    { src: reactImage, title: "React" },
    { src: pythonImage, title: "Python" },
    { src: cImage, title: "C" },
    { src: cppImage, title: "C++" },
    { src: officeImage, title: "Ms Office" }
  ];

  return (
    <div className="skill" id="skill">
      <div>
        <center>
          <h2>SKILL</h2>
        </center>
      </div>
      <div className="skill_bar">
        {skills.map((skill, index) => (
          <div className="skill_item" key={index}>
            <div>
              <img src={skill.src} alt={skill.title} />
              <figcaption>
                <center>{skill.title}</center>
              </figcaption>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
