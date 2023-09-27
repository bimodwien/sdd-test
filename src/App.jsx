import React from "react";
import './app.css'
import { Routes, Route } from "react-router-dom";
import  Landing from './pages/landing/Landing'
import Add from './pages/add/Add'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Landing}></Route>
        <Route path="/add" Component={Add}></Route>
      </Routes>
    </div>
  );
}

export default App;
