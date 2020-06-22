import React from "react";
import "./App.css";
import { Text } from "./Text";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1> Seek2Solve </h1>
          <h2> An app to change it all </h2>
        </div>
      </header>

      <div className = "QA">
        {Text.map(para => para.includes("Q.") ? <strong> {para} </strong> : <p> {para} </p>)}
      </div>
    </div>
  );
}

export default App;
