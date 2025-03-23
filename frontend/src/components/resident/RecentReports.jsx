// src/components/resident/RecentReports.jsx
import React from 'react';

const RecentReports = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Recent Reports</h2>
      <ul className="space-y-2">
        <li className="text-gray-700">Report #1: Waterlogging in Area A</li>
        <li className="text-gray-700">Report #2: Fallen Tree in Area B</li>
        <li className="text-gray-700">Report #3: Power Outage in Area C</li>
      </ul>
    </div>
  );
};

export default RecentReports;