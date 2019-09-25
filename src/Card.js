import React from "react";
import question from "./img/question-mark.png";

const Card = props => {
  const {
    cardSource,
    id,
    cardValue,
    active,
    isFliped,
    handleCardClick
  } = props;

  return (
    <div
      className={isFliped ? "card flip" : "card"}
      onClick={
        active
          ? () => {
              handleCardClick(cardValue, id);
            }
          : null
      }
      id={id}
    >
      <img src={cardSource} className="front-face" alt=""></img>
      <img src={question} className="back-face" alt=""></img>
    </div>
  );
};

export default Card;
