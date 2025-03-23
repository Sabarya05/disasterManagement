// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Get the current route

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Disaster Management</div>
        <div className="space-x-6">
          {/* Show Home link on all pages except the Home Page */}
          {location.pathname !== '/' && (
            <Link to="/" className="hover:text-blue-200 transition duration-300">Home</Link>
          )}

          {/* Show Alert, Map, and Claims links only if not on the Home Page or Login Page */}
          {location.pathname !== '/' && location.pathname !== '/login-type' && (
            <>
              <Link to="/alert" className="hover:text-blue-200 transition duration-300">Alert</Link>
              <Link to="/map" className="hover:text-blue-200 transition duration-300">Map</Link>
              <Link to="/claims" className="hover:text-blue-200 transition duration-300">Claims</Link>
            </>
          )}

          {/* Show Login as a button on the Home Page */}
          {location.pathname === '/' && (
            <Link
              to="/login-type"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
            >
              Login
            </Link>
          )}

          {/* Show Login as a link on other pages (except Login Page) */}
          {location.pathname !== '/' && location.pathname !== '/login-type' && (
            <Link to="/login-type" className="hover:text-blue-200 transition duration-300">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;