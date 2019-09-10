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

export class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flip: false
    };
  }

  render() {
    const cards = [
      elf,
      bell,
      gift,
      penguin,
      reindeer,
      santasHat,
      snowflake,
      star,
      elf,
      bell,
      gift,
      penguin,
      reindeer,
      santasHat,
      snowflake,
      star
    ];
    return (
      <div className="memory-game">
        {cards.map((card, index) => {
          return <MemoryCard card={card} key={index} />;
        })}
      </div>
    );
  }
}

export default Board;
