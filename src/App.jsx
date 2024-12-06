// App.jsx

import React from 'react';
import HomePage from './Pages/HomePage';

// Code précédent avec le routage
/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MenuPage from './Pages/MenuPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}
*/

// Nouveau code simplifié avec une seule page
function App() {
  return (
    <div>
      <HomePage />
      {/* <Commande/> */}
    </div>
  );
}

export default App;
