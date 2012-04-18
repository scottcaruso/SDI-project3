//World variables
var bugsPerHour = .2;
var fixedPerHour = 1; //set this to a high value (i.e. 5) in order to test the else condition.

//The below object details out information about the QA team.
var qaTeam = {
	isDoneFindingBugs: true, 
	manager: {
		name: "Scott",
		age: 30,
		isBurnedOut: true
		},
	numberOfTesters: 12,
	realHoursWorked: 4000,
	bugsFound: function (bugsPerHour) {
		var manhours = (qaTeam.realHoursWorked * qaTeam.numberOfTesters);
		var bugsFound = (bugsPerHour * manhours);
		return bugsFound; 
	}
};

//The below object details out information about the development team.
var devTeam = {
	isDoneFixingBugs: false,
	methodology: "scrum",
	numberOfEngineers: 5,
	realHoursWorked: 920,
	namesOfEngineers: ["Dave","Roscoe","Stella","Jamie","Cobalt"],
	getHoursWorked: function (){
		var hoursWorked = devTeam.realHoursWorked;
		return hoursWorked;
		},
	bugsFixed: function (fixedPerHour) {
		var fixedPerHour = fixedPerHour;
		var manhours = (devTeam.realHoursWorked * devTeam.numberOfEngineers);
		var bugsFixed = (fixedPerHour * manhours);
		return bugsFixed; 
		return fixedPerHour;
	},
};

//The below determines if the QA Team is done fixing bugs.
if (qaTeam.isDoneFindingBugs = true){
	console.log("QA is done finding bugs! Now, let's fix them all!");
	//The below determines if the Dev Team needs to work more hours to fix all of the bugs.
	var bugsFound = qaTeam.bugsFound(bugsPerHour);
	var bugsFixed = devTeam.bugsFixed(fixedPerHour);
	var bugDebt = bugsFound - bugsFixed;

	if (bugsFound > bugsFixed){
		console.log("Looks like we have to work more hours to fix all of the bugs.");
		console.log("We are currently " + (Math.floor(bugDebt)) + " bugs behind.");
	//The below runs a while loop to determine how many more hours the team needs to work.
			var canFixDaily = devTeam.numberOfEngineers*8*fixedPerHour;
			var days = 0;
			var i = bugDebt-canFixDaily;
			while (i > 0) {
				console.log("We fixed " + canFixDaily + " bugs yesterday, but we still have " + i + " more bugs to fix before we are done.");
				i-=canFixDaily;
				days++;
			};
				console.log("Finally! It only took us " + days + " days to get there, but we finally fixed all of the bugs!");
				devTeam.isDoneFixingBugs = true;
		} else {
		console.log("We've beaten the QA team without any additional work and fixed all of the bugs! Time for a pants party!");
		devTeam.isDoneFixingBugs = true;
	};
} else {
	console.log("QA still has bugs to find. Let's wait until they are done before fixing bugs.")
};


console.log (days);

//This was to verify that my mutator worked.
console.log(devTeam.isDoneFixingBugs);

var hours = devTeam.getHoursWorked();
console.log(hours);

/*The below logs verify that the objects are properly outputting. Uncomment to verify.
console.log( qaTeam );
console.log(qaTeam.manager);
console.log(qaTeam.numberOfTesters);
console.log(qaTeam.bugsFound(bugsPerHour));
console.log(devTeam.methodology);
console.log(devTeam.numberOfEngineers);
console.log(devTeam.realHoursWorked);
console.log(devTeam.bugsFixed(fixedPerHour));
*/