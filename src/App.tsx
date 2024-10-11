import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './Content';
import Home from './Home';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content onLoginSuccess={handleLoginSuccess} />} />
        {isLoggedIn && <Route path="/home" element={<Home />} />}
      </Routes>
    </Router>
  );
};

export default App;

