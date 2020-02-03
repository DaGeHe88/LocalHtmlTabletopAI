  
  YUI().use('dial', function(Y) {

    var dial = new Y.Dial({
	min:1,
	max:12,
	stepsPerRevolution:13,
	value: 0
	
    });
    dial.render('#demo');
    
    
      // Function to update the text input value from the Dial value
      function updateInput( e ){
	  return val = e.newVal;
	  if ( isNaN( val ) ) {
	      // Not a valid number.
	      return;
	  }
	  this.set( "value", val );
      }
  
      var theInput = Y.one( "#myTextInput" );
      // Subscribe to the Dial's valueChange event, passing the input as the 'this'
      dial.on( "valueChange", updateInput, theInput );
  
      // Function to pass input value back to the Slider
      function updateDial( e ){
	  dial.set( "value" , e.target.get( "value" ) - 0);
      }
      theInput.on( "keyup", updateDial );
  
      // Initialize the input
      theInput.set('value', dial.get('value'));
    
});
  
var prevSelectedShip = "Ship1"
var deck = "low"
var veer = 8
var fire = "no"
var leak = "no"
var mast = 0
var sail = 0
var damage = 0
var prevRepair = "none"
var rudderDamage = 0
var targetDeck = "high"
var otherTargets = 0
var prevVeer = 5
var distance = 20
var augmentTargetX = 0
var augmentTargetY = 0
var wind = "green"
var noLeft = 0
var noDirection = "none"
var windName = "nil"
var cannons = "both"
var crewN = 4
var sailN = "combat"
var targetX = 0
var borderOption = 0

var deckA = "low"
var veerA = 8
var fireA = "no"
var leakA = "no"
var mastA = 0
var sailA = 0
var damageA = 0
var prevRepairA = "none"
var rudderDamageA = 0
var targetDeckA = "high"
var otherTargetsA = 0
var prevVeerA = 5
var distanceA = 20
var windA = "green"
var noLeftA = 0
var noDirectionA = "none"
var windNameA = "nil"
var cannonsA = "both"
var crewNA = 4
var sailNA = "combat"
var borderOptionA = 0

var deckB = "low"
var veerB = 8
var fireB = "no"
var leakB = "no"
var mastB = 0
var sailB = 0
var damageB = 0
var prevRepairB = "none"
var rudderDamageB = 0
var targetDeckB = "high"
var otherTargetsB = 0
var prevVeerB = 5
var distanceB = 20
var windB = "green"
var noLeftB = 0
var noDirectionB = "none"
var windNameB = "nil"
var cannonsB = "both"
var crewNB = 4
var sailNB = "combat"
var borderOptionB = 0

var deckC = "low"
var veerC = 8
var fireC = "no"
var leakC = "no"
var mastC = 0
var sailC = 0
var damageC = 0
var prevRepairC = "none"
var rudderDamageC = 0
var targetDeckC = "high"
var otherTargetsC = 0
var prevVeerC = 5
var distanceC = 20
var windC = "green"
var noLeftC = 0
var noDirectionC = "none"
var windNameC = "nil"
var cannonsC = "both"
var crewNC = 4
var sailNC = "combat"
var borderOptionC = 0

var deckD = "low"
var veerD = 8
var fireD = "no"
var leakD = "no"
var mastD = 0
var sailD = 0
var damageD = 0
var prevRepairD = "none"
var rudderDamageD = 0
var targetDeckD = "high"
var otherTargetsD = 0
var prevVeerD = 5
var distanceD = 20
var windD = "green"
var noLeftD = 0
var noDirectionD = "none"
var windNameD = "nil"
var cannonsD = "both"
var crewND = 4
var sailND = "combat"
var borderOptionD = 0





function cycleManeuver() {
    if (deck == "high"){
      document.getElementById("cyclingman").innerHTML = 'Solo ship has a burden lower than 3';
      return deck = "low"
    } else if (deck == "low"){
      document.getElementById("cyclingman").innerHTML = 'Solo ship has a burden higher than 3';
      return deck = "high"
    }
    
  }
  
function cycleVeer() {
    if (veer == 8){
      document.getElementById("cyclingveer").innerHTML = 'Solo ship has a veer of 3';
      return veer = 3
    } else if (veer == 3){
      document.getElementById("cyclingveer").innerHTML = 'Solo ship has a veer of 4';
      return veer = 4
    } else if (veer == 4){
      document.getElementById("cyclingveer").innerHTML = 'Solo ship has a veer of 5';
      return veer = 5
    } else if (veer == 5){
      document.getElementById("cyclingveer").innerHTML = 'Solo ship has a veer of 6';
      return veer = 6
    } else if (veer == 6){
      document.getElementById("cyclingveer").innerHTML = 'Solo ship has a veer of 7';
      return veer = 7
    } else if (veer == 7){
      document.getElementById("cyclingveer").innerHTML = 'Solo ship has a veer of 8';
      return veer = 8
    } 
}
  
function cycleFire() {
    if (fire == "no") {
	document.getElementById("cyclingfire").innerHTML = 'Solo ship is on fire!'
	return fire = "yes"
    } else if (fire == "yes") {
	document.getElementById("cyclingfire").innerHTML = 'Solo ship is not on fire'
	return fire = "no"
    }
  
}

function cycleLeak() {
    if (leak == "no") {
	document.getElementById("cyclingleak").innerHTML = 'Solo ship has an active leak!'
	return leak = "yes"
    } else if (leak == "yes") {
	document.getElementById("cyclingleak").innerHTML = 'Solo ship has no leak, but still has water onboard!'
	return leak = "water"
    } else if (leak == "water") {
	document.getElementById("cyclingleak").innerHTML = 'Solo ship has no leak or water onboard'
	return leak = "no"
    }
}

function cycleMast() {
    if (mast == 0) {
	document.getElementById("cyclingmast").innerHTML = 'Solo ship has 1 damaged mast!'
	return mast = 1
    } else if (mast == 1) {
	document.getElementById("cyclingmast").innerHTML = 'Solo ship has 2 damaged masts!'
	return mast = 2
    } else if (mast == 2) {
	document.getElementById("cyclingmast").innerHTML = 'Solo ship has unrepairable mast damage'
	return mast = 3
    } else if (mast == 3) {
	document.getElementById("cyclingmast").innerHTML = 'Solo ship\'s masts are fine'
	return mast = 0
    }
    
}

function cycleSail() {
    if (sail == 0 || sail == 6) {
	document.getElementById("cyclingsails").innerHTML = 'Solo ship has 1 or no damaged sails'
	return sail = 1
    } else if (sail == 1) {
	document.getElementById("cyclingsails").innerHTML = 'Solo ship has 2 or 3 damaged sails!'
	return sail = 2
    } else if (sail == 2) {
	document.getElementById("cyclingsails").innerHTML = 'Solo ship has 4 or 5 damaged sails!'
	return sail = 4
    } else if (sail == 4) {
	document.getElementById("cyclingsails").innerHTML = 'Solo ship has 6 damaged sails!'
	return sail = 6
    }
}

function cycleSailN() {
    if (sailN == "struck" || sailN == "nill") {
	document.getElementById("cyclingsailN").innerHTML = 'Full sails'
	return sailN = "full"
    } else if (sailN == "full") {
	document.getElementById("cyclingsailN").innerHTML = 'Combat sails'
	return sailN = "combat"
    } else if (sailN == "combat") {
	document.getElementById("cyclingsailN").innerHTML = 'Backing sails'
	return sailN = "backing"
    } else if (sailN == "backing") {
	document.getElementById("cyclingsailN").innerHTML = 'Struck sails'
	return sailN = "struck"
    }
}

function cycleDamage() {
    if (damage == 0) {
	document.getElementById("cyclingdamage").innerHTML = 'Solo ship has atleast one full damage box!'
	return damage = 1
    } else if (damage == 1) {
	document.getElementById("cyclingdamage").innerHTML = 'Solo ship has no full damage boxes'
	return damage = 0
    }
}

function cyclePrevRepair() {
    if (prevRepair == "none") {
	document.getElementById("cyclingprevrepair").innerHTML = 'Solo ship has already repaired normal damage'
	return prevRepair = "normal"
    } else if (prevRepair == "normal") {
	document.getElementById("cyclingprevrepair").innerHTML = 'Solo ship has already repaired mast damage'
	return prevRepair = "mast"
    } else if (prevRepair == "mast") {
	document.getElementById("cyclingprevrepair").innerHTML = 'Solo ship has already repaired normal and mast damage'
	return prevRepair = "normalAndMast"
    } else if (prevRepair == "normalAndMast") {
	document.getElementById("cyclingprevrepair").innerHTML = 'Solo ship has not repaired anything'
	return prevRepair = "none"
    }
}



function cycleRudder() {
    if (rudderDamage == 0){
      document.getElementById("rudderdamage").innerHTML = 'Solo ship has a damaged rudder!';
      rudderDamage = 1;
    } else if (rudderDamage == 1){
      document.getElementById("rudderdamage").innerHTML = 'Solo ship rudder is fine';
      rudderDamage = 0;
    }
    
  }
  
  
  function cycleTargetManeuver() {
    if (targetDeck == "high"){
      document.getElementById("cyclingTargetMan").innerHTML = 'Target ship has a burden lower than 3';
      return targetDeck = "low"
    } else if (targetDeck == "low"){
      document.getElementById("cyclingTargetMan").innerHTML = 'Target ship has a burden higher than 3';
      return targetDeck = "high"
    }
    
  }
  
  function cycleOtherTargets() {
    if (otherTargets == 0){
      document.getElementById("cyclingOtherTargets").innerHTML = 'Secondary targets within 20cm/8 inch in zone 1-6';
      return otherTargets = 1
    } else if (otherTargets == 1){
      document.getElementById("cyclingOtherTargets").innerHTML = 'Secondary targets within 20cm/8 inch in zone 7-12';
      return otherTargets = 2
    } else if (otherTargets == 2){
      document.getElementById("cyclingOtherTargets").innerHTML = 'Secondary targets within 20cm/8 inch in zone 1-12';
      return otherTargets = 3
    }  else if (otherTargets == 3){
      document.getElementById("cyclingOtherTargets").innerHTML = 'no secondary targets within 20cm/8 inch';
      return otherTargets = 0
    }
  }


function dist1() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 1 cm'
    return distance = 1;
  }
  function dist2() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 2 cm'
    return distance = 2;
  }
  function dist3() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 3 cm or 1 inch'
    return distance = 3;
  }
  function dist4() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 4 cm'
    return distance = 4;
  }
  function dist5() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 5 cm or 2 inch'
    return distance = 5;
  }
  function dist6() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 6 cm'
    return distance = 6;
  }
  function dist7() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 7 cm'
    return distance = 7;
  }
  function dist8() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 8 cm or 3 inch'
    return distance = 8;
  }
  function dist9() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 9 cm'
    return distance = 9;
  }
  function dist10() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 10 cm or 4 inch'
    return distance = 10;
  }
  function dist11() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 11 cm'
    return distance = 11;
  }
  function dist12() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 12 cm'
    return distance = 12;
  }
  function dist13() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 13 cm or 5 inch'
    return distance = 13;
  }
  function dist14() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 14 cm'
    return distance = 14;
  }
  function dist15() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 15 cm or 6 inch'
    return distance = 15;
  }
  function dist16() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 16 cm'
    return distance = 16;
  }
  function dist17() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 17 cm'
    return distance = 17;
  }
  function dist18() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 18 cm or 7 inch'
    return distance = 18;
  }
  function dist19() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 19 cm'
    return distance = 19;
  }
  function dist20() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 20 cm or 8 inch'
    return distance = 20;
  }
  function dist21() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 21 cm'
    return distance = 21;
  }
  function dist22() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 22 cm'
    return distance = 22;
  }
  function dist23() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 23 cm or 9 inch'
    return distance = 23;
  }
  function dist24() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 24 cm'
    return distance = 24;
  }
  function dist25() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 25 cm or 10 inch (or more)'
    return distance = 25;
  }
  
  function relHead1() {
    heading = 1
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 0 to 45 degrees right'
    if (targetDeck == "low") {
      augmentTargetX = 5.86;
      augmentTargetY = 13.8;
    } else if (targetDeck == "high") {
      augmentTargetX = 3.91;
      augmentTargetY = 9.21;
    }
  }
  
  function relHead2() {
    heading = 2
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 45 to 90 degrees right'
     if (targetDeck == "low") {
      augmentTargetX = 13.9;
      augmentTargetY = 5.62;
    } else if (targetDeck == "high") {
      augmentTargetX = 9.21;
      augmentTargetY = 3.91;
    }
    
  }
  
  function relHead3() {
    heading = 3
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 90 to 135 degrees right'
    if (targetDeck == "low") {
      augmentTargetX = 13.9;
      augmentTargetY = -5.62;
    } else if (targetDeck == "high") {
      augmentTargetX = 9.21;
      augmentTargetY = -3.91;
    }
  }
  
  function relHead4() {
    heading = 4
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 135 to 180 degrees right'
    if (targetDeck == "low") {
      augmentTargetX = 5.86;
      augmentTargetY = -13.8;
    } else if (targetDeck == "high") {
      augmentTargetX = 3.91;
      augmentTargetY = -9.21;
    }
  }
  
  function relHead5() {
    heading = 5
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 135 to 180 degrees left'
    if (targetDeck == "low") {
      augmentTargetX = -5.86;
      augmentTargetY = -13.8;
    } else if (targetDeck == "high") {
      augmentTargetX = -3.91;
      augmentTargetY = -9.21;
    }
  }
  
  function relHead6() {
    heading = 6
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 90 to 135 degrees left'
    if (targetDeck == "low") {
      augmentTargetX = -13.9;
      augmentTargetY = -5.62;
    } else if (targetDeck == "high") {
      augmentTargetX = -9.21;
      augmentTargetY = -3.91;
    }
  }
  
  function relHead7() {
    heading = 7
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 45 to 90 degrees left'
    if (targetDeck == "low") {
      augmentTargetX = -13.9;
      augmentTargetY = 5.62;
    } else if (targetDeck == "high") {
      augmentTargetX = -9.21;
      augmentTargetY = 3.91;
    }
  }
  
  function relHead8() {
    heading = 8
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 0 to 45 degrees left'
    if (targetDeck == "low") {
      augmentTargetX = -5.86;
      augmentTargetY = 13.8;
    } else if (targetDeck == "high") {
      augmentTargetX = -3.91;
      augmentTargetY = 9.21;
    }
  }
  
  function setPrevVeer0() {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 0 veer rating'
    return prevVeer = 0;
  }
  
  function setPrevVeer1() {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 1 veer rating'
    return prevVeer = 1;
  }
  
  function setPrevVeer2() {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 2 veer rating'
    return prevVeer = 2;
  }
  
  function setPrevVeer3() {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 3 veer rating'
    return prevVeer = 3;
  }
  
  function setPrevVeer4() {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 4 veer rating'
    return prevVeer = 4;
  }
  
  function setPrevVeer5() {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 5 veer rating'
    return prevVeer = 5;
  }
  
  function setPrevVeer6() {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 6 veer rating'
    return prevVeer = 6;
  }
  
  function setPrevVeer7() {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 7 veer rating'
    return prevVeer = 7;
  }
  
  function setPrevVeer8() {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 8 veer rating'
    return prevVeer = 8;
  }
  
  function setPrevVeer9() {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 9 veer rating'
    return prevVeer = 9;
  }
  
  function setPrevVeer10() {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 10 veer rating'
    return prevVeer = 10;
  }
  
  
function setBorder0() {
    document.getElementById("dropdownMenu3").innerHTML = 'Border distance > 15cm/6inch'
    borderOption = 0;
    return noDirection = "none";

  }
  function setBorder1() {
    document.getElementById("dropdownMenu3").innerHTML = 'Border distance < 15cm/6inch in zone 1'
    borderOption = 1;
    return noDirection = "right";
  }
  function setBorder2() {
    document.getElementById("dropdownMenu3").innerHTML = 'Border distance < 15cm/6inch in zone 12'
    borderOption = 2;
    return noDirection = "left";
  }
  function setBorder3() {
    document.getElementById("dropdownMenu3").innerHTML = 'Border distance < 5cm/2inch in zone 2'
    borderOption = 3;
    return noDirection = "right";
  }
  function setBorder4() {
    document.getElementById("dropdownMenu3").innerHTML = 'Border distance < 5cm/2inch in zone 11'
    borderOption = 4;
    return noDirection = "left";
  }
  
function cyclewind() {
    if (windName == "nil" || windName == "aback2"){
      document.getElementById("cyclingwind").innerHTML = 'Solo ship is beating';
	  windName = "beating";
      return wind = "orange";
    } else if (windName == "beating"){
      document.getElementById("cyclingwind").innerHTML = 'Solo ship is reaching';
      windName = "reaching";
	  return wind = "green";
    } else if (windName == "reaching"){
      document.getElementById("cyclingwind").innerHTML = 'Solo ship is running';
      windName = "running";
	  return wind = "orange";
    } else if (windName == "running"){
      document.getElementById("cyclingwind").innerHTML = 'Solo ship is taken aback (1st)';
      windName = "aback1";
	  return wind = "red1";
    } else if (windName == "aback1"){
      document.getElementById("cyclingwind").innerHTML = 'Solo ship is taken aback (2nd)';
      windName = "aback2";
	  return wind = "red2";
    }
    
  }
  
function cyclecannons() {
    if (cannons == "both"){
      document.getElementById("cyclingcannons").innerHTML = 'Port cannons loaded';
      return cannons = "port";
    } else if (cannons == "port"){
      document.getElementById("cyclingcannons").innerHTML = 'Starboard cannons loaded';
	return cannons = "starboard";
    } else if (cannons == "starboard"){
      document.getElementById("cyclingcannons").innerHTML = 'Port and starboard cannons loaded';
	return cannons = "both";
    }
    
  }
  
function cyclecrewactions() {
    if (crewN == 4){
      document.getElementById("cyclingcrew").innerHTML = 'Max 3 crew actions';
      return crewN = 3;
    } else if (crewN == 3){
      document.getElementById("cyclingcrew").innerHTML = 'Max 2 crew actions';
	return crewN = 2;
    } else if (crewN == 2){
      document.getElementById("cyclingcrew").innerHTML = 'Max 1 crew action';
      return crewN = 1;
    } else if (crewN == 1){
      document.getElementById("cyclingcrew").innerHTML = 'Max 4 crew actions';
	return crewN = 4;
    }
    
  }
  
function computeManeuver() {
    
    var veerReal = veer - rudderDamage;
    
    if (prevVeer >= 0) {
	var deltaVeer0 = prevVeer - 0;
    } else if (0 > prevVeer) {
	var deltaVeer0 = 0 - prevVeer;
    }
    
    if (prevVeer >= 1) {
	var deltaVeer1 = prevVeer - 1;
    } else if (1 > prevVeer) {
	var deltaVeer1 = 1 - prevVeer;
    }
    
    if (prevVeer >= 2) {
	var deltaVeer2 = prevVeer - 2;
    } else if (2 > prevVeer) {
	var deltaVeer2 = 2 - prevVeer;
    }
    
    if (prevVeer >= 3) {
	var deltaVeer3 = prevVeer - 3;
    } else if (3 > prevVeer) {
	var deltaVeer3 = 3 - prevVeer;
    }
    
    if (prevVeer >= 4) {
	var deltaVeer4 = prevVeer - 4;
    } else if (4 > prevVeer) {
	var deltaVeer4 = 4 - prevVeer;
    }
    
    if (prevVeer >= 5) {
	var deltaVeer5 = prevVeer - 5;
    } else if (5 > prevVeer) {
	var deltaVeer5 = 5 - prevVeer;
    }
    
    if (prevVeer >= 6) {
	var deltaVeer6 = prevVeer - 6;
    } else if (6 > prevVeer) {
	var deltaVeer6 = 6 - prevVeer;
    }
    
    if (prevVeer >= 7) {
	var deltaVeer7 = prevVeer - 7;
    } else if (7 > prevVeer) {
	var deltaVeer7 = 7 - prevVeer;
    }
    
    if (prevVeer >= 8) {
	var deltaVeer8 = prevVeer - 8;
    } else if (8 > prevVeer) {
	var deltaVeer8 = 8 - prevVeer;
    }
    
    if (prevVeer >= 9) {
	var deltaVeer9 = prevVeer - 9;
    } else if (9 > prevVeer) {
	var deltaVeer9 = 9 - prevVeer;
    }
    
    if (prevVeer >= 10) {
	var deltaVeer10 = prevVeer - 10;
    } else if (10 > prevVeer) {
	var deltaVeer10 = 10 - prevVeer;
    }
    
    if (deck == "low") {
	
	if (deltaVeer5 < veerReal) {

	    var straight1SL = {moveX:-14.001, moveY:8.001, mVeer:5}
	    var straight1SR = {moveX:14.001, moveY:8.001, mVeer:5}
	    var straight2SL = {moveX:-14.001, moveY:10.001, mVeer:5}
	    var straight2SR = {moveX:14.001, moveY:10.001, mVeer:5}
	    var straight3SL = {moveX:-14.001, moveY:11.001, mVeer:5}
	    var straight3SR = {moveX:14.001, moveY:11.001, mVeer:5}
	    var straight1FL = {moveX:-14.001, moveY:9.001, mVeer:5}
	    var straight1FR = {moveX:14.001, moveY:9.001, mVeer:5}
	    var straight2FL = {moveX:-14.001, moveY:11.001, mVeer:5}
	    var straight2FR = {moveX:14.001, moveY:11.001, mVeer:5}
	    var straight3FL = {moveX:-14.001, moveY:14.001, mVeer:5}
	    var straight3FR = {moveX:14.001, moveY:14.001, mVeer:5}
	    
	    var sideslipRight1SL = {moveX:-9.002, moveY:16.002, mVeer:5}
	    var sideslipRight1SR = {moveX:14.002, moveY:1.002, mVeer:5}
	    var sideslipRight2SL = {moveX:-9.002, moveY:16.002, mVeer:5}
	    var sideslipRight2SR = {moveX:14.002, moveY:3.002, mVeer:5}
	    var sideslipRight3SL = {moveX:-10.002, moveY:15.002, mVeer:5}
	    var sideslipRight3SR = {moveX:16.002, moveY:7.002, mVeer:5}
	    var sideslipRight1FL = {moveX:-13.002, moveY:9.002, mVeer:5}
	    var sideslipRight1FR = {moveX:14.002, moveY:9.002, mVeer:5}
	    var sideslipRight2FL = {moveX:-12.002, moveY:11.002, mVeer:5}
	    var sideslipRight2FR = {moveX:15.002, moveY:11.002, mVeer:5}
	    var sideslipRight3FL = {moveX:-12.002, moveY:13.002, mVeer:5}
	    var sideslipRight3FR = {moveX:15.002, moveY:13.002, mVeer:5}
	    
	    var sideslipLeft1SR = {moveX:9.014, moveY:16.014, mVeer:5}
	    var sideslipLeft1SL = {moveX:-14.014, moveY:1.014, mVeer:5}
	    var sideslipLeft2SR = {moveX:9.014, moveY:16.014, mVeer:5}
	    var sideslipLeft2SL = {moveX:-14.014, moveY:3.014, mVeer:5}
	    var sideslipLeft3SR = {moveX:10.014, moveY:15.014, mVeer:5}
	    var sideslipLeft3SL = {moveX:-16.014, moveY:7.014, mVeer:5}
	    var sideslipLeft1FR = {moveX:13.014, moveY:9.014, mVeer:5}
	    var sideslipLeft1FL = {moveX:-14.014, moveY:9.014, mVeer:5}
	    var sideslipLeft2FR = {moveX:12.014, moveY:11.014, mVeer:5}
	    var sideslipLeft2FL = {moveX:-15.014, moveY:11.014, mVeer:5}
	    var sideslipLeft3FR = {moveX:12.014, moveY:13.014, mVeer:5}
	    var sideslipLeft3FL = {moveX:-15.014, moveY:13.014, mVeer:5}
	} else {
	    var straight1SL = {moveX:-14001, moveY:80001, mVeer:5}
	    var straight1SR = {moveX:14001, moveY:80001, mVeer:5}
	    var straight2SL = {moveX:-14001, moveY:100001, mVeer:5}
	    var straight2SR = {moveX:14001, moveY:100001, mVeer:5}
	    var straight3SL = {moveX:-14001, moveY:110001, mVeer:5}
	    var straight3SR = {moveX:14001, moveY:110001, mVeer:5}
	    var straight1FL = {moveX:-14001, moveY:90001, mVeer:5}
	    var straight1FR = {moveX:14001, moveY:90001, mVeer:5}
	    var straight2FL = {moveX:-140001, moveY:110001, mVeer:5}
	    var straight2FR = {moveX:140001, moveY:110001, mVeer:5}
	    var straight3FL = {moveX:-140001, moveY:140001, mVeer:5}
	    var straight3FR = {moveX:140001, moveY:140001, mVeer:5}
	    
	    var sideslipRight1SL = {moveX:-90002, moveY:160002, mVeer:5}
	    var sideslipRight1SR = {moveX:140002, moveY:10002, mVeer:5}
	    var sideslipRight2SL = {moveX:-90002, moveY:160002, mVeer:5}
	    var sideslipRight2SR = {moveX:140002, moveY:30002, mVeer:5}
	    var sideslipRight3SL = {moveX:-100002, moveY:150002, mVeer:5}
	    var sideslipRight3SR = {moveX:160002, moveY:70002, mVeer:5}
	    var sideslipRight1FL = {moveX:-130002, moveY:90002, mVeer:5}
	    var sideslipRight1FR = {moveX:140002, moveY:90002, mVeer:5}
	    var sideslipRight2FL = {moveX:-120002, moveY:110002, mVeer:5}
	    var sideslipRight2FR = {moveX:150002, moveY:110002, mVeer:5}
	    var sideslipRight3FL = {moveX:-120002, moveY:130002, mVeer:5}
	    var sideslipRight3FR = {moveX:150002, moveY:130002, mVeer:5}
	    
	    var sideslipLeft1SR = {moveX:90014, moveY:160014, mVeer:5}
	    var sideslipLeft1SL = {moveX:-140014, moveY:10014, mVeer:5}
	    var sideslipLeft2SR = {moveX:90014, moveY:160014, mVeer:5}
	    var sideslipLeft2SL = {moveX:-140014, moveY:30014, mVeer:5}
	    var sideslipLeft3SR = {moveX:100014, moveY:150014, mVeer:5}
	    var sideslipLeft3SL = {moveX:-160014, moveY:70014, mVeer:5}
	    var sideslipLeft1FR = {moveX:130014, moveY:90014, mVeer:5}
	    var sideslipLeft1FL = {moveX:-140014, moveY:90014, mVeer:5}
	    var sideslipLeft2FR = {moveX:120014, moveY:110014, mVeer:5}
	    var sideslipLeft2FL = {moveX:-150014, moveY:110014, mVeer:5}
	    var sideslipLeft3FR = {moveX:120014, moveY:130014, mVeer:5}
	    var sideslipLeft3FL = {moveX:-150014, moveY:130014, mVeer:5}
	}
	
	if (deltaVeer6 < veerReal) {    
	    var shallowestRight1SL = {moveX:-12.003, moveY:12.003, mVeer:6}
	    var shallowestRight1SR = {moveX:14.003, moveY:5.003, mVeer:6}
	    var shallowestRight2SL = {moveX:-14.003, moveY:11.003, mVeer:6}
	    var shallowestRight2SR = {moveX:14.003, moveY:6.003, mVeer:6}
	    var shallowestRight3SL = {moveX:-10.003, moveY:17.003, mVeer:6}
	    var shallowestRight3SR = {moveX:14.003, moveY:7.003, mVeer:6}
	    var shallowestRight1FL = {moveX:-10.003, moveY:15.003, mVeer:6}
	    var shallowestRight1FR = {moveX:14.003, moveY:3.003, mVeer:6}
	    var shallowestRight2FL = {moveX:-10.003, moveY:16.003, mVeer:6}
	    var shallowestRight2FR = {moveX:15.003, moveY:6.003, mVeer:6}
	    var shallowestRight3FL = {moveX:-9.003, moveY:19.003, mVeer:6}
	    var shallowestRight3FR = {moveX:15.003, moveY:8.003, mVeer:6}
	} else {
	    var shallowestRight1SL = {moveX:-120003, moveY:120003, mVeer:6}
	    var shallowestRight1SR = {moveX:140003, moveY:50003, mVeer:6}
	    var shallowestRight2SL = {moveX:-140003, moveY:110003, mVeer:6}
	    var shallowestRight2SR = {moveX:140003, moveY:60003, mVeer:6}
	    var shallowestRight3SL = {moveX:-100003, moveY:170003, mVeer:6}
	    var shallowestRight3SR = {moveX:140003, moveY:70003, mVeer:6}
	    var shallowestRight1FL = {moveX:-100003, moveY:150003, mVeer:6}
	    var shallowestRight1FR = {moveX:140003, moveY:30003, mVeer:6}
	    var shallowestRight2FL = {moveX:-100003, moveY:160003, mVeer:6}
	    var shallowestRight2FR = {moveX:150003, moveY:60003, mVeer:6}
	    var shallowestRight3FL = {moveX:-90003, moveY:190003, mVeer:6}
	    var shallowestRight3FR = {moveX:150003, moveY:80003, mVeer:6}
	}
	
	if (deltaVeer7 < veerReal) {
	    var shallowRight1SL = {moveX:-10.004 ,moveY:15.004, mVeer:7}
	    var shallowRight1SR = {moveX:13.004 ,moveY:0.004, mVeer:7}
	    var shallowRight2SL = {moveX:-9.004 ,moveY:17.004, mVeer:7}
	    var shallowRight2SR = {moveX:14.004 ,moveY:2.004, mVeer:7}
	    var shallowRight3SL = {moveX:-8.004 ,moveY:18.004, mVeer:7}
	    var shallowRight3SR = {moveX:14.004 ,moveY:4.004, mVeer:7}
	    var shallowRight1FL = {moveX:-6.004 ,moveY:17.004, mVeer:7}
	    var shallowRight1FR = {moveX:12.004 ,moveY:-1.004, mVeer:7}
	    var shallowRight2FL = {moveX:-6.004 ,moveY:19.004, mVeer:7}
	    var shallowRight2FR = {moveX:13.004 ,moveY:0.004, mVeer:7}
	    var shallowRight3FL = {moveX:-5.004 ,moveY:21.004, mVeer:7}
	    var shallowRight3FR = {moveX:14.004 ,moveY:3.004, mVeer:7}
	} else {
	    var shallowRight1SL = {moveX:-100004 ,moveY:150004, mVeer:7}
	    var shallowRight1SR = {moveX:130004 ,moveY:00004, mVeer:7}
	    var shallowRight2SL = {moveX:-90004 ,moveY:170004, mVeer:7}
	    var shallowRight2SR = {moveX:140004 ,moveY:20004, mVeer:7}
	    var shallowRight3SL = {moveX:-80004 ,moveY:180004, mVeer:7}
	    var shallowRight3SR = {moveX:140004 ,moveY:40004, mVeer:7}
	    var shallowRight1FL = {moveX:-60004 ,moveY:170004, mVeer:7}
	    var shallowRight1FR = {moveX:120004 ,moveY:-10004, mVeer:7}
	    var shallowRight2FL = {moveX:-60004 ,moveY:190004, mVeer:7}
	    var shallowRight2FR = {moveX:130004 ,moveY:100004, mVeer:7}
	    var shallowRight3FL = {moveX:-50004 ,moveY:210004, mVeer:7}
	    var shallowRight3FR = {moveX:140004 ,moveY:30004, mVeer:7}
	}
	
	if (deltaVeer8 < veerReal) {
	    var right1SL = {moveX:-8.005 ,moveY:16.005, mVeer:8}
	    var right1SR = {moveX:13.005 ,moveY:0.005, mVeer:8}
	    var right2SL = {moveX:-9.005 ,moveY:17.005, mVeer:8}
	    var right2SR = {moveX:13.005 ,moveY:2.005, mVeer:8}
	    var right3SL = {moveX:-9.005 ,moveY:18.005, mVeer:8}
	    var right3SR = {moveX:14.005 ,moveY:4.005, mVeer:8}
	    var right1FL = {moveX:-2.005 ,moveY:19.005, mVeer:8}
	    var right1FR = {moveX:9.005 ,moveY:-5.005, mVeer:8}
	    var right2FL = {moveX:-1.005 ,moveY:21.005, mVeer:8}
	    var right2FR = {moveX:16.005 ,moveY:-3.005, mVeer:8}
	    var right3FL = {moveX:-1.005 ,moveY:23.005, mVeer:8}
	    var right3FR = {moveX:11.005 ,moveY:-1.005, mVeer:8}
	} else {
	    var right1SL = {moveX:-80005 ,moveY:160005, mVeer:8}
	    var right1SR = {moveX:130005 ,moveY:100005, mVeer:8}
	    var right2SL = {moveX:-90005 ,moveY:170005, mVeer:8}
	    var right2SR = {moveX:130005 ,moveY:20005, mVeer:8}
	    var right3SL = {moveX:-90005 ,moveY:180005, mVeer:8}
	    var right3SR = {moveX:140005 ,moveY:40005, mVeer:8}
	    var right1FL = {moveX:-20005 ,moveY:190005, mVeer:8}
	    var right1FR = {moveX:90005 ,moveY:-50005, mVeer:8}
	    var right2FL = {moveX:-10005 ,moveY:210005, mVeer:8}
	    var right2FR = {moveX:160005 ,moveY:-30005, mVeer:8}
	    var right3FL = {moveX:-10005 ,moveY:230005, mVeer:8}
	    var right3FR = {moveX:110005 ,moveY:-10005, mVeer:8}
	}
	
	if (deltaVeer9 < veerReal) {
	    var tightRight1SL = {moveX:-5.006 ,moveY:18.006, mVeer:9}
	    var tightRight1SR = {moveX:12.006 ,moveY:-3.006, mVeer:9}
	    var tightRight2SL = {moveX:-7.006 ,moveY:18.006, mVeer:9}
	    var tightRight2SR = {moveX:13.006 ,moveY:1.006, mVeer:9}
	    var tightRight3SL = {moveX:-8.006 ,moveY:18.006, mVeer:9}
	    var tightRight3SR = {moveX:14.006 ,moveY:4.006, mVeer:9}
	    var tightRight1FL = {moveX:3.006 ,moveY:19.006, mVeer:9}
	    var tightRight1FR = {moveX:7.006 ,moveY:-7.006, mVeer:9}
	    var tightRight2FL = {moveX:2.006 ,moveY:21.006, mVeer:9}
	    var tightRight2FR = {moveX:8.006 ,moveY:-4.006, mVeer:9}
	    var tightRight3FL = {moveX:4.006 ,moveY:23.006, mVeer:9}
	    var tightRight3FR = {moveX:8.006 ,moveY:-2.006, mVeer:9}
	} else {
	    var tightRight1SL = {moveX:-50006 ,moveY:180006, mVeer:9}
	    var tightRight1SR = {moveX:120006 ,moveY:-30006, mVeer:9}
	    var tightRight2SL = {moveX:-70006 ,moveY:180006, mVeer:9}
	    var tightRight2SR = {moveX:130006 ,moveY:10006, mVeer:9}
	    var tightRight3SL = {moveX:-80006 ,moveY:180006, mVeer:9}
	    var tightRight3SR = {moveX:140006 ,moveY:40006, mVeer:9}
	    var tightRight1FL = {moveX:30006 ,moveY:190006, mVeer:9}
	    var tightRight1FR = {moveX:70006 ,moveY:-70006, mVeer:9}
	    var tightRight2FL = {moveX:20006 ,moveY:210006, mVeer:9}
	    var tightRight2FR = {moveX:80006 ,moveY:-40006, mVeer:9}
	    var tightRight3FL = {moveX:40006 ,moveY:230006, mVeer:9}
	    var tightRight3FR = {moveX:80006 ,moveY:-20006, mVeer:9}
	}
	
	if (deltaVeer10 < veerReal) {
	    var tightestRight1SL = {moveX:-1.007 ,moveY:19.007, mVeer:10}
	    var tightestRight1SR = {moveX:8.007 ,moveY:-6.007, mVeer:10}
	    var tightestRight2SL = {moveX:-3.007 ,moveY:20.007, mVeer:10}
	    var tightestRight2SR = {moveX:11.007 ,moveY:-3.007, mVeer:10}
	    var tightestRight3SL = {moveX:-6.007 ,moveY:20.007, mVeer:10}
	    var tightestRight3SR = {moveX:13.007 ,moveY:3.007, mVeer:10}
	    var tightestRight1FL = {moveX:4.007 ,moveY:19.007, mVeer:10}
	    var tightestRight1FR = {moveX:4.007 ,moveY:-8.007, mVeer:10}
	    var tightestRight2FL = {moveX:6.007 ,moveY:21.007, mVeer:10}
	    var tightestRight2FR = {moveX:6.007 ,moveY:-6.007, mVeer:10}
	    var tightestRight3FL = {moveX:7.007 ,moveY:22.007, mVeer:10}
	    var tightestRight3FR = {moveX:7.007 ,moveY:-9.007, mVeer:10}
	} else {
	    var tightestRight1SL = {moveX:-10007 ,moveY:190007, mVeer:10}
	    var tightestRight1SR = {moveX:80007 ,moveY:-60007, mVeer:10}
	    var tightestRight2SL = {moveX:-30007 ,moveY:200007, mVeer:10}
	    var tightestRight2SR = {moveX:110007 ,moveY:-30007, mVeer:10}
	    var tightestRight3SL = {moveX:-60007 ,moveY:200007, mVeer:10}
	    var tightestRight3SR = {moveX:130007 ,moveY:30007, mVeer:10}
	    var tightestRight1FL = {moveX:40007 ,moveY:190007, mVeer:10}
	    var tightestRight1FR = {moveX:40007 ,moveY:-80007, mVeer:10}
	    var tightestRight2FL = {moveX:60007 ,moveY:210007, mVeer:10}
	    var tightestRight2FR = {moveX:60007 ,moveY:-60007, mVeer:10}
	    var tightestRight3FL = {moveX:70007 ,moveY:220007, mVeer:10}
	    var tightestRight3FR = {moveX:70007 ,moveY:-90007, mVeer:10}
	}
	
	var oneMastShallowRightSL = {moveX:-6.008 ,moveY:18.008, mVeer:5}
	var oneMastShallowRightSR = {moveX:13.008 ,moveY:-1.008, mVeer:5}
	var oneMastShallowRightFL = {moveX:-4.008 ,moveY:19.008, mVeer:5}
	var oneMastShallowRightFR = {moveX:13.008 ,moveY:0.008, mVeer:5}
	
	var oneMastTightRightSL = {moveX:-8.009 ,moveY:16.009, mVeer:5}
	var oneMastTightRightSR = {moveX:14.009 ,moveY:1.009, mVeer:5}
	var oneMastTightRightFL = {moveX:-1.009 ,moveY:20.009, mVeer:5}
	var oneMastTightRightFR = {moveX:12.009 ,moveY:-3.009, mVeer:5}
	
	var twoMastShallowRightSL = {moveX:-13.01 ,moveY:11.01, mVeer:5}
	var twoMastShallowRightSR = {moveX:14.01 ,moveY:8.01, mVeer:5}
	var twoMastShallowRightFL = {moveX:-9.01 ,moveY:17.01, mVeer:5}
	var twoMastShallowRightFR = {moveX:14.01 ,moveY:3.01, mVeer:5}
	
	var twoMastTightRightSL = {moveX:-11.011 ,moveY:15.011, mVeer:5}
	var twoMastTightRightSR = {moveX:14.011 ,moveY:4.011, mVeer:5}
	var twoMastTightRightFL = {moveX:-9.011 ,moveY:17.011, mVeer:5}
	var twoMastTightRightFR = {moveX:14.011 ,moveY:3.011, mVeer:5}
	
	var redStraight1L = {moveX:-14.012 ,moveY:8.012, mVeer:5}
	var redStraight1R = {moveX:14.012 ,moveY:8.012, mVeer:5}
	var redStraight2L = {moveX:-14.012 ,moveY:5.012, mVeer:5}
	var redStraight2R = {moveX:14.012 ,moveY:5.012, mVeer:5}
	
	var redRight1L = {moveX:-3.013 ,moveY:19.013, mVeer:6}
	var redRight1R = {moveX:10.013 ,moveY:-4.013, mVeer:6}
	var redRight2L = {moveX:-3.013 ,moveY:16.013, mVeer:6}
	var redRight2R = {moveX:9.013 ,moveY:-8.013, mVeer:6}
	
	
	if (deltaVeer4 < veerReal) {
	    var shallowestLeft1SR = {moveX:12.015, moveY:12.015, mVeer:4}
	    var shallowestLeft1SL = {moveX:-14.015, moveY:5.015, mVeer:4}
	    var shallowestLeft2SR = {moveX:14.015, moveY:11.015, mVeer:4}
	    var shallowestLeft2SL = {moveX:-14.015, moveY:6.015, mVeer:4}
	    var shallowestLeft3SR = {moveX:10.015, moveY:17.015, mVeer:4}
	    var shallowestLeft3SL = {moveX:-14.015, moveY:7.015, mVeer:4}
	    var shallowestLeft1FR = {moveX:10.015, moveY:15.015, mVeer:4}
	    var shallowestLeft1FL = {moveX:-14.015, moveY:3.015, mVeer:4}
	    var shallowestLeft2FR = {moveX:10.015, moveY:16.015, mVeer:4}
	    var shallowestLeft2FL = {moveX:-15.015, moveY:6.015, mVeer:4}
	    var shallowestLeft3FR = {moveX:9.015, moveY:19.015, mVeer:4}
	    var shallowestLeft3FL = {moveX:-15.015, moveY:8.015, mVeer:4}
	} else {
	    var shallowestLeft1SR = {moveX:120015, moveY:120015, mVeer:4}
	    var shallowestLeft1SL = {moveX:-140015, moveY:50015, mVeer:4}
	    var shallowestLeft2SR = {moveX:140015, moveY:110015, mVeer:4}
	    var shallowestLeft2SL = {moveX:-140015, moveY:60015, mVeer:4}
	    var shallowestLeft3SR = {moveX:100015, moveY:170015, mVeer:4}
	    var shallowestLeft3SL = {moveX:-140015, moveY:70015, mVeer:4}
	    var shallowestLeft1FR = {moveX:100015, moveY:150015, mVeer:4}
	    var shallowestLeft1FL = {moveX:-140015, moveY:30015, mVeer:4}
	    var shallowestLeft2FR = {moveX:100015, moveY:160015, mVeer:4}
	    var shallowestLeft2FL = {moveX:-150015, moveY:60015, mVeer:4}
	    var shallowestLeft3FR = {moveX:90015, moveY:190015, mVeer:4}
	    var shallowestLeft3FL = {moveX:-150015, moveY:80015, mVeer:4}
	}
	
	if (deltaVeer3 < veerReal) {
	    var shallowLeft1SR = {moveX:10.016 ,moveY:15.016, mVeer:3}
	    var shallowLeft1SL = {moveX:-13.016 ,moveY:0.016, mVeer:3}
	    var shallowLeft2SR = {moveX:9.016 ,moveY:17.016, mVeer:3}
	    var shallowLeft2SL = {moveX:-14.016 ,moveY:2.016, mVeer:3}
	    var shallowLeft3SR = {moveX:8.016 ,moveY:18.016, mVeer:3}
	    var shallowLeft3SL = {moveX:-14.016 ,moveY:4.016, mVeer:3}
	    var shallowLeft1FR = {moveX:6.016 ,moveY:17.016, mVeer:3}
	    var shallowLeft1FL = {moveX:-12.016 ,moveY:-1.016, mVeer:3}
	    var shallowLeft2FR = {moveX:6.016 ,moveY:19.016, mVeer:3}
	    var shallowLeft2FL = {moveX:-13.016 ,moveY:0.016, mVeer:3}
	    var shallowLeft3FR = {moveX:5.016 ,moveY:21.016, mVeer:3}
	    var shallowLeft3FL = {moveX:-14.016 ,moveY:3.016, mVeer:3}
	} else {
	    var shallowLeft1SR = {moveX:100016 ,moveY:150016, mVeer:3}
	    var shallowLeft1SL = {moveX:-130016 ,moveY:100016, mVeer:3}
	    var shallowLeft2SR = {moveX:90016 ,moveY:170016, mVeer:3}
	    var shallowLeft2SL = {moveX:-140016 ,moveY:20016, mVeer:3}
	    var shallowLeft3SR = {moveX:80016 ,moveY:180016, mVeer:3}
	    var shallowLeft3SL = {moveX:-140016 ,moveY:40016, mVeer:3}
	    var shallowLeft1FR = {moveX:60016 ,moveY:170016, mVeer:3}
	    var shallowLeft1FL = {moveX:-120016 ,moveY:-10016, mVeer:3}
	    var shallowLeft2FR = {moveX:60016 ,moveY:190016, mVeer:3}
	    var shallowLeft2FL = {moveX:-130016 ,moveY:100016, mVeer:3}
	    var shallowLeft3FR = {moveX:50016 ,moveY:210016, mVeer:3}
	    var shallowLeft3FL = {moveX:-140016 ,moveY:30016, mVeer:3}
	}
	
	if (deltaVeer2 < veerReal) {
	    var Left1SR = {moveX:8.017 ,moveY:16.017, mVeer:2}
	    var Left1SL = {moveX:-13.017 ,moveY:0.017, mVeer:2}
	    var Left2SR = {moveX:9.017 ,moveY:17.017, mVeer:2}
	    var Left2SL = {moveX:-13.017 ,moveY:2.017, mVeer:2}
	    var Left3SR = {moveX:9.017 ,moveY:18.017, mVeer:2}
	    var Left3SL = {moveX:-14.017 ,moveY:4.017, mVeer:2}
	    var Left1FR = {moveX:2.017 ,moveY:19.017, mVeer:2}
	    var Left1FL = {moveX:-9.017 ,moveY:-5.017, mVeer:2}
	    var Left2FR = {moveX:1.017 ,moveY:21.017, mVeer:2}
	    var Left2FL = {moveX:-16.017 ,moveY:-3.017, mVeer:2}
	    var Left3FR = {moveX:1.017 ,moveY:23.017, mVeer:2}
	    var Left3FL = {moveX:-11.017 ,moveY:-1.017, mVeer:2}
	} else {
	    var Left1SR = {moveX:80017 ,moveY:160017, mVeer:2}
	    var Left1SL = {moveX:-130017 ,moveY:00017, mVeer:2}
	    var Left2SR = {moveX:90017 ,moveY:170017, mVeer:2}
	    var Left2SL = {moveX:-130017 ,moveY:20017, mVeer:2}
	    var Left3SR = {moveX:90017 ,moveY:180017, mVeer:2}
	    var Left3SL = {moveX:-140017 ,moveY:40017, mVeer:2}
	    var Left1FR = {moveX:20017 ,moveY:190017, mVeer:2}
	    var Left1FL = {moveX:-90017 ,moveY:-50017, mVeer:2}
	    var Left2FR = {moveX:10017 ,moveY:210017, mVeer:2}
	    var Left2FL = {moveX:-160017 ,moveY:-30017, mVeer:2}
	    var Left3FR = {moveX:10017 ,moveY:230017, mVeer:2}
	    var Left3FL = {moveX:-110017 ,moveY:-10017, mVeer:2}
	}
	
	if (deltaVeer1 < veerReal) {
	    var tightLeft1SR = {moveX:5.018 ,moveY:18.018, mVeer:1}
	    var tightLeft1SL = {moveX:-12.018 ,moveY:-3.018, mVeer:1}
	    var tightLeft2SR = {moveX:7.018 ,moveY:18.018, mVeer:1}
	    var tightLeft2SL = {moveX:-13.018 ,moveY:1.018, mVeer:1}
	    var tightLeft3SR = {moveX:8.018 ,moveY:18.018, mVeer:1}
	    var tightLeft3SL = {moveX:-14.018 ,moveY:4.018, mVeer:1}
	    var tightLeft1FR = {moveX:-3.018 ,moveY:19.018, mVeer:1}
	    var tightLeft1FL = {moveX:-7.018 ,moveY:-7.018, mVeer:1}
	    var tightLeft2FR = {moveX:-2.018 ,moveY:21.018, mVeer:1}
	    var tightLeft2FL = {moveX:-8.018 ,moveY:-4.018, mVeer:1}
	    var tightLeft3FR = {moveX:-4.018 ,moveY:23.018, mVeer:1}
	    var tightLeft3FL = {moveX:-8.018 ,moveY:-2.018, mVeer:1}
	} else {
	    var tightLeft1SR = {moveX:50018 ,moveY:180018, mVeer:1}
	    var tightLeft1SL = {moveX:-120018 ,moveY:-30018, mVeer:1}
	    var tightLeft2SR = {moveX:70018 ,moveY:180018, mVeer:1}
	    var tightLeft2SL = {moveX:-130018 ,moveY:10018, mVeer:1}
	    var tightLeft3SR = {moveX:80018 ,moveY:180018, mVeer:1}
	    var tightLeft3SL = {moveX:-140018 ,moveY:40018, mVeer:1}
	    var tightLeft1FR = {moveX:-30018 ,moveY:190018, mVeer:1}
	    var tightLeft1FL = {moveX:-70018 ,moveY:-70018, mVeer:1}
	    var tightLeft2FR = {moveX:-20018 ,moveY:210018, mVeer:1}
	    var tightLeft2FL = {moveX:-80018 ,moveY:-40018, mVeer:1}
	    var tightLeft3FR = {moveX:-40018 ,moveY:230018, mVeer:1}
	    var tightLeft3FL = {moveX:-80018 ,moveY:-20018, mVeer:1}
	}
	
	if (deltaVeer0 < veerReal) {
	    var tightestLeft1SR = {moveX:1.019 ,moveY:19.019, mVeer:0}
	    var tightestLeft1SL = {moveX:-8.019 ,moveY:-6.019, mVeer:0}
	    var tightestLeft2SR = {moveX:3.019 ,moveY:20.019, mVeer:0}
	    var tightestLeft2SL = {moveX:-11.019 ,moveY:-3.019, mVeer:0}
	    var tightestLeft3SR = {moveX:6.019 ,moveY:20.019, mVeer:0}
	    var tightestLeft3SL = {moveX:-13.019 ,moveY:3.019, mVeer:0}
	    var tightestLeft1FR = {moveX:-4.019 ,moveY:19.019, mVeer:0}
	    var tightestLeft1FL = {moveX:-4.019 ,moveY:-8.019, mVeer:0}
	    var tightestLeft2FR = {moveX:-6.019 ,moveY:21.019, mVeer:0}
	    var tightestLeft2FL = {moveX:-6.019 ,moveY:-6.019, mVeer:0}
	    var tightestLeft3FR = {moveX:-7.019 ,moveY:22.019, mVeer:0}
	    var tightestLeft3FL = {moveX:-7.019 ,moveY:-9.019, mVeer:0}
	} else {
	    var tightestLeft1SR = {moveX:10019 ,moveY:190019, mVeer:0}
	    var tightestLeft1SL = {moveX:-80019 ,moveY:-60019, mVeer:0}
	    var tightestLeft2SR = {moveX:30019 ,moveY:200019, mVeer:0}
	    var tightestLeft2SL = {moveX:-110019 ,moveY:-30019, mVeer:0}
	    var tightestLeft3SR = {moveX:60019 ,moveY:200019, mVeer:0}
	    var tightestLeft3SL = {moveX:-130019 ,moveY:30019, mVeer:0}
	    var tightestLeft1FR = {moveX:-40019 ,moveY:190019, mVeer:0}
	    var tightestLeft1FL = {moveX:-40019 ,moveY:-80019, mVeer:0}
	    var tightestLeft2FR = {moveX:-60019 ,moveY:210019, mVeer:0}
	    var tightestLeft2FL = {moveX:-60019 ,moveY:-60019, mVeer:0}
	    var tightestLeft3FR = {moveX:-70019 ,moveY:220019, mVeer:0}
	    var tightestLeft3FL = {moveX:-70019 ,moveY:-90019, mVeer:0}
	}
	
	var oneMastShallowLeftSR = {moveX:6.02 ,moveY:18.02, mVeer:5}
	var oneMastShallowLeftSL = {moveX:-13.02 ,moveY:-1.02, mVeer:5}
	var oneMastShallowLeftFR = {moveX:4.02 ,moveY:19.02, mVeer:5}
	var oneMastShallowLeftFL = {moveX:-13.02 ,moveY:0.02, mVeer:5}
	
	var oneMastTightLeftSR = {moveX:8.021 ,moveY:16.021, mVeer:5}
	var oneMastTightLeftSL = {moveX:-14.021 ,moveY:1.021, mVeer:5}
	var oneMastTightLeftFR = {moveX:1.021 ,moveY:20.021, mVeer:5}
	var oneMastTightLeftFL = {moveX:-12.021 ,moveY:-3.021, mVeer:5}
	
	var twoMastShallowLeftSR = {moveX:13.022 ,moveY:11.022, mVeer:5}
	var twoMastShallowLeftSL = {moveX:-14.022 ,moveY:8.022, mVeer:5}
	var twoMastShallowLeftFR = {moveX:9.022 ,moveY:17.022, mVeer:5}
	var twoMastShallowLeftFL = {moveX:-14.022 ,moveY:3.022, mVeer:5}
	
	var twoMastTightLeftSR = {moveX:11.023 ,moveY:15.023, mVeer:5}
	var twoMastTightLeftSL = {moveX:-14.023 ,moveY:4.023, mVeer:5}
	var twoMastTightLeftFR = {moveX:9.023 ,moveY:17.023, mVeer:5}
	var twoMastTightLeftFL = {moveX:-14.023 ,moveY:3.023, mVeer:5}
	
	var redLeft1R = {moveX:3.024 ,moveY:19.024, mVeer:6}
	var redLeft1L = {moveX:-10.024 ,moveY:-4.024, mVeer:6}
	var redLeft2R = {moveX:3.024 ,moveY:16.024, mVeer:6}
	var redLeft2L = {moveX:-9.024 ,moveY:-8.024, mVeer:6}
    
 
    
} else if (deck == "high") {
    
    var tightRight1SL = {moveX:-5006 ,moveY:18006, mVeer:60}
    var tightRight1SR = {moveX:12006 ,moveY:-3006, mVeer:60}
    var tightRight2SL = {moveX:-7006 ,moveY:19006, mVeer:60}
    var tightRight2SR = {moveX:13006 ,moveY:1006, mVeer:60}
    var tightRight3SL = {moveX:-8006 ,moveY:18006, mVeer:60}
    var tightRight3SR = {moveX:14006 ,moveY:4006, mVeer:60}
    var tightRight1FL = {moveX:3006 ,moveY:19006, mVeer:60}
    var tightRight1FR = {moveX:7006 ,moveY:-7006, mVeer:60}
    var tightRight2FL = {moveX:2006 ,moveY:21006, mVeer:60}
    var tightRight2FR = {moveX:8006 ,moveY:-4006, mVeer:60}
    var tightRight3FL = {moveX:4006 ,moveY:20006, mVeer:60}
    var tightRight3FR = {moveX:8006 ,moveY:-2006, mVeer:60}
    var shallowRight1SL = {moveX:-10004 ,moveY:15004, mVeer:60}
    var shallowRight1SR = {moveX:13004 ,moveY:10004, mVeer:60}
    var shallowRight2SL = {moveX:-9004 ,moveY:17004, mVeer:60}
    var shallowRight2SR = {moveX:14004 ,moveY:2004, mVeer:60}
    var shallowRight3SL = {moveX:-8004 ,moveY:18004, mVeer:60}
    var shallowRight3SR = {moveX:14004 ,moveY:4004, mVeer:60}
    var shallowRight1FL = {moveX:-6004 ,moveY:17004, mVeer:60}
    var shallowRight1FR = {moveX:12004 ,moveY:-1004, mVeer:60}
    var shallowRight2FL = {moveX:-6004 ,moveY:19004, mVeer:60}
    var shallowRight2FR = {moveX:13004 ,moveY:10004, mVeer:60}
    var shallowRight3FL = {moveX:-5004 ,moveY:21004, mVeer:60}
    var shallowRight3FR = {moveX:14004 ,moveY:3004, mVeer:60}
    var shallowLeft1SR = {moveX:10016 ,moveY:15016, mVeer:60}
    var shallowLeft1SL = {moveX:-13016 ,moveY:10016, mVeer:60}
    var shallowLeft2SR = {moveX:9016 ,moveY:17016, mVeer:60}
    var shallowLeft2SL = {moveX:-14016 ,moveY:2016, mVeer:60}
    var shallowLeft3SR = {moveX:8016 ,moveY:18016, mVeer:60}
    var shallowLeft3SL = {moveX:-14016 ,moveY:4016, mVeer:60}
    var shallowLeft1FR = {moveX:6016 ,moveY:17016, mVeer:60}
    var shallowLeft1FL = {moveX:-12016 ,moveY:-1016, mVeer:60}
    var shallowLeft2FR = {moveX:6016 ,moveY:19016, mVeer:60}
    var shallowLeft2FL = {moveX:-13016 ,moveY:10016, mVeer:60}
    var shallowLeft3FR = {moveX:5016 ,moveY:21016, mVeer:60}
    var shallowLeft3FL = {moveX:-14016 ,moveY:3016, mVeer:60}
    var tightLeft1SR = {moveX:10000 ,moveY:1000018018, mVeer:60}
    var tightLeft1SL = {moveX:-10000 ,moveY:-310000018, mVeer:60}
    var tightLeft2SR = {moveX:10000 ,moveY:1810000018, mVeer:60}
    var tightLeft2SL = {moveX:-10000 ,moveY:110000018, mVeer:60}
    var tightLeft3SR = {moveX:10000 ,moveY:181000018, mVeer:60}
    var tightLeft3SL = {moveX:-10000 ,moveY:41000018, mVeer:60}
    var tightLeft1FR = {moveX:-10000 ,moveY:1910000018, mVeer:60}
    var tightLeft1FL = {moveX:-10000 ,moveY:-710000018, mVeer:60}
    var tightLeft2FR = {moveX:-10000 ,moveY:2110000018, mVeer:60}
    var tightLeft2FL = {moveX:-80000018 ,moveY:-410000018, mVeer:60}
    var tightLeft3FR = {moveX:-40000018 ,moveY:2310000018, mVeer:60}
    var tightLeft3FL = {moveX:-80000018 ,moveY:-210000018, mVeer:60}
    
    if (deltaVeer5 < veerReal) {
	var straight1SL = {moveX:-14.001, moveY:8.001, mVeer:5}
	var straight1SR = {moveX:14.001, moveY:8.001, mVeer:5}
	var straight2SL = {moveX:-14.001, moveY:9.001, mVeer:5}
	var straight2SR = {moveX:14.001, moveY:9.001, mVeer:5}
	var straight3SL = {moveX:-14.001, moveY:11.001, mVeer:5}
	var straight3SR = {moveX:14.001, moveY:11.001, mVeer:5}
	var straight1FL = {moveX:-14.001, moveY:9.001, mVeer:5}
	var straight1FR = {moveX:14.001, moveY:9.001, mVeer:5}
	var straight2FL = {moveX:-14.001, moveY:11.001, mVeer:5}
	var straight2FR = {moveX:14.001, moveY:11.001, mVeer:5}
	var straight3FL = {moveX:-14.001, moveY:12.001, mVeer:5}
	var straight3FR = {moveX:14.001, moveY:12.001, mVeer:5}
	
	var sideslipRight1SL = {moveX:-10.002, moveY:15.002, mVeer:5}
	var sideslipRight1SR = {moveX:13.002, moveY:0.002, mVeer:5}
	var sideslipRight2SL = {moveX:-9.002, moveY:16.002, mVeer:5}
	var sideslipRight2SR = {moveX:12.002, moveY:14.002, mVeer:5}
	var sideslipRight3SL = {moveX:-9.002, moveY:16.002, mVeer:5}
	var sideslipRight3SR = {moveX:13.002, moveY:14.002, mVeer:5}
	var sideslipRight1FL = {moveX:-13.002, moveY:9.002, mVeer:5}
	var sideslipRight1FR = {moveX:14.002, moveY:9.002, mVeer:5}
	var sideslipRight2FL = {moveX:-13.002, moveY:10.002, mVeer:5}
	var sideslipRight2FR = {moveX:14.002, moveY:10.002, mVeer:5}
	var sideslipRight3FL = {moveX:-13.002, moveY:11.002, mVeer:5}
	var sideslipRight3FR = {moveX:15.002, moveY:11.002, mVeer:5}
	
	var sideslipLeft1SR = {moveX:10.012, moveY:15.012, mVeer:5}
	var sideslipLeft1SL = {moveX:-13.012, moveY:0.012, mVeer:5}
	var sideslipLeft2SR = {moveX:9.012, moveY:16.012, mVeer:5}
	var sideslipLeft2SL = {moveX:-12.012, moveY:14.012, mVeer:5}
	var sideslipLeft3SR = {moveX:9.012, moveY:16.012, mVeer:5}
	var sideslipLeft3SL = {moveX:-13.012, moveY:14.012, mVeer:5}
	var sideslipLeft1FR = {moveX:13.012, moveY:9.012, mVeer:5}
	var sideslipLeft1FL = {moveX:-14.012, moveY:9.012, mVeer:5}
	var sideslipLeft2FR = {moveX:13.012, moveY:10.012, mVeer:5}
	var sideslipLeft2FL = {moveX:-14.012, moveY:10.012, mVeer:5}
	var sideslipLeft3FR = {moveX:13.012, moveY:11.012, mVeer:5}
	var sideslipLeft3FL = {moveX:-15.012, moveY:11.012, mVeer:5}
    } else {
	var straight1SL = {moveX:-140001, moveY:80001, mVeer:5}
	var straight1SR = {moveX:140001, moveY:80001, mVeer:5}
	var straight2SL = {moveX:-140001, moveY:90001, mVeer:5}
	var straight2SR = {moveX:140001, moveY:90001, mVeer:5}
	var straight3SL = {moveX:-140001, moveY:110001, mVeer:5}
	var straight3SR = {moveX:140001, moveY:110001, mVeer:5}
	var straight1FL = {moveX:-140001, moveY:90001, mVeer:5}
	var straight1FR = {moveX:140001, moveY:90001, mVeer:5}
	var straight2FL = {moveX:-140001, moveY:110001, mVeer:5}
	var straight2FR = {moveX:140001, moveY:110001, mVeer:5}
	var straight3FL = {moveX:-140001, moveY:120001, mVeer:5}
	var straight3FR = {moveX:140001, moveY:120001, mVeer:5}
	
	var sideslipRight1SL = {moveX:-100002, moveY:150002, mVeer:5}
	var sideslipRight1SR = {moveX:130002, moveY:00002, mVeer:5}
	var sideslipRight2SL = {moveX:-90002, moveY:160002, mVeer:5}
	var sideslipRight2SR = {moveX:120002, moveY:140002, mVeer:5}
	var sideslipRight3SL = {moveX:-90002, moveY:160002, mVeer:5}
	var sideslipRight3SR = {moveX:130002, moveY:140002, mVeer:5}
	var sideslipRight1FL = {moveX:-130002, moveY:90002, mVeer:5}
	var sideslipRight1FR = {moveX:140002, moveY:90002, mVeer:5}
	var sideslipRight2FL = {moveX:-130002, moveY:100002, mVeer:5}
	var sideslipRight2FR = {moveX:140002, moveY:100002, mVeer:5}
	var sideslipRight3FL = {moveX:-130002, moveY:110002, mVeer:5}
	var sideslipRight3FR = {moveX:150002, moveY:110002, mVeer:5}
	
	var sideslipLeft1SR = {moveX:100012, moveY:150012, mVeer:5}
	var sideslipLeft1SL = {moveX:-130012, moveY:00012, mVeer:5}
	var sideslipLeft2SR = {moveX:90012, moveY:160012, mVeer:5}
	var sideslipLeft2SL = {moveX:-120012, moveY:140012, mVeer:5}
	var sideslipLeft3SR = {moveX:90012, moveY:160012, mVeer:5}
	var sideslipLeft3SL = {moveX:-130012, moveY:140012, mVeer:5}
	var sideslipLeft1FR = {moveX:130012, moveY:90012, mVeer:5}
	var sideslipLeft1FL = {moveX:-140012, moveY:90012, mVeer:5}
	var sideslipLeft2FR = {moveX:130012, moveY:100012, mVeer:5}
	var sideslipLeft2FL = {moveX:-140012, moveY:100012, mVeer:5}
	var sideslipLeft3FR = {moveX:130012, moveY:110012, mVeer:5}
	var sideslipLeft3FL = {moveX:-150012, moveY:110012, mVeer:5}
    }
    
    if (deltaVeer6 < veerReal) {
	var shallowestRight1SL = {moveX:-12.003, moveY:12.003, mVeer:6}
	var shallowestRight1SR = {moveX:14.003, moveY:5.003, mVeer:6}
	var shallowestRight2SL = {moveX:-11.003, moveY:14.003, mVeer:6}
	var shallowestRight2SR = {moveX:14.003, moveY:5.003, mVeer:6}
	var shallowestRight3SL = {moveX:-11.003, moveY:15.003, mVeer:6}
	var shallowestRight3SR = {moveX:14.003, moveY:6.003, mVeer:6}
	var shallowestRight1FL = {moveX:-11.003, moveY:14.003, mVeer:6}
	var shallowestRight1FR = {moveX:14.003, moveY:3.003, mVeer:6}
	var shallowestRight2FL = {moveX:-12.003, moveY:15.003, mVeer:6}
	var shallowestRight2FR = {moveX:14.003, moveY:5.003, mVeer:6}
	var shallowestRight3FL = {moveX:-10.003, moveY:17.003, mVeer:6}
	var shallowestRight3FR = {moveX:15.003, moveY:6.003, mVeer:6}
    } else {
	var shallowestRight1SL = {moveX:-120003, moveY:120003, mVeer:6}
	var shallowestRight1SR = {moveX:140003, moveY:50003, mVeer:6}
	var shallowestRight2SL = {moveX:-110003, moveY:140003, mVeer:6}
	var shallowestRight2SR = {moveX:140003, moveY:50003, mVeer:6}
	var shallowestRight3SL = {moveX:-110003, moveY:150003, mVeer:6}
	var shallowestRight3SR = {moveX:140003, moveY:60003, mVeer:6}
	var shallowestRight1FL = {moveX:-110003, moveY:140003, mVeer:6}
	var shallowestRight1FR = {moveX:140003, moveY:30003, mVeer:6}
	var shallowestRight2FL = {moveX:-120003, moveY:150003, mVeer:6}
	var shallowestRight2FR = {moveX:140003, moveY:50003, mVeer:6}
	var shallowestRight3FL = {moveX:-100003, moveY:170003, mVeer:6}
	var shallowestRight3FR = {moveX:150003, moveY:60003, mVeer:6}
    }
    
    if (deltaVeer7 < veerReal) {
	var right1SL = {moveX:-10.004 ,moveY:14.004, mVeer:7}
	var right1SR = {moveX:13.004 ,moveY:0.004, mVeer:7}
	var right2SL = {moveX:-10.004 ,moveY:15.004, mVeer:7}
	var right2SR = {moveX:14.004 ,moveY:1.004, mVeer:7}
	var right3SL = {moveX:-10.004 ,moveY:16.004, mVeer:7}
	var right3SR = {moveX:14.004 ,moveY:2.004, mVeer:7}
	var right1FL = {moveX:-7.004 ,moveY:17.004, mVeer:7}
	var right1FR = {moveX:12.004 ,moveY:-3.004, mVeer:7}
	var right2FL = {moveX:-7.004 ,moveY:18.004, mVeer:7}
	var right2FR = {moveX:13.004 ,moveY:-1.004, mVeer:7}
	var right3FL = {moveX:-7.004 ,moveY:19.004, mVeer:7}
	var right3FR = {moveX:13.004 ,moveY:0.004, mVeer:7}
    } else {
	var right1SL = {moveX:-100004 ,moveY:140004, mVeer:7}
	var right1SR = {moveX:130004 ,moveY:100004, mVeer:7}
	var right2SL = {moveX:-100004 ,moveY:150004, mVeer:7}
	var right2SR = {moveX:140004 ,moveY:10004, mVeer:7}
	var right3SL = {moveX:-100004 ,moveY:160004, mVeer:7}
	var right3SR = {moveX:140004 ,moveY:20004, mVeer:7}
	var right1FL = {moveX:-70004 ,moveY:170004, mVeer:7}
	var right1FR = {moveX:120004 ,moveY:-30004, mVeer:7}
	var right2FL = {moveX:-70004 ,moveY:180004, mVeer:7}
	var right2FR = {moveX:130004 ,moveY:-10004, mVeer:7}
	var right3FL = {moveX:-70004 ,moveY:190004, mVeer:7}
	var right3FR = {moveX:130004 ,moveY:100004, mVeer:7}
    }
    
    if (deltaVeer8 < veerReal) {
	var tightestRight1SL = {moveX:-8.005 ,moveY:16.005, mVeer:8}
	var tightestRight1SR = {moveX:13.005 ,moveY:-2.005, mVeer:8}
	var tightestRight2SL = {moveX:-9.005 ,moveY:16.005, mVeer:8}
	var tightestRight2SR = {moveX:14.005 ,moveY:2.005, mVeer:8}
	var tightestRight3SL = {moveX:-11.005 ,moveY:16.005, mVeer:8}
	var tightestRight3SR = {moveX:14.005 ,moveY:4.005, mVeer:8}
	var tightestRight1FL = {moveX:-2.005 ,moveY:19.005, mVeer:8}
	var tightestRight1FR = {moveX:9.005 ,moveY:-6.005, mVeer:8}
	var tightestRight2FL = {moveX:-2.005 ,moveY:20.005, mVeer:8}
	var tightestRight2FR = {moveX:10.005 ,moveY:-4.005, mVeer:8}
	var tightestRight3FL = {moveX:-2.005 ,moveY:22.005, mVeer:8}
	var tightestRight3FR = {moveX:11.005 ,moveY:-2.005, mVeer:8}
    } else {
	var tightestRight1SL = {moveX:-80005 ,moveY:160005, mVeer:8}
	var tightestRight1SR = {moveX:130005 ,moveY:-20005, mVeer:8}
	var tightestRight2SL = {moveX:-90005 ,moveY:160005, mVeer:8}
	var tightestRight2SR = {moveX:140005 ,moveY:20005, mVeer:8}
	var tightestRight3SL = {moveX:-110005 ,moveY:160005, mVeer:8}
	var tightestRight3SR = {moveX:140005 ,moveY:40005, mVeer:8}
	var tightestRight1FL = {moveX:-20005 ,moveY:190005, mVeer:8}
	var tightestRight1FR = {moveX:90005 ,moveY:-60005, mVeer:8}
	var tightestRight2FL = {moveX:-20005 ,moveY:200005, mVeer:8}
	var tightestRight2FR = {moveX:100005 ,moveY:-40005, mVeer:8}
	var tightestRight3FL = {moveX:-20005 ,moveY:220005, mVeer:8}
	var tightestRight3FR = {moveX:110005 ,moveY:-20005, mVeer:8}
    }
    
    var oneMastShallowRightSL = {moveX:-10.006 ,moveY:15.006, mVeer:5}
    var oneMastShallowRightSR = {moveX:14.006 ,moveY:2.006, mVeer:5}
    var oneMastShallowRightFL = {moveX:-6.006 ,moveY:18.006, mVeer:5}
    var oneMastShallowRightFR = {moveX:15.006 ,moveY:-1.006, mVeer:5}
    
    var oneMastTightRightSL = {moveX:-6.007 ,moveY:18.007, mVeer:5}
    var oneMastTightRightSR = {moveX:12.007 ,moveY:-3.007, mVeer:5}
    var oneMastTightRightFL = {moveX:-4.007 ,moveY:19.007, mVeer:5}
    var oneMastTightRightFR = {moveX:12.007 ,moveY:-3.007, mVeer:5}
    
    var twoMastShallowRightSL = {moveX:-11.008 ,moveY:14.008, mVeer:5}
    var twoMastShallowRightSR = {moveX:14.008 ,moveY:4.008, mVeer:5}
    var twoMastShallowRightFL = {moveX:-11.008 ,moveY:15.008, mVeer:5}
    var twoMastShallowRightFR = {moveX:14.008 ,moveY:6.008, mVeer:5}
    
    var twoMastTightRightSL = {moveX:-11.009 ,moveY:14.009, mVeer:5}
    var twoMastTightRightSR = {moveX:14.009 ,moveY:3.009, mVeer:5}
    var twoMastTightRightFL = {moveX:-10.009 ,moveY:16.009, mVeer:5}
    var twoMastTightRightFR = {moveX:14.009 ,moveY:2.009, mVeer:5}
    
    var redStraight1L = {moveX:-13.01 ,moveY:9.01, mVeer:5}
    var redStraight1R = {moveX:13.01 ,moveY:9.01, mVeer:5}
    var redStraight2L = {moveX:-13.01 ,moveY:5.01, mVeer:5}
    var redStraight2R = {moveX:13.01 ,moveY:5.01, mVeer:5}
    
    var redRight1L = {moveX:-3.011 ,moveY:19.011, mVeer:5}
    var redRight1R = {moveX:11.011 ,moveY:-5.011, mVeer:5}
    var redRight2L = {moveX:-4.011 ,moveY:15.011, mVeer:5}
    var redRight2R = {moveX:9.011 ,moveY:-9.011, mVeer:5}
    

    
    if (deltaVeer4 < veerReal) {
	var shallowestLeft1SR = {moveX:12.013, moveY:12.013, mVeer:4}
	var shallowestLeft1SL = {moveX:-14.013, moveY:5.013, mVeer:4}
	var shallowestLeft2SR = {moveX:11.013, moveY:14.013, mVeer:4}
	var shallowestLeft2SL = {moveX:-14.013, moveY:5.013, mVeer:4}
	var shallowestLeft3SR = {moveX:11.013, moveY:15.013, mVeer:4}
	var shallowestLeft3SL = {moveX:-14.013, moveY:6.013, mVeer:4}
	var shallowestLeft1FR = {moveX:11.013, moveY:14.013, mVeer:4}
	var shallowestLeft1FL = {moveX:-14.013, moveY:3.013, mVeer:4}
	var shallowestLeft2FR = {moveX:12.013, moveY:15.013, mVeer:4}
	var shallowestLeft2FL = {moveX:-14.013, moveY:5.013, mVeer:4}
	var shallowestLeft3FR = {moveX:10.013, moveY:17.013, mVeer:4}
	var shallowestLeft3FL = {moveX:-15.013, moveY:6.013, mVeer:4}
    } else {
	var shallowestLeft1SR = {moveX:120013, moveY:120013, mVeer:4}
	var shallowestLeft1SL = {moveX:-140013, moveY:50013, mVeer:4}
	var shallowestLeft2SR = {moveX:110013, moveY:140013, mVeer:4}
	var shallowestLeft2SL = {moveX:-140013, moveY:50013, mVeer:4}
	var shallowestLeft3SR = {moveX:110013, moveY:150013, mVeer:4}
	var shallowestLeft3SL = {moveX:-140013, moveY:60013, mVeer:4}
	var shallowestLeft1FR = {moveX:110013, moveY:140013, mVeer:4}
	var shallowestLeft1FL = {moveX:-140013, moveY:30013, mVeer:4}
	var shallowestLeft2FR = {moveX:120013, moveY:150013, mVeer:4}
	var shallowestLeft2FL = {moveX:-140013, moveY:50013, mVeer:4}
	var shallowestLeft3FR = {moveX:100013, moveY:170013, mVeer:4}
	var shallowestLeft3FL = {moveX:-150013, moveY:60013, mVeer:4}
    }
    
    if (deltaVeer3 < veerReal) {
	var Left1SR = {moveX:10.014 ,moveY:14.014, mVeer:3}
	var Left1SL = {moveX:-13.014 ,moveY:0.014, mVeer:3}
	var Left2SR = {moveX:10.014 ,moveY:15.014, mVeer:3}
	var Left2SL = {moveX:-14.014 ,moveY:1.014, mVeer:3}
	var Left3SR = {moveX:10.014 ,moveY:16.014, mVeer:3}
	var Left3SL = {moveX:-14.014 ,moveY:2.014, mVeer:3}
	var Left1FR = {moveX:7.014 ,moveY:17.014, mVeer:3}
	var Left1FL = {moveX:-12.014 ,moveY:-3.014, mVeer:3}
	var Left2FR = {moveX:7.014 ,moveY:18.014, mVeer:3}
	var Left2FL = {moveX:-13.014 ,moveY:-1.014, mVeer:3}
	var Left3FR = {moveX:7.014 ,moveY:19.014, mVeer:3}
	var Left3FL = {moveX:-13.014 ,moveY:0.014, mVeer:3}
    } else {
	var Left1SR = {moveX:100014 ,moveY:140014, mVeer:3}
	var Left1SL = {moveX:-130014 ,moveY:00014, mVeer:3}
	var Left2SR = {moveX:100014 ,moveY:150014, mVeer:3}
	var Left2SL = {moveX:-140014 ,moveY:10014, mVeer:3}
	var Left3SR = {moveX:100014 ,moveY:160014, mVeer:3}
	var Left3SL = {moveX:-140014 ,moveY:20014, mVeer:3}
	var Left1FR = {moveX:70014 ,moveY:170014, mVeer:3}
	var Left1FL = {moveX:-120014 ,moveY:-30014, mVeer:3}
	var Left2FR = {moveX:70014 ,moveY:180014, mVeer:3}
	var Left2FL = {moveX:-130014 ,moveY:-10014, mVeer:3}
	var Left3FR = {moveX:70014 ,moveY:190014, mVeer:3}
	var Left3FL = {moveX:-130014 ,moveY:00014, mVeer:3}
    }
    
    if (deltaVeer2 < veerReal) {
	var tightestLeft1SR = {moveX:8.015 ,moveY:16.015, mVeer:2}
	var tightestLeft1SL = {moveX:-13.015 ,moveY:-2.015, mVeer:2}
	var tightestLeft2SR = {moveX:9.015 ,moveY:16.015, mVeer:2}
	var tightestLeft2SL = {moveX:-14.015 ,moveY:2.015, mVeer:2}
	var tightestLeft3SR = {moveX:11.015 ,moveY:16.015, mVeer:2}
	var tightestLeft3SL = {moveX:-14.015 ,moveY:4.015, mVeer:2}
	var tightestLeft1FR = {moveX:2.015 ,moveY:19.015, mVeer:2}
	var tightestLeft1FL = {moveX:-9.015 ,moveY:-6.015, mVeer:2}
	var tightestLeft2FR = {moveX:2.015 ,moveY:20.015, mVeer:2}
	var tightestLeft2FL = {moveX:-10.015 ,moveY:-4.015, mVeer:2}
	var tightestLeft3FR = {moveX:2.015 ,moveY:22.015, mVeer:2}
	var tightestLeft3FL = {moveX:-11.015 ,moveY:-2.015, mVeer:2}
    } else {
	var tightestLeft1SR = {moveX:80015 ,moveY:160015, mVeer:2}
	var tightestLeft1SL = {moveX:-130015 ,moveY:-20015, mVeer:2}
	var tightestLeft2SR = {moveX:90015 ,moveY:160015, mVeer:2}
	var tightestLeft2SL = {moveX:-140015 ,moveY:20015, mVeer:2}
	var tightestLeft3SR = {moveX:110015 ,moveY:160015, mVeer:2}
	var tightestLeft3SL = {moveX:-140015 ,moveY:40015, mVeer:2}
	var tightestLeft1FR = {moveX:20015 ,moveY:190015, mVeer:2}
	var tightestLeft1FL = {moveX:-90015 ,moveY:-60015, mVeer:2}
	var tightestLeft2FR = {moveX:20015 ,moveY:200015, mVeer:2}
	var tightestLeft2FL = {moveX:-100015 ,moveY:-40015, mVeer:2}
	var tightestLeft3FR = {moveX:20015 ,moveY:220015, mVeer:2}
	var tightestLeft3FL = {moveX:-110015 ,moveY:-20015, mVeer:2}
    }
    
    var oneMastShallowLeftSR = {moveX:10.016 ,moveY:15.016, mVeer:5}
    var oneMastShallowLeftSL = {moveX:-14.016 ,moveY:2.016, mVeer:5}
    var oneMastShallowLeftFR = {moveX:6.016 ,moveY:18.016, mVeer:5}
    var oneMastShallowLeftFL = {moveX:-15.016 ,moveY:-1.016, mVeer:5}
    
    var oneMastTightLeftSR = {moveX:6.017 ,moveY:18.017, mVeer:5}
    var oneMastTightLeftSL = {moveX:-12.017 ,moveY:-3.017, mVeer:5}
    var oneMastTightLeftFR = {moveX:4.017 ,moveY:19.017, mVeer:5}
    var oneMastTightLeftFL = {moveX:-12.017 ,moveY:-3.017, mVeer:5}
    
    var twoMastShallowLeftSR = {moveX:11.018 ,moveY:14.018, mVeer:5}
    var twoMastShallowLeftSL = {moveX:-14.018 ,moveY:4.018, mVeer:5}
    var twoMastShallowLeftFR = {moveX:11.018 ,moveY:15.018, mVeer:5}
    var twoMastShallowLeftFL = {moveX:-14.018 ,moveY:6.018, mVeer:5}
    
    var twoMastTightLeftSR = {moveX:11.019 ,moveY:14.019, mVeer:5}
    var twoMastTightLeftSL = {moveX:-14.019 ,moveY:3.019, mVeer:5}
    var twoMastTightLeftFR = {moveX:10.019 ,moveY:16.019, mVeer:5}
    var twoMastTightLeftFL = {moveX:-14.019 ,moveY:2.019, mVeer:5}
    
    var redLeft1R = {moveX:3.02 ,moveY:19.02, mVeer:6}
    var redLeft1L = {moveX:-11.02 ,moveY:-5.02, mVeer:6}
    var redLeft2R = {moveX:4.02 ,moveY:15.02, mVeer:6}
    var redLeft2L = {moveX:-9.02 ,moveY:-9.02, mVeer:6}
    
    }
    
    if (val == 1) {
      targetX = (Math.cos(1.309) * distance) + augmentTargetX;
      targetY = (Math.sin(1.309) * distance) + augmentTargetY;
    } else if (val == 2) {
      targetX = (Math.cos(0.785398) * distance) + augmentTargetX;
      targetY = (Math.sin(0.785398) * distance) + augmentTargetY;
    } else if (val == 3) {
      targetX = (Math.cos(0.261799) * distance) + augmentTargetX;
      targetY = (Math.sin(0.261799) * distance) + augmentTargetY;
    } else if (val == 4) {
      targetX = (Math.cos(-0.261799) * distance) + augmentTargetX;
      targetY = (Math.sin(-0.261799) * distance) + augmentTargetY;
    } else if (val == 5) {
      targetX = (Math.cos(-0.785398) * distance) + augmentTargetX;
      targetY = (Math.sin(-0.785398) * distance) + augmentTargetY;
    } else if (val == 6) {
      targetX = (Math.cos(-1.309) * distance) + augmentTargetX;
      targetY = (Math.sin(-1.309) * distance) + augmentTargetY;
    } else if (val == 7) {
      targetX = (Math.cos(1.309) * distance * -(1)) + augmentTargetX;
      targetY = (Math.sin(-1.309) * distance) + augmentTargetY;
    } else if (val == 8) {
      targetX = (Math.cos(-0.785398) * distance * -(1)) + augmentTargetX;
      targetY = (Math.sin(-0.785398) * distance) + augmentTargetY;
    } else if (val == 9) {
      targetX = (Math.cos(-0.261799) * distance * -(1)) + augmentTargetX;
      targetY = (Math.sin(-0.261799) * distance) + augmentTargetY;
    } else if (val == 10) {
      targetX = (Math.cos(0.261799) * distance * -(1)) + augmentTargetX;
      targetY = (Math.sin(0.261799) * distance) + augmentTargetY;
    } else if (val == 11) {
      targetX = (Math.cos(0.785398) * distance * -(1)) + augmentTargetX;
      targetY = (Math.sin(0.785398) * distance) + augmentTargetY;
    } else if (val == 12) {
      targetX = (Math.cos(1.309) * distance * -(1)) + augmentTargetX;
      targetY = (Math.sin(1.309) * distance) + augmentTargetY;
    } else if (val == 0) {
      targetX = 20081988
      targetY = 20081988
    }
    

    var DistStraight1SL = Math.sqrt(Math.pow((straight1SL.moveX-targetX), 2)+Math.pow((straight1SL.moveY-targetY), 2));
    var DistStraight1SR = Math.sqrt(Math.pow((straight1SR.moveX-targetX), 2)+Math.pow((straight1SR.moveY-targetY), 2));
    var DistStraight2SL = Math.sqrt(Math.pow((straight2SL.moveX-targetX), 2)+Math.pow((straight2SL.moveY-targetY), 2));
    var DistStraight2SR = Math.sqrt(Math.pow((straight2SR.moveX-targetX), 2)+Math.pow((straight2SR.moveY-targetY), 2));
    var DistStraight3SL = Math.sqrt(Math.pow((straight3SL.moveX-targetX), 2)+Math.pow((straight3SL.moveY-targetY), 2));
    var DistStraight3SR = Math.sqrt(Math.pow((straight3SR.moveX-targetX), 2)+Math.pow((straight3SR.moveY-targetY), 2));
    
    var DistStraight1FL = Math.sqrt(Math.pow((straight1FL.moveX-targetX), 2)+Math.pow((straight1FL.moveY-targetY), 2));
    var DistStraight1FR = Math.sqrt(Math.pow((straight1FR.moveX-targetX), 2)+Math.pow((straight1FR.moveY-targetY), 2));
    var DistStraight2FL = Math.sqrt(Math.pow((straight2FL.moveX-targetX), 2)+Math.pow((straight2FL.moveY-targetY), 2));
    var DistStraight2FR = Math.sqrt(Math.pow((straight2FR.moveX-targetX), 2)+Math.pow((straight2FR.moveY-targetY), 2));
    var DistStraight3FL = Math.sqrt(Math.pow((straight3FL.moveX-targetX), 2)+Math.pow((straight3FL.moveY-targetY), 2));
    var DistStraight3FR = Math.sqrt(Math.pow((straight3FR.moveX-targetX), 2)+Math.pow((straight3FR.moveY-targetY), 2));
    
    var DistSideslipRight1SL = Math.sqrt(Math.pow((sideslipRight1SL.moveX-targetX), 2)+Math.pow((sideslipRight1SL.moveY-targetY), 2));
    var DistSideslipRight1SR = Math.sqrt(Math.pow((sideslipRight1SR.moveX-targetX), 2)+Math.pow((sideslipRight1SR.moveY-targetY), 2));
    var DistSideslipRight2SL = Math.sqrt(Math.pow((sideslipRight2SL.moveX-targetX), 2)+Math.pow((sideslipRight2SL.moveY-targetY), 2));
    var DistSideslipRight2SR = Math.sqrt(Math.pow((sideslipRight2SR.moveX-targetX), 2)+Math.pow((sideslipRight2SR.moveY-targetY), 2));
    var DistSideslipRight3SL = Math.sqrt(Math.pow((sideslipRight3SL.moveX-targetX), 2)+Math.pow((sideslipRight3SL.moveY-targetY), 2));
    var DistSideslipRight3SR = Math.sqrt(Math.pow((sideslipRight3SR.moveX-targetX), 2)+Math.pow((sideslipRight3SR.moveY-targetY), 2));
    var DistSideslipRight1FL = Math.sqrt(Math.pow((sideslipRight1FL.moveX-targetX), 2)+Math.pow((sideslipRight1FL.moveY-targetY), 2));
    var DistSideslipRight1FR = Math.sqrt(Math.pow((sideslipRight1FR.moveX-targetX), 2)+Math.pow((sideslipRight1FR.moveY-targetY), 2));
    var DistSideslipRight2FL = Math.sqrt(Math.pow((sideslipRight2FL.moveX-targetX), 2)+Math.pow((sideslipRight2FL.moveY-targetY), 2));
    var DistSideslipRight2FR = Math.sqrt(Math.pow((sideslipRight2FR.moveX-targetX), 2)+Math.pow((sideslipRight2FR.moveY-targetY), 2));
    var DistSideslipRight3FL = Math.sqrt(Math.pow((sideslipRight3FL.moveX-targetX), 2)+Math.pow((sideslipRight3FL.moveY-targetY), 2));
    var DistSideslipRight3FR = Math.sqrt(Math.pow((sideslipRight3FR.moveX-targetX), 2)+Math.pow((sideslipRight3FR.moveY-targetY), 2));
    
    var DistShallowestRight1SL = Math.sqrt(Math.pow((shallowestRight1SL.moveX-targetX), 2)+Math.pow((shallowestRight1SL.moveY-targetY), 2));
    var DistShallowestRight1SR = Math.sqrt(Math.pow((shallowestRight1SR.moveX-targetX), 2)+Math.pow((shallowestRight1SR.moveY-targetY), 2));
    var DistShallowestRight2SL = Math.sqrt(Math.pow((shallowestRight2SL.moveX-targetX), 2)+Math.pow((shallowestRight2SL.moveY-targetY), 2));
    var DistShallowestRight2SR = Math.sqrt(Math.pow((shallowestRight2SR.moveX-targetX), 2)+Math.pow((shallowestRight2SR.moveY-targetY), 2));
    var DistShallowestRight3SL = Math.sqrt(Math.pow((shallowestRight3SL.moveX-targetX), 2)+Math.pow((shallowestRight3SL.moveY-targetY), 2));
    var DistShallowestRight3SR = Math.sqrt(Math.pow((shallowestRight3SR.moveX-targetX), 2)+Math.pow((shallowestRight3SR.moveY-targetY), 2));
    
    var DistShallowestRight1FL = Math.sqrt(Math.pow((shallowestRight1FL.moveX-targetX), 2)+Math.pow((shallowestRight1FL.moveY-targetY), 2));
    var DistShallowestRight1FR = Math.sqrt(Math.pow((shallowestRight1FR.moveX-targetX), 2)+Math.pow((shallowestRight1FR.moveY-targetY), 2));
    var DistShallowestRight2FL = Math.sqrt(Math.pow((shallowestRight2FL.moveX-targetX), 2)+Math.pow((shallowestRight2FL.moveY-targetY), 2));
    var DistShallowestRight2FR = Math.sqrt(Math.pow((shallowestRight2FR.moveX-targetX), 2)+Math.pow((shallowestRight2FR.moveY-targetY), 2));
    var DistShallowestRight3FL = Math.sqrt(Math.pow((shallowestRight3FL.moveX-targetX), 2)+Math.pow((shallowestRight3FL.moveY-targetY), 2));
    var DistShallowestRight3FR = Math.sqrt(Math.pow((shallowestRight3FR.moveX-targetX), 2)+Math.pow((shallowestRight3FR.moveY-targetY), 2));
    
    var DistShallowRight1SL = Math.sqrt(Math.pow((shallowRight1SL.moveX-targetX), 2)+Math.pow((shallowRight1SL.moveY-targetY), 2));
    var DistShallowRight1SR = Math.sqrt(Math.pow((shallowRight1SR.moveX-targetX), 2)+Math.pow((shallowRight1SR.moveY-targetY), 2));
    var DistShallowRight2SL = Math.sqrt(Math.pow((shallowRight2SL.moveX-targetX), 2)+Math.pow((shallowRight2SL.moveY-targetY), 2));
    var DistShallowRight2SR = Math.sqrt(Math.pow((shallowRight2SR.moveX-targetX), 2)+Math.pow((shallowRight2SR.moveY-targetY), 2));
    var DistShallowRight3SL = Math.sqrt(Math.pow((shallowRight3SL.moveX-targetX), 2)+Math.pow((shallowRight3SL.moveY-targetY), 2));
    var DistShallowRight3SR = Math.sqrt(Math.pow((shallowRight3SR.moveX-targetX), 2)+Math.pow((shallowRight3SR.moveY-targetY), 2));
    
    var DistShallowRight1FL = Math.sqrt(Math.pow((shallowRight1FL.moveX-targetX), 2)+Math.pow((shallowRight1FL.moveY-targetY), 2));
    var DistShallowRight1FR = Math.sqrt(Math.pow((shallowRight1FR.moveX-targetX), 2)+Math.pow((shallowRight1FR.moveY-targetY), 2));
    var DistShallowRight2FL = Math.sqrt(Math.pow((shallowRight2FL.moveX-targetX), 2)+Math.pow((shallowRight2FL.moveY-targetY), 2));
    var DistShallowRight2FR = Math.sqrt(Math.pow((shallowRight2FR.moveX-targetX), 2)+Math.pow((shallowRight2FR.moveY-targetY), 2));
    var DistShallowRight3FL = Math.sqrt(Math.pow((shallowRight3FL.moveX-targetX), 2)+Math.pow((shallowRight3FL.moveY-targetY), 2));
    var DistShallowRight3FR = Math.sqrt(Math.pow((shallowRight3FR.moveX-targetX), 2)+Math.pow((shallowRight3FR.moveY-targetY), 2));
    
    var DistRight1SL = Math.sqrt(Math.pow((right1SL.moveX-targetX), 2)+Math.pow((right1SL.moveY-targetY), 2));
    var DistRight1SR = Math.sqrt(Math.pow((right1SR.moveX-targetX), 2)+Math.pow((right1SR.moveY-targetY), 2));
    var DistRight2SL = Math.sqrt(Math.pow((right2SL.moveX-targetX), 2)+Math.pow((right2SL.moveY-targetY), 2));
    var DistRight2SR = Math.sqrt(Math.pow((right2SR.moveX-targetX), 2)+Math.pow((right2SR.moveY-targetY), 2));
    var DistRight3SL = Math.sqrt(Math.pow((right3SL.moveX-targetX), 2)+Math.pow((right3SL.moveY-targetY), 2));
    var DistRight3SR = Math.sqrt(Math.pow((right3SR.moveX-targetX), 2)+Math.pow((right3SR.moveY-targetY), 2));
    
    var DistRight1FL = Math.sqrt(Math.pow((right1FL.moveX-targetX), 2)+Math.pow((right1FL.moveY-targetY), 2));
    var DistRight1FR = Math.sqrt(Math.pow((right1FR.moveX-targetX), 2)+Math.pow((right1FR.moveY-targetY), 2));
    var DistRight2FL = Math.sqrt(Math.pow((right2FL.moveX-targetX), 2)+Math.pow((right2FL.moveY-targetY), 2));
    var DistRight2FR = Math.sqrt(Math.pow((right2FR.moveX-targetX), 2)+Math.pow((right2FR.moveY-targetY), 2));
    var DistRight3FL = Math.sqrt(Math.pow((right3FL.moveX-targetX), 2)+Math.pow((right3FL.moveY-targetY), 2));
    var DistRight3FR = Math.sqrt(Math.pow((right3FR.moveX-targetX), 2)+Math.pow((right3FR.moveY-targetY), 2));
    
    var DistTightRight1SL = Math.sqrt(Math.pow((tightRight1SL.moveX-targetX), 2)+Math.pow((tightRight1SL.moveY-targetY), 2));
    var DistTightRight1SR = Math.sqrt(Math.pow((tightRight1SR.moveX-targetX), 2)+Math.pow((tightRight1SR.moveY-targetY), 2));
    var DistTightRight2SL = Math.sqrt(Math.pow((tightRight2SL.moveX-targetX), 2)+Math.pow((tightRight2SL.moveY-targetY), 2));
    var DistTightRight2SR = Math.sqrt(Math.pow((tightRight2SR.moveX-targetX), 2)+Math.pow((tightRight2SR.moveY-targetY), 2));
    var DistTightRight3SL = Math.sqrt(Math.pow((tightRight3SL.moveX-targetX), 2)+Math.pow((tightRight3SL.moveY-targetY), 2));
    var DistTightRight3SR = Math.sqrt(Math.pow((tightRight3SR.moveX-targetX), 2)+Math.pow((tightRight3SR.moveY-targetY), 2));
    
    var DistTightRight1FL = Math.sqrt(Math.pow((tightRight1FL.moveX-targetX), 2)+Math.pow((tightRight1FL.moveY-targetY), 2));
    var DistTightRight1FR = Math.sqrt(Math.pow((tightRight1FR.moveX-targetX), 2)+Math.pow((tightRight1FR.moveY-targetY), 2));
    var DistTightRight2FL = Math.sqrt(Math.pow((tightRight2FL.moveX-targetX), 2)+Math.pow((tightRight2FL.moveY-targetY), 2));
    var DistTightRight2FR = Math.sqrt(Math.pow((tightRight2FR.moveX-targetX), 2)+Math.pow((tightRight2FR.moveY-targetY), 2));
    var DistTightRight3FL = Math.sqrt(Math.pow((tightRight3FL.moveX-targetX), 2)+Math.pow((tightRight3FL.moveY-targetY), 2));
    var DistTightRight3FR = Math.sqrt(Math.pow((tightRight3FR.moveX-targetX), 2)+Math.pow((tightRight3FR.moveY-targetY), 2));
    
    var DistTightestRight1SL = Math.sqrt(Math.pow((tightestRight1SL.moveX-targetX), 2)+Math.pow((tightestRight1SL.moveY-targetY), 2));
    var DistTightestRight1SR = Math.sqrt(Math.pow((tightestRight1SR.moveX-targetX), 2)+Math.pow((tightestRight1SR.moveY-targetY), 2));
    var DistTightestRight2SL = Math.sqrt(Math.pow((tightestRight2SL.moveX-targetX), 2)+Math.pow((tightestRight2SL.moveY-targetY), 2));
    var DistTightestRight2SR = Math.sqrt(Math.pow((tightestRight2SR.moveX-targetX), 2)+Math.pow((tightestRight2SR.moveY-targetY), 2));
    var DistTightestRight3SL = Math.sqrt(Math.pow((tightestRight3SL.moveX-targetX), 2)+Math.pow((tightestRight3SL.moveY-targetY), 2));
    var DistTightestRight3SR = Math.sqrt(Math.pow((tightestRight3SR.moveX-targetX), 2)+Math.pow((tightestRight3SR.moveY-targetY), 2));
    
    var DistTightestRight1FL = Math.sqrt(Math.pow((tightestRight1FL.moveX-targetX), 2)+Math.pow((tightestRight1FL.moveY-targetY), 2));
    var DistTightestRight1FR = Math.sqrt(Math.pow((tightestRight1FR.moveX-targetX), 2)+Math.pow((tightestRight1FR.moveY-targetY), 2));
    var DistTightestRight2FL = Math.sqrt(Math.pow((tightestRight2FL.moveX-targetX), 2)+Math.pow((tightestRight2FL.moveY-targetY), 2));
    var DistTightestRight2FR = Math.sqrt(Math.pow((tightestRight2FR.moveX-targetX), 2)+Math.pow((tightestRight2FR.moveY-targetY), 2));
    var DistTightestRight3FL = Math.sqrt(Math.pow((tightestRight3FL.moveX-targetX), 2)+Math.pow((tightestRight3FL.moveY-targetY), 2));
    var DistTightestRight3FR = Math.sqrt(Math.pow((tightestRight3FR.moveX-targetX), 2)+Math.pow((tightestRight3FR.moveY-targetY), 2));
    
    var DistOneMastShallowRightSL = Math.sqrt(Math.pow((oneMastShallowRightSL.moveX-targetX), 2)+Math.pow((oneMastShallowRightSL.moveY-targetY), 2));
    var DistOneMastShallowRightSR = Math.sqrt(Math.pow((oneMastShallowRightSR.moveX-targetX), 2)+Math.pow((oneMastShallowRightSR.moveY-targetY), 2));
    var DistOneMastShallowRightFL = Math.sqrt(Math.pow((oneMastShallowRightFL.moveX-targetX), 2)+Math.pow((oneMastShallowRightFL.moveY-targetY), 2));
    var DistOneMastShallowRightFR = Math.sqrt(Math.pow((oneMastShallowRightFR.moveX-targetX), 2)+Math.pow((oneMastShallowRightFR.moveY-targetY), 2));
    
    var DistOneMastTightRightSL = Math.sqrt(Math.pow((oneMastTightRightSL.moveX-targetX), 2)+Math.pow((oneMastTightRightSL.moveY-targetY), 2));
    var DistOneMastTightRightSR = Math.sqrt(Math.pow((oneMastTightRightSR.moveX-targetX), 2)+Math.pow((oneMastTightRightSR.moveY-targetY), 2));
    var DistOneMastTightRightFL = Math.sqrt(Math.pow((oneMastTightRightFL.moveX-targetX), 2)+Math.pow((oneMastTightRightFL.moveY-targetY), 2));
    var DistOneMastTightRightFR = Math.sqrt(Math.pow((oneMastTightRightFR.moveX-targetX), 2)+Math.pow((oneMastTightRightFR.moveY-targetY), 2));
    
    var DistTwoMastShallowRightSL = Math.sqrt(Math.pow((twoMastShallowRightSL.moveX-targetX), 2)+Math.pow((twoMastShallowRightSL.moveY-targetY), 2));
    var DistTwoMastShallowRightSR = Math.sqrt(Math.pow((twoMastShallowRightSR.moveX-targetX), 2)+Math.pow((twoMastShallowRightSR.moveY-targetY), 2));
    var DistTwoMastShallowRightFL = Math.sqrt(Math.pow((twoMastShallowRightFL.moveX-targetX), 2)+Math.pow((twoMastShallowRightFL.moveY-targetY), 2));
    var DistTwoMastShallowRightFR = Math.sqrt(Math.pow((twoMastShallowRightFR.moveX-targetX), 2)+Math.pow((twoMastShallowRightFR.moveY-targetY), 2));
    
    var DistTwoMastTightRightSL = Math.sqrt(Math.pow((twoMastTightRightSL.moveX-targetX), 2)+Math.pow((twoMastTightRightSL.moveY-targetY), 2));
    var DistTwoMastTightRightSR = Math.sqrt(Math.pow((twoMastTightRightSR.moveX-targetX), 2)+Math.pow((twoMastTightRightSR.moveY-targetY), 2));
    var DistTwoMastTightRightFL = Math.sqrt(Math.pow((twoMastTightRightFL.moveX-targetX), 2)+Math.pow((twoMastTightRightFL.moveY-targetY), 2));
    var DistTwoMastTightRightFR = Math.sqrt(Math.pow((twoMastTightRightFR.moveX-targetX), 2)+Math.pow((twoMastTightRightFR.moveY-targetY), 2));
    
    var DistRedStraight1L = Math.sqrt(Math.pow((redStraight1L.moveX-targetX), 2)+Math.pow((redStraight1L.moveY-targetY), 2));
    var DistRedStraight1R = Math.sqrt(Math.pow((redStraight1R.moveX-targetX), 2)+Math.pow((redStraight1R.moveY-targetY), 2));
    var DistRedStraight2L = Math.sqrt(Math.pow((redStraight2L.moveX-targetX), 2)+Math.pow((redStraight2L.moveY-targetY), 2));
    var DistRedStraight2R = Math.sqrt(Math.pow((redStraight2R.moveX-targetX), 2)+Math.pow((redStraight2R.moveY-targetY), 2));
    
    var DistRedRight1L = Math.sqrt(Math.pow((redRight1L.moveX-targetX), 2)+Math.pow((redRight1L.moveY-targetY), 2));
    var DistRedRight1R = Math.sqrt(Math.pow((redRight1R.moveX-targetX), 2)+Math.pow((redRight1R.moveY-targetY), 2));
    var DistRedRight2L = Math.sqrt(Math.pow((redRight2L.moveX-targetX), 2)+Math.pow((redRight2L.moveY-targetY), 2));
    var DistRedRight2R = Math.sqrt(Math.pow((redRight2R.moveX-targetX), 2)+Math.pow((redRight2R.moveY-targetY), 2));
    
    var DistSideslipLeft1SR = Math.sqrt(Math.pow((sideslipLeft1SR.moveX-targetX), 2)+Math.pow((sideslipLeft1SR.moveY-targetY), 2));
    var DistSideslipLeft1SL = Math.sqrt(Math.pow((sideslipLeft1SL.moveX-targetX), 2)+Math.pow((sideslipLeft1SL.moveY-targetY), 2));
    var DistSideslipLeft2SR = Math.sqrt(Math.pow((sideslipLeft2SR.moveX-targetX), 2)+Math.pow((sideslipLeft2SR.moveY-targetY), 2));
    var DistSideslipLeft2SL = Math.sqrt(Math.pow((sideslipLeft2SL.moveX-targetX), 2)+Math.pow((sideslipLeft2SL.moveY-targetY), 2));
    var DistSideslipLeft3SR = Math.sqrt(Math.pow((sideslipLeft3SR.moveX-targetX), 2)+Math.pow((sideslipLeft3SR.moveY-targetY), 2));
    var DistSideslipLeft3SL = Math.sqrt(Math.pow((sideslipLeft3SL.moveX-targetX), 2)+Math.pow((sideslipLeft3SL.moveY-targetY), 2));
    
    var DistSideslipLeft1FR = Math.sqrt(Math.pow((sideslipLeft1FR.moveX-targetX), 2)+Math.pow((sideslipLeft1FR.moveY-targetY), 2));
    var DistSideslipLeft1FL = Math.sqrt(Math.pow((sideslipLeft1FL.moveX-targetX), 2)+Math.pow((sideslipLeft1FL.moveY-targetY), 2));
    var DistSideslipLeft2FR = Math.sqrt(Math.pow((sideslipLeft2FR.moveX-targetX), 2)+Math.pow((sideslipLeft2FR.moveY-targetY), 2));
    var DistSideslipLeft2FL = Math.sqrt(Math.pow((sideslipLeft2FL.moveX-targetX), 2)+Math.pow((sideslipLeft2FL.moveY-targetY), 2));
    var DistSideslipLeft3FR = Math.sqrt(Math.pow((sideslipLeft3FR.moveX-targetX), 2)+Math.pow((sideslipLeft3FR.moveY-targetY), 2));
    var DistSideslipLeft3FL = Math.sqrt(Math.pow((sideslipLeft3FL.moveX-targetX), 2)+Math.pow((sideslipLeft3FL.moveY-targetY), 2));
    
    var DistShallowestLeft1SR = Math.sqrt(Math.pow((shallowestLeft1SR.moveX-targetX), 2)+Math.pow((shallowestLeft1SR.moveY-targetY), 2));
    var DistShallowestLeft1SL = Math.sqrt(Math.pow((shallowestLeft1SL.moveX-targetX), 2)+Math.pow((shallowestLeft1SL.moveY-targetY), 2));
    var DistShallowestLeft2SR = Math.sqrt(Math.pow((shallowestLeft2SR.moveX-targetX), 2)+Math.pow((shallowestLeft2SR.moveY-targetY), 2));
    var DistShallowestLeft2SL = Math.sqrt(Math.pow((shallowestLeft2SL.moveX-targetX), 2)+Math.pow((shallowestLeft2SL.moveY-targetY), 2));
    var DistShallowestLeft3SR = Math.sqrt(Math.pow((shallowestLeft3SR.moveX-targetX), 2)+Math.pow((shallowestLeft3SR.moveY-targetY), 2));
    var DistShallowestLeft3SL = Math.sqrt(Math.pow((shallowestLeft3SL.moveX-targetX), 2)+Math.pow((shallowestLeft3SL.moveY-targetY), 2));
    
    var DistShallowestLeft1FR = Math.sqrt(Math.pow((shallowestLeft1FR.moveX-targetX), 2)+Math.pow((shallowestLeft1FR.moveY-targetY), 2));
    var DistShallowestLeft1FL = Math.sqrt(Math.pow((shallowestLeft1FL.moveX-targetX), 2)+Math.pow((shallowestLeft1FL.moveY-targetY), 2));
    var DistShallowestLeft2FR = Math.sqrt(Math.pow((shallowestLeft2FR.moveX-targetX), 2)+Math.pow((shallowestLeft2FR.moveY-targetY), 2));
    var DistShallowestLeft2FL = Math.sqrt(Math.pow((shallowestLeft2FL.moveX-targetX), 2)+Math.pow((shallowestLeft2FL.moveY-targetY), 2));
    var DistShallowestLeft3FR = Math.sqrt(Math.pow((shallowestLeft3FR.moveX-targetX), 2)+Math.pow((shallowestLeft3FR.moveY-targetY), 2));
    var DistShallowestLeft3FL = Math.sqrt(Math.pow((shallowestLeft3FL.moveX-targetX), 2)+Math.pow((shallowestLeft3FL.moveY-targetY), 2));
    
    var DistShallowLeft1SR = Math.sqrt(Math.pow((shallowLeft1SR.moveX-targetX), 2)+Math.pow((shallowLeft1SR.moveY-targetY), 2));
    var DistShallowLeft1SL = Math.sqrt(Math.pow((shallowLeft1SL.moveX-targetX), 2)+Math.pow((shallowLeft1SL.moveY-targetY), 2));
    var DistShallowLeft2SR = Math.sqrt(Math.pow((shallowLeft2SR.moveX-targetX), 2)+Math.pow((shallowLeft2SR.moveY-targetY), 2));
    var DistShallowLeft2SL = Math.sqrt(Math.pow((shallowLeft2SL.moveX-targetX), 2)+Math.pow((shallowLeft2SL.moveY-targetY), 2));
    var DistShallowLeft3SR = Math.sqrt(Math.pow((shallowLeft3SR.moveX-targetX), 2)+Math.pow((shallowLeft3SR.moveY-targetY), 2));
    var DistShallowLeft3SL = Math.sqrt(Math.pow((shallowLeft3SL.moveX-targetX), 2)+Math.pow((shallowLeft3SL.moveY-targetY), 2));
    
    var DistShallowLeft1FR = Math.sqrt(Math.pow((shallowLeft1FR.moveX-targetX), 2)+Math.pow((shallowLeft1FR.moveY-targetY), 2));
    var DistShallowLeft1FL = Math.sqrt(Math.pow((shallowLeft1FL.moveX-targetX), 2)+Math.pow((shallowLeft1FL.moveY-targetY), 2));
    var DistShallowLeft2FR = Math.sqrt(Math.pow((shallowLeft2FR.moveX-targetX), 2)+Math.pow((shallowLeft2FR.moveY-targetY), 2));
    var DistShallowLeft2FL = Math.sqrt(Math.pow((shallowLeft2FL.moveX-targetX), 2)+Math.pow((shallowLeft2FL.moveY-targetY), 2));
    var DistShallowLeft3FR = Math.sqrt(Math.pow((shallowLeft3FR.moveX-targetX), 2)+Math.pow((shallowLeft3FR.moveY-targetY), 2));
    var DistShallowLeft3FL = Math.sqrt(Math.pow((shallowLeft3FL.moveX-targetX), 2)+Math.pow((shallowLeft3FL.moveY-targetY), 2));
    
    var DistLeft1SR = Math.sqrt(Math.pow((Left1SR.moveX-targetX), 2)+Math.pow((Left1SR.moveY-targetY), 2));
    var DistLeft1SL = Math.sqrt(Math.pow((Left1SL.moveX-targetX), 2)+Math.pow((Left1SL.moveY-targetY), 2));
    var DistLeft2SR = Math.sqrt(Math.pow((Left2SR.moveX-targetX), 2)+Math.pow((Left2SR.moveY-targetY), 2));
    var DistLeft2SL = Math.sqrt(Math.pow((Left2SL.moveX-targetX), 2)+Math.pow((Left2SL.moveY-targetY), 2));
    var DistLeft3SR = Math.sqrt(Math.pow((Left3SR.moveX-targetX), 2)+Math.pow((Left3SR.moveY-targetY), 2));
    var DistLeft3SL = Math.sqrt(Math.pow((Left3SL.moveX-targetX), 2)+Math.pow((Left3SL.moveY-targetY), 2));
    
    var DistLeft1FR = Math.sqrt(Math.pow((Left1FR.moveX-targetX), 2)+Math.pow((Left1FR.moveY-targetY), 2));
    var DistLeft1FL = Math.sqrt(Math.pow((Left1FL.moveX-targetX), 2)+Math.pow((Left1FL.moveY-targetY), 2));
    var DistLeft2FR = Math.sqrt(Math.pow((Left2FR.moveX-targetX), 2)+Math.pow((Left2FR.moveY-targetY), 2));
    var DistLeft2FL = Math.sqrt(Math.pow((Left2FL.moveX-targetX), 2)+Math.pow((Left2FL.moveY-targetY), 2));
    var DistLeft3FR = Math.sqrt(Math.pow((Left3FR.moveX-targetX), 2)+Math.pow((Left3FR.moveY-targetY), 2));
    var DistLeft3FL = Math.sqrt(Math.pow((Left3FL.moveX-targetX), 2)+Math.pow((Left3FL.moveY-targetY), 2));
    
    var DistTightLeft1SR = Math.sqrt(Math.pow((tightLeft1SR.moveX-targetX), 2)+Math.pow((tightLeft1SR.moveY-targetY), 2));
    var DistTightLeft1SL = Math.sqrt(Math.pow((tightLeft1SL.moveX-targetX), 2)+Math.pow((tightLeft1SL.moveY-targetY), 2));
    var DistTightLeft2SR = Math.sqrt(Math.pow((tightLeft2SR.moveX-targetX), 2)+Math.pow((tightLeft2SR.moveY-targetY), 2));
    var DistTightLeft2SL = Math.sqrt(Math.pow((tightLeft2SL.moveX-targetX), 2)+Math.pow((tightLeft2SL.moveY-targetY), 2));
    var DistTightLeft3SR = Math.sqrt(Math.pow((tightLeft3SR.moveX-targetX), 2)+Math.pow((tightLeft3SR.moveY-targetY), 2));
    var DistTightLeft3SL = Math.sqrt(Math.pow((tightLeft3SL.moveX-targetX), 2)+Math.pow((tightLeft3SL.moveY-targetY), 2));
    
    var DistTightLeft1FR = Math.sqrt(Math.pow((tightLeft1FR.moveX-targetX), 2)+Math.pow((tightLeft1FR.moveY-targetY), 2));
    var DistTightLeft1FL = Math.sqrt(Math.pow((tightLeft1FL.moveX-targetX), 2)+Math.pow((tightLeft1FL.moveY-targetY), 2));
    var DistTightLeft2FR = Math.sqrt(Math.pow((tightLeft2FR.moveX-targetX), 2)+Math.pow((tightLeft2FR.moveY-targetY), 2));
    var DistTightLeft2FL = Math.sqrt(Math.pow((tightLeft2FL.moveX-targetX), 2)+Math.pow((tightLeft2FL.moveY-targetY), 2));
    var DistTightLeft3FR = Math.sqrt(Math.pow((tightLeft3FR.moveX-targetX), 2)+Math.pow((tightLeft3FR.moveY-targetY), 2));
    var DistTightLeft3FL = Math.sqrt(Math.pow((tightLeft3FL.moveX-targetX), 2)+Math.pow((tightLeft3FL.moveY-targetY), 2));
    
    var DistTightestLeft1SR = Math.sqrt(Math.pow((tightestLeft1SR.moveX-targetX), 2)+Math.pow((tightestLeft1SR.moveY-targetY), 2));
    var DistTightestLeft1SL = Math.sqrt(Math.pow((tightestLeft1SL.moveX-targetX), 2)+Math.pow((tightestLeft1SL.moveY-targetY), 2));
    var DistTightestLeft2SR = Math.sqrt(Math.pow((tightestLeft2SR.moveX-targetX), 2)+Math.pow((tightestLeft2SR.moveY-targetY), 2));
    var DistTightestLeft2SL = Math.sqrt(Math.pow((tightestLeft2SL.moveX-targetX), 2)+Math.pow((tightestLeft2SL.moveY-targetY), 2));
    var DistTightestLeft3SR = Math.sqrt(Math.pow((tightestLeft3SR.moveX-targetX), 2)+Math.pow((tightestLeft3SR.moveY-targetY), 2));
    var DistTightestLeft3SL = Math.sqrt(Math.pow((tightestLeft3SL.moveX-targetX), 2)+Math.pow((tightestLeft3SL.moveY-targetY), 2));
    
    var DistTightestLeft1FR = Math.sqrt(Math.pow((tightestLeft1FR.moveX-targetX), 2)+Math.pow((tightestLeft1FR.moveY-targetY), 2));
    var DistTightestLeft1FL = Math.sqrt(Math.pow((tightestLeft1FL.moveX-targetX), 2)+Math.pow((tightestLeft1FL.moveY-targetY), 2));
    var DistTightestLeft2FR = Math.sqrt(Math.pow((tightestLeft2FR.moveX-targetX), 2)+Math.pow((tightestLeft2FR.moveY-targetY), 2));
    var DistTightestLeft2FL = Math.sqrt(Math.pow((tightestLeft2FL.moveX-targetX), 2)+Math.pow((tightestLeft2FL.moveY-targetY), 2));
    var DistTightestLeft3FR = Math.sqrt(Math.pow((tightestLeft3FR.moveX-targetX), 2)+Math.pow((tightestLeft3FR.moveY-targetY), 2));
    var DistTightestLeft3FL = Math.sqrt(Math.pow((tightestLeft3FL.moveX-targetX), 2)+Math.pow((tightestLeft3FL.moveY-targetY), 2));
    
    var DistOneMastShallowLeftSR = Math.sqrt(Math.pow((oneMastShallowLeftSR.moveX-targetX), 2)+Math.pow((oneMastShallowLeftSR.moveY-targetY), 2));
    var DistOneMastShallowLeftSL = Math.sqrt(Math.pow((oneMastShallowLeftSL.moveX-targetX), 2)+Math.pow((oneMastShallowLeftSL.moveY-targetY), 2));
    var DistOneMastShallowLeftFR = Math.sqrt(Math.pow((oneMastShallowLeftFR.moveX-targetX), 2)+Math.pow((oneMastShallowLeftFR.moveY-targetY), 2));
    var DistOneMastShallowLeftFL = Math.sqrt(Math.pow((oneMastShallowLeftFL.moveX-targetX), 2)+Math.pow((oneMastShallowLeftFL.moveY-targetY), 2));
    
    var DistOneMastTightLeftSR = Math.sqrt(Math.pow((oneMastTightLeftSR.moveX-targetX), 2)+Math.pow((oneMastTightLeftSR.moveY-targetY), 2));
    var DistOneMastTightLeftSL = Math.sqrt(Math.pow((oneMastTightLeftSL.moveX-targetX), 2)+Math.pow((oneMastTightLeftSL.moveY-targetY), 2));
    var DistOneMastTightLeftFR = Math.sqrt(Math.pow((oneMastTightLeftFR.moveX-targetX), 2)+Math.pow((oneMastTightLeftFR.moveY-targetY), 2));
    var DistOneMastTightLeftFL= Math.sqrt(Math.pow((oneMastTightLeftFL.moveX-targetX), 2)+Math.pow((oneMastTightLeftFL.moveY-targetY), 2));
    
    var DistTwoMastShallowLeftSR = Math.sqrt(Math.pow((twoMastShallowLeftSR.moveX-targetX), 2)+Math.pow((twoMastShallowLeftSR.moveY-targetY), 2));
    var DistTwoMastShallowLeftSL = Math.sqrt(Math.pow((twoMastShallowLeftSL.moveX-targetX), 2)+Math.pow((twoMastShallowLeftSL.moveY-targetY), 2));
    var DistTwoMastShallowLeftFR = Math.sqrt(Math.pow((twoMastShallowLeftFR.moveX-targetX), 2)+Math.pow((twoMastShallowLeftFR.moveY-targetY), 2));
    var DistTwoMastShallowLeftFL = Math.sqrt(Math.pow((twoMastShallowLeftFL.moveX-targetX), 2)+Math.pow((twoMastShallowLeftFL.moveY-targetY), 2));
    
    var DistTwoMastTightLeftSR = Math.sqrt(Math.pow((twoMastTightLeftSR.moveX-targetX), 2)+Math.pow((twoMastTightLeftSR.moveY-targetY), 2));
    var DistTwoMastTightLeftSL = Math.sqrt(Math.pow((twoMastTightLeftSL.moveX-targetX), 2)+Math.pow((twoMastTightLeftSL.moveY-targetY), 2));
    var DistTwoMastTightLeftFR = Math.sqrt(Math.pow((twoMastTightLeftFR.moveX-targetX), 2)+Math.pow((twoMastTightLeftFR.moveY-targetY), 2));
    var DistTwoMastTightLeftFL = Math.sqrt(Math.pow((twoMastTightLeftFL.moveX-targetX), 2)+Math.pow((twoMastTightLeftFL.moveY-targetY), 2));
    
    var DistRedLeft1R = Math.sqrt(Math.pow((redLeft1R.moveX-targetX), 2)+Math.pow((redLeft1R.moveY-targetY), 2));
    var DistRedLeft1L = Math.sqrt(Math.pow((redLeft1L.moveX-targetX), 2)+Math.pow((redLeft1L.moveY-targetY), 2));
    var DistRedLeft2R = Math.sqrt(Math.pow((redLeft2R.moveX-targetX), 2)+Math.pow((redLeft2R.moveY-targetY), 2));
    var DistRedLeft2L = Math.sqrt(Math.pow((redLeft2L.moveX-targetX), 2)+Math.pow((redLeft2L.moveY-targetY), 2));
    
    

    if (wind == "green" && mast == 0 && noDirection == "left" && sailN == "full") {

    
    var distanceArray = [DistShallowestRight3FL, DistShallowestRight3FR, 
			 DistShallowRight3FL, DistShallowRight3FR, 
			 DistRight3FL, DistRight3FR, 
			 DistTightRight3FL, DistTightRight3FR, 
			 DistTightestRight3FL, DistTightestRight3FR];
    
    } else if (wind == "green" && mast == 0 && noDirection == "right" && sailN == "full") {

    
    var distanceArray = [DistShallowestLeft3FR, DistShallowestLeft3FL,
			 DistShallowLeft3FR, DistShallowLeft3FL,
			DistLeft3FR, DistLeft3FL,
			DistTightLeft3FR, DistTightLeft3FL,
			DistTightestLeft3FR, DistTightestLeft3FL];
    
    } else if (wind == "green" && mast == 0 && noDirection == "none" && sailN == "full") {

    
    var distanceArray = [DistStraight3FL, DistStraight3FR, 
			 DistSideslipRight3FL, DistSideslipRight3FR, 
			 DistShallowestRight3FL, DistShallowestRight3FR, 
			 DistShallowRight3FL, DistShallowRight3FR, 
			 DistRight3FL, DistRight3FR, 
			 DistTightRight3FL, DistTightRight3FR, 
			 DistTightestRight3FL, DistTightestRight3FR,   
			 DistSideslipLeft3FR, DistSideslipLeft3FL, 
			 DistShallowestLeft3FR, DistShallowestLeft3FL,
			 DistShallowLeft3FR, DistShallowLeft3FL,
			DistLeft3FR, DistLeft3FL,
			DistTightLeft3FR, DistTightLeft3FL,
			DistTightestLeft3FR, DistTightestLeft3FL];
    
    } else if (wind == "green" && mast == 0 && noDirection == "left" && sailN == "combat") {

    
    var distanceArray = [DistShallowestRight2FL, DistShallowestRight2FR,
			 DistShallowRight2FL, DistShallowRight2FR, DistShallowRight3FL, DistShallowRight3FR, 
			 DistRight2FL, DistRight2FR, 
			 DDistTightRight2FL, DistTightRight2FR, 
			 DistTightestRight2FL, DistTightestRight2FR];
    
    } else if (wind == "green" && mast == 0 && noDirection == "right" && sailN == "combat") {

    
    var distanceArray = [DistShallowestLeft2FR, DistShallowestLeft2FL, 
			 DistShallowLeft2FR, DistShallowLeft2FL, 
			DistLeft2FR, DistLeft2FL, 
			DistTightLeft2FR, DistTightLeft2FL, 
			DistTightestLeft2FR, DistTightestLeft2FL];
    
    } else if (wind == "green" && mast == 0 && noDirection == "none" && sailN == "combat") {

    
    var distanceArray = [DistStraight2FL, DistStraight2FR, 
			 DistSideslipRight2FL, DistSideslipRight2FR, 
			 DistShallowestRight2FL, DistShallowestRight2FR, 
			 DistShallowRight2FL, DistShallowRight2FR, 
			 DistRight2FL, DistRight2FR, 
			 DistTightRight2FL, DistTightRight2FR, 
			 DistTightestRight2FL, DistTightestRight2FR,  
			 DistSideslipLeft2FR, DistSideslipLeft2FL, 
			 DistShallowestLeft2FR, DistShallowestLeft2FL, 
			 DistShallowLeft2FR, DistShallowLeft2FL, 
			DistLeft2FR, DistLeft2FL, 
			DistTightLeft2FR, DistTightLeft2FL, 
			DistTightestLeft2FR, DistTightestLeft2FL];
    
    } else if (wind == "green" && mast == 0 && noDirection == "left" && sailN == "backing") {

    
    var distanceArray = [DistShallowestRight1FL, DistShallowestRight1FR, 
			 DistShallowRight1FL, DistShallowRight1FR, 
			 DistRight1FL, DistRight1FR, 
			 DistTightRight1FL, DistTightRight1FR, 
			 DistTightestRight1FL, DistTightestRight1FR];
    
    } else if (wind == "green" && mast == 0 && noDirection == "right" && sailN == "backing") {

    
    var distanceArray = [DistShallowestLeft1FR, DistShallowestLeft1FL, 
			 DistShallowLeft1FR, DistShallowLeft1FL, 
			DistLeft1FR, DistLeft1FL,
			DistTightLeft1FR, DistTightLeft1FL, 
			DistTightestLeft1FR, DistTightestLeft1FL];
    
    } else if (wind == "green" && mast == 0 && noDirection == "none" && sailN == "backing") {

    
    var distanceArray = [DistStraight1FL, DistStraight1FR, 
			 DistSideslipRight1FL, DistSideslipRight1FR, 
			 DistShallowestRight1FL, DistShallowestRight1FR, 
			 DistShallowRight1FL, DistShallowRight1FR, 
			 DistRight1FL, DistRight1FR,  
			 DistTightRight1FL, DistTightRight1FR, 
			 DistTightestRight1FL, DistTightestRight1FR, 
			 DistSideslipLeft1FR, DistSideslipLeft1FL, 
			 DistShallowestLeft1FR, DistShallowestLeft1FL, 
			 DistShallowLeft1FR, DistShallowLeft1FL, 
			DistLeft1FR, DistLeft1FL,
			DistTightLeft1FR, DistTightLeft1FL, 
			DistTightestLeft1FR, DistTightestLeft1FL];
    
    } else if (wind == "orange" && mast == 0 && noDirection == "left" && sailN == "full") {

    
    var distanceArray = [DistShallowestRight3SL, DistShallowestRight3SR, 
			 DistShallowRight3SL, DistShallowRight3SR, 
			 DistRight3SL, DistRight3SR, 
			 DistTightRight3SL, DistTightRight3SR, 
			 DistTightestRight3SL, DistTightestRight3SR];
    
    } else if (wind == "orange" && mast == 0 && noDirection == "right" && sailN == "full") {

    
    var distanceArray = [DistShallowestLeft3SR, DistShallowestLeft3SL,
			 DistShallowLeft3SR, DistShallowLeft3SL,
			DistLeft3SR, DistLeft3SL,
			DistTightLeft3SR, DistTightLeft3SL,
			DistTightestLeft3SR, DistTightestLeft3SL];
    
    } else if (wind == "orange" && mast == 0 && noDirection == "none" && sailN == "full") {

    
    var distanceArray = [DistStraight3SL, DistStraight3SR, 
			 DistSideslipRight3SL, DistSideslipRight3SR, 
			 DistShallowestRight3SL, DistShallowestRight3SR, 
			 DistShallowRight3SL, DistShallowRight3SR, 
			 DistRight3SL, DistRight3SR, 
			 DistTightRight3SL, DistTightRight3SR, 
			 DistTightestRight3SL, DistTightestRight3SR,   
			 DistSideslipLeft3SR, DistSideslipLeft3SL, 
			 DistShallowestLeft3SR, DistShallowestLeft3SL,
			 DistShallowLeft3SR, DistShallowLeft3SL,
			DistLeft3SR, DistLeft3SL,
			DistTightLeft3SR, DistTightLeft3SL,
			DistTightestLeft3SR, DistTightestLeft3SL];
    
    } else if (wind == "orange" && mast == 0 && noDirection == "left" && sailN == "combat") {

    
    var distanceArray = [DistShallowestRight2SL, DistShallowestRight2SR,
			 DistShallowRight2SL, DistShallowRight2SR, DistShallowRight3SL, DistShallowRight3SR, 
			 DistRight2SL, DistRight2SR, 
			 DDistTightRight2SL, DistTightRight2SR, 
			 DistTightestRight2SL, DistTightestRight2SR];
    
    } else if (wind == "orange" && mast == 0 && noDirection == "right" && sailN == "combat") {

    
    var distanceArray = [DistShallowestLeft2SR, DistShallowestLeft2SL, 
			 DistShallowLeft2SR, DistShallowLeft2SL, 
			DistLeft2SR, DistLeft2SL, 
			DistTightLeft2SR, DistTightLeft2SL, 
			DistTightestLeft2SR, DistTightestLeft2SL];
    
    } else if (wind == "orange" && mast == 0 && noDirection == "none" && sailN == "combat") {

    
    var distanceArray = [DistStraight2SL, DistStraight2SR, 
			 DistSideslipRight2SL, DistSideslipRight2SR, 
			 DistShallowestRight2SL, DistShallowestRight2SR, 
			 DistShallowRight2SL, DistShallowRight2SR, 
			 DistRight2SL, DistRight2SR, 
			 DistTightRight2SL, DistTightRight2SR, 
			 DistTightestRight2SL, DistTightestRight2SR,  
			 DistSideslipLeft2SR, DistSideslipLeft2SL, 
			 DistShallowestLeft2SR, DistShallowestLeft2SL, 
			 DistShallowLeft2SR, DistShallowLeft2SL, 
			DistLeft2SR, DistLeft2SL, 
			DistTightLeft2SR, DistTightLeft2SL, 
			DistTightestLeft2SR, DistTightestLeft2SL];
    
    } else if (wind == "orange" && mast == 0 && noDirection == "left" && sailN == "backing") {

    
    var distanceArray = [DistShallowestRight1SL, DistShallowestRight1SR, 
			 DistShallowRight1SL, DistShallowRight1SR, 
			 DistRight1SL, DistRight1SR, 
			 DistTightRight1SL, DistTightRight1SR, 
			 DistTightestRight1SL, DistTightestRight1SR];
    
    } else if (wind == "orange" && mast == 0 && noDirection == "right" && sailN == "backing") {

    
    var distanceArray = [DistShallowestLeft1SR, DistShallowestLeft1SL, 
			 DistShallowLeft1SR, DistShallowLeft1SL, 
			DistLeft1SR, DistLeft1SL,
			DistTightLeft1SR, DistTightLeft1SL, 
			DistTightestLeft1SR, DistTightestLeft1SL];
    
    } else if (wind == "orange" && mast == 0 && noDirection == "none" && sailN == "backing") {

    
    var distanceArray = [DistStraight1SL, DistStraight1SR, 
			 DistSideslipRight1SL, DistSideslipRight1SR, 
			 DistShallowestRight1SL, DistShallowestRight1SR, 
			 DistShallowRight1SL, DistShallowRight1SR, 
			 DistRight1SL, DistRight1SR,  
			 DistTightRight1SL, DistTightRight1SR, 
			 DistTightestRight1SL, DistTightestRight1SR, 
			 DistSideslipLeft1SR, DistSideslipLeft1SL, 
			 DistShallowestLeft1SR, DistShallowestLeft1SL, 
			 DistShallowLeft1SR, DistShallowLeft1SL, 
			DistLeft1SR, DistLeft1SL,
			DistTightLeft1SR, DistTightLeft1SL, 
			DistTightestLeft1SR, DistTightestLeft1SL];
    
    } else if (wind == "red1" && noDirection == "left" && mast == 0) {
	var distanceArray = [DistRedRight1L, DistRedRight1R];
    } else if (wind == "red1" && noDirection == "right" && mast == 0) {
	var distanceArray = [DistRedLeft1R, DistRedLeft1L];
    } else if (wind == "red1" && mast == 0 && noDirection == "none") {
	var distanceArray = [DistRedStraight1L, DistRedStraight1R, 
			 DistRedRight1L, DistRedRight1R, DistRedLeft1R, DistRedLeft1L];
    } else if (wind == "red2" && noDirection == "left" && mast == 0) {
	var distanceArray = [DistRedRight2L, DistRedRight2R];
    } else if (wind == "red2" && noDirection == "right" && mast == 0) {
	var distanceArray = [DistRedLeft2R, DistRedLeft2L];
    } else if (wind == "red2" && mast == 0 && noDirection == "none") {
	var distanceArray = [DistRedStraight2L, DistRedStraight2R, 
			 DistRedRight2L, DistRedRight2R, DistRedLeft2R, DistRedLeft2L];
    } else if (mast == 1 && wind == "green" && noDirection == "left") {
	var distanceArray = [DistOneMastShallowRightFL, DistOneMastShallowRightFR, 
			 DistOneMastTightRightFL, DistOneMastTightRightFR];
    } else if (mast == 1 && wind == "green" && noDirection == "right") {
	var distanceArray = [DistOneMastShallowLeftFR, DistOneMastShallowLeftFL,
			DistOneMastTightLeftFR, DistOneMastTightLeftFL];
    } else if (mast == 1 && wind == "green" && noDirection == "none") {
	var distanceArray = [DistOneMastShallowRightFL, DistOneMastShallowRightFR, 
			 DistOneMastTightRightFL, DistOneMastTightRightFR,
			 DistOneMastShallowLeftFR, DistOneMastShallowLeftFL,
			DistOneMastTightLeftFR, DistOneMastTightLeftFL];
    } else if (mast == 1 && wind == "orange" && noDirection == "left") {
	var distanceArray = [DistOneMastShallowRightSL, DistOneMastShallowRightSR,
			 DistOneMastTightRightSL, DistOneMastTightRightSR];
    } else if (mast == 1 && wind == "orange" && noDirection == "right") {
	var distanceArray = [DistOneMastShallowLeftSR, DistOneMastShallowLeftSL, 
			DistOneMastTightLeftSR, DistOneMastTightLeftSL];
    } else if (mast == 1 && wind == "orange" && noDirection == "none") {
	var distanceArray = [DistOneMastShallowRightSL, DistOneMastShallowRightSR,
			 DistOneMastTightRightSL, DistOneMastTightRightSR,
			 DistOneMastShallowLeftSR, DistOneMastShallowLeftSL, 
			DistOneMastTightLeftSR, DistOneMastTightLeftSL];
    } else if (mast == 2 && wind == "green" && noDirection == "left") {
	var distanceArray = [DistTwoMastShallowRightFL, DistTwoMastShallowRightFR, 
			 DistTwoMastTightRightFL, DistTwoMastTightRightFR];
    } else if (mast == 2 && wind == "green" && noDirection == "right") {
	var distanceArray = [DistTwoMastShallowLeftFR, DistTwoMastShallowLeftFL,
			DistTwoMastTightLeftFR, DistTwoMastTightLeftFL];
    } else if (mast == 2 && wind == "green" && noDirection == "none") {
	var distanceArray = [DistTwoMastShallowRightFL, DistTwoMastShallowRightFR, 
			 DistTwoMastTightRightFL, DistTwoMastTightRightFR, DistTwoMastShallowLeftFR, DistTwoMastShallowLeftFL,
			DistTwoMastTightLeftFR, DistTwoMastTightLeftFL];
    } else if (mast == 2 && wind == "orange" && noDirection == "left") {
	var distanceArray = [DistTwoMastShallowRightSL, DistTwoMastShallowRightSR, 
			 DistTwoMastTightRightSL, DistTwoMastTightRightSR];
    } else if (mast == 2 && wind == "orange" && noDirection == "right") {
	var distanceArray = [DistTwoMastShallowLeftSR, DistTwoMastShallowLeftSL, 
			DistTwoMastTightLeftSR, DistTwoMastTightLeftSL];
    } else if (mast == 2 && wind == "orange" && noDirection == "none") {
	var distanceArray = [DistTwoMastShallowRightSL, DistTwoMastShallowRightSR, 
			 DistTwoMastTightRightSL, DistTwoMastTightRightSR, DistTwoMastShallowLeftSR, DistTwoMastShallowLeftSL, 
			DistTwoMastTightLeftSR, DistTwoMastTightLeftSL];
    }
    
    

    
    
  distanceArray.sort(function(a, b){return a-b})
  
  var lowestDist = distanceArray[0];
  var secondLowestDist = distanceArray[1];
  
  var result;
  var resultLow;
  var resultHigh;
  if (lowestDist == DistStraight1SL || lowestDist == DistStraight1SR || lowestDist == DistStraight2SL
      || lowestDist == DistStraight2SR || lowestDist == DistStraight3SL || lowestDist == DistStraight3SR
      || lowestDist == DistStraight1FL || lowestDist == DistStraight1FR || lowestDist == DistStraight2FL
      || lowestDist == DistStraight2FR || lowestDist == DistStraight3FL|| lowestDist == DistStraight3FR) {
    result = "Use a straight maneuver card";
    resultLow = "Use a straight maneuver card (veer 5)";
    resultHigh = "Use a straight maneuver card (veer 5)";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/right5.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/right5.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistSideslipRight1SL || lowestDist == DistSideslipRight1SR || lowestDist == DistSideslipRight2SL
      || lowestDist == DistSideslipRight2SR || lowestDist == DistSideslipRight3SL || lowestDist == DistSideslipRight3SR
      || lowestDist == DistSideslipRight1FL || lowestDist == DistSideslipRight1FR || lowestDist == DistSideslipRight2FL
      || lowestDist == DistSideslipRight2FR || lowestDist == DistSideslipRight3FL || lowestDist == DistSideslipRight3FR){
    result = "Use the right sideslip maneuver card";
    resultLow = "Use a right sideslip card (veer 5)";
    resultHigh = "Use a right sideslip card (veer 5)";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/rightsideslip5.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/rightsideslip5.png" style="width:206px;height:292px;">';
     } else if (lowestDist == DistShallowestRight1SL || lowestDist == DistShallowestRight1SR || lowestDist == DistShallowestRight2SL
      || lowestDist == DistShallowestRight2SR || lowestDist == DistShallowestRight3SL || lowestDist == DistShallowestRight3SR
      || lowestDist == DistShallowestRight1FL || lowestDist == DistShallowestRight1FR || lowestDist == DistShallowestRight2FL
      || lowestDist == DistShallowestRight2FR || lowestDist == DistShallowestRight3FL || lowestDist == DistShallowestRight3FR){
    result = "Use the shallowst right maneuver card available";
    resultLow = "Use a right maneuver card (veer 6)";
    resultHigh = "Use a right maneuver card (veer 6)";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/right6.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/right6.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistShallowRight1SL || lowestDist == DistShallowRight1SR || lowestDist == DistShallowRight2SL || lowestDist == DistShallowRight2SR 
      || lowestDist == DistShallowRight3SL || lowestDist == DistShallowRight3SR || lowestDist == DistShallowRight1FL
      || lowestDist == DistShallowRight1FR || lowestDist == DistShallowRight2FL || lowestDist == DistShallowRight2FR
      || lowestDist == DistShallowRight3FL || lowestDist == DistShallowRight3FR){
    result = "Use a shallow right maneuver card";
    resultLow = "Use a right maneuver card (veer 7)";
    resultHigh = "Use a right maneuver card (veer 6)";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/right7.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/right6.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistRight1SL || lowestDist == DistRight1SR || lowestDist == DistRight2SL
      || lowestDist == DistRight2SR || lowestDist == DistRight3SL || lowestDist == DistRight3SR
      || lowestDist == DistRight1FL || lowestDist == DistRight1FR || lowestDist == DistRight2FL
      || lowestDist == DistRight2FR || lowestDist == DistRight3FL || lowestDist == DistRight3FR){
    result = "Use a standard right maneuver card ";
    resultLow = "Use a right maneuver card (veer 8)";
    resultHigh = "Use a right maneuver card (veer 7)";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/right8.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/right7.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistTightRight1SL || lowestDist == DistTightRight1SR || lowestDist == DistTightRight2SL
      || lowestDist == DistTightRight2SR || lowestDist == DistTightRight3SL || lowestDist == DistTightRight3SR
      || lowestDist == DistTightRight1FL || lowestDist == DistTightRight1FR || lowestDist == DistTightRight2FL
      || lowestDist == DistTightRight2FR || lowestDist == DistTightRight3FL || lowestDist == DistTightRight3FR){
    result = "Use a tight right maneuver card";
    resultLow = "Use a right maneuver card (veer 9)";
    resultHigh = "Use a right maneuver card (veer 8)";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/right9.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/right10.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistTightestRight1SL || lowestDist == DistTightestRight1SR || lowestDist == DistTightestRight2SL
      || lowestDist == DistTightestRight2SR || lowestDist == DistTightestRight3SL || lowestDist == DistTightestRight3SR
      || lowestDist == DistTightestRight1FL || lowestDist == DistTightestRight1FR || lowestDist == DistTightestRight2FL
      || lowestDist == DistTightestRight2FR || lowestDist == DistTightestRight3FL || lowestDist == DistTightestRight3FR){
    result = "Use the tightest right maneuver card";
    resultLow = "Use a right maneuver card (veer 10)";
    resultHigh = "Use a right maneuver card (veer 8)";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/right10.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/right8.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistOneMastShallowRightSL || lowestDist == DistOneMastShallowRightSR || lowestDist == DistOneMastShallowRightFL
      || lowestDist == DistOneMastShallowRightFR){
    result = "Use a shallow right maneuver card for one mast broken";
    resultLow = "Use a shallow right maneuver card for one mast broken";
    resultHigh = "Use a shallow right maneuver card for one mast broken";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/shallowrightonemast.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/shallowrightonemast.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistOneMastTightRightSR || lowestDist == DistOneMastTightRightFL
	|| lowestDist == DistOneMastTightRightFR){
    result = "Use a tight right maneuver card for one mast broken";
    resultLow = "Use a tight right maneuver card for one mast broken";
    resultHigh = "Use a tight right maneuver card for one mast broken";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/tightrightonemast.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/tightrightonemast.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistTwoMastShallowRightSL || lowestDist == DistTwoMastShallowRightSR || lowestDist == DistTwoMastShallowRightFL
      || lowestDist == DistTwoMastShallowRightFR){
    result = "Use a shallow right maneuver card for two masts broken ";
    resultLow = "Use a shallow right maneuver card for two masts broken ";
    resultHigh = "Use a shallow right maneuver card for two masts broken ";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/shallowrighttwomasts.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/shallowrighttwomasts.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistTwoMastTightRightSL || lowestDist == DistTwoMastTightRightSR || lowestDist == DistTwoMastTightRightFL
      || lowestDist == DistTwoMastTightRightFR ){
    result = "Use a tight right maneuver card for two masts broken";
    resultLow = "Use a tight right maneuver card for two masts broken";
    resultHigh = "Use a tight right maneuver card for two masts broken";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/tightrighttwomasts.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/tightrighttwomasts.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistRedStraight1L || lowestDist == DistRedStraight1R){
    result = "Use a (first) red straight maneuver card";
    resultLow = "Use a (first) red straight maneuver card";
    resultHigh = "Use a (first) red straight maneuver card";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/redstraight.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/redstraight.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistRedStraight2L
      || lowestDist == DistRedStraight2R){
    result = "Use a (second) red straight maneuver card";
    resultLow = "Use a (second) red straight maneuver card";
    resultHigh = "Use a (second) red straight maneuver card";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/redstraight.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/redstraight.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistRedRight1L || lowestDist == DistRedRight1R){
    result = "Use a (first) red right maneuver card";
    resultLow = "Use a (first) red right maneuver card";
    resultHigh = "Use a (first) red right maneuver card";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/redright.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/redright.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistRedRight2L || lowestDist == DistRedRight2R){
    result = "Use a (second) red right maneuver card";
    resultLow = "Use a (second) red right maneuver card";
    resultHigh = "Use a (second) red right maneuver card";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/redright.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/redright.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistSideslipLeft1SR || lowestDist == DistSideslipLeft1SL || lowestDist == DistSideslipLeft3FL
      || lowestDist == DistSideslipLeft2SR || lowestDist == DistSideslipLeft2SL || lowestDist == DistSideslipLeft3SR
      || lowestDist == DistSideslipLeft3SL || lowestDist == DistSideslipLeft1FR || lowestDist == DistSideslipLeft1FL
      || lowestDist == DistSideslipLeft2FR || lowestDist == DistSideslipLeft2FL || lowestDist == DistSideslipLeft3FR){
    result = "Use a left sideslip maneuver card";
    resultLow = "Use a left sideslip maneuver card (veer 5)";
    resultHigh = "Use a left sideslip maneuver card (veer 5)";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/leftsideslip5.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/leftsideslip5.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistShallowestLeft1SR || lowestDist == DistShallowestLeft1SL || lowestDist == DistShallowestLeft2SR
      || lowestDist == DistShallowestLeft2SL || lowestDist == DistShallowestLeft3SR || lowestDist == DistShallowestLeft3SL
      || lowestDist == DistShallowestLeft1FR || lowestDist == DistShallowestLeft1FL || lowestDist == DistShallowestLeft2FR
      || lowestDist == DistShallowestLeft2FL || lowestDist == DistShallowestLeft3FR || lowestDist == DistShallowestLeft3FL){
    result = "Use the shallowest left maneuver card";
    resultLow = "Use a left maneuver card (veer 4)";
    resultHigh = "Use a left maneuver card (veer 4)";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/left4.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/left4.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistShallowLeft1SR || lowestDist == DistShallowLeft1SL || lowestDist == DistShallowLeft2SR
      || lowestDist == DistShallowLeft2SL || lowestDist == DistShallowLeft3SR || lowestDist == DistShallowLeft3SL
      || lowestDist == DistShallowLeft1FR || lowestDist == DistShallowLeft1FL || lowestDist == DistShallowLeft2FR
      || lowestDist == DistShallowLeft2FL || lowestDist == DistShallowLeft3FR || lowestDist == DistShallowLeft3FL){
    result = "Use a shallow left maneuver card";
    resultLow = "Use a left maneuver card (veer 3)";
    resultHigh = "Use a left maneuver card (veer 4)";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/left3.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/left4.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistLeft1SR || lowestDist == DistLeft1SL || lowestDist == DistLeft2SR
      || lowestDist == DistLeft2SL || lowestDist == DistLeft3SR || lowestDist == DistLeft3SL
      || lowestDist == DistLeft1FR || lowestDist == DistLeft1FL || lowestDist == DistLeft2FR
      || lowestDist == DistLeft2FL || lowestDist == DistLeft3FR || lowestDist == DistLeft3FL){
    result = "Use a normal left maneuver card";
    resultLow = "Use a left maneuver card (veer 2)";
    resultHigh = "Use a left maneuver card (veer 3)";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/left2.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/left3.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistTightLeft1SR || lowestDist == DistTightLeft1SL || lowestDist == DistTightLeft2SR
      || lowestDist == DistTightLeft2SL || lowestDist == DistTightLeft3SR || lowestDist == DistTightLeft3SL
      || lowestDist == DistTightLeft1FR || lowestDist == DistTightLeft1FL || lowestDist == DistTightLeft2FR
      || lowestDist == DistTightLeft2FL || lowestDist == DistTightLeft3FR || lowestDist == DistTightLeft3FL){
    result = "Use a tight left maneuver card";
    resultLow = "Use a left maneuver card (veer 1)";
    resultHigh = "Use a left maneuver card (veer 2)";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/left1.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/left2.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistTightestLeft1SR || lowestDist == DistTightestLeft1SL || lowestDist == DistTightestLeft2SR
      || lowestDist == DistTightestLeft2SL || lowestDist == DistTightestLeft3SR || lowestDist == DistTightestLeft3SL
      || lowestDist == DistTightestLeft1FR || lowestDist == DistTightestLeft1FL || lowestDist == DistTightestLeft2FR
      || lowestDist == DistTightestLeft2FL || lowestDist == DistTightestLeft3FR || lowestDist == DistTightestLeft3FL){
    result = "Use the tightest left maneuver card";
    resultLow = "Use a left maneuver card (veer 0)";
    resultHigh = "Use a left maneuver card (veer 2)";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/left0.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/left2.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistOneMastShallowLeftSR || lowestDist == DistOneMastShallowLeftSL || lowestDist == DistOneMastShallowLeftFR
      || lowestDist == DistOneMastShallowLeftFL){
    result = "Use a shallow left maneuver card for one mast broken";
    resultLow = "Use a shallow left maneuver card for one mast broken";
    resultHigh = "Use a shallow left maneuver card for one mast broken";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/shallowleftonemast.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/shallowleftonemast.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistOneMastTightLeftSR || lowestDist == DistOneMastTightLeftSL || lowestDist == DistOneMastTightLeftFR
      || lowestDist == DistOneMastTightLeftFL){
    result = "Use a tight left maneuver card for one mast broken";
    resultLow = "Use a tight left maneuver card for one mast broken";
    resultHigh = "Use a tight left maneuver card for one mast broken";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/tightleftonemast.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/tightleftonemast.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistTwoMastShallowLeftSR || lowestDist == DistTwoMastShallowLeftSL || lowestDist == DistTwoMastShallowLeftFR
      || lowestDist == DistTwoMastShallowLeftFL){
    result = "Use a shallow left maneuver card for two masts broken";
    resultLow = "Use a shallow left maneuver card for two masts broken";
    resultHigh = "Use a shallow left maneuver card for two masts broken";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/shallowlefttwomasts.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/shallowlefttwomasts.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistTwoMastTightLeftSR || lowestDist == DistTwoMastTightLeftSL || lowestDist == DistTwoMastTightLeftFR
      || lowestDist == DistTwoMastTightLeftFL){
    result = "Use a tight left maneuver card for two masts broken";
    resultLow = "Use a tight left maneuver card for two masts broken";
    resultHigh = "Use a tight left maneuver card for two masts broken";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/tightlefttwomasts.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/tightlefttwomasts.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistRedLeft1R || lowestDist == DistRedLeft1L){
    result = "Use a (first) red left maneuver card";
    resultLow = "Use a (first) red left maneuver card";
    resultHigh = "Use a (first) red left maneuver card";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/redleft.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/redleft.png" style="width:206px;height:292px;">';
    } else if (lowestDist == DistRedLeft2R || lowestDist == DistRedLeft2L){
    result = "Use a (second) red left maneuver card";
    resultLow = "Use a (second) red left maneuver card";
    resultHigh = "Use a (second) red left maneuver card";
    //resultImageLow = '<img src="sogstuff/universalmaneuvers/redleft.png" style="width:206px;height:292px;">';
    //resultImageHigh = '<img src="sogstuff/universalmaneuvers/redleft.png" style="width:206px;height:292px;">';
    }
    
    var resultFinal;
    //var resultImageFinal;
    if (deck == "low") {
	resultFinal = resultLow;
	//resultImageFinal = resultImageLow;
    } else if (deck == "high") {
	resultFinal = resultHigh;
	//resultImageFinal = resultImageHigh;
    }
    
    
    
      var resultShown = '<div class="alert alert-success text-center">'+ resultFinal + '</div>'
      document.getElementById("maneuver").innerHTML = resultShown;
      //document.getElementById("debug1").innerHTML = 'veerReal:' + veerReal;
      //document.getElementById("debug2").innerHTML = 'deltaVeer0:' + deltaVeer0;
      //document.getElementById("debug3").innerHTML = 'deltaVeer1:' + deltaVeer1;
      //document.getElementById("debug4").innerHTML = 'deltaVeer3:' + deltaVeer3;
      //document.getElementById("debug5").innerHTML = 'deltaVeer5:' + deltaVeer5;
      //document.getElementById("debug6").innerHTML = 'deltaVeer6:' + deltaVeer6;
      //document.getElementById("debug7").innerHTML = 'deltaVeer7:' + deltaVeer7;
      //document.getElementById("debug8").innerHTML = 'deltaVeer8:' + deltaVeer8;
      //document.getElementById("debug9").innerHTML = 'deltaVeer9:' + deltaVeer9;
      //document.getElementById("debug10").innerHTML = 'deltaVeer10:' + deltaVeer10;
     // document.getElementById("maneuverImage").innerHTML = resultImageFinal;
}

function computeCrewAction() {
    
var crewActions = [];

var incSails = {action:"Increase sails", priority:11};
var decSails = {action:"Decrease sails", priority:12};
var pumpWater = {action:"Pump water", priority:10};
var firePort = {action:"Fire port broadside", priority:5};
var fireStarboard = {action:"Fire starboard broadside", priority:6};
var reloadPort = {action:"Reload port cannons", priority:7};
var reloadStarboard = {action:"Reload starboard cannons", priority:8};
var musket = {action:"Fire muskets", priority:9};
var extFire = {action:"Extinguish fire", priority:1};
var repairDamage = {action:"Repair normal damage", priority:3};
var repairLeak = {action:"Repair leak", priority:2};
var repairRudder = {action:"Repair rudder", priority:5};
var repairMast = {action:"Repair a broken mast", priority:4};

var crewActions = [];


if (distance == 25) {
    crewActions.push(incSails);
}

if (distance < 15 && sailN != "backing") {
    crewActions.push(decSails);
}

if (leak == "water") {
    crewActions.push(pumpWater);
}

if (cannons == "both" && targetX < 0 && distance < 25 || cannons == "port" && targetX < 0 && distance < 25 || otherTargets == 2 || otherTargets == 3) {
    crewActions.push(firePort);
}

if (cannons == "both" && targetX > 0 && distance < 25 || cannons == "starboard" && targetX > 0 && distance < 25 || otherTargets == 1 || otherTargets == 3) {
    crewActions.push(fireStarboard);
}

if (cannons == "starboard") {
    crewActions.push(reloadPort);
}

if (cannons == "port") {
    crewActions.push(reloadStarboard);
}

if (distance < 10) {
    crewActions.push(musket);
}

if (fire == "yes") {
    crewActions.push(extFire);
}

if (prevRepair == "none" && damage == 1 || prevRepair == "mast" && damage == 1) {
    crewActions.push(repairDamage);
}

if (leak == "yes") {
    crewActions.push(repairLeak);
}

if (prevRepair == "none" && mast > 1 || prevRepair == "normal" && mast > 1) {
    crewActions.push(repairMast);
}

if (rudderDamage == 1) {
    crewActions.push(repairRudder);
}

var crewActionsLength =  crewActions.length;

    crewActions.sort(function(a, b){return a.priority - b.priority});


     if (crewN == 4 && crewActionsLength > 3) {
	var resultshownCrew = '<div class="alert alert-success text-center">'+ crewActions[0].action + ", " + crewActions[1].action + ", " + crewActions[2].action + ", " + crewActions[3].action + '</div>'
     } else if (crewN == 3 && crewActionsLength > 2 || crewN == 4 && crewActionsLength == 3) {
	var resultshownCrew = '<div class="alert alert-success text-center">'+ crewActions[0].action + ", " + crewActions[1].action + ", " + crewActions[2].action + '</div>'
     } else if (crewN == 2 && crewActionsLength > 1 || crewN == 3 && crewActionsLength == 2 || crewN == 4 && crewActionsLength == 2) {
	var resultshownCrew = '<div class="alert alert-success text-center">'+ crewActions[0].action + ", " + crewActions[1].action + '</div>'
     } else if (crewN == 1 || crewN == 2 && crewActionsLength == 1 || crewN == 3 && crewActionsLength == 1 || crewN == 4 && crewActionsLength == 1) {
	var resultshownCrew = '<div class="alert alert-success text-center">'+ crewActions[0].action + '</div>'
     }
      document.getElementById("crewAction").innerHTML = resultshownCrew;
     // document.getElementById("maneuverImage").innerHTML = resultImage;
}

function updateStats(){
    

    if (deck == "low"){
      document.getElementById("cyclingman").innerHTML = 'Solo ship has a burden lower than 3';
    } else if (deck == "high"){
      document.getElementById("cyclingman").innerHTML = 'Solo ship has a burden higher than 3';
    }
    

  

    if (veer == 3){
      document.getElementById("cyclingveer").innerHTML = 'Solo ship has a veer of 3';
    } else if (veer == 4){
      document.getElementById("cyclingveer").innerHTML = 'Solo ship has a veer of 4';
    } else if (veer == 5){
      document.getElementById("cyclingveer").innerHTML = 'Solo ship has a veer of 5';
    } else if (veer == 6){
      document.getElementById("cyclingveer").innerHTML = 'Solo ship has a veer of 6';
    } else if (veer == 7){
      document.getElementById("cyclingveer").innerHTML = 'Solo ship has a veer of 7';
    } else if (veer == 8){
      document.getElementById("cyclingveer").innerHTML = 'Solo ship has a veer of 8';
    } 
  
    if (fire == "yes") {
	document.getElementById("cyclingfire").innerHTML = 'Solo ship is on fire!'
    } else if (fire == "no") {
	document.getElementById("cyclingfire").innerHTML = 'Solo ship is not on fire'
    }
  

    if (leak == "yes") {
	document.getElementById("cyclingleak").innerHTML = 'Solo ship has an active leak!'
    } else if (leak == "water") {
	document.getElementById("cyclingleak").innerHTML = 'Solo ship has no leak, but still has water onboard!'
    } else if (leak == "no") {
	document.getElementById("cyclingleak").innerHTML = 'Solo ship has no leak or water onboard'
    }


    if (mast == 1) {
	document.getElementById("cyclingmast").innerHTML = 'Solo ship has 1 damaged mast!'
    } else if (mast == 2) {
	document.getElementById("cyclingmast").innerHTML = 'Solo ship has 2 damaged masts!'
    } else if (mast == 0) {
	document.getElementById("cyclingmast").innerHTML = 'Solo ship\'s masts are fine'
    } else if (mast == 3) {
	document.getElementById("cyclingmast").innerHTML = 'Solo ship has unrepairable mast damage'
    }
    

    if (sail == 1) {
	document.getElementById("cyclingsails").innerHTML = 'Solo ship has 1 or no damaged sails'
    } else if (sail == 2) {
	document.getElementById("cyclingsails").innerHTML = 'Solo ship has 2 or 3 damaged sails!'
    } else if (sail == 4) {
	document.getElementById("cyclingsails").innerHTML = 'Solo ship has 4 or 5 damaged sails!'
    } else if (sail == 6) {
	document.getElementById("cyclingsails").innerHTML = 'Solo ship has 6 damaged sails!'
    }

    if (damage == 1) {
	document.getElementById("cyclingdamage").innerHTML = 'Solo ship has atleast one full damage box!'
    } else if (damage == 0) {
	document.getElementById("cyclingdamage").innerHTML = 'Solo ship has no full damage boxes'
    }

    if (prevRepair == "normal") {
	document.getElementById("cyclingprevrepair").innerHTML = 'Solo ship has already repaired normal damage'
    } else if (prevRepair == "mast") {
	document.getElementById("cyclingprevrepair").innerHTML = 'Solo ship has already repaired mast damage'
    } else if (prevRepair == "normalAndMast") {
	document.getElementById("cyclingprevrepair").innerHTML = 'Solo ship has already repaired normal and mast damage'
    } else if (prevRepair == "none") {
	document.getElementById("cyclingprevrepair").innerHTML = 'Solo ship has not repaired anything'
    }

    if (sailN == "full" || sailN == "nill") {
	document.getElementById("cyclingsailN").innerHTML = 'Full sails'
    } else if (sailN == "combat") {
	document.getElementById("cyclingsailN").innerHTML = 'Combat sails'
    } else if (sailN == "backing") {
	document.getElementById("cyclingsailN").innerHTML = 'Backing sails'
    } else if (sailN == "struck") {
	document.getElementById("cyclingsailN").innerHTML = 'Struck sails'
    }

    if (rudderDamage == 1){
      document.getElementById("rudderdamage").innerHTML = 'Solo ship has a damaged rudder!';
    } else if (rudderDamage == 0){
      document.getElementById("rudderdamage").innerHTML = 'Solo ship rudder is fine';
    }
    
  
  
    if (targetDeck == "low"){
      document.getElementById("cyclingTargetMan").innerHTML = 'Target ship has a burden lower than 3';
    } else if (targetDeck == "high"){
      document.getElementById("cyclingTargetMan").innerHTML = 'Target ship has a burden higher than 3';
    }

  
    if (otherTargets == 1){
      document.getElementById("cyclingOtherTargets").innerHTML = 'Secondary targets within 20cm/8 inch in zone 1-6';
    } else if (otherTargets == 2){
      document.getElementById("cyclingOtherTargets").innerHTML = 'Secondary targets within 20cm/8 inch in zone 7-12';
    } else if (otherTargets == 3){
      document.getElementById("cyclingOtherTargets").innerHTML = 'Secondary targets within 20cm/8 inch in zone 1-12';
    }  else if (otherTargets == 0){
      document.getElementById("cyclingOtherTargets").innerHTML = 'no secondary targets within 20cm/8 inch';
    }




  
  if (prevVeer == 1) {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 1 veer rating'
  } else if (prevVeer == 2) {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 2 veer rating'
  } else if (prevVeer == 3) {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 3 veer rating'
  } else if (prevVeer == 4) {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 4 veer rating'
  } else if (prevVeer == 5) {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 5 veer rating'
  } else if (prevVeer == 6) {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 6 veer rating'
  } else if (prevVeer == 7) {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 7 veer rating'
  } else if (prevVeer == 8) {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 8 veer rating'
  } else if (prevVeer == 9) {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 9 veer rating'
  } else if (prevVeer == 10) {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 10 veer rating'
  } else if (prevVeer == 0) {
    document.getElementById("dropdownMenuPrevVeer").innerHTML = 'Previous maneuver had a 0 veer rating'
  }
  
  
  
  
    if (borderOption == 1) {
    document.getElementById("dropdownMenu3").innerHTML = 'Border distance > 15cm/6inch'
    }
    if (borderOption == 2) {
      document.getElementById("dropdownMenu3").innerHTML = 'Border distance < 15cm/6inch in zone 1'
      return noDirection = "right";
    }
    if (borderOption == 3) {
      document.getElementById("dropdownMenu3").innerHTML = 'Border distance < 15cm/6inch in zone 12'
      return noDirection = "left";
    }
    if (borderOption == 4) {
      document.getElementById("dropdownMenu3").innerHTML = 'Border distance < 5cm/2inch in zone 2'
      return noDirection = "right";
    }
    if (borderOption == 5) {
      document.getElementById("dropdownMenu3").innerHTML = 'Border distance < 5cm/2inch in zone 11'
      return noDirection = "left";
    }
  
    if (windName == "nil" || windName == "beating"){
      document.getElementById("cyclingwind").innerHTML = 'Solo ship is beating';
    } else if (windName == "reaching"){
      document.getElementById("cyclingwind").innerHTML = 'Solo ship is reaching';
    } else if (windName == "running"){
      document.getElementById("cyclingwind").innerHTML = 'Solo ship is running';
    } else if (windName == "aback1"){
      document.getElementById("cyclingwind").innerHTML = 'Solo ship is taken aback (1st)';
    } else if (windName == "aback2"){
      document.getElementById("cyclingwind").innerHTML = 'Solo ship is taken aback (2nd)';
    }

  

    if (cannons == "port"){
      document.getElementById("cyclingcannons").innerHTML = 'Port cannons loaded';
    } else if (cannons == "starboard"){
      document.getElementById("cyclingcannons").innerHTML = 'Starboard cannons loaded';
    } else if (cannons == "both"){
      document.getElementById("cyclingcannons").innerHTML = 'Port and starboard cannons loaded';
    }
  
    if (crewN == 3){
      document.getElementById("cyclingcrew").innerHTML = 'Max 3 crew actions';
    } else if (crewN == 2){
      document.getElementById("cyclingcrew").innerHTML = 'Max 2 crew actions';
    } else if (crewN == 1){
      document.getElementById("cyclingcrew").innerHTML = 'Max 1 crew action';
    } else if (crewN == 4){
      document.getElementById("cyclingcrew").innerHTML = 'Max 4 crew actions';
    }
    
}

function setShip1() {

    if (prevSelectedShip == "Ship1") {
	deckA = deck
	veerA = veer
	fireA = fire
	leakA = leak
	mastA = mast
	sailA = sail
	damageA = damage
	prevRepairA = prevRepair
	rudderDamageA = rudderDamage
	targetDeckA = targetDeck
	otherTargetsA = otherTargets
	prevVeerA = prevVeer
	distanceA = distance
	windA = wind
	noLeftA = noLeft
	noDirectionA = noDirection
	windNameA = windName
	cannonsA = cannons
	crewNA = crewN
	sailNA = sailN
	borderOptionA = borderOption
    } else if (prevSelectedShip == "Ship2") {
	deckB = deck
	veerB = veer
	fireB = fire
	leakB = leak
	mastB = mast
	sailB = sail
	damageB = damage
	prevRepairB = prevRepair
	rudderDamageB = rudderDamage
	targetDeckB = targetDeck
	otherTargetsB = otherTargets
	prevVeerB = prevVeer
	distanceB = distance
	windB = wind
	noLeftB = noLeft
	noDirectionB = noDirection
	windNameB = windName
	cannonsB = cannons
	crewNB = crewN
	sailNB = sailN
	borderOptionB = borderOption
    } else if (prevSelectedShip == "Ship3") {
	deckC = deck
	veerC = veer
	fireC = fire
	leakC = leak
	mastC = mast
	sailC = sail
	damageC = damage
	prevRepairC = prevRepair
	rudderDamageC = rudderDamage
	targetDeckC = targetDeck
	otherTargetsC = otherTargets
	prevVeerC = prevVeer
	distanceC = distance
	windC = wind
	noLeftC = noLeft
	noDirectionC = noDirection
	windNameC = windName
	cannonsC = cannons
	crewNC = crewN
	sailNC = sailN
	borderOptionC = borderOption
    } else if (prevSelectedShip == "Ship4") {
	deckD = deck
	veerD = veer
	fireD = fire
	leakD = leak
	mastD = mast
	sailD = sail
	damageD = damage
	prevRepairD = prevRepair
	rudderDamageD = rudderDamage
	targetDeckD = targetDeck
	otherTargetsD = otherTargets
	prevVeerD = prevVeer
	distanceD = distance
	windD = wind
	noLeftD = noLeft
	noDirectionD = noDirection
	windNameD = windName
	cannonsD = cannons
	crewND = crewN
	sailND = sailN
	borderOptionD = borderOption
    }
    
    prevSelectedShip = "Ship1"
    deck = deckA
    veer = veerA
    fire = fireA
    leak = leakA
    mast = mastA
    sail = sailA
    damage = damageA
    prevRepair = prevRepairA
    rudderDamage = rudderDamageA
    targetDeck = targetDeckA
    otherTargets = otherTargetsA
    prevVeer = prevVeerA
    distance = distanceA
    wind = windA
    noLeft = noLeftA
    noDirection = noDirectionA
    windName = windNameA
    cannons = cannonsA
    crewN = crewNA
    sailN = sailNA
    borderOption = borderOptionA
    
    updateStats()
    
}

function setShip2() {

    if (prevSelectedShip == "Ship1") {
	deckA = deck
	veerA = veer
	fireA = fire
	leakA = leak
	mastA = mast
	sailA = sail
	damageA = damage
	prevRepairA = prevRepair
	rudderDamageA = rudderDamage
	targetDeckA = targetDeck
	otherTargetsA = otherTargets
	prevVeerA = prevVeer
	distanceA = distance
	windA = wind
	noLeftA = noLeft
	noDirectionA = noDirection
	windNameA = windName
	cannonsA = cannons
	crewNA = crewN
	sailNA = sailN
	borderOptionA = borderOption
	borderOptionA = borderOption
    } else if (prevSelectedShip == "Ship2") {
	deckB = deck
	veerB = veer
	fireB = fire
	leakB = leak
	mastB = mast
	sailB = sail
	damageB = damage
	prevRepairB = prevRepair
	rudderDamageB = rudderDamage
	targetDeckB = targetDeck
	otherTargetsB = otherTargets
	prevVeerB = prevVeer
	distanceB = distance
	windB = wind
	noLeftB = noLeft
	noDirectionB = noDirection
	windNameB = windName
	cannonsB = cannons
	crewNB = crewN
	sailNB = sailN
	borderOptionB = borderOption
    } else if (prevSelectedShip == "Ship3") {
	deckC = deck
	veerC = veer
	fireC = fire
	leakC = leak
	mastC = mast
	sailC = sail
	damageC = damage
	prevRepairC = prevRepair
	rudderDamageC = rudderDamage
	targetDeckC = targetDeck
	otherTargetsC = otherTargets
	prevVeerC = prevVeer
	distanceC = distance
	windC = wind
	noLeftC = noLeft
	noDirectionC = noDirection
	windNameC = windName
	cannonsC = cannons
	crewNC = crewN
	sailNC = sailN
	borderOptionC = borderOption
    } else if (prevSelectedShip == "Ship4") {
	deckD = deck
	veerD = veer
	fireD = fire
	leakD = leak
	mastD = mast
	sailD = sail
	damageD = damage
	prevRepairD = prevRepair
	rudderDamageD = rudderDamage
	targetDeckD = targetDeck
	otherTargetsD = otherTargets
	prevVeerD = prevVeer
	distanceD = distance
	windD = wind
	noLeftD = noLeft
	noDirectionD = noDirection
	windNameD = windName
	cannonsD = cannons
	crewND = crewN
	sailND = sailN
	borderOptionD = borderOption
    }
    
    prevSelectedShip = "Ship2"
    deck = deckB
    veer = veerB
    fire = fireB
    leak = leakB
    mast = mastB
    sail = sailB
    damage = damageB
    prevRepair = prevRepairB
    rudderDamage = rudderDamageB
    targetDeck = targetDeckB
    otherTargets = otherTargetsB
    prevVeer = prevVeerB
    distance = distanceB
    wind = windB
    noLeft = noLeftB
    noDirection = noDirectionB
    windName = windNameB
    cannons = cannonsB
    crewN = crewNB
    sailN = sailNB
    borderOption = borderOptionB
    
    updateStats()
    
}

function setShip3() {

    if (prevSelectedShip == "Ship1") {
	deckA = deck
	veerA = veer
	fireA = fire
	leakA = leak
	mastA = mast
	sailA = sail
	damageA = damage
	prevRepairA = prevRepair
	rudderDamageA = rudderDamage
	targetDeckA = targetDeck
	otherTargetsA = otherTargets
	prevVeerA = prevVeer
	distanceA = distance
	windA = wind
	noLeftA = noLeft
	noDirectionA = noDirection
	windNameA = windName
	cannonsA = cannons
	crewNA = crewN
	sailNA = sailN
	borderOptionA = borderOption
    } else if (prevSelectedShip == "Ship2") {
	deckB = deck
	veerB = veer
	fireB = fire
	leakB = leak
	mastB = mast
	sailB = sail
	damageB = damage
	prevRepairB = prevRepair
	rudderDamageB = rudderDamage
	targetDeckB = targetDeck
	otherTargetsB = otherTargets
	prevVeerB = prevVeer
	distanceB = distance
	windB = wind
	noLeftB = noLeft
	noDirectionB = noDirection
	windNameB = windName
	cannonsB = cannons
	crewNB = crewN
	sailNB = sailN
	borderOptionB = borderOption
    } else if (prevSelectedShip == "Ship3") {
	deckC = deck
	veerC = veer
	fireC = fire
	leakC = leak
	mastC = mast
	sailC = sail
	damageC = damage
	prevRepairC = prevRepair
	rudderDamageC = rudderDamage
	targetDeckC = targetDeck
	otherTargetsC = otherTargets
	prevVeerC = prevVeer
	distanceC = distance
	windC = wind
	noLeftC = noLeft
	noDirectionC = noDirection
	windNameC = windName
	cannonsC = cannons
	crewNC = crewN
	sailNC = sailN
	borderOptionC = borderOption
    } else if (prevSelectedShip == "Ship4") {
	deckD = deck
	veerD = veer
	fireD = fire
	leakD = leak
	mastD = mast
	sailD = sail
	damageD = damage
	prevRepairD = prevRepair
	rudderDamageD = rudderDamage
	targetDeckD = targetDeck
	otherTargetsD = otherTargets
	prevVeerD = prevVeer
	distanceD = distance
	windD = wind
	noLeftD = noLeft
	noDirectionD = noDirection
	windNameD = windName
	cannonsD = cannons
	crewND = crewN
	sailND = sailN
	borderOptionD = borderOption
    }
    
    prevSelectedShip = "Ship3"
    deck = deckC
    veer = veerC
    fire = fireC
    leak = leakC
    mast = mastC
    sail = sailC
    damage = damageC
    prevRepair = prevRepairC
    rudderDamage = rudderDamageC
    targetDeck = targetDeckC
    otherTargets = otherTargetsC
    prevVeer = prevVeerC
    distance = distanceC
    wind = windC
    noLeft = noLeftC
    noDirection = noDirectionC
    windName = windNameC
    cannons = cannonsC
    crewN = crewNC
    sailN = sailNC
    borderOption = borderOptionC
    
    updateStats()
    
}


function setShip4() {

    if (prevSelectedShip == "Ship1") {
	deckA = deck
	veerA = veer
	fireA = fire
	leakA = leak
	mastA = mast
	sailA = sail
	damageA = damage
	prevRepairA = prevRepair
	rudderDamageA = rudderDamage
	targetDeckA = targetDeck
	otherTargetsA = otherTargets
	prevVeerA = prevVeer
	distanceA = distance
	windA = wind
	noLeftA = noLeft
	noDirectionA = noDirection
	windNameA = windName
	cannonsA = cannons
	crewNA = crewN
	sailNA = sailN
	borderOptionA = borderOption
    } else if (prevSelectedShip == "Ship2") {
	deckB = deck
	veerB = veer
	fireB = fire
	leakB = leak
	mastB = mast
	sailB = sail
	damageB = damage
	prevRepairB = prevRepair
	rudderDamageB = rudderDamage
	targetDeckB = targetDeck
	otherTargetsB = otherTargets
	prevVeerB = prevVeer
	distanceB = distance
	windB = wind
	noLeftB = noLeft
	noDirectionB = noDirection
	windNameB = windName
	cannonsB = cannons
	crewNB = crewN
	sailNB = sailN
	borderOptionB = borderOption
    } else if (prevSelectedShip == "Ship3") {
	deckC = deck
	veerC = veer
	fireC = fire
	leakC = leak
	mastC = mast
	sailC = sail
	damageC = damage
	prevRepairC = prevRepair
	rudderDamageC = rudderDamage
	targetDeckC = targetDeck
	otherTargetsC = otherTargets
	prevVeerC = prevVeer
	distanceC = distance
	windC = wind
	noLeftC = noLeft
	noDirectionC = noDirection
	windNameC = windName
	cannonsC = cannons
	crewNC = crewN
	sailNC = sailN
	borderOptionC = borderOption
    } else if (prevSelectedShip == "Ship4") {
	deckD = deck
	veerD = veer
	fireD = fire
	leakD = leak
	mastD = mast
	sailD = sail
	damageD = damage
	prevRepairD = prevRepair
	rudderDamageD = rudderDamage
	targetDeckD = targetDeck
	otherTargetsD = otherTargets
	prevVeerD = prevVeer
	distanceD = distance
	windD = wind
	noLeftD = noLeft
	noDirectionD = noDirection
	windNameD = windName
	cannonsD = cannons
	crewND = crewN
	sailND = sailN
	borderOptionD = borderOption
    }
    
    prevSelectedShip = "Ship4"
    deck = deckD
    veer = veerD
    fire = fireD
    leak = leakD
    mast = mastD
    sail = sailD
    damage = damageD
    prevRepair = prevRepairD
    rudderDamage = rudderDamageD
    targetDeck = targetDeckD
    otherTargets = otherTargetsD
    prevVeer = prevVeerD
    distance = distanceD
    wind = windD
    noLeft = noLeftD
    noDirection = noDirectionD
    windName = windNameD
    cannons = cannonsD
    crewN = crewND
    sailN = sailND
    borderOption = borderOptionD
    
    updateStats()
    
}






