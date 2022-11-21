import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<h1>HOME</h1>}/>
      <Route exact path="/test" element={<h1>test</h1>}/>
      <Route path="*" element={<h1>NO</h1>}/>
    </Routes>
  );
}

export default App;
