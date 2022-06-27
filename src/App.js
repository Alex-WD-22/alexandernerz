import './App.css';
import {BrowserRouter as Router, Route, Routes } from  'react-router-dom';
import Home from './pages';
import ErrorPage from './components/ErrorPage';
import React from 'react';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={ <Home />}></Route> 
        <Route path="*" element={ <ErrorPage />}></Route> 
    </Routes>
    </Router>
  );
}

export default App;
