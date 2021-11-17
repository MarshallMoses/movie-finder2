import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Movie from './Movie';

import './App.css';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Movie Finder 2</Link>
      </nav>
      <Routes>
        <Route path="/" exact element={ <Home /> } />
        <Route path="/Movie/:id" element={ <Movie /> } />
        <Route element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;