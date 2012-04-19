//World variables
var nameOfGame = "Generic Football Simulator 2013";
var genre = "sports";
var bugsPerHour = .2;
var fixedPerHour = 1; //set this to a high value (i.e. 5) in order to test the else condition.

//The below object details out information about the QA team.
var qaTeam = {
	isDoneFindingBugs: true, 
	manager: {
		name: "Guybrush Threepwood",
		age: 30,
		isBurnedOut: true,
		getCurrentStatus: function () {
			if (qaTeam.manager.isBurnedOut = true){
				console.log(qaTeam.manager.name + " is burned out after all of this work. He may be " + qaTeam.manager.age + " years old, but right now, he feels like he is about " + (qaTeam.manager.age + 30) + ".");
			} else {
				console.log(qaTeam.manager.name + " is in surprisingly good condition even though his team has worked " + qaTeam.realHoursWorked + " on this project.");
			};
		}
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
		var manhours = (devTeam.realHoursWorked * devTeam.numberOfEngineers);
		var bugsFixed = (fixedPerHour * manhours);
		return bugsFixed; 
	},
};

console.log("We're trying to final " + nameOfGame + ", which is sure to be the best " + genre + " game released this year!");
console.log("With the bizarre version of " + devTeam.methodology + " that we are using, we wait until QA is done testing before we fix bugs. Let's see how they are doing.");

//The below determines if the QA Team is done finding bugs.
if (qaTeam.isDoneFindingBugs === true){
	console.log("QA is done finding bugs! Now, let's fix them all!");
	console.log("But first, let's check on the status of the QA manager! It will be easier to defer bugs if he's too burned out to notice!");
	qaTeam.manager.getCurrentStatus();
	
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
				//commenting out - don't want to see this dozens of times. Good for testing purposes.
				//console.log("We fixed " + canFixDaily + " bugs yesterday, but we still have " + i + " more bugs to fix before we are done.");
				i-=canFixDaily;
				days++;
			};
				console.log("...many days later...");
				console.log("Finally! It only took us " + days + " days to get there, but we finally fixed all of the bugs!");
				devTeam.isDoneFixingBugs = true;
		} else {
		console.log("We've beaten the QA team without any additional work and fixed all of the bugs! Time for a pants party!");
		devTeam.isDoneFixingBugs = true;
	};


//This is what happens when the game has been finished.
if (days > 15){
	console.log("Since it took us more than 15 days to finish the game, we had to bring on an additional engineer to the team!")
	console.log("Barack came on board to help us out, so we'll make sure he is invited to the wrap party!")
	devTeam.namesOfEngineers.push("Barack");
	console.log("So, now, our engineer list looks like this: " + devTeam.namesOfEngineers);
}

console.log("We know that those QA guys can drink a lot. We need to fire some before the wrap party!");
console.log("We can only afford enough for 4 testers...");
for (var i = qaTeam.numberOfTesters; i > 4; i--) {
	var x = qaTeam.numberOfTesters-i;
	//commenting out - don't need to see repeatedly. console.log("We've fired " + x + " testers so far, leaving a total of " + i + ". Fire some more!")
};
	console.log("Let's put out a press release saying that we had to boldly cut " + (x + 1) + " jobs to remain viable!");
	console.log("Now we can afford to throw our wrap party!");

console.log("... A few months later ...")
console.log("The reviews have started to come in! Let's check out our scores!")
var getMetacritic = function(){
	for (var n in json.reviewers){
		console.log(json.reviewers[n].score);
	};
};
getMetacritic();
console.log("Sounds like profit to me! Let's make the same game next year!");
} else {
	console.log("QA still has bugs to find. We cannot proceed until they are done.");
};
/*This was to verify that my mutator worked.
console.log(devTeam.isDoneFixingBugs);
var hours = devTeam.getHoursWorked();
console.log(hours);
*/

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
