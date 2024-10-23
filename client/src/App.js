import React from 'react'
import './App.css';
import Dice from './dice'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
  //   <div className='container'>
  //    <Dice></Dice>
  //  </div>

    <Router>
    <Routes>
        <Route path="/" element={<Dice/>} />
        {/* <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
