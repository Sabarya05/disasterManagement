// src/pages/Map.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Map = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100 p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Map</h1>
          <p className="text-lg">View the map for disaster-affected areas.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Map;