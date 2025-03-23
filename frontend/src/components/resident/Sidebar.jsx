// src/components/resident/Sidebar.jsx
import React from 'react';

const Sidebar = ({ onAlertClick }) => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Menu</h2>

      {/* Home Option */}
      <button
        onClick={() => onAlertClick('home')}
        className="w-full flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors mb-4"
      >
        <span className="text-lg">Home</span>
      </button>

      {/* Alert Option */}
      <button
        onClick={() => onAlertClick('alerts')}
        className="w-full flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors mb-4"
      >
        <span className="text-lg">Alerts</span>
      </button>

      {/* View Alerts Option */}
      <button
        onClick={() => onAlertClick('view-alerts')}
        className="w-full flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
      >
        <span className="text-lg">View Alerts</span>
      </button>
    </aside>
  );
};

export default Sidebar;