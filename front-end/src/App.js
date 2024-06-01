import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from './components/MainContent';
import './App.css';

const App = () => (
  <Router>
    <MainContent />
  </Router>
);

export default App;
