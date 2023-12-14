import React from 'react';

function ProfileCard({ candidate }) {
  return (
    <div className="profile-card">
      <h2>{candidate.name}</h2>
      <p>Role: {candidate.role}</p>
      <p>Skills: {candidate.skills.join(', ')}</p>
    </div>
  );
}


export default ProfileCard;
