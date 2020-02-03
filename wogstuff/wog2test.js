  
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
      
      
    
    
      
    
      
      
      
    
    

var val = 0

var engineDamage = "no"
var engineFire = "no"
var rudderDamage = "none"
var zone = "zone0"
var heading = "undefined"
var distance = 20
var augmentTargetX = 0
var augmentTargetY = 0
var deck = "high"
var targetDeck = "high"
var Immelman = 0
var splitS = 0
var lastSpeed = "begin"
var prevSelectedAircraft = "AC1"
var alt = "empty"
var resultImage = 0
var edgeDistance = "0"


var AC1engineDamage = "no"
var AC1engineFire = "no"
var AC1rudderDamage = "none"
var AC1heading = "undefined"
var AC1distance = 20
var AC1deck = "high"
var AC1targetDeck = "high"
var AC1Immelman = 0
var AC1splitS = 0
var AC1lastSpeed = "begin"
var AC1alt = "empty"

var AC2engineDamage = "no"
var AC2engineFire = "no"
var AC2rudderDamage = "none"
var AC2heading = "undefined"
var AC2distance = 20
var AC2deck = "high"
var AC2targetDeck = "high"
var AC2Immelman = 0
var AC2splitS = 0
var AC2lastSpeed = "begin"
var AC2alt = "empty"

var AC3engineDamage = "no"
var AC3engineFire = "no"
var AC3rudderDamage = "none"
var AC3heading = "undefined"
var AC3distance = 20
var AC3deck = "high"
var AC3targetDeck = "high"
var AC3Immelman = 0
var AC3splitS = 0
var AC3lastSpeed = "begin"
var AC3alt = "empty"

var AC4engineDamage = "no"
var AC4engineFire = "no"
var AC4rudderDamage = "none"
var AC4heading = "undefined"
var AC4distance = 20
var AC4deck = "high"
var AC4targetDeck = "high"
var AC4Immelman = 0
var AC4splitS = 0
var AC4lastSpeed = "begin"
var AC4alt = "empty"

