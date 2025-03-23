// src/components/resident/AadharVerification.jsx
import React, { useState } from 'react';

const AadharVerification = ({ onClose }) => {
  const [formData, setFormData] = useState({
    aadharNumber: '',
    frontImage: null,
    backImage: null,
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload for front image
  const handleFrontImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, frontImage: file });
    }
  };

  // Handle file upload for back image
  const handleBackImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, backImage: file });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Aadhar verification data:', formData);
    alert('Aadhar verification submitted successfully!');
    setErrors({});
    onClose(); // Close the modal after successful submission
  };

  // Form validation
  const validateForm = (data) => {
    const errors = {};
    if (!data.aadharNumber) errors.aadharNumber = 'Aadhar number is required';
    else if (!/^\d{12}$/.test(data.aadharNumber)) errors.aadharNumber = 'Aadhar number must be 12 digits';
    if (!data.frontImage) errors.frontImage = 'Front image is required';
    if (!data.backImage) errors.backImage = 'Back image is required';
    return errors;
  };

  return (
    <div>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>

      <h2 className="text-2xl font-bold mb-6">Aadhar Verification</h2>
      {Object.keys(errors).length > 0 && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {Object.values(errors).map((error, index) => (
            <p key={index} className="text-sm">
              {error}
            </p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Aadhar Number Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aadharNumber">
            Aadhar Number
          </label>
          <input
            type="text"
            id="aadharNumber"
            name="aadharNumber"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your 12-digit Aadhar number"
            value={formData.aadharNumber}
            onChange={handleChange}
          />
        </div>

        {/* Front Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="frontImage">
            Front Image of Aadhar Card
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="frontImage"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-600"
            >
              <span className="text-gray-500">Click to upload front image</span>
              <input
                type="file"
                id="frontImage"
                name="frontImage"
                className="hidden"
                onChange={handleFrontImageUpload}
              />
            </label>
          </div>
          {formData.frontImage && (
            <p className="text-sm text-gray-500 mt-2">File: {formData.frontImage.name}</p>
          )}
        </div>

        {/* Back Image Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="backImage">
            Back Image of Aadhar Card
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="backImage"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-600"
            >
              <span className="text-gray-500">Click to upload back image</span>
              <input
                type="file"
                id="backImage"
                name="backImage"
                className="hidden"
                onChange={handleBackImageUpload}
              />
            </label>
          </div>
          {formData.backImage && (
            <p className="text-sm text-gray-500 mt-2">File: {formData.backImage.name}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Verification
        </button>
      </form>
    </div>
  );
};

export default AadharVerification;