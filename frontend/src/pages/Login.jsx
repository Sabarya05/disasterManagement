// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import images from the assets folder
import residentBackground from '../assets/resident.jpg';
import localBodyBackground from '../assets/localbody.jpg';
import adminBackground from '../assets/admin.jpg';

const Login = () => {
  const location = useLocation(); // Get the current route and query parameters
  const loginType = location.state?.loginType || 'resident'; // Default to resident login

  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState(''); // State for error messages

  // Background images for each login type
  const backgroundImages = {
    resident: residentBackground, // Resident background image
    'local-body': localBodyBackground, // Local Body background image
    admin: adminBackground, // Admin background image
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Simulate login logic (replace with actual API call)
    if (loginType === 'resident' && username === 'resident' && password === 'resident123') {
      // Redirect to Resident Dashboard
      window.location.href = '/resident-dashboard';
    } else if (loginType === 'local-body' && username === 'localbody' && password === 'localbody123') {
      // Redirect to Local Body Dashboard
      window.location.href = '/local-body-dashboard';
    } else if (loginType === 'admin' && username === 'admin' && password === 'admin123') {
      // Redirect to Admin Dashboard
      window.location.href = '/admin-dashboard';
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content - Centered Login Form with Background Image and Gradient */}
      <main
        className="flex-grow flex items-center justify-center bg-cover bg-center p-8"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${backgroundImages[loginType]})`, // Gradient + background image
        }}
      >
        {/* Login Form */}
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {loginType === 'resident' && 'Resident Login'}
            {loginType === 'local-body' && 'Local Body Login'}
            {loginType === 'admin' && 'Admin Login'}
          </h2>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>

          {/* Signup and Forgot Password Links (Only for Resident Login) */}
          {loginType === 'resident' && (
            <div className="mt-4 text-center">
              <p className="text-gray-700">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-600 hover:text-blue-700">
                  Signup
                </Link>
              </p>
              <p className="text-gray-700">
                <Link to="/forgot-password" className="text-blue-600 hover:text-blue-700">
                  Forgot Password?
                </Link>
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Login;