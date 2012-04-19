//The top level (outermost) data type must be an object or array.
//There must be at least two levels of additional types beneath the top level type, for a total of at least 3 levels of data. 
//That is, you may have an object that has an array of objects, or an object with an array of arrays, or an array with 
//objects within objects, etc.
//At the innermost level you will have the primitive data types: strings, numbers, and booleans.

var json = {
	"reviewers" : {
		"Game Amateur" : {
			"score" : 80,
			"type" : "casual",
			"advertiseWith" : false
		},
		"PGN" : {
			"score" : 85,
			"type" : "hardcore",
			"advertiseWith" : true
		},
		"GameFido" : {
			"score" : 60,
			"type" : "mainstream",
			"advertiseWith" : true
		},				 
		"Dave's Game Haven" : {
			"score" : 95,
			"type" : "hardcore",
			"advertiseWith" : false
		},			
	}
}