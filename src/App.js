import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trial from './pages/Trial';
import DownloadConfirm from './pages/DownloadConfirm';
import Network from './pages/Network';
import Payment from './pages/Payment';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" data-theme="nexitally">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/download/confirm" element={<DownloadConfirm />} />
          <Route path="/network" element={<Network />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
