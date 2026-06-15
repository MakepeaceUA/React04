import React from 'react';

const WorkExperience = (props) => {
  const { experience } = props;

  return (
    <div className="experience-section">
      <h3>Опыт работы</h3>
      {experience.map((job, index) => (
        <div key={index} className="job-item">
          <h4>{job.position} — {job.company}</h4>
          <span className="job-period">{job.period}</span>
          <p className="job-description">{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;