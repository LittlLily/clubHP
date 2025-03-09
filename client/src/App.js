import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import OBOGProfilePage from './pages/OBOGProfilePage';
import ResultPage from './pages/ResultPage';
import SchedulePage from './pages/SchedulePage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/obog" element={<OBOGProfilePage />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
