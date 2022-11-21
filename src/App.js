import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Components from './pages/Components';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<h1>HOME</h1>}/>
      <Route exact path="/components" element={<Components />}/>
      <Route path="*" element={<h1>NO</h1>}/>
    </Routes>
  );
}

export default App;
