window.onload = function (e) {
	var game = new Game(5, 5);
	var ui = new GameInterface (game, "map", "tile");
	ui.initialize();
}

function GameInterface (game, id, cl) {
	var map = document.getElementById(id);
	var tile = cl;
	var game = game;

	var selected;

	this.initialize = function () {
		map.innerHTML = "";
		addTiles();
	}

	this.render = function () {

	}

	var addTiles = function () {
		for (var i = 0; i < game.getX(); i++) {
			for (var j = 0; j < game.getY(); j++) {
				var div = document.createElement("div");
				div.className = tile + " x" + i + " y" + j;
				div.style.height = tileWidth();
				div.style.width = tileHeight();
				div.setAttribute("x", i);
				div.setAttribute("y", j);
				map.appendChild(div);
			}
		}
	}

	var tileWidth = function () {
		return 100 / game.getX() + "%";
	}

	var tileHeight = function () {
		return 100 / game.getY() + "%";
	}
}

function Game (x, y) {
	var dimensions = new Coordinate(x, y);
	var seed = makeSeed(1);
	var children = make2DArray(x, y);

	var current;

	this.getX = function () {
		return dimensions.x;
	}

	this.getY = function () {
		return dimensions.y;
	}

	this.getObject = function (x, y) {
		return children[x][y];
	}

	this.moveUp = function () {
		if (current.getParent() != null) {
			current = current.getParent();
			getChildren();
		}
	}

	this.move = function (x, y) {
		current = children[x][y];
		getChildren();
	}

	this.initialize = function () {
		current = new Universe(seed);
		getChildren();
	}

	var getChildren = function () {
		for (var i = 0; i < x; i++) {
			for (var j = 0; j < y; j++) {
				children[i][j] = current.getChild(i, j);
			}
		}
	}
}

function Coordinate (x, y) {
	this.x = x;
	this.y = y;
}

function makeSeed (max) {
	return Math.floor(Math.random() * max);
}

function make2DArray (rows, columns) {
	var arr = new Array(rows);
	for (var i = 0; i < rows; i++) {
		arr[i] = new Array(columns);
	}
	return arr;
}
