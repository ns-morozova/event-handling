export default class GameController {
  constructor(gamePlay, gameState) {
    this.gamePlay = gamePlay;
    this.gameState = gameState;
  }

  init() {
    this.gamePlay.bindToDOM(this.gamePlay.getContainer());
    this.gamePlay.drawUi();
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));

    this.runInterval();
  }

  runInterval() {
    setInterval(() => {
      this.gamePlay.draw();
    }, 1000);

  }

  onCellClick(index) {
    if (this.gamePlay.cells[index].classList.contains("goblin")) {
        this.gameState.scores++; 
    } else {
        this.gameState.pass++;
    }
    if(this.gameState.pass == 5) {
      this.gamePlay.showMessage("Вы проиграли!");
      this.gameState.clearScores();
    }
    this.gamePlay.drawScores(this.gameState.scores, this.gameState.pass);
  }

  onCellEnter(index) {
    
  }

  onCellLeave(index) {
  }
}