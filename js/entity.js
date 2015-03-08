function random (seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function seedChoice (seed, choices) {
    var choice = null;
    if (exists (choices)) {
        choice = choices[Math.floor(random(seed) * choices.length)];
    }
    return choice;
}

function makeArray (data) {
    var arr = [];
    if (exists(data)) {
        if (isArray(data)) {
            arr = data;
        } else {
            arr = [data];
        }
    }
    return arr;
}

function isArray (data) {
    return data instanceof Array;
}

function exists (data) {
    return data && data != null && data != undefined;
}

function Entity (type, seed, parent) {
    var type = type; 
    var seed = seed; 
    var data = entities[type];
    var parent = parent; 
    if (parent == null) {
        parent = this; 
    }

    var name = "";
    var description = "";
    var img = "";

    var populateData = function () {
        var nameOptions = [];
        var descriptionOptions = [];
        var imageOptions = [];

        var subtype = data;
        var i = 3;
        while (exists(subtype)) {
            nameOptions = nameOptions.concat(makeArray(subtype.name));
            descrpitionOptions = descriptionOptions.concat(makeArray(subtype.description));
            imageOptions = imageOptions.concat(makeArray(subtype.image));
            
            subtype = seedChoice(seed * i, subtype.subtypes);
            i = i * i;
        }

        name = seedChoice(seed, nameOptions);
        description = seedChoice(seed, descriptionOptions);
        img = "img/" + seedChoice(seed, imageOptions) + ".svg";
    }

    populateData();

    this.toString = function () {
        return type + " -" + " Seed: " + seed + " - Type: " 
          + name + " - Description: " + description;
    }

    this.getChild = function (x, y) {
        var childSeed = seed + x + y * 10;

        var childType = type;
        if (data.children) {
            childType = seedChoice(childSeed * 2, data.children);
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