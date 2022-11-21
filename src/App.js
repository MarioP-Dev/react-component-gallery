import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<h1>HOME</h1>}/>
      <Route path="*" element={<h1>NO</h1>}/>
    </Routes>
  );
}

export default App;
