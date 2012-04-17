//World variables

var bugsPerHour = .2;
var fixedPerHour = 1;

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
	realhoursWorked: 500,
	bugsFixed: function (fixedPerHour) {
		var fixedPerHour = fixedPerHour;
		var manhours = (devTeam.realhoursWorked * devTeam.numberOfEngineers);
		var bugsFixed = (fixedPerHour * manhours);
		return bugsFixed; 
		return fixedPerHour;
	},
};

//The below determines how many more hours the Dev Team needs to work to fix all of the bugs.

var bugsFound = qaTeam.bugsFound(bugsPerHour);
var bugsFixed = devTeam.bugsFixed(fixedPerHour);
var bugDebt = bugsFound - bugsFixed

if (bugsFound > bugsFixed){
	console.log("Looks like we have to work more hours to fix all of the bugs.");
	console.log("We are currently " + (Math.floor(bugDebt)) + " bugs behind.");
} else {
	console.log("We've beaten the QA team and fixed all of the bugs! Time for a pants party!")
};

//The below runs a while loop to determine how many more hours the team needs to work.
var canFixDaily = devTeam.numberOfEngineers*8*fixedPerHour;
var days = 0;
console.log(canFixDaily);
var i = bugDebt;
while (i > 0) {
	console.log("We fixed " + canFixDaily + " bugs yesterday, but we still have " + i + " more bugs to fix before we are done.");
	i-=canFixDaily;
	days++;
};
console.log("Finally! It only took us " + days + " days to get there, but we finally fixed all of the bugs!");

/*The below logs verify that the objects are properly outputting. Uncomment to verify.
console.log( qaTeam );
console.log(qaTeam.manager);
console.log(qaTeam.numberOfTesters);
console.log(qaTeam.bugsFound(.2));
console.log(devTeam.methodology);
console.log(devTeam.numberOfEngineers);
console.log(devTeam.realhoursWorked);
console.log(devTeam.bugsFixed(.15));
*/