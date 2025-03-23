// src/components/resident/ViewAlerts.jsx
import React from 'react';

const ViewAlerts = () => {
  // Get alerts from local storage
  const alerts = JSON.parse(localStorage.getItem('alerts')) || [];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Sent Alerts</h2>

      {alerts.length === 0 ? (
        <p className="text-gray-700">No alerts sent yet.</p>
      ) : (
        <ul className="space-y-4">
          {alerts.map((alert, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Disaster:</strong> {alert.disaster}
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong> {alert.latitude}, {alert.longitude}
              </p>
              <p className="text-gray-700">
                <strong>Time:</strong> {new Date(alert.timestamp).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewAlerts;