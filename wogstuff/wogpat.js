var aAC = 0;
var aACN = 0;
var bAC = 0;
var bACN = 0;
var cAC = 0;
var cACN = 0;
var dAC = 0;
var dACN = 0;
var Ntarget = "selected";
var type = "mix";
var cycleAlt = "random";


function setaAC(aircraft) {
   return aAC = aircraft;
  
}

function setaACN(aircraftn) {
   return aACN = aircraftn;
}

function setbAC(aircraft) {
   return bAC = aircraft;
}

function setbACN(aircraftn) {
   return bACN = aircraftn;
}

function setcAC(aircraft) {
   return cAC = aircraft;
}

function setcACN(aircraftn) {
   return cACN = aircraftn;
}

function setdAC(aircraft) {
   return dAC = aircraft;
}

function setdACN(aircraftn) {
   return dACN = aircraftn;
}

function setFriendN(aircraftn) {
   return FriendN = aircraftn;
}



function cycleNbogeys() {
  if (Ntarget == "selected"){
    document.getElementById("cycling1").innerHTML = 'Random number of bogeys (less than selected)';
    return Ntarget = "random";
  } else {
    document.getElementById("cycling1").innerHTML = 'Selected number of bogeys';
    return Ntarget = "selected";
  }
   
}

function cycleNtype() {
  if (type == "all"){
    document.getElementById("cycling2").innerHTML = 'Mix of selected aircraft';
    return type = "mix";
  } else {
    document.getElementById("cycling2").innerHTML = 'All selected aircraft';
    return type = "all";
  }
   
}

function cycleAltitude() {
  if (cycleAlt == "random"){
    document.getElementById("cycling3").innerHTML = 'Target at same altitude';
    return cycleAlt = "same";
  } else {
    document.getElementById("cycling3").innerHTML = 'Target at random altitude';
    return cycleAlt = "random";
  }
   
}

function generatePatrol() {
  

  
  var patrolRoll = Math.floor((Math.random() * 1) + 1);
  var anumberRoll = Math.floor((Math.random() * aACN) + 1);
  var bnumberRoll = Math.floor((Math.random() * bACN) + 1);
  var cnumberRoll = Math.floor((Math.random() * cACN) + 1);
  var dnumberRoll = Math.floor((Math.random() * dACN) + 1);
  var zoneRoll = Math.floor((Math.random() * 12) + 1);
  var headingRoll = Math.floor((Math.random() * 4) + 1);
  var distanceRoll = Math.floor((Math.random() * 3) + 1);
  var altitudeRoll = Math.floor((Math.random() * 5) + 1);
  var equalityCount = +aACN + +bACN + +cACN + +dACN;
  
  
  
  
  
  
  var relativeheading;
  if (headingRoll == 1) {
    relativeheading = " at a relative heading of 135 degrees left";
  } else if (headingRoll == 2) {
    relativeheading = " at a relative heading of 45 degrees left";
  } else if (headingRoll == 3) {
    relativeheading = " at a relative heading of 45 degrees right";
  } else if (headingRoll == 4) {
    relativeheading = " at a relative heading of 135 degrees right";
  }
  
  var distance;
  if (distanceRoll == 1) {
    distance = "1 ruler";
  } else if (distanceRoll == 2) {
    distance = "2 rulers";
  } else if (distanceRoll == 3) {
    distance = "3 rulers";
  }
  
  var altitude;
  if (altitudeRoll == 1) {
    altitude = "flying at the same altitude";
  } else if (altitudeRoll == 2) {
    altitude = "flying 1 level higher";
  } else if (altitudeRoll == 3) {
    altitude = "flying 2 levels higher";
  } else if (altitudeRoll == 4) {
    altitude = "flying 1 level lower";
  } else if (altitudeRoll == 5) {
    altitude = "flying 2 levels lower";
  }
  
  var finalAltitude;
  if (cycleAlt == "random") {
    finalAltitude = altitude;
  } else if (cycleAlt == "same") {
    finalAltitude = "flying at the same altitude";
  }
  
  
  if (Ntarget == "random") {
    resultingAnumber = anumberRoll;
  } else {
    resultingAnumber = aACN;
  }
  
  if (Ntarget == "random") {
    resultingBnumber = bnumberRoll;
  } else {
    resultingBnumber = bACN;
  }
  
  if (Ntarget == "random") {
    resultingCnumber = cnumberRoll;
  } else {
    resultingCnumber = cACN;
  }
  
  if (Ntarget == "random") {
    resultingDnumber = dnumberRoll;
  } else {
    resultingDnumber = dACN;
  }
  
  
  var a;
  if (aACN > 0) { a = resultingAnumber + " " + aAC + " aircraft, "; } else { a = "";}
  var b;
  if (bACN > 0) { b = resultingBnumber + " " + bAC + " aircraft, "; } else { b = "";}
  var c;
  if (cACN > 0) { c = resultingCnumber + " " + cAC + " aircraft, "; } else { c = "";}
  var d;
  if (dACN > 0) { d = resultingDnumber + " " + dAC + " aircraft, "; } else { d = "";}

  
  var resultaircraft = a + b + c + d;
  var resultaircraftRoll = Math.floor((Math.random() * 7) + 1);
  
  if (type == "mix" && resultaircraftRoll == 1) {
    resultaircraft = a;
  } else if (type == "mix" && resultaircraftRoll == 2){
    resultaircraft = a + b;
  } else if (type == "mix" && resultaircraftRoll == 3){
    resultaircraft = a + c;
  } else if (type == "mix" && resultaircraftRoll == 4){
    resultaircraft = a + d;
  } else if (type == "mix" && resultaircraftRoll == 5){
    resultaircraft = a + b + c;
  } else if (type == "mix" && resultaircraftRoll == 6){
    resultaircraft = a + b + d;
  } else if (type == "mix" && resultaircraftRoll == 7){
    resultaircraft = a + c + d;
  }
  
  
  var result = "You encounter: " + resultaircraft + distance + " away " + finalAltitude + " in zone " + zoneRoll + " of your wingleader" + relativeheading; 

  
  var eventTurnRoll = Math.floor((Math.random() * 10) + 5);
  
  
  
  
  
  
  
  
  
  
  var resultshown = '<div class="alert alert-success text-center">' + result + '</div>'
  var resultshown2 = '<div class="alert alert-info text-center">After turn ' + eventTurnRoll + ' press the Generate Event button.</div>'
  document.getElementById("genpatrol").innerHTML = resultshown;
  document.getElementById("genpatrol2").innerHTML = resultshown2;
}

function eventGenerator() {
   
   var eventRoll = Math.floor((Math.random() * 10) + 1);
   
   switch (eventRoll) {
   case 1:
	event = "Reinforcements arrive! The first enemy aircraft that was shot down (if any) re-enters the game at it's previous starting position";
        break;
   case 2:
	event = "Reinforcements arrive! Run the Patrol Generator again with 2 enemy aircraft to see where their reinforcements will come from";
        break;
   case 3:
	event = "Heavy turbulence due to a nearby developing Cumulonimbus make it hard to get a good shot. For the next 5 turns long range shots will be impossible and treat short range shots as long range shots.";
        break;
   case 4:
	event = "Minor windshear makes it hard to get a good aim. For the next 5 turns treat every shot as a long range shot.";
        break;
   case 5:
	event = "Icing conditions at altitude make the highest current occupied altitude the highest possible altitude for the rest of the game.";
        break;
   case 6:
	event = "Reinforcements arrive! The last enemy aircraft that was shot down (if any) re-enters the game at it's previous starting position";
        break;
   case 7:
	event = "Reinforcements arrive! Run the Patrol Generator again with 1 enemy aircraft to see where their reinforcements will come from";
        break;
   case 8:
	event = "Heavy turbulence due to a nearby developing Cumulonimbus make it hard to get a good shot. For the next 10 turns long range shots will be impossible and treat short range shots as long range shots.";
        break;
   case 9:
	event = "Minor windshear makes it hard to get a good aim. For the next 10 turns treat every shot as a long range shot.";
        break;
   case 10:
	event = "Minor windshear makes it hard to get a good aim. For the rest of the game treat every shot as a long range shot.";
        break;
  }
  
  var eventShown = '<div class="alert alert-info text-center">' + event + '</div>'
  document.getElementById("genevent").innerHTML = eventShown;
}