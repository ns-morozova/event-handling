import GameState from "../GameState";

const gameState = new GameState();

describe("Проверка класса GameState", () => {
  test("Тест конструктора", () => {
    expect(gameState.scores).toBe(0);
    expect(gameState.pass).toBe(0);
  });
  test("Тест clearScores", () => {
    gameState.scores = 5;
    gameState.pass = 5; 
    gameState.clearScores();
    expect(gameState.scores).toBe(0);
    expect(gameState.pass).toBe(0);
  });
});
