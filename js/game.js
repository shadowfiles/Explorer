window.onload = function (e) {
	var game = new Game();
}



function Game() {
	var numSeeds = 1;
	var seed = this.makeSeed();
	
	var makeSeed = function () {
  	return Math.floor(Math.random() * numSeeds);
	}

}