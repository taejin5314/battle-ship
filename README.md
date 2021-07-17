# Battleship project

This project consists of building a battleship game.

This repository is built to practice HTML, CSS, JS, JQuery and AJAX front-end skills, and Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start

## Battleship rules

Each player has a 10x10 board on whilch the player is able to place 5 ships.

- A Carrier, which is 5 tiles long
- A Battleship, which is 4 tiles long
- A Cruiser, which is 3 tiles long
- A Submarine, which is 3 tiles long
- A Destroyer, which is 2 tiles long

Each ship can be placed either horizontally or vertically on the board, and cannot be placed partially off the board.

Each tile is denoted by a coordinate, A-J for columns and 1-10 for rows

i.e. the top left corner would be at coordinate A1
Each player then takes turns picking a tile on the opposing player’s grid, taking a shot at that tile.

If the tile contains a ship, the shot is a HIT
If the tile does not contain a ship, the shot is a MISS
A ship is sunk if all the tiles for that ship have been marked as a HIT.

The game ends when one player has sunk all of the opposing players ships.