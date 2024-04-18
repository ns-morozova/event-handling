/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/generator.js
function cellsGenerator(count) {
  while (true) {
    return Math.floor(Math.random() * count);
  }
}
;// CONCATENATED MODULE: ./src/js/GamePlay.js

class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
    this.cellClickListeners = []; //
    this.cellEnterListeners = [];
    this.cellLeaveListeners = [];
  }
  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }
    this.container = container;
  }
  drawUi() {
    this.container.innerHTML = `
      <div class="board-container">
        
      </div>
      <div class="scores">
        <span>Количество баллов:</span>
        <span class="count-scores">0</span>
      </div>
      <div class="pass">
        <span>Количество промахов:</span>
        <span class="count-pass">0</span>
      </div>
      <div class="pass">
        <span>Количество пропусков:</span>
        <span class="count-skip">0</span>
      </div>
    `;
    this.boardEl = this.container.querySelector(".board-container");
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList.add("cell");
      cellEl.addEventListener("mouseenter", event => this.onCellEnter(event));
      cellEl.addEventListener("mouseleave", event => this.onCellLeave(event));
      cellEl.addEventListener("click", event => this.onCellClick(event));
      cellEl.addEventListener("mousemove", event => this.onMouseMove(event));
      this.boardEl.appendChild(cellEl);
    }
    this.cells = Array.from(this.boardEl.children);
  }
  draw() {
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].classList.remove("goblin");
    }
    const count = cellsGenerator(this.cells.length);
    this.cells[count].classList.add("goblin");
  }
  addCellEnterListener(callback) {
    this.cellEnterListeners.push(callback);
  }
  addCellLeaveListener(callback) {
    this.cellLeaveListeners.push(callback);
  }
  addCellClickListener(callback) {
    this.cellClickListeners.push(callback);
  }
  onCellEnter(event) {
    event.preventDefault();
    const index = this.cells.indexOf(event.currentTarget);
    this.cellEnterListeners.forEach(o => o.call(null, index));
  }
  onMouseMove(event) {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = event.pageX + "px";
    cursor.style.top = event.pageY + "px";
    cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  }
  onCellLeave(event) {
    event.preventDefault();
    const index = this.cells.indexOf(event.currentTarget);
    this.cellLeaveListeners.forEach(o => o.call(null, index));
  }
  onCellClick(event) {
    const index = this.cells.indexOf(event.currentTarget);
    this.cellClickListeners.forEach(o => o.call(null, index));
    const cursor = document.querySelector(".cursor");
    if (cursor.classList.contains("click")) {
      cursor.classList.remove("click");
      void cursor.offsetWidth;
      cursor.classList.add("click");
    } else {
      cursor.classList.add("click");
    }
  }
  drawScores(scores, pass, skip) {
    const countScores = this.container.querySelector(".count-scores");
    countScores.textContent = scores;
    const countPass = this.container.querySelector(".count-pass");
    countPass.textContent = pass;
    const countSkip = this.container.querySelector(".count-skip");
    countSkip.textContent = skip;
  }
  showMessage(message) {
    alert(message);
  }
  getContainer() {
    return document.querySelector("#game-container");
  }
}
;// CONCATENATED MODULE: ./src/js/GameController.js
class GameController {
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
      if (!this.gameState.isSkip) {
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
    if (this.gameState.pass == 5) {
      this.gamePlay.showMessage("Вы проиграли!");
      this.gameState.clearScores();
    }
  }
  onCellEnter(index) {}
  onCellLeave(index) {}
}
;// CONCATENATED MODULE: ./src/js/GameState.js
class GameState {
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
;// CONCATENATED MODULE: ./src/js/app.js



const gamePlay = new GamePlay();
const gameState = new GameState();
const gameCntrl = new GameController(gamePlay, gameState);
gameCntrl.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map