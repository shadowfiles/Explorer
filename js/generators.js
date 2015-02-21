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
    this.myParent = null;
}


Universe.prototype.toString = function() {
    return "Universe -" + " Seed: " + this.seed;
}

Universe.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Galaxy(childSeed, this);
}

Universe.prototype.getParent = function() {
    return this.myParent;
}

//defines the Galaxy object
var galaxyTypes = [["Desert Galaxy", "This is a desert galaxy.", "g1"], ["Forest Galaxy", "This is a forest galaxy.", "g2"], ["Ice Galaxy", "This is an icy galaxy.", "g3"]];

function Galaxy(seed, myParent) {
    this.seed = seed;
    this.myParent = myParent;
    this.myType = seedChoice(seed, galaxyTypes)[0];
    this.myDesc = seedChoice(seed, galaxyTypes)[1];
    this.myImg = "img/" + seedChoice(seed, galaxyTypes)[2] + ".svg";
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

//defines the System object
var systemTypes = [["Desert System", "This is a desert system.", "s1"], ["Forest System", "This is a forest system.", "s2"], ["Ice System", "This is an icy system.", "s3"]];

function System(seed, myParent) {
    this.seed = seed;
    this.myParent = myParent;
    this.myType = seedChoice(seed, systemTypes)[0];
    this.myDesc = seedChoice(seed, systemTypes)[1];
    this.myImg = "img/" + seedChoice(seed, galaxyTypes)[2] + ".svg";
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

//defines the planet object
var planetTypes = [["Desert Planet", "This is a desert planet.", "p1"], ["Forest Planet", "This is a forest planet.", "p2"], ["Ice Planet", "This is an icy planet.", "p3"]];

function Planet(seed, myParent) {
    this.seed = seed;
    this.myParent = myParent;
    this.myType = seedChoice(seed, planetTypes)[0];
    this.myDesc = seedChoice(seed, planetTypes)[1];
    this.myImg = "img/" + seedChoice(seed, galaxyTypes)[2] + ".svg";
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

//defines the region object
var regionTypes = [["Atmosphere", "This is an atmosphere.", "r1"], ["Continent", "This is a continent.", "r2"], ["Ocean", "This is an ocean.", "r3"]];

function Region(seed, myParent) {
    this.seed = seed;
    this.myParent = myParent;
    this.myType = seedChoice(seed, regionTypes)[0];
    this.myDesc = seedChoice(seed, regionTypes)[1];
    this.myImg = "img/" + seedChoice(seed, galaxyTypes)[2] + ".svg";
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

//defines the Biome object
var biomeTypes = [["Desert Biome", "This is a desert biome.", "b1"], ["Forest Biome", "This is a forest biome.", "b2"], ["Ice Biome", "This is an icy biome.", "b3"]];

function Biome(seed, myParent) {
    this.seed = seed;
    this.myParent = myParent;
    this.myType = seedChoice(seed, biomeTypes)[0];
    this.myDesc = seedChoice(seed, biomeTypes)[1];
    this.myImg = "img/" + seedChoice(seed, galaxyTypes)[2] + ".svg";
}

Biome.prototype.toString = function() {
    return "Biome -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

Biome.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Biome(childSeed, this);
}

Biome.prototype.getParent = function() {
    return this.myParent;
}

Biome.prototype.getImg = function() {
    return this.myImg;
}

var testUniverse = new Universe(1);
var testRegion = testUniverse.getChild(1,1).getChild(1,1).getChild(1,1).getParent().getParent().getParent();
document.getElementById("demo").innerHTML = testRegion;