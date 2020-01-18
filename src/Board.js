import React, { Component } from "react";
import "./App.css";
import StatusBar from "./StatusBar";
import Card from "./Card";
import { shuffle } from "./helpers/shuffle";
import { incrementByOne } from "./helpers/incrementByOne";
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
      startTimer: false,
      time: 0
    };
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  countSteps = () => {
    this.setState(incrementByOne("counter"));
  };

  onRestart = () => {
    clearInterval(this.timer);
    this.setState({
      openedCardValues: [],
      openedCardIds: [],
      isActive: Array(16).fill(true),
      isFliped: Array(16).fill(false),
      counter: 0,
      cards: shuffle(cards),
      startTimer: false,
      time: 0
    });
  };

  startTimer = () => {
    if (!this.state.startTimer) {
      this.setState({ startTimer: true });
      this.timer = setInterval(
        () => this.setState(incrementByOne("time")),
        1000
      );
    }
  };

  stopTimer = () => {
    console.log(
      this.state.isActive.every(elememt => {
        return elememt === false;
      })
    );
    if (
      this.state.isActive.every(elememt => {
        return elememt === false;
      })
    ) {
      clearInterval(this.timer);
      this.setState({ startTimer: false });
    }
  };

  handleCardClick = (newEl, id) => {
    this.startTimer();
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
              this.setState(
                {
                  isActive: newActiveList,
                  openedCardValues: [],
                  openedCardIds: []
                },
                () => this.stopTimer()
              );
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
          time={this.state.time}
        />
        {this.state.isActive.every(elememt => {
          return elememt === false;
        }) ? (
          <p className="message">You win!</p>
        ) : null}
        <div className="memory-game">
          {cards.map((card, index) => {
            return (
              <Card
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
