function random(seed) {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function seedChoice(seed, choices) {
    return choices[Math.floor(random(seed) * choices.length)];
}

//defines the universe object
function Universe(seed) {
    this.seed = seed;
    this.myParent = this;
    this.myType = seedChoice(seed, universeTypes)[0];
    this.myDesc = seedChoice(seed, universeTypes)[1];
    this.myImg = "img/u/" + seedChoice(seed, universeTypes)[2] + ".svg";
}


Universe.prototype.toString = function() {
    return "Universe -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

Universe.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Galaxy(childSeed, this);
}

Universe.prototype.getParent = function() {
    return this.myParent;
}

Universe.prototype.getImg = function() {
    return this.myImg;
}

Universe.prototype.getType = function() {
    return this.myType;
}

//defines the Galaxy object
function Galaxy(seed, myParent) {
    this.seed = seed;
    this.myParent = myParent;
    this.myType = seedChoice(seed, galaxyTypes)[0];
    this.myDesc = seedChoice(seed, galaxyTypes)[1];
    this.myImg = "img/g/" + seedChoice(seed, galaxyTypes)[2] + ".svg";
}

Galaxy.prototype.toString = function() {
    return "Galaxy -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

Galaxy.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new System(childSeed, this);
}

Galaxy.prototype.getParent = function() {
    return this.myParent;
}

Galaxy.prototype.getImg = function() {
    return this.myImg;
}

Galaxy.prototype.getType = function() {
    return this.myType;
}

//defines the System object
function System(seed, myParent) {
    this.seed = seed;
    this.myParent = myParent;
    this.myType = seedChoice(seed, systemTypes)[0];
    this.myDesc = seedChoice(seed, systemTypes)[1];
    this.myImg = "img/s/" + seedChoice(seed, systemTypes)[2] + ".svg";
}

System.prototype.toString = function() {
    return "System -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

System.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Planet(childSeed, this);
}

System.prototype.getParent = function() {
    return this.myParent;
}

System.prototype.getImg = function() {
    return this.myImg;
}

System.prototype.getType = function() {
    return this.myType;
}

//defines the planet object
function Planet(seed, myParent) {
    this.seed = seed;
    this.myParent = myParent;
    this.myType = seedChoice(seed, planetTypes)[0];
    this.myDesc = seedChoice(seed, planetTypes)[1];
    this.myImg = "img/p/" + seedChoice(seed, planetTypes)[2] + ".svg";
}

Planet.prototype.toString = function() {
    return "Planet -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

Planet.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Region(childSeed, this);
}

Planet.prototype.getParent = function() {
    return this.myParent;
}

Planet.prototype.getImg = function() {
    return this.myImg;
}

Planet.prototype.getType = function() {
    return this.myType;
}

//defines the region object
function Region(seed, myParent) {
    this.seed = seed;
    this.myParent = myParent;
    this.myType = seedChoice(seed, regionTypes)[0];
    this.myDesc = seedChoice(seed, regionTypes)[1];
    this.myImg = "img/r/" + seedChoice(seed, regionTypes)[2] + ".svg";
}

Region.prototype.toString = function() {
    return "Region -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

Region.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Biome(childSeed, this);
}

Region.prototype.getParent = function() {
    return this.myParent;
}

Region.prototype.getImg = function() {
    return this.myImg;
}

Region.prototype.getType = function() {
    return this.myType;
}

//defines the Biome object
function Biome(seed, myParent) {
    this.seed = seed;
    this.myParent = myParent;
    this.myType = seedChoice(seed, biomeTypes)[0];
    this.myDesc = seedChoice(seed, biomeTypes)[1];
    this.myImg = "img/b/" + seedChoice(seed, biomeTypes)[2] + ".svg";
}

Biome.prototype.toString = function() {
    return "Biome -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

Biome.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Locale(childSeed, this);
}

Biome.prototype.getParent = function() {
    return this.myParent;
}

Biome.prototype.getImg = function() {
    return this.myImg;
}

Biome.prototype.getType = function() {
    return this.myType;
}

//defines the Locale object
function Locale(seed, myParent) {
    this.seed = seed;
    this.myParent = myParent;
    this.myType = seedChoice(seed, localeTypes)[0];
    this.myDesc = seedChoice(seed, localeTypes)[1];
    this.myImg = "img/l/" + seedChoice(seed, localeTypes)[2] + ".svg";
}

Locale.prototype.toString = function() {
    return "Locale -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

Locale.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Area(childSeed, this);
}

Locale.prototype.getParent = function() {
    return this.myParent;
}

Locale.prototype.getImg = function() {
    return this.myImg;
}

Locale.prototype.getType = function() {
    return this.myType;
}

//defines the Area object
function Area(seed, myParent) {
    this.seed = seed;
    this.myParent = myParent;
    this.myType = seedChoice(seed, areaTypes)[0];
    this.myDesc = seedChoice(seed, areaTypes)[1];
    this.myImg = "img/a/" + seedChoice(seed, areaTypes)[2] + ".svg";
}

Area.prototype.toString = function() {
    return "Area -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

Area.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Item(childSeed, this);
}

Area.prototype.getParent = function() {
    return this.myParent;
}

Area.prototype.getImg = function() {
    return this.myImg;
}

Area.prototype.getType = function() {
    return this.myType;
}

//defines the Item object
function Item(seed, myParent) {
    this.seed = seed;
    this.myParent = myParent;
    this.myType = seedChoice(seed, itemTypes)[0];
    this.myDesc = seedChoice(seed, itemTypes)[1];
    this.myImg = "img/i/" + seedChoice(seed, itemTypes)[2] + ".svg";
}

Item.prototype.toString = function() {
    return "Item -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

Item.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Item(childSeed, this);
}

Item.prototype.getParent = function() {
    return this.myParent;
}

Item.prototype.getImg = function() {
    return this.myImg;
}

Item.prototype.getType = function() {
    return this.myType;
}