// src/pages/ResidentDashboard.jsx
import React, { useState } from 'react';
import Header from '../components/resident/Header';
import Sidebar from '../components/resident/Sidebar';
import Overview from '../components/resident/Overview';
import Alerts from '../components/resident/Alerts';
import ViewAlerts from '../components/resident/ViewAlerts'; // Import the ViewAlerts component
import Footer from '../components/resident/Footer';

const ResidentDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('home'); // State to manage active component

  // Handle sidebar button clicks
  const handleAlertClick = (component) => {
    setActiveComponent(component); // Update the active component
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Resident Name and DP Dropdown */}
      <Header residentName="John Doe" /> {/* Replace with dynamic data */}

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar onAlertClick={handleAlertClick} />

        {/* Dashboard Content */}
        <main className="flex-grow p-8 bg-gray-100">
          {activeComponent === 'home' && <Overview />} {/* Render Overview by default */}
          {activeComponent === 'alerts' && <Alerts />} {/* Render Alerts when clicked */}
          {activeComponent === 'view-alerts' && <ViewAlerts />} {/* Render ViewAlerts when clicked */}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ResidentDashboard;