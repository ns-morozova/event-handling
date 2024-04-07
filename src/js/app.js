import GamePlay from "./GamePlay";

const gamePlay = new GamePlay();
gamePlay.init();
gamePlay.drawUi();
function draw() {
    gamePlay.draw();
}

setInterval(draw, 1000);