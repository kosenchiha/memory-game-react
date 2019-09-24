import React, { Component } from "react";
import "./App.css";
import StatusBar from "./StatusBar";
import elf from "./img/elf.png";
import bell from "./img/bell.png";
import gift from "./img/gift.png";
import penguin from "./img/penguin.png";
import reindeer from "./img/reindeer.png";
import santasHat from "./img/santas-hat.png";
import snowflake from "./img/snowflake.png";
import star from "./img/star.png";
import MemoryCard from "./MemoryCard";

const cards = [
  [elf, "elf"],
  [bell, "bell"],
  [gift, "gift"],
  [penguin, "penguin"],
  [reindeer, "reindeer"],
  [santasHat, "santaHat"],
  [snowflake, "snowflake"],
  [star, "star"],
  [elf, "elf"],
  [bell, "bell"],
  [gift, "gift"],
  [penguin, "penguin"],
  [reindeer, "reindeer"],
  [santasHat, "santaHat"],
  [snowflake, "snowflake"],
  [star, "star"]
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openedCardValues: [],
      openedCardIds: [],
      isActive: Array(16).fill(true),
      isFliped: Array(16).fill(false),
      cards: shuffle(cards),
      counter: 0
    };
  }

  countSteps = () => {
    this.setState(current => ({
      counter: current.counter + 1
    }));
  };

  onRestart = () => {
    this.setState({
      openedCardValues: [],
      openedCardIds: [],
      isActive: Array(16).fill(true),
      isFliped: Array(16).fill(false),
      cards: shuffle(cards)
    });
  };

  handleCardClick = (newEl, id) => {
    if (this.state.isActive[id]) {
      let newIsFliped = this.state.isFliped.slice();
      newIsFliped[id] = true;
      this.setState(
        {
          openedCardValues: [...this.state.openedCardValues, newEl],
          openedCardIds: [...this.state.openedCardIds, id],
          isFliped: newIsFliped
        },
        () => {
          if (this.state.openedCardValues.length > 1) {
            if (
              this.state.openedCardValues[0] === this.state.openedCardValues[1]
            ) {
              let newActiveList = this.state.isActive.slice();
              this.state.openedCardIds.forEach(
                el => (newActiveList[el] = false)
              );
              this.setState({
                isActive: newActiveList,
                openedCardValues: [],
                openedCardIds: []
              });
            } else {
              newIsFliped = this.state.isFliped.slice();

              setTimeout(() => {
                this.state.openedCardIds.forEach(
                  el => (newIsFliped[el] = false)
                );
                this.setState({
                  isFliped: newIsFliped,
                  openedCardValues: [],
                  openedCardIds: []
                });
              }, 500);
            }
            this.countSteps();
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <StatusBar onRestart={this.onRestart} counter={this.state.counter} />
        {this.state.isActive.every(elememt => {
          return elememt === false;
        }) ? (
          <p className="message">You win!</p>
        ) : null}
        <div className="memory-game">
          {cards.map((card, index) => {
            return (
              <MemoryCard
                isFliped={this.state.isFliped[index]}
                active={this.state.isActive[index]}
                cardSource={card[0]}
                id={index}
                cardValue={card[1]}
                handleCardClick={this.handleCardClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Board;
