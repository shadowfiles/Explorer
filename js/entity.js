function random (seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function seedChoice (seed, choices) {
    return choices[Math.floor(random(seed) * choices.length)];
}

function Entity (type, seed, parent) {
    var type = type; 
    var seed = seed; 
    var data = entities[type];
    var parent = parent; 
    if (parent == null) {
        parent = this; 
    }

    var name = seedChoice(seed, data.subtypes)[0];
    var description = seedChoice(seed, data.subtypes)[1];
    var img = "img/" + seedChoice(seed, data.subtypes)[2] + ".svg";

    this.toString = function () {
        return type + " -" + " Seed: " + seed + " - Type: " 
          + name + " - Description: " + description;
    }

    this.getChild = function (x, y) {
        var childSeed = seed + x + y * 10;

        var childType = type;
        if (data.children) {
            childType = seedChoice(childSeed, data.children);
        }
        return new Entity(childType, childSeed, this);
    }

    this.getParent = function () {
        return parent;
    }

    this.getImg = function () {
        return img;
    }

    this.getType = function () {
        return type;
    }

    this.getName = function () {
        return name; 
    }
}