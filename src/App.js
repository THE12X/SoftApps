import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Android from './Android/Android';
import Programs from './programs/Programs';
import About from './about/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/android" element={<Android />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
