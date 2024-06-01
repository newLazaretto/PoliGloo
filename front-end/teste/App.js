import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Communities from './components/Communities';
import Explore from './components/Explore'; // Import your Explorar component
import CommunityItem from './components/CommunityItem';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Explore /> <Communities /></div>} />
        
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
