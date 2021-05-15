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
