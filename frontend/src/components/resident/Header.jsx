// src/components/resident/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal'; // Import the Modal component
import UpdateProfile from './UpdateProfile'; // Import the UpdateProfile component
import AadharVerification from './AadharVerification'; // Import the AadharVerification component

const Header = ({ residentName }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const [isUpdateProfileModalOpen, setIsUpdateProfileModalOpen] = useState(false); // State for Update Profile modal
  const [isAadharVerificationModalOpen, setIsAadharVerificationModalOpen] = useState(false); // State for Aadhar Verification modal
  const dropdownRef = useRef(null); // Ref for the dropdown container

  // Get the first letter of the resident's name for the DP
  const dpInitial = residentName ? residentName.charAt(0).toUpperCase() : 'R';

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle dropdown option clicks
  const handleOptionClick = (option) => {
    setIsDropdownOpen(false); // Close the dropdown
    switch (option) {
      case 'aadhar':
        setIsAadharVerificationModalOpen(true); // Open the Aadhar Verification modal
        break;
      case 'update':
        setIsUpdateProfileModalOpen(true); // Open the Update Profile modal
        break;
      case 'logout':
        handleLogout(); // Handle logout
        break;
      default:
        break;
    }
  };

  // Handle logout
  const handleLogout = () => {
    // Perform logout actions (e.g., clear tokens, reset state)
    localStorage.removeItem('authToken'); // Example: Clear authentication token
    localStorage.removeItem('residentName'); // Example: Clear resident name

    // Redirect to home page
    navigate('/');

    // Display success message
    alert('Logged out successfully'); // Replace with a toast notification if needed
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close the dropdown
      }
    };

    // Add event listener when the dropdown is open
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Resident Dashboard</h1>

          {/* Right Side: Welcome Message and DP with Dropdown */}
          <div className="flex items-center space-x-4 relative">
            {/* Welcome Message */}
            <span className="text-sm">
              Welcome, <span className="font-semibold">{residentName || 'Resident'}</span>
            </span>

            {/* Profile Picture (DP) with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              {/* DP Button */}
              <button
                onClick={toggleDropdown}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center focus:outline-none"
              >
                <span className="text-blue-600 text-xl font-bold">{dpInitial}</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                  <ul className="py-2">
                    <li>
                      <button
                        onClick={() => handleOptionClick('aadhar')}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                      >
                        Aadhar Verification
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleOptionClick('update')}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                      >
                        Update Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleOptionClick('logout')}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Update Profile Modal */}
      <Modal isOpen={isUpdateProfileModalOpen} onClose={() => setIsUpdateProfileModalOpen(false)}>
        <UpdateProfile onClose={() => setIsUpdateProfileModalOpen(false)} />
      </Modal>

      {/* Aadhar Verification Modal */}
      <Modal isOpen={isAadharVerificationModalOpen} onClose={() => setIsAadharVerificationModalOpen(false)}>
        <AadharVerification onClose={() => setIsAadharVerificationModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Header;