export default class GameState {
  constructor() {
    this.scores = 0;
    this.pass = 0;
  }

  clearScores() {
    this.scores = 0;
    this.pass = 0; 
  }
}