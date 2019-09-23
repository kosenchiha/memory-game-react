import React, { Component } from "react";
import "./App.css";
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
  [elf, "elf", false],
  [bell, "bell", false],
  [gift, "gift", false],
  [penguin, "penguin", false],
  [reindeer, "reindeer", false],
  [santasHat, "santaHat", false],
  [snowflake, "snowflake", false],
  [star, "star", false],
  [elf, "elf", false],
  [bell, "bell", false],
  [gift, "gift", false],
  [penguin, "penguin", false],
  [reindeer, "reindeer", false],
  [santasHat, "santaHat", false],
  [snowflake, "snowflake", false],
  [star, "star", false]
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
      cards: shuffle(cards)
    };
  }
  onRestart = event => {
    this.setState({ cards: shuffle(cards) });
  };
  handleCardClick = (newEl, id) => {
    if (this.state.isActive[id]) {
      let newCards = this.state.cards.slice();
      newCards[id][2] = true;
      this.setState(
        {
          openedCardValues: [...this.state.openedCardValues, newEl],
          openedCardIds: [...this.state.openedCardIds, id],
          cards: newCards
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
              newCards = this.state.cards.slice();

              setTimeout(() => {
                this.state.openedCardIds.forEach(
                  el => (newCards[el][2] = false)
                );
                this.setState({
                  cards: newCards,
                  openedCardValues: [],
                  openedCardIds: []
                });
              }, 1000);
            }
          }
        }
      );
    }
  };

  render() {
    return (
      <div className="memory-game">
        {cards.map((card, index) => {
          return (
            <MemoryCard
              isFliped={card[2]}
              active={this.state.isActive[index]}
              cardSource={card[0]}
              id={index}
              cardValue={card[1]}
              handleCardClick={this.handleCardClick}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
