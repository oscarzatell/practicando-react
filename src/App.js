import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Oscar Zamora Tellez" edad="23" />
        <Saludar name="Paco" edad="31" />
      </header>
    </div>
  );
}

export default App;
