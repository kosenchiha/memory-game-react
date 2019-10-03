import React, { Component } from "react";
import "./App.css";
import StatusBar from "./StatusBar";
import MemoryCard from "./Card";
import { shuffle } from "./helpers/shuffle";
import { cards } from "./helpers/cardsSource";

export class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openedCardValues: [],
      openedCardIds: [],
      isActive: Array(16).fill(true),
      isFliped: Array(16).fill(false),
      cards: shuffle(cards),
      counter: 0,
      startTimer: false
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
      counter: 0,
      cards: shuffle(cards)
    });
  };

  handleCardClick = (newEl, id) => {
    if (this.state.isActive[id] && !this.state.isFliped[id]) {
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
        <StatusBar
          onRestart={this.onRestart}
          counter={this.state.counter}
          startTimer={this.state.startTimer}
        />
        {this.state.isActive.every(elememt => {
          return elememt === false;
        }) ? (
          <p className="message">You win!</p>
        ) : null}
        <div className="memory-game">
          {cards.map((card, index) => {
            return (
              <MemoryCard
                key={index}
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
