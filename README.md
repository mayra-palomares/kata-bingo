# kata-bingo
Kata for Classic US Bingo.
## Playing Bingo
To get the best reach for our Bingo game, we are going to model it on the US version to begin with. To make this
work, we are going to need to be able to call out numbers, generate Bingo cards for people to play with, and check
their cards when someone calls Bingo.

### 1. Calling Bingo Numbers
I want my game to call out Bingo numbers
So that people can play with their cards.

● Given I have a Bingo caller.

When I call a number, then the number is between 1 and 75 inclusive.

● Given I have a Bingo caller.

When I call a number 75 times, then all numbers between 1 and 75 are present and no number has been called more than once.

### 2. Generating Bingo Cards
I want my game to generate random Bingo cards.

● Given I have a Bingo card generator.

When I generate a Bingo card, then the generated card has 25 unique spaces, column $column only contains numbers between $lowerBound and $upperBound inclusive and the generated card has 1 FREE space in the middle.

### 3. Checking Bingo Cards
I want my game to check player's cards when they call Bingos so that a winner can be decided.

● Given a player calls Bingo after all numbers on their card have been called.

When I check the card, then the player is the winner.

● Given a player calls Bingo before all numbers on their card have been called.

When I check the card, then the player is not the winner.