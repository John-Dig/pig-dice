//#region main working

//Die Roll
Game.prototype.roll =function() {
  let rollR
  rollR = Math.ceil(Math.random() * 6);
  return rollR;
}
//#endregion
//Game Object type: constructor
function Game() {
  this.players = {}
  this.currentId = 0;
};

//Game method for assigning unique id to player
Game.prototype.aId = function() {
  this.currentId += 1;
  return this.currentId;
};

//add player
Game.prototype.addPlayer = function(player) {
  player.id = this.aId();
  this.players[player.id] = player;
  //this.Players[id] = player;
};



//Player Object Type: constructor
function Player(pName) {
  this.id = null;
  this.pName = pName;
  this.pScore = 0;
  this.pTotalScore = 90;
  this.turnCounter = 1;
};


//playing game-------------------------------------------------
Player.prototype.turn =function() {
  if ((this.pTotalScore + this.pScore) >= 100) {
    console.log("YOU WIN FINALLY!")
    console.log("it only took you " + this.turnCounter + " rounds.")
    return;
  }
  let rolled = fGame.roll()
  console.log("---> " + rolled + " <---")
  if (rolled === 1) {
    this.turnCounter +=1; 
    this.pScore = 0;
    rolled = null;
    console.log("0! End of turn. Total score is : " + this.pTotalScore + ".");
    this.turn();
  }
  else if (rolled > 1) {
    this.pScore += rolled;
    console.log (this.turnCounter + "| your total for turn is " + this.pScore +".");
    console.log ("Total game score: " + this.pTotalScore);
    let yn = prompt(rolled + " --roll again?")
    console.log(yn);
    if (yn === ""){
      this.turn();
    }
    else if (yn === "n"){
      
      this.pTotalScore += this.pScore;
      this.pScore = 0;
      this.turnCounter += 1;
      console.log ("your total score is " + this.pTotalScore + ".");
      console.log("next turn starting...");
      yn = null;
      this.turn();   
    }
    else {
      console.log("else out");
    }
  }
  else {console.log("error")};
}


//temp console
const fGame = new Game();
const player1 = new Player("james");
const player2 = new Player("Marvin");
fGame.addPlayer(player1);
// fGame.addPlayer(player2);







//#region main //
// // not needed ScoreBoard Object constructor
// function ScoreBoard(player) {
//   this.player = player
//   this.score = player.pScore;
// }

rollTest
let r1 = 0;
let r2 = 0;
let r3 = 0;
let r4 = 0;
let r5 = 0;
let r6 = 0;

let rollTry = 0;
function rollTest(){
  for (i = 0; i <100000000; i ++) {
          rollTry = roll();
          if (rollTry === 1) {
            r1 =r1 +1;
          }
          else if (rollTry === 6) {
            r6 =r6 +1;
          }
          else if (rollTry === 2) {
            r2 =r2 +1;
          }
          else if (rollTry === 3) {
            r3 =r3 +1;
          }
          else if (rollTry === 4) {
            r4 =r4 +1;
          }
          else if (rollTry === 5) {
            r5 =r5 +1;
          }
          else {
            console.log("not")
          }
        }
        return [r1,r2,r3,r4,r5,r6,(r1-r2)];
      }
      //#endregion
