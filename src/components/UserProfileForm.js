import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function UserProfileForm({ setProfileData }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = {
      name,
      email,
      dob,
      countryCode,
      contactNumber,
    };
    setProfileData(profile);
    navigate('/profile');
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>User Profile Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
          </div>
          <div>
            <label>Country Code:</label>
            <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} required>
              <option value="">Select</option>
              <option value="+1">+1 (USA)</option>
              <option value="+91">+91 (India)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+347">+347 (Armenia)</option>
              <option value="+977">+977 (Nepal)</option>
            </select>
          </div>
          <div>
            <label>Contact Number:</label>
            <input type="tel" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserProfileForm;
