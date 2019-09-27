import React from "react";
import "./App.css";

const StatusBar = props => {
  const { counter, onRestart } = props;
  return (
    <div className="status-bar-container">
      <p className="status-bar-element first">{counter} moves</p>
      <p className="status-bar-element second" onClick={onRestart}>
        Restart
      </p>
    </div>
  );
};

export default StatusBar;
