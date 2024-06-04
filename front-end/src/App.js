import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from './components/MainContent';
import './App.css';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <MainContent />
    <Footer />
  </Router>
);
// criar um footer


export default App;
