# Matching Game

## Overview

- This game is a browser-based card matching game that presents the player with cards arranged in a 4x4 grid.

- The back of each card is a common design shared by all cards. The front contains a distinctive symbol shared by one pair of cards in the deck, thus there are 8 unique symbols shared by 8 pairs of cards in the deck.

- The objective of the Matching Game is for the player to turn over pairs of matching cards across eight successive turns. In a turn if the player selects two cards whose symbols match those cards, along with those successfully matched in previous turns, will remain up. However, if the player chooses two cards with different symbols they will both be flipped over, obscuring their symbols.

- The game ends when all eight pairs of matching cards have been revealed. When this occurs a message is be displayed to let the user know they have won the game.

- A 'Restart' button resets the game board.

## Running The Project

Live version:
[on Heroku](https://ancient-lake-36127.herokuapp.com/)

From the repo:

1. Create a fork of this project.
2. Clone your fork into your local machine.
3. Run `npm intall` in your bash/command line.
4. Run `npm start` in your bash/command line.

## Tech Used / Dependencies

- This is a React App boostrapped with CRA.
- CSS for stiling components.
- [Prettier](https://www.npmjs.com/package/prettier) to format code.
- Icons from [icons8.com](https://icons8.com/)
