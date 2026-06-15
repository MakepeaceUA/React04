import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import SkillsList from './components/SkillsList';
import WorkExperience from './components/WorkExperience';
import './App.css';

function App() {
  const myProfile = {
    name: "Севастьянов Арсений Русланович",
    phone: "+380 99 123 45 67",
    email: "sevastianovarsena@gmail.com",
    city: "Одесса, Украина",
    photo: "Фото",
    skills: [ 
      "React.js", 
      "HTML5 & CSS3", 
      "Git / GitHub", 
    ],
    experience: [
      {
        position: "Позиция01",
        company: "Компания01",
        period: "Июнь 2025 — Настоящее время",
        description: "Описание"
      },
      {
        position: "Позиция02",
        company: "Компания02",
        period: "Январь 2025 — Настоящее время",
        description: "Описание"
      }
    ]
  };

  return (
    <div className="profile-container">
      <PersonalInfo 
        name={myProfile.name}
        phone={myProfile.phone}
        email={myProfile.email}
        city={myProfile.city}
        photo={myProfile.photo}
      />
      <hr />
      <SkillsList skills={myProfile.skills} />
      <hr />
      <WorkExperience experience={myProfile.experience} />
    </div>
  );
}

export default App;