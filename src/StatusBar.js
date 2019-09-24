import React, { Component } from "react";
import "./App.css";

export class StatusBar extends Component {
  render() {
    return (
      <div className="status-bar-container">
        <p className="status-bar-element">timer</p>
        <p className="status-bar-element">{this.props.counter} moves</p>
        <p className="status-bar-element" onClick={this.props.onRestart}>
          restart
        </p>
      </div>
    );
  }
}

export default StatusBar;
