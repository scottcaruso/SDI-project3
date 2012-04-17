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

console.log( qaTeam );
console.log(qaTeam.methodology);
console.log(qaTeam.manager);
console.log(qaTeam.numberOfTesters);
console.log(qaTeam.bugsFound(.2));
console.log(devTeam.bugsFixed(.1));
