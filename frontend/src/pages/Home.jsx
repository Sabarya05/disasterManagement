// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Features from '../components/Features'; // Import the Features component
import background from '../assets/disaster.jpg'; // Import the background image

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main
        className="flex-grow bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }} // Use the imported image
      >
        <div className="container mx-auto p-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Stay Alert, Stay Safe</h1>
          <p className="text-xl">Join hands in managing local hazards and disasters.</p>
        </div>
      </main>
      <Features /> {/* Add the Features component here */}
      <Footer />
    </div>
  );
};

export default Home;