if (deck == "high") {
    
    //var Fstraight = {moveX:0, moveY:15};
    //var Sstraight = {moveX:0, moveY:11};
    
    //var longRFsideslip = {moveX:5, moveY:15};
    //var longRSsideslip = {moveX:3, moveY:11};
    //var longLFsideslip = {moveX:-5, moveY:15};
    //var longLSsideslip = {moveX:-3, moveY:11};
    
    //var longRFturn = {moveX:4, moveY:14};
    //var longRSturn = {moveX:3, moveY:10};
    //var longLFturn = {moveX:-4, moveY:14};
    //var longLSturn = {moveX:-3, moveY:10};
    
    //var shortRFturn = {moveX:5, moveY:12};
    //var shortRSturn = {moveX:4, moveY:9};
    //var shortLFturn = {moveX:-5, moveY:12};
    //var shortLSturn = {moveX:-4, moveY:9};
    
    //var wideRsideslip = {moveX:8, moveY:12};
    //var wideLsideslip = {moveX:-8, moveY:12};
    
    //var climb = {moveX:0, moveY:8};
    //var descend = {moveX:0, moveY:15};
    //var stall = {moveX:0, moveY:8};
    //var immelman = {moveX:0, moveY:8};
    
    var Fstraight = {moveX:0, moveY:27};
    var Sstraight = {moveX:0, moveY:24};
    
    var longRFsideslip = {moveX:5, moveY:27};
    var longRSsideslip = {moveX:3, moveY:24};
    var longLFsideslip = {moveX:-5, moveY:27};
    var longLSsideslip = {moveX:-3, moveY:24};
    
    var longRFturn = {moveX:12, moveY:24};
    var longRSturn = {moveX:10, moveY:21};
    var longLFturn = {moveX:-12, moveY:24};
    var longLSturn = {moveX:-10, moveY:21};
    
    var shortRFturn = {moveX:14, moveY:20};
    var shortRSturn = {moveX:13, moveY:17};
    var shortLFturn = {moveX:-14, moveY:20};
    var shortLSturn = {moveX:-13, moveY:17};
    
    var wideRsideslip = {moveX:7, moveY:24};
    var wideLsideslip = {moveX:-7, moveY:24};
    
    var climb = {moveX:0, moveY:8};
    var descend = {moveX:0, moveY:15};
    var stall = {moveX:0, moveY:8};
    var immelman = {moveX:0, moveY:8};
    
} else if (deck == "bomber") {
    
    //var Fstraight = {moveX:0, moveY:10};
    //var Sstraight = {moveX:0, moveY:9};
    
    //var longRFsideslip = {moveX:2, moveY:10};
    //var longLFsideslip = {moveX:-2, moveY:10};
     
    
    //var climb = {moveX:0, moveY:9};
    //var descend = {moveX:0, moveY:11};
    //var stall = {moveX:0, moveY:8};
    //var immelman = {moveX:0, moveY:3};
    
    //var shortRFturn = {moveX:4, moveY:8};
    //var shortRSturn = {moveX:3, moveY:8};
    //var shortLFturn = {moveX:-4, moveY:8};
    //var shortLSturn = {moveX:-3, moveY:8};
    
    var Fstraight = {moveX:0, moveY:23};
    var Sstraight = {moveX:0, moveY:21};
    
    var longRFsideslip = {moveX:2, moveY:23};
    var longLFsideslip = {moveX:-2, moveY:23};
     
    
    var climb = {moveX:0, moveY:9};
    var descend = {moveX:0, moveY:11};
    var stall = {moveX:0, moveY:8};
    var immelman = {moveX:0, moveY:3};
    
    var shortRFturn = {moveX:12, moveY:17};
    var shortRSturn = {moveX:11, moveY:16};
    var shortLFturn = {moveX:-12, moveY:7};
    var shortLSturn = {moveX:-11, moveY:16};
    
      var longRFturn = {moveX:400, moveY:1400};
      var longRSturn = {moveX:300, moveY:1000};
      var longLFturn = {moveX:-400, moveY:1400};
      var longLSturn = {moveX:-300, moveY:1000};
      var longLSsideslip = {moveX:500, moveY:500};
      var longRSsideslip = {moveX:500, moveY:500};
      var wideRsideslip = {moveX:800, moveY:1200};
      var wideLsideslip = {moveX:-800, moveY:1200};
    
} else if (deck == "low") {
    
    //var Fstraight = {moveX:0, moveY:13};
    //var Sstraight = {moveX:0, moveY:11};
    
    //var longRFsideslip = {moveX:4, moveY:13};
    //var longRSsideslip = {moveX:2, moveY:11};
    //var longLFsideslip = {moveX:-4, moveY:13};
    //var longLSsideslip = {moveX:-2, moveY:11};
    
    //var longRFturn = {moveX:4, moveY:12};
    //var longRSturn = {moveX:3, moveY:11};
    //var longLFturn = {moveX:-4, moveY:12};
    //var longLSturn = {moveX:-3, moveY:11};
    
    //var climb = {moveX:0, moveY:9};
    //var descend = {moveX:0, moveY:13};
    //var stall = {moveX:0, moveY:8};
    //var immelman = {moveX:0, moveY:7};
    
    var Fstraight = {moveX:0, moveY:26};
    var Sstraight = {moveX:0, moveY:24};
    
    var longRFsideslip = {moveX:3, moveY:26};
    var longRSsideslip = {moveX:2, moveY:23};
    var longLFsideslip = {moveX:-3, moveY:26};
    var longLSsideslip = {moveX:-2, moveY:23};
    
    var longRFturn = {moveX:12, moveY:22};
    var longRSturn = {moveX:11, moveY:20};
    var longLFturn = {moveX:-12, moveY:22};
    var longLSturn = {moveX:-11, moveY:20};
    
    var climb = {moveX:0, moveY:9};
    var descend = {moveX:0, moveY:13};
    var stall = {moveX:0, moveY:8};
    var immelman = {moveX:0, moveY:7};
    
      var shortRFturn = {moveX:400, moveY:800};
      var shortRSturn = {moveX:300, moveY:800};
      var shortLFturn = {moveX:-400, moveY:800};
      var shortLSturn = {moveX:-300, moveY:800};
      var wideRsideslip = {moveX:800, moveY:1200};
      var wideLsideslip = {moveX:-800, moveY:1200};
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
    if (targetDeck == "high") {
      augmentTargetX = 5.86;
      augmentTargetY = 13.8;
    } else if (targetDeck == "low") {
      augmentTargetX = 5.08;
      augmentTargetY = 12;
    } else if (targetDeck == "bomber") {
      augmentTargetX = 3.91;
      augmentTargetY = 9.21;
    }
  }
  
  function relHead2() {
    heading = 2
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 45 to 90 degrees right'
     if (targetDeck == "high") {
      augmentTargetX = 13.9;
      augmentTargetY = 5.62;
    } else if (targetDeck == "low") {
      augmentTargetX = 12;
      augmentTargetY = 5.08;
    } else if (targetDeck == "bomber") {
      augmentTargetX = 9.21;
      augmentTargetY = 3.91;
    }
    
  }
  
  function relHead3() {
    heading = 3
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 90 to 135 degrees right'
    if (targetDeck == "high") {
      augmentTargetX = 13.9;
      augmentTargetY = -5.62;
    } else if (targetDeck == "low") {
      augmentTargetX = 12;
      augmentTargetY = -5.08;
    } else if (targetDeck == "bomber") {
      augmentTargetX = 9.21;
      augmentTargetY = -3.91;
    }
  }
  
  function relHead4() {
    heading = 4
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 135 to 180 degrees right'
    if (targetDeck == "high") {
      augmentTargetX = 5.86;
      augmentTargetY = -13.8;
    } else if (targetDeck == "low") {
      augmentTargetX = 5.08;
      augmentTargetY = -12;
    } else if (targetDeck == "bomber") {
      augmentTargetX = 3.91;
      augmentTargetY = -9.21;
    }
  }
  
  function relHead5() {
    heading = 5
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 135 to 180 degrees left'
    if (targetDeck == "high") {
      augmentTargetX = -5.86;
      augmentTargetY = -13.8;
    } else if (targetDeck == "low") {
      augmentTargetX = -5.08;
      augmentTargetY = -12;
    } else if (targetDeck == "bomber") {
      augmentTargetX = -3.91;
      augmentTargetY = -9.21;
    }
  }
  
  function relHead6() {
    heading = 6
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 90 to 135 degrees left'
    if (targetDeck == "high") {
      augmentTargetX = -13.9;
      augmentTargetY = -5.62;
    } else if (targetDeck == "low") {
      augmentTargetX = -12;
      augmentTargetY = -5.08;
    } else if (targetDeck == "bomber") {
      augmentTargetX = -9.21;
      augmentTargetY = -3.91;
    }
  }
  
  function relHead7() {
    heading = 7
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 45 to 90 degrees left'
    if (targetDeck == "high") {
      augmentTargetX = -13.9;
      augmentTargetY = 5.62;
    } else if (targetDeck == "low") {
      augmentTargetX = -12;
      augmentTargetY = 5.08;
    } else if (targetDeck == "bomber") {
      augmentTargetX = -9.21;
      augmentTargetY = 3.91;
    }
  }
  
  function relHead8() {
    heading = 8
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 0 to 45 degrees left'
    if (targetDeck == "high") {
      augmentTargetX = -5.86;
      augmentTargetY = 13.8;
    } else if (targetDeck == "low") {
      augmentTargetX = -5.08;
      augmentTargetY = 12;
    } else if (targetDeck == "bomber") {
      augmentTargetX = -3.91;
      augmentTargetY = 9.21;
    }
  }
  
  function cyclemaneuver() {
    if (deck == "bomber"){
      document.getElementById("cyclingman").innerHTML = 'Solo A/C uses small maneuver cards';
      return deck = "low"
    } else if (deck == "low"){
      document.getElementById("cyclingman").innerHTML = 'Solo A/C uses large maneuver cards';
      return deck = "high"
    }  else if (deck == "high"){
      document.getElementById("cyclingman").innerHTML = 'Solo A/C uses bomber maneuver cards';
      return deck = "bomber"
    }
    
  }
  
  function cycleTargetManeuver() {
    if (targetDeck == "bomber"){
      document.getElementById("cyclingTargetMan").innerHTML = 'Target uses small maneuver cards';
      return targetDeck = "low"
    } else if (targetDeck == "low"){
      document.getElementById("cyclingTargetMan").innerHTML = 'Target uses large maneuver cards';
      return targetDeck = "high"
    }  else if (targetDeck == "high"){
      document.getElementById("cyclingTargetMan").innerHTML = 'Target uses bomber maneuver cards';
      return targetDeck = "bomber"
    }
    
  }
  
  function cycleEngine() {
    if (engineDamage == "no" && engineFire == "no"){
      document.getElementById("enginedamage").innerHTML = 'Engine is damaged';
      engineDamage = "yes";
      engineFire = "no";
    } else if (engineDamage == "yes" && engineFire == "no"){
      document.getElementById("enginedamage").innerHTML = 'Engine is on fire';
      engineDamage = "no";
      engineFire = "yes";
    } else if (engineDamage == "no" && engineFire == "yes"){
      document.getElementById("enginedamage").innerHTML = 'Engine is on fire AND damaged';
      engineDamage = "yes";
      engineFire = "yes";
    } else if (engineDamage == "yes" && engineFire == "yes"){
      document.getElementById("enginedamage").innerHTML = 'Engine is fine';
      engineDamage = "no";
      engineFire = "no";
    }
    
  }
  
  function cycleRudder() {
    if (rudderDamage == "none"){
      document.getElementById("rudderdamage").innerHTML = 'Left rudder damaged';
      rudderDamage = "left";
    } else if (rudderDamage == "left"){
      document.getElementById("rudderdamage").innerHTML = 'Right rudder is damaged';
      rudderDamage = "right";
    }  else if (rudderDamage == "right"){
      document.getElementById("rudderdamage").innerHTML = 'Rudder is fine';
      rudderDamage = "none";
    }
    
  }
  
  function cycleAltitude() {
    if (alt == "empty" || alt == "higher"){
      document.getElementById("cyclingalt").innerHTML = 'Not using altitude rules';
      return alt = "none"
    } else if (alt == "none"){
      document.getElementById("cyclingalt").innerHTML = 'Target at the same altitude';
      return alt = "same"
    }  else if (alt == "same"){
      document.getElementById("cyclingalt").innerHTML = 'Target at a lower altitude';
      return alt = "lower"
    }  else if (alt == "lower"){
      document.getElementById("cyclingalt").innerHTML = 'Target at a higher altitude';
      return alt = "higher"
    }
    
  }
  
  
  function setBorder0() {
    document.getElementById("dropdownMenu3").innerHTML = 'Border distance > 27cm/11inch'
    return edgeDistance = 0;
  }
  function setBorder1() {
    document.getElementById("dropdownMenu3").innerHTML = 'Border distance < 27cm/11inch in zone 1'
    return edgeDistance = 1;
  }
  function setBorder2() {
    document.getElementById("dropdownMenu3").innerHTML = 'Border distance < 27cm/11inch in zone 12'
    return edgeDistance = 2;
  }
  function setBorder3() {
    document.getElementById("dropdownMenu3").innerHTML = 'Border distance < 10cm/4inch in zone 2'
    return edgeDistance = 1;
  }
  function setBorder4() {
    document.getElementById("dropdownMenu3").innerHTML = 'Border distance < 10cm/4inch in zone 11'
    return edgeDistance = 2;
  }
  
  function highspeedroll() {
    
    var highroll = Math.floor((Math.random() * 3) + 1);
    
    var highs;
    
    if (highroll == 1 || highroll == 2) {
      return highs = "High "
    } else if (highroll == 3) {
      return highs = "Low "
    }
  }
   
  function lowspeedroll() { 
    var lowroll = Math.floor((Math.random() * 3) + 1);
    
    var lows;
    
    if (lowroll == 1 || lowroll == 2) {
      return lows = "Low "
    } else if (lowroll == 3) {
      return lows = "High "
    }
   
  }
  
  
  
