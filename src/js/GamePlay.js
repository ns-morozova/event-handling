import { cellsGenerator } from "./generator";

export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }
    this.container = container;
  }

  init() {
    this.bindToDOM(document.querySelector("#game-container"));
  }

  drawUi() {
    this.container.innerHTML = `
      <div class="board-container">
        
      </div>
    `;
    this.boardEl = this.container.querySelector(".board-container");

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList.add("cell");
      this.boardEl.appendChild(cellEl);
    }

    this.cells = Array.from(this.boardEl.children);
  }

  draw() {
    for(let i = 0;  i < this.cells.length; i++) {
      this.cells[i].classList.remove('goblin');
    }
    const count = cellsGenerator(this.cells.length);
    this.cells[count].classList.add('goblin');
  }
}