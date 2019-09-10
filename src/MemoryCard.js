import React, { Component } from "react";
import question from "./img/question-mark.png";

export class MemoryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flip: false
    };
  }
  handleClick = () => {
    this.setState({ flip: !this.state.flip });
  };
  render() {
    const { card } = this.props;
    return (
      <div
        className={this.state.flip ? "memory-card flip" : "memory-card"}
        onClick={this.handleClick}
      >
        <img src={card} className="front-face" alt=""></img>
        <img src={question} className="back-face" alt=""></img>
      </div>
    );
  }
}

export default MemoryCard;
