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
}

Universe.prototype.toString = function() {
    return "Universe -" + " Seed: " + this.seed;
}

Universe.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Galaxy(childSeed, this.seed);
}

//defines the Galaxy object
var galaxyTypes = [["Desert Galaxy", "This is a desert galaxy."], ["Forest Galaxy", "This is a forest galaxy."], ["Ice Galaxy", "This is an icy galaxy."]];

function Galaxy(seed, parentSeed) {
    this.seed = seed;
    this.parentSeed = parentSeed;
    this.myType = seedChoice(seed, galaxyTypes)[0];
    this.myDesc = seedChoice(seed, galaxyTypes)[1];
}

Galaxy.prototype.toString = function() {
    return "Galaxy -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

Galaxy.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new System(childSeed, this.seed);
}

//defines the System object
var systemTypes = [["Desert System", "This is a desert system."], ["Forest System", "This is a forest system."], ["Ice System", "This is an icy system."]];

function System(seed, parentSeed) {
    this.seed = seed;
    this.parentSeed = parentSeed;
    this.myType = seedChoice(seed, systemTypes)[0];
    this.myDesc = seedChoice(seed, systemTypes)[1];
}

System.prototype.toString = function() {
    return "System -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

System.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Planet(childSeed, this.seed);
}

//defines the planet object
var planetTypes = [["Desert Planet", "This is a desert planet."], ["Forest Planet", "This is a forest planet."], ["Ice Planet", "This is an icy planet."]];

function Planet(seed, parentSeed) {
    this.seed = seed;
    this.parentSeed = parentSeed;
    this.myType = seedChoice(seed, planetTypes)[0];
    this.myDesc = seedChoice(seed, planetTypes)[1];
}

Planet.prototype.toString = function() {
    return "Planet -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

Planet.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Region(childSeed, this.seed);
}

//defines the region object
var regionTypes = [["Atmosphere", "This is an atmosphere."], ["Continent", "This is a continent."], ["Ocean", "This is an ocean."]];

function Region(seed, parentSeed) {
    this.seed = seed;
    this.parentSeed = parentSeed;
    this.myType = seedChoice(seed, regionTypes)[0];
    this.myDesc = seedChoice(seed, regionTypes)[1];
}

Region.prototype.toString = function() {
    return "Region -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

Region.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Biome(childSeed, this.seed);
}

//defines the Biome object
var biomeTypes = [["Desert Biome", "This is a desert biome."], ["Forest Biome", "This is a forest biome."], ["Ice Biome", "This is an icy biome."]];

function Biome(seed, parentSeed) {
    this.seed = seed;
    this.parentSeed = parentSeed;
    this.myType = seedChoice(seed, biomeTypes)[0];
    this.myDesc = seedChoice(seed, biomeTypes)[1];
}

Biome.prototype.toString = function() {
    return "Biome -" + " Seed: " + this.seed + " - Type: " + this.myType + " - Description: " + this.myDesc;
}

Biome.prototype.getChild = function(x, y) {
    var childSeed = this.seed + x + y * 10;
    return new Biome(childSeed, this.seed);
}


var testUniverse = new Universe(1);
var testRegion = testUniverse.getChild(1,1).getChild(1,1).getChild(1,1).getChild(1,1).getChild(1,1);
document.getElementById("demo").innerHTML = testRegion;