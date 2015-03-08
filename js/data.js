var entities = {
	"universe" : {
			subtypes :  [["Cyclic Universe", "This is a cyclic universe.", "u/1"], 
									 ["Landscape Universe", "This is a landscape universe.", "u/2"], 
									 ["Quantum Universe", "This is a quantum universe.", "u/3"]],
			children : ["galaxy"]
	},
	"galaxy" : {
			subtypes : [["Spiral Galaxy", "This is a spiral galaxy.", "g/1"], 
								  ["Lenticular Galaxy", "This is a lenticular galaxy.", "g/2"], 
								  ["Elliptical Galaxy", "This is an elliptical galaxy.", "g/3"]],
			children : ["system"]
	},
	"system" : {
			subtypes : [["Red Giant System", "This is a red giant system.", "s/1"], 
									["White Dwarf System", "This is a white dwarf system.", "s/2"], 
									["Subgiant System", "This is a subgiant system.", "s/3"]],
			children : ["planet", "star"]
	},
	"star" : {
			subtypes : [["Sun", "Keeps me warm. ", "p/5"]],
			children : ["planet"]
	},
	"planet" : {
			subtypes : [["Desert Planet", "This is a desert planet.", "p/1"], 
									["Forest Planet", "This is a forest planet.", "p/2"], 
									["Ice Planet", "This is an icy planet.", "p/3"]],
			children : ["region"]
	},
	"region" : {
			subtypes : [["Atmosphere", "This is an atmosphere.", "r/1"], 
									["Continent", "This is a continent.", "r/2"], 
									["Ocean", "This is an ocean.", "r/3"]],
			children : ["biome"]
	},
	"biome" : {
			subtypes : [["Desert Biome", "This is a desert biome.", "b/1"], 
									["Forest Biome", "This is a forest biome.", "b/2"], 
									["Ice Biome", "This is an icy biome.", "b/3"]],
			children : ["locale"]
	},
	"locale" : {
			subtypes : [["City", "This is a city locale.", "l/1"], 
									["Field", "This is a field locale.", "l/2"], 
									["Village", "This is a village locale.", "l/3"]],
			children : ["area"],
	},
	"area" : {
			subtypes : [["House", "This is a house area.", "a/1"], 
									["Store", "This is a store area.", "a/2"], 
									["Field", "This is a field area.", "a/3"]], 
			children : ["item"],
	},
	"item" : {
			subtypes : [["Book", "This is a book item.", "i/1"], 
									["Chair", "This is a chair item.", "i/2"], 
									["Rock", "This is a rock item.", "i/3"]],
	}
};