import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import FooterModal from './FooterModal'; // Import FooterModal
import './App.css'; // Import the custom CSS for the b


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <FooterModal /> {/* Include FooterModal */}
      </div>
    </Router>
  );
};

export default App;
