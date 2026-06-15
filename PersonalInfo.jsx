import React from 'react';

const PersonalInfo = (props) => {
  const { name, phone, email, city, photo } = props;

  return (
    <div className="personal-info">
      <img src={photo} alt={name} className="profile-photo" />
      <div className="info-details">
        <h2>{name}</h2>
        <p><strong>Город проживания:</strong> {city}</p>
        <p><strong>Телефон:</strong> {phone}</p>
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      </div>
    </div>
  );
};

export default PersonalInfo;