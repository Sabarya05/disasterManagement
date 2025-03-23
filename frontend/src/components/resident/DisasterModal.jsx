// src/components/resident/DisasterModal.jsx
import React, { useState } from 'react';

const DisasterModal = ({ disaster, onClose }) => {
  const [location, setLocation] = useState(null); // State to store user's location

  // Get precise location using the Geolocation API
  const getPreciseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          alert(`Location fetched: Latitude - ${latitude}, Longitude - ${longitude}`);
        },
        (error) => {
          alert('Error fetching location: ' + error.message);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  // Handle sending alert
  const handleSendAlert = () => {
    if (!location) {
      alert('Please fetch your precise location first.');
      return;
    }

    // Create alert object
    const alertData = {
      disaster,
      latitude: location.latitude,
      longitude: location.longitude,
      timestamp: new Date().toISOString(), // Add a timestamp
    };

    // Get existing alerts from local storage
    const existingAlerts = JSON.parse(localStorage.getItem('alerts')) || [];

    // Add the new alert
    const updatedAlerts = [...existingAlerts, alertData];

    // Save alerts back to local storage
    localStorage.setItem('alerts', JSON.stringify(updatedAlerts));

    alert('Alert sent successfully!');
    onClose(); // Close the modal after sending the alert
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4">{disaster} Alert</h2>

        {/* Map Placeholder */}
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-gray-500">Map will be displayed here</span>
        </div>

        {/* Use Precise Location Button */}
        <button
          onClick={getPreciseLocation}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors mb-4"
        >
          Use Precise Location
        </button>

        {/* Give Alert Button */}
        <button
          onClick={handleSendAlert}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Give Alert
        </button>
      </div>
    </div>
  );
};

export default DisasterModal;