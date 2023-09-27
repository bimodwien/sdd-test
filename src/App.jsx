import React, { useState } from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Landing from './pages/landing/Landing'
import Add from './pages/add/Add'
import Edit from "./pages/edit/Edit";

export const ContextTodos = React.createContext({
  todos: [],
  SET_TODOS: () => {}
})

function App() {

  const [todos, setTodos] = useState([])

  return (
    <ContextTodos.Provider value={{
      todos: todos, SET_TODOS: setTodos
    }}>
      <div className="App">
        <Routes>
          <Route path="/" Component={Landing}></Route>
          <Route path="/add" Component={Add}></Route>
          <Route path="/edit/:id" Component={Edit}></Route>
        </Routes>
      </div>
    </ContextTodos.Provider>
  );
}

export default App;
