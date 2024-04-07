import "../css/style.css";
import GamePlay from "../GamePlay";
const gamePlay = new GamePlay();
gamePlay.bindToDOM = jest.fn();

describe("Проверка класса GamePlay", () => {
  test("Пустышка", () => {
    gamePlay.init();
    expect(gamePlay.bindToDOM).toBeCalled();
  });
});
