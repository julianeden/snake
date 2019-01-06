import LinkedList from './LinkedList.js';

class SnakeGameController {
	constructor(containerElement, width, height, difficulty) {
		this.containerElement = containerElement;
		this.width = width;
		this.height = height;
		this.difficulty = difficulty;

		this.drawGameElements();
	}

	// Creates game grid and game menu, adds both to containerElement.
	// Attaches click handler to New Game button.
	drawGameElements() {
		let table = document.createElement('table');
		for (let n = 0; n < this.height; n++) {
			let row = document.createElement('tr');
			row.classList.add('row-' + n);
			for (let m = 0; m < this.width; m++) {
				let cell = document.createElement('td');
				cell.classList.add('col-' + m);
				cell.classList.add('unoccupied-cell');
				row.appendChild(cell);
			}
			table.appendChild(row);
		}

		this.containerElement.appendChild(table);

		let menuModal = '\
			<div class="menu-modal hidden">\
				<button class="new-game-button">New game</button>\
				<br>\
				<br>\
				<hr>\
				<br>\
				<div>Gamespeed:</div>\
				<br>\
				<select class="gamespeed-select">\
					<option value="easy">Easy</option>\
					<option value="medium">Medium</option>\
					<option value="hard">Hard</option>\
					<option value="very-hard">Very Hard</option>\
					<option value="impossible">Impossible</option>\
				</select>\
			</div>';

		this.containerElement.insertAdjacentHTML('beforeend', menuModal);
		this.mainMenu = document.querySelector('.menu-modal');

		document.querySelector('.new-game-button').addEventListener('click', e => {
			this.mainMenu.classList.add('hidden');
			this.newGame();
		});
	}

	// Shows main menu. only appears on game init and when called by gameOver
	showMainMenu() {
		this.mainMenu.classList.remove('hidden');
	}

	// Clear away snake body and food from previous game
	resetGrid() {
		Array.from(document.getElementsByClassName('snake-cell')).forEach(el => {
			el.classList.remove('snake-cell');
			el.classList.add('unoccupied-cell');
		});

		Array.from(document.getElementsByClassName('food-cell')).forEach(el => {
			el.classList.remove('food-cell');
			el.classList.add('unoccupied-cell');
		});
	}

	newGame() {
		this.resetGrid();

		// Establish cells for snake's initial body
		let startingNodes = [
			document.querySelector(`.row-${Math.floor(this.height / 2)} .col-${Math.floor(this.width / 2)}`),
			document.querySelector(`.row-${Math.floor(this.height / 2) - 1} .col-${Math.floor(this.width / 2)}`),
			document.querySelector(`.row-${Math.floor(this.height / 2) - 2} .col-${Math.floor(this.width / 2)}`)
		];

		// Make snake's initial body visible
		startingNodes.forEach(el => {
			el.classList.remove('unoccupied-cell');
			el.classList.add('snake-cell');
		});

		this.snake = new LinkedList(...startingNodes);

		this.foodExists = false;

		// The entire grid is initially unoccupied except for the snake's body
		this.unoccupiedCells = document.getElementsByClassName('unoccupied-cell');

		this.startMainLoop();
	}

	startMainLoop() {
		let direction = 'up';
		document.addEventListener('keydown', e => {
			if (e.code.match(/Arrow/)) {
				let newDirection = e.code.slice(5).toLowerCase();
				// Ignore any inputs to go backwards
				if (!(this.lastExecutedDirection === 'up' && newDirection === 'down')
					&& !(this.lastExecutedDirection === 'down' && newDirection === 'up')
					&& !(this.lastExecutedDirection === 'left' && newDirection === 'right')
					&& !(this.lastExecutedDirection === 'right' && newDirection === 'left')) {
						direction = newDirection;
				}
			}
		});

		this.currentInterval = setInterval(() => {
			let nextCell = this.getCellIfValidMove(direction);
			if (nextCell) {
				this.executeValidatedMove(nextCell);
				this.spawnFood();
			} else {
				this.gameOver();
			}
		}, this.getGameSpeed())
	}

	getGameSpeed() {
		switch (document.querySelector('.gamespeed-select').value) {
			case 'easy':
				return 700;
			case 'medium':
				return 500;
			case 'hard':
				return 300;
			case 'very-hard':
				return 100;
			case 'impossible':
				return 50;
		}
	}

	spawnFood() {
		// Never more than one food out at a time
		if (this.foodExists) {
			return;
		}

		// Select a random available cell to spawn food in
		let newFoodCell = this.unoccupiedCells[Math.floor(Math.random() * this.unoccupiedCells.length)];

		newFoodCell.classList.add('food-cell');
		newFoodCell.classList.remove('unoccupied-cell');
		this.foodExists = true;
	}

	// Once we know the inputted direction is valid, and have the next cell, move the snake's body.
	executeValidatedMove(newCell) {
		newCell.classList.add('snake-cell');
		newCell.classList.remove('unoccupied-cell');
		this.snake.addToHead(newCell);

		// Return early if we just ate -- do not shorten tail
		if (newCell.classList.contains('food-cell')) {
			newCell.classList.remove('food-cell');
			this.foodExists = false;
			return;
		}

		// Shorten tail by one cell
		let tail = this.snake.getTail();
		tail.classList.add('unoccupied-cell');
		tail.classList.remove('snake-cell');
		this.snake.popTail();
	}

	// Detect if move would hit grid edge -- helper for getCellIfValidMove
	moveWouldGoBeyondEdges(row, col, direction) {
		return (col === this.width - 1 && direction === 'right') 
			|| (col === 0 && direction === 'left')
			|| (row === 0 && direction === 'up')
			|| (row === this.height - 1 && direction === 'down');
	}

	// Checks if snake is hitting its own body or grid edge, otherwise returns new cell
	getCellIfValidMove(direction) {
		let currenthead = this.snake.getHead();
		let currentHeadRow = parseInt(currenthead.parentElement.className.match(/row-(\d+)/)[1]);
		let currentHeadCol = parseInt(currenthead.className.match(/col-(\d+)/)[1]);

		if (this.moveWouldGoBeyondEdges(currentHeadRow, currentHeadCol, direction)) {
			return null;
		}

		let nextCell = this.getCellFromValidatedMove(currentHeadRow, currentHeadCol, direction);

		// This is used in startMainLoop to keep player from going backwards
		this.lastExecutedDirection = direction;

		// Check if snake is hitting its own body
		if (nextCell.classList.contains('snake-cell')) {
			return null;
		}
		return nextCell;
	}

	// Returns a cell given params that are already known to not go beyond grid edges.
	// Throws an error if params go beyond grid edges.
	getCellFromValidatedMove(row, col, direction) {
		let newCellCol;
		let newCellRow;
		if (direction === 'right') {
			newCellCol = col + 1;
			newCellRow = row;
		} else if (direction === 'left') {
			newCellCol = col - 1;
			newCellRow = row;
		} else if (direction === 'down') {
			newCellCol = col;
			newCellRow = row + 1;
		} else if (direction === 'up') {
			newCellCol = col;
			newCellRow = row - 1;
		}

		let newCell = document.querySelector(`.row-${newCellRow} .col-${newCellCol}`);
		if (newCell == null) {
			throw new Error('getCellAtCoordinates was called with invalid parameters that went beyond grid edges');
		}
		return newCell;
	}

	gameOver() {
		clearInterval(this.currentInterval);
		alert('Game over!');
		this.showMainMenu();
		// -remove event listener for keypress
		// -show game over and score and "new game?" button
		// -submit score to leaderboard
	}
}

export default SnakeGameController;