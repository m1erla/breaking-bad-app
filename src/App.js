import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import "./styles/reset.css";
import "./styles/global.css";
import Home from './pages/Home';
import RouteLayout from './pages/RouteLayout'
import Details from './pages/Detail';
import Quotes from './pages/Quotes';
import QuoteDetail from './components/QuoteDetail';
function App() {
  return (
    <>
        <Routes>
        <Route path="/" element= {<RouteLayout />}>
          <Route index element={<Home />} />
          <Route path='/char/:char_id' element={<Details />} />
          <Route path='/quotes' element={<Quotes/>}/>
          <Route path='/quotes/detail/:id' element={<QuoteDetail />}/>
   
        </Route>
      </Routes>
    </>
  );
}

export default App;