function computeManeuver() {
    
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
    
  var DistlongRFsideslip = Math.sqrt(Math.pow((longRFsideslip.moveX-targetX), 2)+Math.pow((longRFsideslip.moveY-targetY), 2));
  var DistlongRSsideslip = Math.sqrt(Math.pow((longRSsideslip.moveX-targetX), 2)+Math.pow((longRSsideslip.moveY-targetY), 2));
  var DistlongLFsideslip = Math.sqrt(Math.pow((longLFsideslip.moveX-targetX), 2)+Math.pow((longLFsideslip.moveY-targetY), 2));
  var DistlongLSsideslip = Math.sqrt(Math.pow((longLSsideslip.moveX-targetX), 2)+Math.pow((longLSsideslip.moveY-targetY), 2));
  
  var DistlongRFturn = Math.sqrt(Math.pow((longRFturn.moveX-targetX), 2)+Math.pow((longRFturn.moveY-targetY), 2));
  var DistlongRSturn = Math.sqrt(Math.pow((longRSturn.moveX-targetX), 2)+Math.pow((longRSturn.moveY-targetY), 2));
  var DistlongLFturn = Math.sqrt(Math.pow((longLFturn.moveX-targetX), 2)+Math.pow((longLFturn.moveY-targetY), 2));
  var DistlongLSturn = Math.sqrt(Math.pow((longLSturn.moveX-targetX), 2)+Math.pow((longLSturn.moveY-targetY), 2));
  
  var DistshortRFturn = Math.sqrt(Math.pow((shortRFturn.moveX-targetX), 2)+Math.pow((shortRFturn.moveY-targetY), 2));
  var DistshortRSturn = Math.sqrt(Math.pow((shortRSturn.moveX-targetX), 2)+Math.pow((shortRSturn.moveY-targetY), 2));
  var DistshortLFturn = Math.sqrt(Math.pow((shortLFturn.moveX-targetX), 2)+Math.pow((shortLFturn.moveY-targetY), 2));
  var DistshortLSturn = Math.sqrt(Math.pow((shortLSturn.moveX-targetX), 2)+Math.pow((shortLSturn.moveY-targetY), 2));
  
  var DistwideRsideslip = Math.sqrt(Math.pow((wideRsideslip.moveX-targetX), 2)+Math.pow((wideRsideslip.moveY-targetY), 2));
  var DistwideLsideslip = Math.sqrt(Math.pow((wideLsideslip.moveX-targetX), 2)+Math.pow((wideLsideslip.moveY-targetY), 2));
  
  var DistFstraight = Math.sqrt(Math.pow((Fstraight.moveX-targetX), 2)+Math.pow((Fstraight.moveY-targetY), 2));
  var DistSstraight = Math.sqrt(Math.pow((Sstraight.moveX-targetX), 2)+Math.pow((Sstraight.moveY-targetY), 2));
  
  var Distclimb = Math.sqrt(Math.pow((climb.moveX-targetX), 2)+Math.pow((climb.moveY-targetY), 2));
  var Distdescend = Math.sqrt(Math.pow((descend.moveX-targetX), 2)+Math.pow((descend.moveY-targetY), 2));
  var Diststall = Math.sqrt(Math.pow((stall.moveX-targetX), 2)+Math.pow((stall.moveY-targetY), 2));
  var Distimmelman = Math.sqrt(Math.pow((immelman.moveX-targetX), 2)+Math.pow((immelman.moveY-targetY), 2));
  
  var lowestDistOLD = Math.min(DistlongRFsideslip, DistlongRSsideslip, DistlongLFsideslip, DistlongLSsideslip, DistlongRFturn, DistlongRSturn, DistlongLFturn, DistlongLSturn, DistshortRFturn, DistshortLFturn, DistshortLSturn, DistshortRSturn, DistwideRsideslip, DistwideLsideslip, DistFstraight, DistSstraight);
  var distanceArray = [DistlongRFsideslip, DistlongRSsideslip, DistlongLFsideslip, DistlongLSsideslip, DistlongRFturn, DistlongRSturn, DistlongLFturn, DistlongLSturn, DistshortRFturn, DistshortLFturn, DistshortLSturn, DistshortRSturn, DistwideRsideslip, DistwideLsideslip, DistFstraight, DistSstraight];
  
  if (engineDamage == "yes") {
    var i = distanceArray.indexOf(DistFstraight);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistlongRFsideslip);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistlongLFsideslip);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistlongRFturn);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistlongLFturn);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistshortRFturn);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistshortLFturn);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistwideRsideslip);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistwideLsideslip);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
  } 
  
  if (engineFire == "yes") {
    var i = distanceArray.indexOf(DistFstraight);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistSstraight);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
  }
  
  var noLeft = 0
  if (rudderDamage == "left" || edgeDistance == 2) {
    noLeft = 1
  } else {
    noLeft = 0
  }
  
  var noRight = 0
  if (rudderDamage == "right" || edgeDistance == 1) {
    noRight = 1
  } else {
    noRight = 0
  }
  
  if (noLeft == 1) {
    
    var i = distanceArray.indexOf(DistFstraight);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistSstraight);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistlongLFsideslip);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistlongLSsideslip);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistlongLFturn);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistlongLSturn);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistshortLFturn);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistshortLSturn);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistwideLsideslip);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
  }
  
  if (noRight == 1) {
    
    var i = distanceArray.indexOf(DistFstraight);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistSstraight);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
     var i = distanceArray.indexOf(DistlongRFsideslip);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistlongRSsideslip);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistlongRFturn);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistlongRSturn);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistshortRFturn);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistshortRSturn);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
    var i = distanceArray.indexOf(DistwideRsideslip);
    if(i != -1) {
	    distanceArray.splice(i, 1);
    }
    
  }
  

  
  distanceArray.sort(function(a, b){return a-b})
  var lowestDist = distanceArray[0];
  var secondLowestDist = distanceArray[1];
  var thirdLowestDist = distanceArray[2];
  
  
  var result;
  if (lowestDist == DistlongRFsideslip && targetX > 0 || lowestDist == DistlongRFsideslip && targetX < 0 && noLeft == 1) {
    result = "Perform a long right sideslip at high speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/longrightsideslip.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistlongRSsideslip && targetX > 0 || lowestDist == DistlongRSsideslip && targetX < 0 && noLeft == 1){
    result = "Perform a long right sideslip at low speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/longrightsideslip.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistlongRFturn && targetX > 0 || lowestDist == DistlongRFturn && targetX < 0 && noLeft == 1){
    result = "Perform a long right turn at high speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/longrightturn.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistlongRSturn && targetX > 0 || lowestDist == DistlongRSturn && targetX < 0 && noLeft == 1){
    result = "Perform a long right turn at low speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/longrightturn.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistshortRFturn && targetX > 0 || lowestDist == DistshortRFturn && targetX < 0 && noLeft == 1){
    result = "Perform a short right turn at high speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/shortrightturn.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistshortRSturn && targetX > 0 || lowestDist == DistshortRSturn && targetX < 0 && noLeft == 1){
    result = "Perform a short right turn at low speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/shortrightturn.png" style="width:206px;height:292px;">';
  }  else if (lowestDist == DistwideRsideslip && targetX > 0 || lowestDist == DistwideRsideslip && targetX < 0 && noLeft == 1){
    result = "Perform a wide right sideslip";
    resultImage = '<img src="wogstuff/universalmaneuvers/widerightsideslip.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistFstraight){
    result = "Perform a straight at high speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistSstraight){
    result = "Perform a straight at low speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistlongLFsideslip && targetX < 0 || lowestDist == DistlongLFsideslip && targetX > 0 && noRight == 1) {
    result = "Perform a long left sideslip at high speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/longleftsideslip.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistlongLSsideslip && targetX < 0 || lowestDist == DistlongLSsideslip && targetX > 0 && noRight == 1){
    result = "Perform a long left sideslip at low speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/longleftsideslip.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistlongLFturn && targetX < 0 || lowestDist == DistlongLFturn && targetX > 0 && noRight == 1){
    result = "Perform a long left turn at high speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/longleftturn.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistlongLSturn && targetX < 0 || lowestDist == DistlongLSturn && targetX > 0 && noRight == 1){
    result = "Perform a long left turn at low speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/longleftturn.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistshortLFturn && targetX < 0 || lowestDist == DistshortLFturn && targetX > 0 && noRight == 1){
    result = "Perform a short left turn at high speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/shortleftturn.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistshortLSturn && targetX < 0 || lowestDist == DistshortLSturn && targetX > 0 && noRight == 1){
    result = "Perform a short left turn at low speed";
    resultImage = '<img src="wogstuff/universalmaneuvers/shortleftturn.png" style="width:206px;height:292px;">';
  } else if (lowestDist == DistwideLsideslip && targetX < 0 || lowestDist == DistwideLsideslip && targetX > 0 && noRight == 1){
    result = "Perform a wide left sideslip";
    resultImage = '<img src="wogstuff/universalmaneuvers/wideleftsideslip.png" style="width:206px;height:292px;">';
  }
  
  var result2;
  if (secondLowestDist == DistlongRFsideslip && targetX > 0 || secondLowestDist == DistlongRFsideslip && targetX < 0 && noLeft == 1) {
    result2 = "Perform a long right sideslip at high speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/longrightsideslip.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistlongRSsideslip && targetX > 0 || secondLowestDist == DistlongRSsideslip && targetX < 0 && noLeft == 1){
    result2 = "Perform a long right sideslip at low speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/longrightsideslip.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistlongRFturn && targetX > 0 || secondLowestDist == DistlongRFturn && targetX < 0 && noLeft == 1){
    result2 = "Perform a long right turn at high speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/longrightturn.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistlongRSturn && targetX > 0 || secondLowestDist == DistlongRSturn && targetX < 0 && noLeft == 1){
    result2 = "Perform a long right turn at low speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/longrightturn.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistshortRFturn && targetX > 0 || secondLowestDist == DistshortRFturn && targetX < 0 && noLeft == 1){
    result2 = "Perform a short right turn at high speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/shortrightturn.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistshortRSturn && targetX > 0 || secondLowestDist == DistshortRSturn && targetX < 0 && noLeft == 1){
    result2 = "Perform a short right turn at low speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/shortrightturn.png" style="width:206px;height:292px;">';
  }  else if (secondLowestDist == DistwideRsideslip && targetX > 0 || secondLowestDist == DistwideRsideslip && targetX < 0 && noLeft == 1){
    result2 = "Perform a wide right sideslip";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/widerightsideslip.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistFstraight){
    result2 = "Perform a straight at high speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistSstraight){
    result2 = "Perform a straight at low speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistlongLFsideslip && targetX < 0 || secondLowestDist == DistlongLFsideslip && targetX > 0 && noRight == 1) {
    result2 = "Perform a long left sideslip at high speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/longleftsideslip.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistlongLSsideslip && targetX < 0 || secondLowestDist == DistlongLSsideslip && targetX > 0 && noRight == 1){
    result2 = "Perform a long left sideslip at low speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/longleftsideslip.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistlongLFturn && targetX < 0 || secondLowestDist == DistlongLFturn && targetX > 0 && noRight == 1){
    result2 = "Perform a long left turn at high speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/longleftturn.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistlongLSturn && targetX < 0 || secondLowestDist == DistlongLSturn && targetX > 0 && noRight == 1){
    result2 = "Perform a long left turn at low speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/longleftturn.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistshortLFturn && targetX < 0 || secondLowestDist == DistshortLFturn && targetX > 0 && noRight == 1){
    result2 = "Perform a short left turn at high speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/shortleftturn.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistshortLSturn && targetX < 0 || secondLowestDist == DistshortLSturn && targetX > 0 && noRight == 1){
    result2 = "Perform a short left turn at low speed";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/shortleftturn.png" style="width:206px;height:292px;">';
  } else if (secondLowestDist == DistwideLsideslip && targetX < 0 || secondLowestDist == DistwideLsideslip && targetX > 0 && noRight == 1){
    result2 = "Perform a wide left sideslip";
    resultImage2 = '<img src="wogstuff/universalmaneuvers/wideleftsideslip.png" style="width:206px;height:292px;">';
  }
  
  var result3;
  if (thirdLowestDist == DistlongRFsideslip && targetX > 0 || thirdLowestDist == DistlongRFsideslip && targetX < 0 && noLeft == 1) {
    result3 = "Perform a long right sideslip at high speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/longrightsideslip.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistlongRSsideslip && targetX > 0 || thirdLowestDist == DistlongRSsideslip && targetX < 0 && noLeft == 1){
    result3 = "Perform a long right sideslip at low speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/longrightsideslip.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistlongRFturn && targetX > 0 || thirdLowestDist == DistlongRFturn && targetX < 0 && noLeft == 1){
    result3 = "Perform a long right turn at high speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/longrightturn.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistlongRSturn && targetX > 0 || thirdLowestDist == DistlongRSturn && targetX < 0 && noLeft == 1){
    result3 = "Perform a long right turn at low speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/longrightturn.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistshortRFturn && targetX > 0 || thirdLowestDist == DistshortRFturn && targetX < 0 && noLeft == 1){
    result3 = "Perform a short right turn at high speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/shortrightturn.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistshortRSturn && targetX > 0 || thirdLowestDist == DistshortRSturn && targetX < 0 && noLeft == 1){
    result3 = "Perform a short right turn at low speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/shortrightturn.png" style="width:206px;height:292px;">';
  }  else if (thirdLowestDist == DistwideRsideslip && targetX > 0 || thirdLowestDist == DistwideRsideslip && targetX < 0 && noLeft == 1){
    result3 = "Perform a wide right sideslip";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/widerightsideslip.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistFstraight){
    result3 = "Perform a straight at high speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistSstraight){
    result3 = "Perform a straight at low speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistlongLFsideslip && targetX < 0 || thirdLowestDist == DistlongLFsideslip && targetX > 0 && noRight == 1) {
    result3 = "Perform a long left sideslip at high speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/longleftsideslip.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistlongLSsideslip && targetX < 0 || thirdLowestDist == DistlongLSsideslip && targetX > 0 && noRight == 1){
    result3 = "Perform a long left sideslip at low speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/longleftsideslip.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistlongLFturn && targetX < 0 || thirdLowestDist == DistlongLFturn && targetX > 0 && noRight == 1){
    result3 = "Perform a long left turn at high speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/longleftturn.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistlongLSturn && targetX < 0 || thirdLowestDist == DistlongLSturn && targetX > 0 && noRight == 1){
    result3 = "Perform a long left turn at low speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/longleftturn.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistshortLFturn && targetX < 0 || thirdLowestDist == DistshortLFturn && targetX > 0 && noRight == 1){
    result3 = "Perform a short left turn at high speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/shortleftturn.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistshortLSturn && targetX < 0 || thirdLowestDist == DistshortLSturn && targetX > 0 && noRight == 1){
    result3 = "Perform a short left turn at low speed";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/shortleftturn.png" style="width:206px;height:292px;">';
  } else if (thirdLowestDist == DistwideLsideslip && targetX < 0 || thirdLowestDist == DistwideLsideslip && targetX > 0 && noRight == 1){
    result3 = "Perform a wide left sideslip";
    resultImage3 = '<img src="wogstuff/universalmaneuvers/wideleftsideslip.png" style="width:206px;height:292px;">';
  }
    
    var reversalRoll = Math.floor((Math.random() * 8) + 1);
    
    if (Immelman == 0 && targetY < -10 && engineDamage == "no" && engineFire == "no" && reversalRoll == 1) {
	Immelman = 1;
    }
    
    switch (Immelman) {
    case 1:
        result = "Perform a straight at high speed";
	result2 = "Perform a straight at high speed";
	result3 = "Perform a straight at high speed";
	resultImage = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
	resultImage2 = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
	resultImage3 = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
	Immelman++;
        break;
    case 2:
        result = "Perform a reversal";
	result2 = "Perform a reversal";
	result3 = "Perform a reversal";
	resultImage = '<img src="wogstuff/universalmaneuvers/reversal.png" style="width:206px;height:292px;">';
	resultImage2 = '<img src="wogstuff/universalmaneuvers/reversal.png" style="width:206px;height:292px;">';
	resultImage3 = '<img src="wogstuff/universalmaneuvers/reversal.png" style="width:206px;height:292px;">';
	Immelman++;
        break;
    case 3:
        result = "Perform a straight at low speed";
	result2 = "Perform a straight at low speed";
	result3 = "Perform a straight at low speed";
	resultImage = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
	resultImage2 = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
	resultImage3 = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
	Immelman = 0;
        break;
    }
    
    if (splitS == 0 && targetY < -10 && engineFire == "no" && reversalRoll == 2 && lastSpeed == "low") {
	splitS = 1;
    }
    
    switch (splitS) {
    case 1:
        result = "Perform a stall";
	result2 = "Perform a stall";
	result3 = "Perform a stall";
	resultImage = '<img src="wogstuff/universalmaneuvers/stall.png" style="width:206px;height:292px;">';
	resultImage2 = '<img src="wogstuff/universalmaneuvers/stall.png" style="width:206px;height:292px;">';
	resultImage3 = '<img src="wogstuff/universalmaneuvers/stall.png" style="width:206px;height:292px;">';
	splitS++;
        break;
    case 2:
        result = "Perform a reversal";
	result2 = "Perform a reversal";
	result3 = "Perform a reversal";
	resultImage = '<img src="wogstuff/universalmaneuvers/reversal.png" style="width:206px;height:292px;">';
	resultImage2 = '<img src="wogstuff/universalmaneuvers/reversal.png" style="width:206px;height:292px;">';
	resultImage3 = '<img src="wogstuff/universalmaneuvers/reversal.png" style="width:206px;height:292px;">';
	splitS++;
        break;
    case 3:
        result = "Perform a straight at high speed";
	result2 = "Perform a straight at high speed";
	result3 = "Perform a straight at high speed";
	resultImage = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
	resultImage2 = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
	resultImage3 = '<img src="wogstuff/universalmaneuvers/straight.png" style="width:206px;height:292px;">';
	splitS = 0;
        break;
    }
    
    if (alt == "higher" && distance > 20 && targetY < 5) {
	result = "Climb"
	resultImage = '<img src="wogstuff/universalmaneuvers/climb.png" style="width:206px;height:292px;">';
    } else if (alt == "higher" && targetY > 5 ) {
	result = "Climb"
	resultImage = '<img src="wogstuff/universalmaneuvers/climb.png" style="width:206px;height:292px;">';
    } else if (alt == "lower" && targetX > -5 && targetX < 5 && targetY > 10) {
	result2 = "Descend"
	result3 = "Descend"
	resultImage2 = '<img src="wogstuff/universalmaneuvers/descent.png" style="width:206px;height:292px;">';
	resultImage3 = '<img src="wogstuff/universalmaneuvers/descent.png" style="width:206px;height:292px;">';
    }
  
  var resultRoll = Math.floor((Math.random() * 7) + 1);
  
    
    var resultManeuver;
    var resultingImage;
    if (resultRoll == 1 || resultRoll == 2 || resultRoll == 3) {
      resultManeuver = result
      resultingImage = resultImage
    } else if (resultRoll == 4 || resultRoll == 5) {
      resultManeuver = result2
      resultingImage = resultImage2
    } else if (resultRoll == 6 || resultRoll == 7) {
      resultManeuver = result3
      resultingImage = resultImage3
    }
    
    
    
    
      var resultshown = '<div class="alert alert-success text-center">'+ resultManeuver + '</div>'
      document.getElementById("maneuver").innerHTML = resultshown;
      document.getElementById("maneuverImage").innerHTML = resultingImage;
      return lastSpeed = resultManeuver.match(/low/);
}
  
