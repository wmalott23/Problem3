import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

//Import Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// Import Pages
import HomePage from './Pages/HomePage';

// Import React-Bootstrap
import "react-bootstrap"

function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
