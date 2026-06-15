import React from 'react';

const SkillsList = (props) => {
  const { skills } = props;

  return (
    <div className="skills-section">
      <h3>Профессиональные навыки</h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;