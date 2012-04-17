//The below object details out information about the QA team.
var qaTeam = { 
	manager: "Scott",
	numberOfTesters: 12,
	realhoursWorked: 4000,
	bugsFound: function (bugsPerHour) {
		var manhours = (qaTeam.realhoursWorked * qaTeam.numberOfTesters);
		var bugsFound = (bugsPerHour * manhours);
		return bugsFound; 
	}
};

//The below object details out information about the development team.
var devTeam = {
	methodology: "scrum",
	numberOfEngineers: 10,
	realhoursWorked: 5000,
	bugsFixed: function (fixedPerHour) {
		var manhours = (devTeam.realhoursWorked * devTeam.numberOfEngineers);
		var bugsFixed = (fixedPerHour * manhours);
		return bugsFixed; 
	}
};

//The below determines how many more hours the Dev Team needs to work to fix all of the bugs.

var bugsFound = qaTeam.bugsFound(.2);
var bugsFixed = devTeam.bugsFixed(.15);

if (bugsFound > bugsFixed){
	console.log("Looks like we have to work more hours to fix all of the bugs.");
	console.log("We are currently " + (bugsFound - bugsFixed) + " bugs behind.");
} else {
	console.log("We've beaten the QA team and fixed all of the bugs! Time for a pants party!")
};

//The below logs verify that the objects are properly outputting.
console.log( qaTeam );
console.log(qaTeam.manager);
console.log(qaTeam.numberOfTesters);
console.log(qaTeam.bugsFound(.2));
console.log(devTeam.methodology);
console.log(devTeam.numberOfEngineers);
console.log(devTeam.realhoursWorked);
console.log(devTeam.bugsFixed(.15));
