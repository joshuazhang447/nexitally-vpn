import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Bypass from './components/Bypass';
import Download from './components/Download';
import Business from './components/Business';
import Footer from './components/Footer';

function App() {
  return (
    // "data-theme" tells DaisyUI which color palette to use for this section/app
    <div className="App" data-theme="nexitally">
      <Header />

      <main className="min-h-screen bg-base-100 text-base-content">
        <Hero />
        <Features />
        <Bypass />
        <Pricing />
        <Download />
        <Business />
        <Footer />
      </main>
    </div>
  );
}

export default App;
