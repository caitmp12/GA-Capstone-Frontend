import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from "./components/Home"
import Auth from "./components/Auth"
import Form from "./components/Form"


function App() {
  return (
    <div className="App">
      <h1>Say Hi!</h1>
      <Home />
    </div>
  );
}

export default App;
