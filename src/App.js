import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trial from './pages/Trial';
import DownloadConfirm from './pages/DownloadConfirm';

function App() {
  return (
    <Router>
      <div className="App" data-theme="nexitally">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/download/confirm" element={<DownloadConfirm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
