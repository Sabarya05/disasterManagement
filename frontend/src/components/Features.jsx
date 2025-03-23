// src/components/Features.jsx
import React from 'react';
import { FaBell, FaMapMarkedAlt, FaHandHoldingUsd } from 'react-icons/fa'; // Import icons

const Features = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Alert System */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaBell className="text-4xl text-blue-600" /> {/* Icon */}
            </div>
            <h2 className="text-2xl font-bold mb-4">Alert System</h2>
            <p className="text-gray-700">
              Residents can send real-time disaster alerts to notify volunteers and authorities.
            </p>
          </div>

          {/* Map Integration */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaMapMarkedAlt className="text-4xl text-blue-600" /> {/* Icon */}
            </div>
            <h2 className="text-2xl font-bold mb-4">Map Integration</h2>
            <p className="text-gray-700">
              View affected areas and find the safest escape routes in real-time.
            </p>
          </div>

          {/* Claim Assistance */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaHandHoldingUsd className="text-4xl text-blue-600" /> {/* Icon */}
            </div>
            <h2 className="text-2xl font-bold mb-4">Claim Assistance</h2>
            <p className="text-gray-700">
              Easily apply for claims if you suffer property loss due to disasters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;