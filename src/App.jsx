import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateNewCrewmate from './components/CreateNewCrewmate';
import CrewmateGallery from './components/CrewmateGallery';
import CrewmateDetails from './components/CrewmateDetails';
import UpdateCrewmate from './components/UpdateCrewmate';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNewCrewmate />} />
        <Route path="/gallery" element={<CrewmateGallery />} />
        <Route path="/crewmate/:id" element={<CrewmateDetails />} />
        <Route path="/update/:id" element={<UpdateCrewmate />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
