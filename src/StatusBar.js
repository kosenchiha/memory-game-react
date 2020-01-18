import React from "react";
import "./App.css";

const getSeconds = seconds => {
  return ("0" + (seconds % 60)).slice(-2);
};
const getMinutes = seconds => {
  return Math.floor(seconds / 60);
};

const StatusBar = props => {
  const { counter, onRestart, time } = props;
  return (
    <div className="status-bar-container">
      <p className="status-bar-element first">
        {getMinutes(time)}:{getSeconds(time)}
      </p>
      <p className="status-bar-element first">{counter} moves</p>
      <p className="status-bar-element second" onClick={onRestart}>
        Restart
      </p>
    </div>
  );
};

export default StatusBar;
