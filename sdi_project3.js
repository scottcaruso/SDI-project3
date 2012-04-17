var qaTeam = { 
	methodology: "scrum",
	manager: "Scott",
	numberOfTesters: 12,
	realhoursWorked: 4000,
	bugsFound: function (bugsPerHour) {
		var manhours = (qaTeam.realhoursWorked * qaTeam.numberOfTesters);
		var bugsFound = (bugsPerHour * manhours);
		return bugsFound; 
	}
};

console.log( qaTeam );
console.log(qaTeam.methodology);
console.log(qaTeam.manager);
console.log(qaTeam.numberOfTesters);
console.log(qaTeam.bugsFound(.2));
