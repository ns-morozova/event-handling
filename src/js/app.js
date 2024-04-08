import GamePlay from "./GamePlay";
import GameController from "./GameController";
import GameState from "./GameState";

const gamePlay = new GamePlay();
const gameState = new GameState();
const gameCntrl = new GameController(gamePlay, gameState);

gameCntrl.init();
