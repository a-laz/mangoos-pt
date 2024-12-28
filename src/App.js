import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import InsurancePage from './pages/InsurancePage';
import ServicesPage from './pages/ServicesPage';
import BookPage from './pages/BookPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
