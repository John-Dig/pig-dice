.1 random number generator 1-6
.2 create test for evenly distributed output
.3  create Game object and test
.4 create player object and test
 
.5 logic for adding score up
.5 logic for loosing turn on 1 roll
.6 outputting score to scoreboard and roll counter to array or variables 
.7 repeat cycle and have if for reaching 100
.8 end game with total score output ready
.9 end game output


# Describe: template()
# Test: ""
# Code: const text = "hello"; wordCounter(text);
# Expected Output: 1

.1 Describe: roll()
Test: "roll outputs number between 1-6"
Code: roll();
Expected Output: <1-6>

.2 Describe: rollTest()
Test: "output is evenly distributed for 100E^6 rolls"
Code: rollTest()
Expected Output: <16,66x,xxx *6>

.3 Describe Game()
Test: "Game object exists"
Code: Game()
Expected Output:ƒ Game(){...}

.4 Describe: Player()
Test: "Player object exists"
Code: Player()
Expected Output: ƒ Player()){...}

.5 
Test: "players are added to Game correctly"
Code:
Expected Output: ok

.51 
Test: add die roll to Game object
Code:
Expected Output: ok

.6 starting turn
Test: exits turn on rolling 1
Code: player1.turn()
Expected Output: 0! End of turn. Total score is : *

.611
Test: if 2-6, adds roll to player score and prompts player for choice
Code: player1.turn()
Expected Output: * -- "roll again?"

.62
Test: if player choses "stay", outputs score to total and advances turn counter
Code: player1.turn()
Expected Output: ok

.7
Test: works fully in console
Code:
Expected Output: ok

.8 adding UI





