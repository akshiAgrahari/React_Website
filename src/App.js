import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserProfileForm from './components/UserProfileForm';
import DisplayProfile from './components/DisplayProfile';
import './App.css'

function App() {
  const [profileData, setProfileData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserProfileForm setProfileData={setProfileData} />} />
        <Route path="/profile" element={<DisplayProfile profileData={profileData} />} />
      </Routes>
    </Router>
  );
}

export default App;
