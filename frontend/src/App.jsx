// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import Claims from './pages/Claims'; // Updated to Claims
import LoginType from './pages/LoginType'; // Updated import
import Login from './pages/Login'; // Updated import
import SignUp from './pages/SignUp'; // Import the SignUp component
import ResidentDashboard from './pages/ResidentDashboard';
import Alert from './components/resident/Alerts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/map" element={<Map />} />
        <Route path="/claims" element={<Claims />} /> {/* Updated to Claims */}
        <Route path="/login-type" element={<LoginType />} /> {/* Updated route */}
        <Route path="/login" element={<Login />} /> {/* Updated route */}
        <Route path="/signup" element={<SignUp />} /> {/* Add the SignUp route */}
        <Route path="/resident-dashboard" element={<ResidentDashboard />} />
        <Route path="/alerts" element={<Alert />} /> {/* Add this route */}
        
      </Routes>
    </Router>
  );
};

export default App;