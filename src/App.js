import React from "react";
import "./App.css";
import Board from "./Board";
import StatusBar from "./StatusBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory game</h1>
      </header>
      <StatusBar />
      <Board />
    </div>
  );
}

export default App;
