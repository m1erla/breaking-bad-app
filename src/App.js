import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RouteLayout from './pages/RouteLayout'
function App() {
  return (
    <>
        <Routes>
        <Route path="/">
          <Route index element={<Home />} />
   
        </Route>
      </Routes>
    </>
  );
}

export default App;
