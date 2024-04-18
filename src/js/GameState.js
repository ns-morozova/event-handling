export default class GameState {
  constructor() {
    this.scores = 0;
    this.pass = 0;
    this.skip = 0;
    this.isSkip = false;
  }

  clearScores() {
    this.scores = 0;
    this.pass = 0; 
    this.skip = 0;
  }
}