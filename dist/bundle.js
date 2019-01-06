/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/LinkedList.js":
/*!***************************!*\
  !*** ./src/LinkedList.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* basic implementation of a singly-linked list with helper class Node */\r\n\r\nfunction Node(value, next=null) {\r\n\tthis.value = value;\r\n\tthis.next = next;\r\n}\r\n\r\nclass LinkedList {\r\n\tconstructor(tailValue, ...nodeValues) {\r\n\t\tif (tailValue) {\r\n\t\t\tthis.tail = new Node(tailValue);\r\n\t\t\tthis.head = this.tail;\r\n\t\t\tfor (let value of nodeValues) {\r\n\t\t\t\tlet node = new Node(value);\r\n\t\t\t\tthis.head.next = node;\r\n\t\t\t\tthis.head = node;\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tthis.head = null;\r\n\t\t\tthis.tail = null;\r\n\t\t}\r\n\t}\r\n\r\n\taddToHead(nodeValue) {\r\n\t\tlet node = new Node(nodeValue);\r\n\t\tif (this.head) {\r\n\t\t\tthis.head.next = node;\r\n\t\t\tthis.head = node;\r\n\t\t} else {\r\n\t\t\tthis.head = node;\r\n\t\t\tthis.tail = node;\r\n\t\t}\r\n\t}\r\n\r\n\tpopTail() {\r\n\t\tlet tail = this.tail;\r\n\t\tthis.tail = this.tail.next;\r\n\t\treturn tail.value;\r\n\t}\r\n\r\n\tgetTail() {\r\n\t\treturn this.tail.value;\r\n\t}\r\n\r\n\tgetHead() {\r\n\t\treturn this.head.value;\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkedList);\n\n//# sourceURL=webpack:///./src/LinkedList.js?");

/***/ }),