function updateStats() {
    
    if (rudderDamage == "left"){
	  document.getElementById("rudderdamage").innerHTML = 'Left rudder damaged';
	} else if (rudderDamage == "right"){
	  document.getElementById("rudderdamage").innerHTML = 'Right rudder is damaged';
	}  else if (rudderDamage == "none"){
	  document.getElementById("rudderdamage").innerHTML = 'Rudder is fine';
	}
    
    if (engineDamage == "no" && engineFire == "no"){
      document.getElementById("enginedamage").innerHTML = 'Engine is fine';
    } else if (engineDamage == "yes" && engineFire == "no"){
      document.getElementById("enginedamage").innerHTML = 'Engine is damaged';
    } else if (engineDamage == "no" && engineFire == "yes"){
      document.getElementById("enginedamage").innerHTML = 'Engine is on fire';
    } else if (engineDamage == "yes" && engineFire == "yes"){
      document.getElementById("enginedamage").innerHTML = 'Engine is on fire AND damaged';
    }
    
    if (deck == "low"){
      document.getElementById("cyclingman").innerHTML = 'Solo A/C uses small maneuver cards';
    } else if (deck == "high"){
      document.getElementById("cyclingman").innerHTML = 'Solo A/C uses large maneuver cards';
    }  else if (deck == "bomber"){
      document.getElementById("cyclingman").innerHTML = 'Solo A/C uses bomber maneuver cards';
    }
    
    if (targetDeck == "low"){
      document.getElementById("cyclingTargetMan").innerHTML = 'Target uses small maneuver cards';
    } else if (targetDeck == "high"){
      document.getElementById("cyclingTargetMan").innerHTML = 'Target uses large maneuver cards';
    }  else if (targetDeck == "bomber"){
      document.getElementById("cyclingTargetMan").innerHTML = 'Target uses bomber maneuver cards';
    }
    
    if (distance == 1) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 1 cm'
    } else if (distance == 2) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 2 cm'
    } else if (distance == 3) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 3 cm or 1 inch'
    } else if (distance == 4) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 4 cm'
    } else if (distance == 5) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 5 cm or 2 inch'
    } else if (distance == 6) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 6 cm'
    } else if (distance == 7) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 7 cm'
    } else if (distance == 8) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 8 cm or 3 inch'
    } else if (distance == 9) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 9 cm'
    } else if (distance == 10) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 10 cm or 4 inch'
    } else if (distance == 11) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 11 cm'
    } else if (distance == 12) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 12 cm'
    } else if (distance == 13) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 13 cm or 5 inch'
    } else if (distance == 14) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 14 cm'
    } else if (distance == 15) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 15 cm or 6 inch'
    } else if (distance == 16) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 16 cm'
    } else if (distance == 17) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 17 cm'
    } else if (distance == 18) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 18 cm or 7 inch'
    } else if (distance == 19) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 19 cm'
    } else if (distance == 20) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 20 cm or 8 inch'
    } else if (distance == 21) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 21 cm'
    } else if (distance == 22) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 22 cm'
    } else if (distance == 23) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 23 cm or 9 inch'
    } else if (distance == 24) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 24 cm'
    } else if (distance == 25) {
	document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 25 cm or 10 inch (or more)'
    }
    
    if (heading == 1) {
	document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 0 to 45 degrees right'
    } else if (heading == 2) {
	document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 45 to 90 degrees right'
    } else if (heading == 3) {
	document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 90 to 135 degrees right'
    } else if (heading == 4) {
	document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 135 to 180 degrees right'
    } else if (heading == 5) {
	document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 135 to 180 degrees left'
    } else if (heading == 6) {
	document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 90 to 135 degrees left'
    } else if (heading == 7) {
	document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 45 to 90 degrees left'
    } else if (heading == 8) {
	document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 0 to 45 degrees left'
    }

    if (alt == "none"){
      document.getElementById("cyclingalt").innerHTML = 'Not using altitude rules';
    } else if (alt == "same"){
      document.getElementById("cyclingalt").innerHTML = 'Target at the same altitude';
    }  else if (alt == "lower"){
      document.getElementById("cyclingalt").innerHTML = 'Target at a lower altitude';
    }  else if (alt == "higher"){
      document.getElementById("cyclingalt").innerHTML = 'Target at a higher altitude';
    }
    

}
  
