import GameController from "../GameController";
import GamePlay from "../GamePlay";
import GameState from "../GameState";

const gamePlay = new GamePlay();
const gameState = new GameState();
gamePlay.getContainer = jest.fn();
gamePlay.bindToDOM = jest.fn();
gamePlay.drawUi = jest.fn();
gamePlay.addCellEnterListener = jest.fn();
gamePlay.addCellClickListener = jest.fn();
gamePlay.addCellLeaveListener = jest.fn();
gamePlay.draw = jest.fn();
gamePlay.showMessage = jest.fn();
const gameCntrl = new GameController(gamePlay, gameState);
gameCntrl.runInterval = jest.fn();

describe("Проверка класса GameController", () => {
  test("Тест init", () => {
    gameCntrl.init();
    expect(gamePlay.bindToDOM).toBeCalled();
    expect(gamePlay.drawUi).toBeCalled();
    expect(gamePlay.addCellEnterListener).toBeCalled();
    expect(gamePlay.addCellClickListener).toBeCalled();
    expect(gamePlay.addCellLeaveListener).toBeCalled();
  });
});