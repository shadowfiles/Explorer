var entities = {
	"universe" : {
			subtypes : [{
										name : "Cyclic Universe", 
										description : "This is a universe. ", 
										image : "u/1"
									}, 
									{
										name : "Landscape Universe", 
										description : "This is a landscape universe.", 
										image : "u/2"
									}, 
									{
										name : "Quantum Universe", 
										description : "This is a quantum universe.", 
										image : "u/3"
									}],
			children : ["galaxy", "system"]
	},
	"galaxy" : {
			subtypes : [{
										name : "Spiral Galaxy", 
										description : "This is a spiral galaxy.", 
										image : "g/1"
									}, 
								  {
								  	name : "Lenticular Galaxy", 
								  	description : "This is a lenticular galaxy.", 
								  	image : "g/2"
								  }, 
								  {
								  	name : "Elliptical Galaxy", 
								  	description : "This is an elliptical galaxy.", 
								  	image : "g/3"
								  }],
			children : ["system"]
	},
	"system" : {
			subtypes : [{
										name : "Red Giant System", 
										description : "This is a red giant system.", 
										image : "s/1"
									}, 
									{
										name : "White Dwarf System", 
										description : "This is a white dwarf system.", 
										image : "s/2"
									}, 
									{
										name : "Subgiant System", 
										description : "This is a subgiant system.", 
										image : "s/3"
									}],
			children : ["universe"]
	}
};