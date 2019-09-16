import React, { Component } from "react";
import question from "./img/question-mark.png";

export class MemoryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick = e => {
    this.setState({ flip: true });
    this.props.handleCardClick(this.props.cardValue, this.props.id);
  };
  render() {
    const { cardSource, id, active } = this.props;

    return (
      <div
        className={this.props.isFliped ? "memory-card flip" : "memory-card"}
        onClick={active ? this.handleClick : null}
        id={id}
      >
        <img src={cardSource} className="front-face" alt=""></img>
        <img src={question} className="back-face" alt=""></img>
      </div>
    );
  }
}

export default MemoryCard;
