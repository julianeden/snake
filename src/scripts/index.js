import SnakeGameController from './SnakeGameController';

let gameContainer = document.getElementById('game-container');

let snakeGame = new SnakeGameController(gameContainer, 30, 30, 'easy');
snakeGame.showMainMenu();