/***/ "./src/SnakeGameController.js":
/*!************************************!*\
  !*** ./src/SnakeGameController.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LinkedList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedList.js */ \"./src/LinkedList.js\");\n\r\n\r\nclass SnakeGameController {\r\n\tconstructor(containerElement, width, height, difficulty) {\r\n\t\tthis.containerElement = containerElement;\r\n\t\tthis.width = width;\r\n\t\tthis.height = height;\r\n\t\tthis.difficulty = difficulty;\r\n\r\n\t\tthis.drawGameElements();\r\n\t}\r\n\r\n\t// Creates game grid and game menu, adds both to containerElement.\r\n\t// Attaches click handler to New Game button.\r\n\tdrawGameElements() {\r\n\t\tlet table = document.createElement('table');\r\n\t\tfor (let n = 0; n < this.height; n++) {\r\n\t\t\tlet row = document.createElement('tr');\r\n\t\t\trow.classList.add('row-' + n);\r\n\t\t\tfor (let m = 0; m < this.width; m++) {\r\n\t\t\t\tlet cell = document.createElement('td');\r\n\t\t\t\tcell.classList.add('col-' + m);\r\n\t\t\t\tcell.classList.add('unoccupied-cell');\r\n\t\t\t\trow.appendChild(cell);\r\n\t\t\t}\r\n\t\t\ttable.appendChild(row);\r\n\t\t}\r\n\r\n\t\tthis.containerElement.appendChild(table);\r\n\r\n\t\tlet menuModal = '\\\r\n\t\t\t<div class=\"menu-modal hidden\">\\\r\n\t\t\t\t<button class=\"new-game-button\">New game</button>\\\r\n\t\t\t\t<br>\\\r\n\t\t\t\t<br>\\\r\n\t\t\t\t<hr>\\\r\n\t\t\t\t<br>\\\r\n\t\t\t\t<div>Gamespeed:</div>\\\r\n\t\t\t\t<br>\\\r\n\t\t\t\t<select class=\"gamespeed-select\">\\\r\n\t\t\t\t\t<option value=\"easy\">Easy</option>\\\r\n\t\t\t\t\t<option value=\"medium\">Medium</option>\\\r\n\t\t\t\t\t<option value=\"hard\">Hard</option>\\\r\n\t\t\t\t\t<option value=\"very-hard\">Very Hard</option>\\\r\n\t\t\t\t\t<option value=\"impossible\">Impossible</option>\\\r\n\t\t\t\t</select>\\\r\n\t\t\t</div>';\r\n\r\n\t\tthis.containerElement.insertAdjacentHTML('beforeend', menuModal);\r\n\t\tthis.mainMenu = document.querySelector('.menu-modal');\r\n\r\n\t\tdocument.querySelector('.new-game-button').addEventListener('click', e => {\r\n\t\t\tthis.mainMenu.classList.add('hidden');\r\n\t\t\tthis.newGame();\r\n\t\t});\r\n\t}\r\n\r\n\t// Shows main menu. only appears on game init and when called by gameOver\r\n\tshowMainMenu() {\r\n\t\tthis.mainMenu.classList.remove('hidden');\r\n\t}\r\n\r\n\t// Clear away snake body and food from previous game\r\n\tresetGrid() {\r\n\t\tArray.from(document.getElementsByClassName('snake-cell')).forEach(el => {\r\n\t\t\tel.classList.remove('snake-cell');\r\n\t\t\tel.classList.add('unoccupied-cell');\r\n\t\t});\r\n\r\n\t\tArray.from(document.getElementsByClassName('food-cell')).forEach(el => {\r\n\t\t\tel.classList.remove('food-cell');\r\n\t\t\tel.classList.add('unoccupied-cell');\r\n\t\t});\r\n\t}\r\n\r\n\tnewGame() {\r\n\t\tthis.resetGrid();\r\n\r\n\t\t// Establish cells for snake's initial body\r\n\t\tlet startingNodes = [\r\n\t\t\tdocument.querySelector(`.row-${Math.floor(this.height / 2)} .col-${Math.floor(this.width / 2)}`),\r\n\t\t\tdocument.querySelector(`.row-${Math.floor(this.height / 2) - 1} .col-${Math.floor(this.width / 2)}`),\r\n\t\t\tdocument.querySelector(`.row-${Math.floor(this.height / 2) - 2} .col-${Math.floor(this.width / 2)}`)\r\n\t\t];\r\n\r\n\t\t// Make snake's initial body visible\r\n\t\tstartingNodes.forEach(el => {\r\n\t\t\tel.classList.remove('unoccupied-cell');\r\n\t\t\tel.classList.add('snake-cell');\r\n\t\t});\r\n\r\n\t\tthis.snake = new _LinkedList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](...startingNodes);\r\n\r\n\t\tthis.foodExists = false;\r\n\r\n\t\t// The entire grid is initially unoccupied except for the snake's body\r\n\t\tthis.unoccupiedCells = document.getElementsByClassName('unoccupied-cell');\r\n\r\n\t\tthis.startMainLoop();\r\n\t}\r\n\r\n\tstartMainLoop() {\r\n\t\tlet direction = 'up';\r\n\t\tdocument.addEventListener('keydown', e => {\r\n\t\t\tif (e.code.match(/Arrow/)) {\r\n\t\t\t\tlet newDirection = e.code.slice(5).toLowerCase();\r\n\t\t\t\t// Ignore any inputs to go backwards\r\n\t\t\t\tif (!(this.lastExecutedDirection === 'up' && newDirection === 'down')\r\n\t\t\t\t\t&& !(this.lastExecutedDirection === 'down' && newDirection === 'up')\r\n\t\t\t\t\t&& !(this.lastExecutedDirection === 'left' && newDirection === 'right')\r\n\t\t\t\t\t&& !(this.lastExecutedDirection === 'right' && newDirection === 'left')) {\r\n\t\t\t\t\t\tdirection = newDirection;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tthis.currentInterval = setInterval(() => {\r\n\t\t\tlet nextCell = this.getCellIfValidMove(direction);\r\n\t\t\tif (nextCell) {\r\n\t\t\t\tthis.executeValidatedMove(nextCell);\r\n\t\t\t\tthis.spawnFood();\r\n\t\t\t} else {\r\n\t\t\t\tthis.gameOver();\r\n\t\t\t}\r\n\t\t}, this.getGameSpeed())\r\n\t}\r\n\r\n\tgetGameSpeed() {\r\n\t\tswitch (document.querySelector('.gamespeed-select').value) {\r\n\t\t\tcase 'easy':\r\n\t\t\t\treturn 700;\r\n\t\t\tcase 'medium':\r\n\t\t\t\treturn 500;\r\n\t\t\tcase 'hard':\r\n\t\t\t\treturn 300;\r\n\t\t\tcase 'very-hard':\r\n\t\t\t\treturn 100;\r\n\t\t\tcase 'impossible':\r\n\t\t\t\treturn 50;\r\n\t\t}\r\n\t}\r\n\r\n\tspawnFood() {\r\n\t\t// Never more than one food out at a time\r\n\t\tif (this.foodExists) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t// Select a random available cell to spawn food in\r\n\t\tlet newFoodCell = this.unoccupiedCells[Math.floor(Math.random() * this.unoccupiedCells.length)];\r\n\r\n\t\tnewFoodCell.classList.add('food-cell');\r\n\t\tnewFoodCell.classList.remove('unoccupied-cell');\r\n\t\tthis.foodExists = true;\r\n\t}\r\n\r\n\t// Once we know the inputted direction is valid, and have the next cell, move the snake's body.\r\n\texecuteValidatedMove(newCell) {\r\n\t\tnewCell.classList.add('snake-cell');\r\n\t\tnewCell.classList.remove('unoccupied-cell');\r\n\t\tthis.snake.addToHead(newCell);\r\n\r\n\t\t// Return early if we just ate -- do not shorten tail\r\n\t\tif (newCell.classList.contains('food-cell')) {\r\n\t\t\tnewCell.classList.remove('food-cell');\r\n\t\t\tnewCell.classList.add('snake-cell');\r\n\t\t\tthis.foodExists = false;\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t// Shorten tail by one cell\r\n\t\tlet tail = this.snake.getTail();\r\n\t\ttail.classList.add('unoccupied-cell');\r\n\t\ttail.classList.remove('snake-cell');\r\n\t\tthis.snake.popTail();\r\n\t}\r\n\r\n\t// Detect if player has hit grid edge -- helper for getCellIfValidMove\r\n\tmoveWouldGoBeyondEdges(row, col, direction) {\r\n\t\treturn (col === this.width - 1 && direction === 'right') \r\n\t\t\t|| (col === 0 && direction === 'left')\r\n\t\t\t|| (row === 0 && direction === 'up')\r\n\t\t\t|| (row === this.height - 1 && direction === 'down');\r\n\t}\r\n\r\n\t// Checks if snake is hitting its own body or grid edge, otherwise returns new cell\r\n\tgetCellIfValidMove(direction) {\r\n\t\tlet currenthead = this.snake.getHead();\r\n\t\tlet currentHeadRow = parseInt(currenthead.parentElement.className.match(/row-(\\d+)/)[1]);\r\n\t\tlet currentHeadCol = parseInt(currenthead.className.match(/col-(\\d+)/)[1]);\r\n\r\n\t\tif (this.moveWouldGoBeyondEdges(currentHeadRow, currentHeadCol, direction)) {\r\n\t\t\treturn null;\r\n\t\t}\r\n\r\n\t\tlet nextCell = this.getCellFromValidatedMove(currentHeadRow, currentHeadCol, direction);\r\n\r\n\t\t// This is used in startMainLoop to keep player from going backwards\r\n\t\tthis.lastExecutedDirection = direction;\r\n\r\n\t\t// Check if snake is hitting its own body\r\n\t\tif (nextCell.classList.contains('snake-cell')) {\r\n\t\t\treturn null;\r\n\t\t}\r\n\t\treturn nextCell;\r\n\t}\r\n\r\n\t// Returns a cell given params that are already known to not go beyond grid edges.\r\n\t// Throws an error if params go beyond grid edges.\r\n\tgetCellFromValidatedMove(row, col, direction) {\r\n\t\tlet newCellCol;\r\n\t\tlet newCellRow;\r\n\t\tif (direction === 'right') {\r\n\t\t\tnewCellCol = col + 1;\r\n\t\t\tnewCellRow = row;\r\n\t\t} else if (direction === 'left') {\r\n\t\t\tnewCellCol = col - 1;\r\n\t\t\tnewCellRow = row;\r\n\t\t} else if (direction === 'down') {\r\n\t\t\tnewCellCol = col;\r\n\t\t\tnewCellRow = row + 1;\r\n\t\t} else if (direction === 'up') {\r\n\t\t\tnewCellCol = col;\r\n\t\t\tnewCellRow = row - 1;\r\n\t\t}\r\n\r\n\t\tlet newCell = document.querySelector(`.row-${newCellRow} .col-${newCellCol}`);\r\n\t\tif (newCell == null) {\r\n\t\t\tthrow new Error('getCellAtCoordinates was called with invalid parameters that went beyond grid edges');\r\n\t\t}\r\n\t\treturn newCell;\r\n\t}\r\n\r\n\tgameOver() {\r\n\t\tclearInterval(this.currentInterval);\r\n\t\talert('Game over!');\r\n\t\tthis.showMainMenu();\r\n\t\t// -remove event listener for keypress\r\n\t\t// -show game over and score and \"new game?\" button\r\n\t\t// -submit score to leaderboard\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnakeGameController);\n\n//# sourceURL=webpack:///./src/SnakeGameController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SnakeGameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SnakeGameController */ \"./src/SnakeGameController.js\");\n\r\n\r\nlet gameContainer = document.getElementById('game-container');\r\n\r\nlet snakeGame = new _SnakeGameController__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gameContainer, 30, 30, 'easy');\r\nsnakeGame.showMainMenu();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });