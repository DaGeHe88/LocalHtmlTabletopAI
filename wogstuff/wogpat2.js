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
var leftoveraACN = 0;
var leftoverbACN = 0;
var leftovercACN = 0;
var leftoverdACN = 0;
var leftoveraAC = 0;
var leftoverbAC = 0;
var leftovercAC = 0;
var leftoverdAC = 0;


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
    leftoveraACN = (aACN - resultingAnumber);
    leftoveraAC = leftoveraACN + " " + aAC;
  } else {
    resultingAnumber = aACN;
    leftoveraACN = 0;
    leftoveraAC = 0;
  }
  
  if (Ntarget == "random") {
    resultingBnumber = bnumberRoll;
    leftoverbACN = (bACN - resultingBnumber);
    leftoverbAC = leftoverbACN + " " + bAC;
  } else {
    resultingBnumber = bACN;
    leftoverbACN = 0;
    leftoverbAC = 0;
  }
  
  if (Ntarget == "random") {
    resultingCnumber = cnumberRoll;
    leftovercACN = (cACN - resultingCnumber);
    leftovercAC = leftovercACN + " " + cAC;
  } else {
    resultingCnumber = cACN;
    leftovercACN = 0;
    leftovercAC = 0;
  }
  
  if (Ntarget == "random") {
    resultingDnumber = dnumberRoll;
    leftoverdACN = (dACN - resultingDnumber);
    leftoverdAC = leftoverdACN + " " + dAC;
  } else {
    resultingDnumber = dACN;
    leftoverdACN = 0;
    leftoverdAC = 0;
  }
  
  var resultaircraft = [];
  
  var a = " " + resultingAnumber + " " + aAC + " aircraft";
  if (aACN > 0) {  resultaircraft.push(a);  }
  var b = " " + resultingBnumber + " " + bAC + " aircraft";
  if (bACN > 0) {  resultaircraft.push(b);  }
  var c = " " + resultingCnumber + " " + cAC + " aircraft";
  if (cACN > 0) {  resultaircraft.push(c);  }
  var d = " " + resultingDnumber + " " + dAC + " aircraft";
  if (dACN > 0) {  resultaircraft.push(d);  }
  
  var arraylength = resultaircraft.length;
  
  var typesRoll = Math.floor(Math.random() * arraylength);
  var typesRoll2 = Math.floor(Math.random() * arraylength);
  
  if (type == "mix" && arraylength > 1) {
   resultaircraft.splice(typesRoll, typesRoll2);
  }
  

  
  
  var result = "You encounter: " + resultaircraft + ", " + distance + " away " + finalAltitude + " in zone " + zoneRoll + " of your wingleader" + relativeheading; 

  
  var eventTurnRoll = Math.floor((Math.random() * 10) + 5);
  
  
  
  
  
  
  
  
  
  
  var resultshown = '<div class="alert alert-success text-center">' + result + '</div>'
  var resultshown2 = '<div class="alert alert-info text-center">After turn ' + eventTurnRoll + ' press the Generate Event button. Do not refresh the browser, or change the page. If you want to use the solo software open it in a different window or tab.</div>'
  document.getElementById("genpatrol").innerHTML = resultshown;
  document.getElementById("genpatrol2").innerHTML = resultshown2;
}

function eventGenerator() {
   
   var eventRoll = Math.floor((Math.random() * 4) + 1);
   var distanceRoll = Math.floor((Math.random() * 3) + 1);
   var altitudeRoll = Math.floor((Math.random() * 5) + 1);
   var zoneRoll = Math.floor((Math.random() * 12) + 1);
   var headingRoll = Math.floor((Math.random() * 4) + 1);
   var turnNRoll = Math.floor((Math.random() * 10) + 2);
   var leftoverACArray = [];
   
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
  
  if (leftoveraACN > 0) { leftoverACArray.push(leftoveraAC);  }
  if (leftoverbACN > 0) { leftoverACArray.push(leftoverbAC);  }
  if (leftovercACN > 0) { leftoverACArray.push(leftovercAC);  }
  if (leftoverdACN > 0) { leftoverACArray.push(leftoverdAC);  }
  
  var leftoverarraylength = leftoverACArray.length;
  
  var whichLeftoverN = Math.floor(Math.random() * leftoverarraylength);
  
  
   switch (eventRoll) {
   case 1:
         if (leftoveraACN > 0 || leftoverbACN > 0 || leftovercACN > 0 || leftoverdACN > 0 ) {
            event = "Enemy reinforcements arrive! " + leftoverACArray[whichLeftoverN] + ", " + distance + " away " + finalAltitude + " in zone " + zoneRoll + " of your wingleader" + relativeheading + ".";
         } else {
            event = "Enemy reinforcements arrive! The first enemy aircraft that was shot down (if any) re-enters the game at " + distance + " away " + finalAltitude + " in zone " + zoneRoll + " of your wingleader" + relativeheading + ".";
         }
        break;
   case 2:
	event = "Icing conditions at altitude make the highest current occupied altitude the highest possible altitude for the the next " + turnNRoll + " turns.";
        break;
   case 3:
        event = "Heavy turbulence requires all aircraft to reduce speed for the next " + turnNRoll + " turns. Any aircraft performing a highspeed maneuver suffer 1 chit of 'A' damage due to an excess of structural loads.";
   case 4:
         event = "A flak field lighting up the sky means every player draws one chit of 'A' damage."
  }
  
  var eventShown = '<div class="alert alert-info text-center">' + event + '</div>'
  document.getElementById("genevent").innerHTML = eventShown;
}