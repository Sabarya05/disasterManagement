// src/pages/LoginType.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import the background image
import loginTypeBackground from '../assets/loginType.jpg'; // Ensure this path is correct

const LoginType = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle login type selection
  const handleLoginType = (type) => {
    navigate('/login', { state: { loginType: type } }); // Pass loginType as state
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${loginTypeBackground})`, // Use the single background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8 text-white">Select Login Type</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resident Login */}
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleLoginType('resident')}
            >
              <h2 className="text-2xl font-bold mb-4">Resident Login</h2>
              <p className="text-gray-700">
                Login as a resident to report disasters and access resources.
              </p>
            </div>

            {/* Local Body Login */}
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleLoginType('local-body')}
            >
              <h2 className="text-2xl font-bold mb-4">Local Body Login</h2>
              <p className="text-gray-700">
                Login as an officer or ward member of the panchayath to manage disaster responses.
              </p>
            </div>

            {/* Admin Login */}
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleLoginType('admin')}
            >
              <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
              <p className="text-gray-700">
                Login as an admin to manage the disaster management system.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginType;