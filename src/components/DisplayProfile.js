import React from 'react';
import '../App.css';

function DisplayProfile({ profileData }) {
  if (!profileData) {
    return <div className="container"><div className="display-box">No profile data available. Please submit the form first.</div></div>;
  }

  return (
    <div className="container">
      <div className="display-box">
        <h2>User Profile Details</h2>
        <p><strong>Name:</strong> {profileData.name}</p>
        <p><strong>Email:</strong> {profileData.email}</p>
        <p><strong>Date of Birth:</strong> {profileData.dob}</p>
        <p><strong>Country Code:</strong> {profileData.countryCode}</p>
        <p><strong>Contact Number:</strong> {profileData.contactNumber}</p>
      </div>
    </div>
  );
}

export default DisplayProfile;