function setAC1() {

    if (prevSelectedAircraft == "AC1") {
	AC1rudderDamage = rudderDamage
	AC1engineDamage = engineDamage
	AC1engineFire = engineFire
	AC1heading = heading
	AC1distance = distance
	AC1deck = deck
	AC1targetDeck = targetDeck
	AC1Immelman = Immelman
	AC1splitS = splitS
	AC1lastSpeed = lastSpeed
	AC1alt = alt
    } else if (prevSelectedAircraft == "AC2") {
	AC2rudderDamage = rudderDamage
	AC2engineDamage = engineDamage
	AC2engineFire = engineFire
	AC2heading = heading
	AC2distance = distance
	AC2deck = deck
	AC2targetDeck = targetDeck
	AC2Immelman = Immelman
	AC2splitS = splitS
	AC2lastSpeed = lastSpeed
	AC2alt = alt
    } else if (prevSelectedAircraft == "AC3") {
	AC3rudderDamage = rudderDamage
	AC3engineDamage = engineDamage
	AC3engineFire = engineFire
	AC3heading = heading
	AC3distance = distance
	AC3deck = deck
	AC3targetDeck = targetDeck
	AC3Immelman = Immelman
	AC3splitS = splitS
	AC3lastSpeed = lastSpeed
	AC3alt = alt
    } else if (prevSelectedAircraft == "AC4") {
	AC4rudderDamage = rudderDamage
	AC4engineDamage = engineDamage
	AC4engineFire = engineFire
	AC4heading = heading
	AC4distance = distance
	AC4deck = deck
	AC4targetDeck = targetDeck
	AC4Immelman = Immelman
	AC4splitS = splitS
	AC4lastSpeed = lastSpeed
	AC4alt = alt
    }
    
    prevSelectedAircraft = "AC1"
    rudderDamage = AC1rudderDamage
    engineDamage = AC1engineDamage
    engineFire = AC1engineFire
    deck = AC1deck
    targetDeck = AC1targetDeck
    Immelman = AC1Immelman
    splitS = AC1splitS
    lastSpeed = AC1lastSpeed
    distance = AC1distance
    heading = AC1heading
    alt = AC1alt
    
    updateStats()
    
}

function setAC2() {

    if (prevSelectedAircraft == "AC1") {
	AC1rudderDamage = rudderDamage
	AC1engineDamage = engineDamage
	AC1engineFire = engineFire
	AC1heading = heading
	AC1distance = distance
	AC1deck = deck
	AC1targetDeck = targetDeck
	AC1Immelman = Immelman
	AC1splitS = splitS
	AC1lastSpeed = lastSpeed
	AC1alt = alt
    } else if (prevSelectedAircraft == "AC2") {
	AC2rudderDamage = rudderDamage
	AC2engineDamage = engineDamage
	AC2engineFire = engineFire
	AC2heading = heading
	AC2distance = distance
	AC2deck = deck
	AC2targetDeck = targetDeck
	AC2Immelman = Immelman
	AC2splitS = splitS
	AC2lastSpeed = lastSpeed
	AC2alt = alt
    } else if (prevSelectedAircraft == "AC3") {
	AC3rudderDamage = rudderDamage
	AC3engineDamage = engineDamage
	AC3engineFire = engineFire
	AC3heading = heading
	AC3distance = distance
	AC3deck = deck
	AC3targetDeck = targetDeck
	AC3Immelman = Immelman
	AC3splitS = splitS
	AC3lastSpeed = lastSpeed
	AC3alt = alt
    } else if (prevSelectedAircraft == "AC4") {
	AC4rudderDamage = rudderDamage
	AC4engineDamage = engineDamage
	AC4engineFire = engineFire
	AC4heading = heading
	AC4distance = distance
	AC4deck = deck
	AC4targetDeck = targetDeck
	AC4Immelman = Immelman
	AC4splitS = splitS
	AC4lastSpeed = lastSpeed
	AC4alt = alt
    }
    
    prevSelectedAircraft = "AC2"
    rudderDamage = AC2rudderDamage
    engineDamage = AC2engineDamage
    engineFire = AC2engineFire
    deck = AC2deck
    targetDeck = AC2targetDeck
    Immelman = AC2Immelman
    splitS = AC2splitS
    lastSpeed = AC2lastSpeed
    distance = AC2distance
    heading = AC2heading
    alt = AC2alt
    
    updateStats()
    
}

function setAC3() {

    if (prevSelectedAircraft == "AC1") {
	AC1rudderDamage = rudderDamage
	AC1engineDamage = engineDamage
	AC1engineFire = engineFire
	AC1heading = heading
	AC1distance = distance
	AC1deck = deck
	AC1targetDeck = targetDeck
	AC1Immelman = Immelman
	AC1splitS = splitS
	AC1lastSpeed = lastSpeed
	AC1alt = alt
    } else if (prevSelectedAircraft == "AC2") {
	AC2rudderDamage = rudderDamage
	AC2engineDamage = engineDamage
	AC2engineFire = engineFire
	AC2heading = heading
	AC2distance = distance
	AC2deck = deck
	AC2targetDeck = targetDeck
	AC2Immelman = Immelman
	AC2splitS = splitS
	AC2lastSpeed = lastSpeed
	AC2alt = alt
    } else if (prevSelectedAircraft == "AC3") {
	AC3rudderDamage = rudderDamage
	AC3engineDamage = engineDamage
	AC3engineFire = engineFire
	AC3heading = heading
	AC3distance = distance
	AC3deck = deck
	AC3targetDeck = targetDeck
	AC3Immelman = Immelman
	AC3splitS = splitS
	AC3lastSpeed = lastSpeed
	AC3alt = alt
    } else if (prevSelectedAircraft == "AC4") {
	AC4rudderDamage = rudderDamage
	AC4engineDamage = engineDamage
	AC4engineFire = engineFire
	AC4heading = heading
	AC4distance = distance
	AC4deck = deck
	AC4targetDeck = targetDeck
	AC4Immelman = Immelman
	AC4splitS = splitS
	AC4lastSpeed = lastSpeed
	AC4alt = alt
    }
    
    prevSelectedAircraft = "AC3"
    rudderDamage = AC3rudderDamage
    engineDamage = AC3engineDamage
    engineFire = AC3engineFire
    deck = AC3deck
    targetDeck = AC3targetDeck
    Immelman = AC3Immelman
    splitS = AC3splitS
    lastSpeed = AC3lastSpeed
    distance = AC3distance
    heading = AC3heading
    alt = AC3alt
    
    updateStats()
    
}

