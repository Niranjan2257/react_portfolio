import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelors in Computer Science Engineering',
      institution: 'Chandigarh University, Gharuan, Punjab',
      session: '2018-2022'
    },
    {
      degree: 'Intermediate (CBSE)',
      institution: 'GD.D.A.V. Public School, Deoghar, Jharkhand',
      session: '2017'
    },
    {
      degree: 'Matriculation (CBSE)',
      institution: 'SKP Vidya Vihar, Banka, Bihar',
      session: '2015'
    }
  ];

  return (
    <div className="education">
      <h1 style={{ color: 'rgb(128, 98, 141)' }}>EDUCATION</h1>
      {educationData.map((item, index) => (
        <div className="education_detail" key={index}>
          <h2>{item.degree}</h2>
          <h3>{item.institution}</h3>
          <b>Session: {item.session}</b>
        </div>
      ))}
    </div>
  );
};

export default Education;
