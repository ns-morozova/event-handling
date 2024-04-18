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
      if(!this.gameState.isSkip) {
        this.gameState.skip++;
        if (this.gameState.skip == 5) {
          this.gamePlay.showMessage("Вы проиграли!");
          this.gameState.clearScores();
        }
        this.gamePlay.drawScores(this.gameState.scores, this.gameState.pass, this.gameState.skip);
      }
      this.gameState.isSkip = false;
      this.gamePlay.draw();
    }, 1000);
  }

  onCellClick(index) {
    this.gameState.isSkip = true;
    if (this.gamePlay.cells[index].classList.contains("goblin")) {
        this.gameState.scores++;
    } else {
        this.gameState.pass++;
    }
    this.gamePlay.drawScores(this.gameState.scores, this.gameState.pass, this.gameState.skip);
    
    if (this.gameState.scores == 10) {
      this.gamePlay.showMessage("Вы победили!");
      this.gameState.clearScores();
    }

    if(this.gameState.pass == 5) {
      this.gamePlay.showMessage("Вы проиграли!");
      this.gameState.clearScores();
    }
    
  }

  onCellEnter(index) {
    
  }

  onCellLeave(index) {
  }
}