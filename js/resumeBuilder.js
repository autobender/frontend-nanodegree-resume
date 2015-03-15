var bio = {
	"name" : "Carl Smestad",
	"role" : "Web man",
	"contacts" : {
		"mobil" : "555-1231",
		"email" : "bob@bobcat.com",
		"github" : "autobender",
		"twitter" : "@bender",
		"location" : "Trondheim"
	},
	"welcomeMessage" : "Welcome to a strange resume page",
	"skills": [
	"one legged dancing", "programming", "organic vegtable harvesting"
	],
	"biopic" : "images/fry.jpg",
	"display" : function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedPic);
		$("#header").append(formattedMessage);

		var formattedContact = "";
		for (conType in bio.contacts) {
			formattedContact += HTMLcontactGeneric.replace("%contact%", conType).replace("%data%", bio.contacts[conType])
		}//End of contact loop
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);
	
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkills = "";
			for (skillNr in bio.skills) {
				formattedSkills += HTMLskills.replace("%data%", bio.skills[skillNr]);
			}
			$("#skills").append(formattedSkills)
			//end of for skills loop
		}//end of bioSkills
	}//end of display function
};//end of Bio object
var education = {
	"schools" : [{
		"name" : "Ringve",
		"location": "Rigeve Videregående, Trondheim, Norway",
		"degree" : "High school",
		"majors" : ["Fantasy BS"],
		"dates" : "2001 - 2004",	
		"url" : "http://makebelieve.com"
	},
	{
		"name": "Rosenborg Ungdomsskole",
		"location": "Rosenborg Ungdomsskole, Trondheim, Norway",
		"degree" : "Middle school",
		"majors" : ["None"],
		"dates": "1999 - 2001",
		"url": "http://someschool.com"
		
	}],
	"onlineCourses" : [{
		"title" : "Intro to Front-End Web dev",
		"school": "Udacity",
		"date": "2015",
		"url" : "http://udacity.com"
	}],
	"diaplay" : function() {
		for (i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolNameDegree = formattedSchool + formattedSchoolDegree;
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			$(".education-entry:last").append(formattedSchoolNameDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);			
		} //end for loop
		$(".education-entry:last").append(HTMLonlineClasses);
		for (i in education.onlineCourses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
			var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
			$(".education-entry:last").append(formattedOnlineSchoolTitle);
			$(".education-entry:last").append(formattedOnlineDate);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	} //end display function
};//end education object
var work = {
	"jobs" : [
		{
		"employer" : "Angen",
		"title" : "IT guy",
		"location" : "Bakklandet, Trondheim, Norway",
		"dates" : "10",
		"description" : "Worked as IT support for Angen Group. And stearing new\
		projects for the company."
		},
		{
		"employer" : "Indegaard",
		"title" : "Papir kutter",
		"location" : "Leangen, Trondheim, Norway",
		"dates"  : "0.01",
		"description" : "Worked here during a work week at middle school\
		basic resposibilities was cutting paper and stapling things together"
		}
	],
	"display" : function() {
		for (i in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedWorkDescription);
		}//end of for loop
	}//end of Display function
};
var projects = {
	"projects" : [
		{
			"title" : "Pilates program",
			"dates" : "2014-2013",
			"description" : "Made a pilates program during the 80's\
			. Had many different skills and manuevers.",
			"image" : ["images/pilates.png"]
		},
		{
			"title": "Fudge Master",
			"dates": "2009-2012",
			"description": "Worked at an undermanned fudge factory\
			. But was secretly a spy trying to save the fudges from\
			being sent to death camp(hungry people).",
			"image": ["images/fidge.png", "images/fudge2.jpg"]
		}
	],
	"display" : function() {
		for (project in projects.projects) {

			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
			for (img in projects.projects[project].image) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].image[img]));
			}//end image loop
		}//End of for loop
	}//End of display function
};//end of Projects object
function locationizer(workObj) {
	locsFromWork = [];
	for (job in workObj.jobs) {
			locsFromWork.push(workObj.jobs[job].location);
	}
	return locsFromWork;
}
//function for changing bio.name to international std
//ex. bOb Kirk -> Bob KIRK
/*function inName() {
	splitName = bio.name.trim().split(" ");
	splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
	splitName[1] = splitName[1].toUpperCase();
	lastName = splitName[1];
	lastName = lastName.toLocaleUpperCase()
	lastNameUpperCase = splitName[0] + " " + lastName;
	return splitName[0] + " " + splitName[1];
}*/
//$("#main").append(internationalizeButton);
bio.display();
projects.display();
education.diaplay();
work.display();
$("#mapDiv").append(googleMap);