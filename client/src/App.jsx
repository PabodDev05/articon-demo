import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DallEStudio from './pages/Dall-E-Studio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PricingPage from './pages/pricing';
import ClipDropStudio from './pages/Clip-Drop-Studio';

function App() {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/Dall-E-Studio" element={<DallEStudio />} />
        <Route path="/clip-drop-studio" element={<ClipDropStudio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
