window.onload = function (e) {
	var game = new Game(5, 5);
	var ui = new GameInterface (game, "map", "tile");
	game.initialize();
	ui.initialize();
}

function GameInterface (game, id, cl) {
	var map = document.getElementById(id);
	var tile = cl;
	var game = game;

	var selected;

	this.initialize = function () {
		renderTiles();
		document.getElementById("move")
			.addEventListener("click", move, false);
		document.getElementById("back")
			.addEventListener("click", moveUp, false);
	}

	var moveUp = function () {
		game.moveUp();
		renderTiles();
		revertSelection();
	}

	var move = function () {
		if (selected) {
			game.move(selected.x, selected.y);
			renderTiles();
			revertSelection();
		}
	}

	var getSVG = function (obj) {
		xhr = new XMLHttpRequest();
		xhr.open("GET", obj.getImg(), false);
		xhr.overrideMimeType("image/svg+xml");
		xhr.send("");
		var svg = xhr.responseXML.documentElement;
		var color = "#fff";
		svg.style.fill = color;
		svg.style.color = color;
		var children = svg.getElementsByTagName("*");
		for (var i = 0; i < children.length; i++) {
			if (children[i] != null && children[i].style != null) {
				children[i].style.fill = color;
				children[i].style.color = color;
			}
		}

		return svg;
	}

	var renderTiles = function () {
		map.innerHTML = "";
		for (var i = 0; i < game.getX(); i++) {
			for (var j = 0; j < game.getY(); j++) {
				map.appendChild(renderTile(i, j));
			}
		}
		document.addEventListener("click", revertSelection, false);
		document.getElementById("info").addEventListener("click", stopClick, false);
	}

	var revertSelection = function () {
		deselectSelected();
		displayDefaultInfo();
	}

	var deselectSelected = function () {
		if (selected) {
			var className = "tile x" + selected.x + " y" + selected.y;
			var old = document.getElementsByClassName(className)[0];
			old.className = className;
			selected = null;
		}
	}

	var initializeTile = function (x, y) {
		var div = document.createElement("div");
		div.className = tile + " x" + x + " y" + y;
		div.style.height = tileWidth();
		div.style.width = tileHeight();
		div.setAttribute("x", x);
		div.setAttribute("y", y);

		div.addEventListener("click", clickTile, false);
		div.addEventListener("mouseover", hoverTile, false);
		div.addEventListener("mouseout", displayDefaultInfo, false);
		return div;
	}

	var renderTile = function (x, y) {
		var tile = initializeTile(x, y);
		tile.appendChild(getSVG(game.getChild(x, y)));
		return tile;
	}

	var stopClick = function (e) {
		e.stopPropagation();
	}

	var clickTile = function (e) {
		stopClick(e);
		var x = this.getAttribute("x");
		var y = this.getAttribute("y");

		if (selected && x === selected.x && y === selected.y) {
			move();
		} else {
			deselectSelected();
			
			this.className += " selected";
			selected = new Coordinate(x, y);
			displayInfo(game.getChild(x, y));
		}
	}

	var hoverTile = function (e) {
		var x = this.getAttribute("x");
		var y = this.getAttribute("y");
		displayInfo(game.getChild(x, y));
	}

	var displayDefaultInfo = function () {
		var object;
		if (selected) {
			object = game.getChild(selected.x, selected.y);
		} else {
			object = game.getCurrent();
		}
		displayInfo(object);
	}


	var displayInfo = function (object) {
		var image = document.getElementById("panel_image");
		document.getElementById("description").innerHTML = object.toString();
		image.innerHTML = '';
		image.appendChild(getSVG(object));
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

	this.getCurrent = function () {
		return current;
	}

	this.getX = function () {
		return dimensions.x;
	}

	this.getY = function () {
		return dimensions.y;
	}

	this.getChild = function (x, y) {
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
