import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trial from './pages/Trial';

function App() {
  return (
    <Router>
      <div className="App" data-theme="nexitally">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trial" element={<Trial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
