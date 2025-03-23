// src/components/resident/Alerts.jsx
import React, { useState } from 'react';
import DisasterModal from './DisasterModal'; // Import the DisasterModal component

const Alerts = () => {
  const [selectedDisaster, setSelectedDisaster] = useState(null); // State to track selected disaster

  // Handle disaster icon click
  const handleDisasterClick = (disaster) => {
    setSelectedDisaster(disaster); // Open the modal for the selected disaster
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedDisaster(null); // Close the modal
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Disaster Alerts</h2>

      {/* Disaster Icons */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Flood Icon */}
        <button
          onClick={() => handleDisasterClick('Flood')}
          className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span role="img" aria-label="Flood" className="text-4xl">
            🌊
          </span>
          <span className="mt-2 text-sm">Flood</span>
        </button>

        {/* Earthquake Icon */}
        <button
          onClick={() => handleDisasterClick('Earthquake')}
          className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span role="img" aria-label="Earthquake" className="text-4xl">
            🌍
          </span>
          <span className="mt-2 text-sm">Earthquake</span>
        </button>

        {/* Fire Icon */}
        <button
          onClick={() => handleDisasterClick('Fire')}
          className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span role="img" aria-label="Fire" className="text-4xl">
            🔥
          </span>
          <span className="mt-2 text-sm">Fire</span>
        </button>

        {/* Cyclone Icon */}
        <button
          onClick={() => handleDisasterClick('Cyclone')}
          className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span role="img" aria-label="Cyclone" className="text-4xl">
            🌪️
          </span>
          <span className="mt-2 text-sm">Cyclone</span>
        </button>

        {/* Landslide Icon */}
        <button
          onClick={() => handleDisasterClick('Landslide')}
          className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span role="img" aria-label="Landslide" className="text-4xl">
            🏞️
          </span>
          <span className="mt-2 text-sm">Landslide</span>
        </button>
      </div>

      {/* Render the Disaster Modal */}
      {selectedDisaster && (
        <DisasterModal
          disaster={selectedDisaster}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Alerts;