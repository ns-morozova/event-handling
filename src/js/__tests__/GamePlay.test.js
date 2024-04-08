import GamePlay from "../GamePlay";

const gamePlay = new GamePlay();

describe("Проверка класса GamePlay", () => {
  test("Тест конструктора", () => {
    expect(gamePlay.boardSize).toBe(4);
  });
});