function setAC4() {

    if (prevSelectedAircraft == "AC1") {
	AC1rudderDamage = rudderDamage
	AC1engineDamage = engineDamage
	AC1engineFire = engineFire
	AC1heading = heading
	AC1distance = distance
	AC1deck = deck
	AC1targetDeck = targetDeck
	AC1Immelman = Immelman
	AC1splitS = splitS
	AC1lastSpeed = lastSpeed
	AC1alt = alt
    } else if (prevSelectedAircraft == "AC2") {
	AC2rudderDamage = rudderDamage
	AC2engineDamage = engineDamage
	AC2engineFire = engineFire
	AC2heading = heading
	AC2distance = distance
	AC2deck = deck
	AC2targetDeck = targetDeck
	AC2Immelman = Immelman
	AC2splitS = splitS
	AC2lastSpeed = lastSpeed
	AC2alt = alt
    } else if (prevSelectedAircraft == "AC3") {
	AC3rudderDamage = rudderDamage
	AC3engineDamage = engineDamage
	AC3engineFire = engineFire
	AC3heading = heading
	AC3distance = distance
	AC3deck = deck
	AC3targetDeck = targetDeck
	AC3Immelman = Immelman
	AC3splitS = splitS
	AC3lastSpeed = lastSpeed
	AC3alt = alt
    } else if (prevSelectedAircraft == "AC4") {
	AC4rudderDamage = rudderDamage
	AC4engineDamage = engineDamage
	AC4engineFire = engineFire
	AC4heading = heading
	AC4distance = distance
	AC4deck = deck
	AC4targetDeck = targetDeck
	AC4Immelman = Immelman
	AC4splitS = splitS
	AC4lastSpeed = lastSpeed
	AC4alt = alt
    }
    
    prevSelectedAircraft = "AC4"
    rudderDamage = AC4rudderDamage
    engineDamage = AC4engineDamage
    engineFire = AC4engineFire
    deck = AC4deck
    targetDeck = AC4targetDeck
    Immelman = AC4Immelman
    splitS = AC4splitS
    lastSpeed = AC4lastSpeed
    distance = AC4distance
    heading = AC4heading
    alt = AC4alt
    
    updateStats()
    
}

  