  
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
var zone = "zone0"
var hdg = 0
var stage = 0
var pos = {X:0 ,Y:0}
var result = "Adjust your setting"
var distance = 20
var augmentTargetX = 0
var augmentTargetY = 0
var augmentTargetFX = 0
var augmentTargetFY = 0
var augmentTargetLX = 0
var augmentTargetLY = 0
var augmentTargetRX = 0
var augmentTargetRY = 0
var augmentTargetBX = 0
var augmentTargetBY = 0
var resultImage = 0
var edgeDistance = "0"
var soloShip = "CR90"
var speed = 2
var man1 = 0
var man2 = 0
var man3 = 0
var man4 = 0
var lowestDist;
var DistL1;
var DistL2;
var DistS;
var DistR1;
var DistR2;
var noThirdStage = "no";
var noFourthStage = "no";
var SFShields = 0
var SLShields = 0
var SRShields = 0
var SBShields = 0
var TFShields = 0
var TLShields = 0
var TRShields = 0
var TBShields = 0
var targetDesiredX;
var targetDesiredY;
var Command1Option = "none"
var Command2Option = "none"
var Command3Option = "none"
var Command4Option = "none"
var CommandValue;
var SquadronValue;
var EngineeringValue;
var CardDam = 0
var ShieldDam = 0
var soloCapital = 1
var targetCapital = 1
var soloSquadrons = 0
var targetSquadrons = 0

function soloCapital0() {
    document.getElementById("dropdownMenuSoloCapital").innerHTML = '0 Capital ships'
    
    return soloCapital = 0;

}

function soloCapital1() {
    document.getElementById("dropdownMenuSoloCapital").innerHTML = '1 Capital ship'
    
    return soloCapital = 1;

}

function soloCapital2() {
    document.getElementById("dropdownMenuSoloCapital").innerHTML = '2 Capital ships'
    
    return soloCapital = 2;

}

function soloSquadrons0() {
    document.getElementById("dropdownMenuSoloSquadrons").innerHTML = '0 Squadrons'
    
    return soloSquadrons = 0;

}

function soloSquadrons1() {
    document.getElementById("dropdownMenuSoloSquadrons").innerHTML = '1 Squadron'
    
    return soloSquadrons = 1;

}

function soloSquadrons2() {
    document.getElementById("dropdownMenuSoloSquadrons").innerHTML = '2 Squadrons'
    
    return soloSquadrons = 2;

}

function soloSquadrons3() {
    document.getElementById("dropdownMenuSoloSquadrons").innerHTML = '3 Squadrons'
    
    return soloSquadrons = 3;

}

function soloSquadrons4() {
    document.getElementById("dropdownMenuSoloSquadrons").innerHTML = '4 Squadrons'
    
    return soloSquadrons = 4;

}

function soloSquadrons5() {
    document.getElementById("dropdownMenuSoloSquadrons").innerHTML = '5 Squadrons'
    
    return soloSquadrons = 5;

}

function soloSquadrons6() {
    document.getElementById("dropdownMenuSoloSquadrons").innerHTML = '6 Squadrons'
    
    return soloSquadrons = 6;

}

function soloSquadrons7() {
    document.getElementById("dropdownMenuSoloSquadrons").innerHTML = '7 Squadrons'
    
    return soloSquadrons = 7;

}

function soloSquadrons8() {
    document.getElementById("dropdownMenuSoloSquadrons").innerHTML = '8 Squadrons'
    
    return soloSquadrons = 8;

}

function soloSquadrons9() {
    document.getElementById("dropdownMenuSoloSquadrons").innerHTML = '9 Squadrons'
    
    return soloSquadrons = 9;

}

function soloSquadrons10() {
    document.getElementById("dropdownMenuSoloSquadrons").innerHTML = '10 Squadrons'
    
    return soloSquadrons = 10;

}

function soloSquadrons10plus() {
    document.getElementById("dropdownMenuSoloSquadrons").innerHTML = '10+ Squadrons'
    
    return soloSquadrons = 11;

}

function targetCapital0() {
    document.getElementById("dropdownMenuTargetCapital").innerHTML = '0 Capital ships'
    
    return targetCapital = 0;

}

function targetCapital1() {
    document.getElementById("dropdownMenuTargetCapital").innerHTML = '1 Capital ship'
    
    return targetCapital = 1;

}

function targetCapital2() {
    document.getElementById("dropdownMenuTargetCapital").innerHTML = '2 Capital ships'
    
    return targetCapital = 2;

}

function targetCapital3() {
    document.getElementById("dropdownMenuTargetCapital").innerHTML = '3 Capital ships'
    
    return targetCapital = 3;

}

function targetCapital4() {
    document.getElementById("dropdownMenuTargetCapital").innerHTML = '4 Capital ships'
    
    return targetCapital = 4;

}

function targetCapital5() {
    document.getElementById("dropdownMenuTargetCapital").innerHTML = '5 Capital ships'
    
    return targetCapital = 5;

}

function targetSquadrons0() {
    document.getElementById("dropdownMenuTargetSquadrons").innerHTML = '0 Squadrons'
    
    return targetSquadrons = 0;

}

function targetSquadrons1() {
    document.getElementById("dropdownMenuTargetSquadrons").innerHTML = '1 Squadron'
    
    return targetSquadrons = 1;

}

function targetSquadrons2() {
    document.getElementById("dropdownMenuTargetSquadrons").innerHTML = '2 Squadrons'
    
    return targetSquadrons = 2;

}

function targetSquadrons3() {
    document.getElementById("dropdownMenuTargetSquadrons").innerHTML = '3 Squadrons'
    
    return targetSquadrons = 3;

}

function targetSquadrons4() {
    document.getElementById("dropdownMenuTargetSquadrons").innerHTML = '4 Squadrons'
    
    return targetSquadrons = 4;

}

function targetSquadrons5() {
    document.getElementById("dropdownMenuTargetSquadrons").innerHTML = '5 Squadrons'
    
    return targetSquadrons = 5;

}

function targetSquadrons6() {
    document.getElementById("dropdownMenuTargetSquadrons").innerHTML = '6 Squadrons'
    
    return targetSquadrons = 6;

}

function targetSquadrons7() {
    document.getElementById("dropdownMenuTargetSquadrons").innerHTML = '7 Squadrons'
    
    return targetSquadrons = 7;

}

function targetSquadrons8() {
    document.getElementById("dropdownMenuTargetSquadrons").innerHTML = '8 Squadrons'
    
    return targetSquadrons = 8;

}

function targetSquadrons9() {
    document.getElementById("dropdownMenuTargetSquadrons").innerHTML = '9 Squadrons'
    
    return targetSquadrons = 9;

}

function targetSquadrons10() {
    document.getElementById("dropdownMenuTargetSquadrons").innerHTML = '10 Squadrons'
    
    return targetSquadrons = 10;

}

function targetSquadrons10plus() {
    document.getElementById("dropdownMenuTargetSquadrons").innerHTML = '10+ Squadrons'
    
    return targetSquadrons = 11;

}

function Command1Nav() {
    document.getElementById("dropdownMenuCommand1").innerHTML = 'Nav'
    
    return Command1Option = "nav";

}
  
function Command1Squad() {
    document.getElementById("dropdownMenuCommand1").innerHTML = 'Squad'
    return Command1Option = "squad";
}
  
function Command1Rep() {
  document.getElementById("dropdownMenuCommand1").innerHTML = 'Rep'
  return Command1Option = "rep";
}

function Command1Fire() {
    document.getElementById("dropdownMenuCommand1").innerHTML = 'Fire'
    return Command1Option = "fire";
}

function Command1None() {
    document.getElementById("dropdownMenuCommand1").innerHTML = 'None'
    return Command1Option = "none";
}

function Command2Nav() {
    document.getElementById("dropdownMenuCommand2").innerHTML = 'Nav'
    return Command2Option = "nav";
}
  
function Command2Squad() {
    document.getElementById("dropdownMenuCommand2").innerHTML = 'Squad'
    return Command2Option = "squad";
}
  
function Command2Rep() {
  document.getElementById("dropdownMenuCommand2").innerHTML = 'Rep'
  return Command2Option = "rep";
}

function Command2Fire() {
    document.getElementById("dropdownMenuCommand2").innerHTML = 'Fire'
    return Command2Option = "fire";
}

function Command2None() {
    document.getElementById("dropdownMenuCommand2").innerHTML = 'None'
    return Command2Option = "none";
}

function Command1Nav() {
    document.getElementById("dropdownMenuCommand1").innerHTML = 'Nav'
    return Command1Option = "nav";
}
  
function Command3Squad() {
    document.getElementById("dropdownMenuCommand3").innerHTML = 'Squad'
    return Command3Option = "squad";
}
  
function Command3Rep() {
  document.getElementById("dropdownMenuCommand3").innerHTML = 'Rep'
  return Command1Option = "rep";
}

function Command3Fire() {
    document.getElementById("dropdownMenuCommand3").innerHTML = 'Fire'
    return Command3Option = "fire";
}

function Command3None() {
    document.getElementById("dropdownMenuCommand3").innerHTML = 'None'
    return Command3Option = "none";
}

function Command4Nav() {
    document.getElementById("dropdownMenuCommand4").innerHTML = 'Nav'
    return Command4Option = "nav";
}
  
function Command4Squad() {
    document.getElementById("dropdownMenuCommand4").innerHTML = 'Squad'
    return Command4Option = "squad";
}
  
function Command4Rep() {
  document.getElementById("dropdownMenuCommand4").innerHTML = 'Rep'
  return Command4Option = "rep";
}

function Command4Fire() {
    document.getElementById("dropdownMenuCommand4").innerHTML = 'Fire'
    return Command4Option = "fire";
}

function Command4None() {
    document.getElementById("dropdownMenuCommand4").innerHTML = 'None'
    return Command4Option = "none";
}

function Command1() {
    document.getElementById("dropdownMenuCommand").innerHTML = 'Command 1'
    return CommandValue = 1;
}

function Command2() {
    document.getElementById("dropdownMenuCommand").innerHTML = 'Command 2'
    return CommandValue = 2;
}

function Command3() {
    document.getElementById("dropdownMenuCommand").innerHTML = 'Command 3'
    return CommandValue = 3;
}

function Command4() {
    document.getElementById("dropdownMenuCommand").innerHTML = 'Command 4'
    return CommandValue = 4;
}

function Command5() {
    document.getElementById("dropdownMenuCommand").innerHTML = 'Command 5'
    return CommandValue = 5;
}

function Squadron1() {
    document.getElementById("dropdownMenuSquadron").innerHTML = 'Squadron 1'
    return SquadronValue = 1;
}

function Squadron2() {
    document.getElementById("dropdownMenuSquadron").innerHTML = 'Squadron 2'
    return SquadronValue = 2;
}

function Squadron3() {
    document.getElementById("dropdownMenuSquadron").innerHTML = 'Squadron 3'
    return SquadronValue = 3;
}

function Squadron4() {
    document.getElementById("dropdownMenuSquadron").innerHTML = 'Squadron 4'
    return SquadronValue = 4;
}

function Squadron5() {
    document.getElementById("dropdownMenuSquadron").innerHTML = 'Squadron 5'
    return SquadronValue = 5;
}

function Engineering1() {
    document.getElementById("dropdownMenuEngineering").innerHTML = 'Engineering 1'
    return EngineeringValue = 1;
}

function Engineering2() {
    document.getElementById("dropdownMenuEngineering").innerHTML = 'Engineering 2'
    return EngineeringValue = 2;
}

function Engineering3() {
    document.getElementById("dropdownMenuEngineering").innerHTML = 'Engineering 3'
    return EngineeringValue = 3;
}

function Engineering4() {
    document.getElementById("dropdownMenuEngineering").innerHTML = 'Engineering 4'
    return EngineeringValue = 4;
}

function Engineering5() {
    document.getElementById("dropdownMenuEngineering").innerHTML = 'Engineering 5'
    return EngineeringValue = 5;
}

function ShieldDamage0() {
    document.getElementById("dropdownMenuShieldDamage").innerHTML = '0 Shields damaged'
    return ShieldDam = 0;
}

function ShieldDamage1() {
    document.getElementById("dropdownMenuShieldDamage").innerHTML = '1 Shield damaged'
    return ShieldDam = 1;
}

function ShieldDamage2() {
    document.getElementById("dropdownMenuShieldDamage").innerHTML = '2 Shields damaged'
    return ShieldDam = 2;
}

function ShieldDamage3() {
    document.getElementById("dropdownMenuShieldDamage").innerHTML = '3 Shields damaged'
    return ShieldDam = 3;
}

function ShieldDamage4() {
    document.getElementById("dropdownMenuShieldDamage").innerHTML = '4 Shields damaged'
    return ShieldDam = 4;
}

function ShieldDamage5() {
    document.getElementById("dropdownMenuShieldDamage").innerHTML = '4+ Shields damaged'
    return ShieldDam = 5;
}

function DamageCards0() {
    document.getElementById("dropdownMenuDamageCards").innerHTML = '0 Damage cards'
    return CardDam = 0;
}

function DamageCards1() {
    document.getElementById("dropdownMenuDamageCards").innerHTML = '1 Damage card'
    return CardDam = 1;
}

function DamageCards2() {
    document.getElementById("dropdownMenuDamageCards").innerHTML = '2 Damage cards'
    return CardDam = 2;
}

function DamageCards3() {
    document.getElementById("dropdownMenuDamageCards").innerHTML = '2+ Damage cards'
    return CardDam = 3;
}




if (hdg == 0 || hdg == 360 || hdg == -360) {
    var L1 = {moveX:-3 ,moveY:15};
    var L2 = {moveX:-6 ,moveY:14};
    var S = {moveX:0 ,moveY:16};
    var R1 = {moveX:3 ,moveY:15};
    var R2 = {moveX:6 ,moveY:14};
} else if (hdg == 22.5 || hdg == -337.5) {
    var L1 = {moveX:3 ,moveY:15};
    var L2 = {moveX:1 ,moveY:16};
    var S = {moveX:6 ,moveY:13};
    var R1 = {moveX:9 ,moveY:12};
    var R2 = {moveX:11 ,moveY:11};
} else if (hdg == 45 || hdg == -315) {
    var L1 = {moveX:8 ,moveY:13};
    var L2 = {moveX:6 ,moveY:15};
    var S = {moveX:11 ,moveY:10};
    var R1 = {moveX:13 ,moveY:9};
    var R2 = {moveX:15 ,moveY:7};
} else if (hdg == 67.5 || hdg == -292.5) {
    var L1 = {moveX:13 ,moveY:9};
    var L2 = {moveX:11 ,moveY:11};
    var S = {moveX:14 ,moveY:6};
    var R1 = {moveX:15 ,moveY:4};
    var R2 = {moveX:16 ,moveY:1};
} else if (hdg == 90 || hdg == -270) {
    var L1 = {moveX:15 ,moveY:3};
    var L2 = {moveX:14 ,moveY:6};
    var S = {moveX:16 ,moveY:0};
    var R1 = {moveX:15 ,moveY:-3};
    var R2 = {moveX:14 ,moveY:-6};
} else if (hdg == 112.5 || hdg == -247.5) {
    var L1 = {moveX:15 ,moveY:-3};
    var L2 = {moveX:16 ,moveY:-1};
    var S = {moveX:13 ,moveY:-6};
    var R1 = {moveX:12 ,moveY:-9};
    var R2 = {moveX:11 ,moveY:-11};
} else if (hdg == 135 || hdg == -225) {
    var L1 = {moveX:13 ,moveY:-8};
    var L2 = {moveX:15 ,moveY:-6};
    var S = {moveX:10 ,moveY:-11};
    var R1 = {moveX:9 ,moveY:-13};
    var R2 = {moveX:7 ,moveY:-15};
} else if (hdg == 157.5 || hdg == -202.5) {
    var L1 = {moveX:9 ,moveY:-13};
    var L2 = {moveX:11 ,moveY:-11};
    var S = {moveX:6 ,moveY:-14};
    var R1 = {moveX:4 ,moveY:-15};
    var R2 = {moveX:1 ,moveY:-16};
} else if (hdg == 180 || hdg == -180) {
    var L1 = {moveX:3 ,moveY:-15};
    var L2 = {moveX:6 ,moveY:-14};
    var S = {moveX:0 ,moveY:-16};
    var R1 = {moveX:-3 ,moveY:-15};
    var R2 = {moveX:-6 ,moveY:-14};
} else if (hdg == 202.5 || hdg == -157.5) {
    var L1 = {moveX:-3 ,moveY:-15};
    var L2 = {moveX:-1 ,moveY:-16};
    var S = {moveX:-6 ,moveY:-13};
    var R1 = {moveX:-9 ,moveY:-12};
    var R2 = {moveX:-11 ,moveY:-11};
} else if (hdg == 225 || hdg == -135) {
    var L1 = {moveX:-8 ,moveY:-13};
    var L2 = {moveX:-6 ,moveY:-15};
    var S = {moveX:-11 ,moveY:-10};
    var R1 = {moveX:-13 ,moveY:-9};
    var R2 = {moveX:-15 ,moveY:-7};
} else if (hdg == 247.5 || hdg == -112.5) {
    var L1 = {moveX:-13 ,moveY:-9};
    var L2 = {moveX:-11 ,moveY:-11};
    var S = {moveX:-14 ,moveY:-6};
    var R1 = {moveX:-15 ,moveY:-4};
    var R2 = {moveX:-16 ,moveY:-1};
} else if (hdg == 270 || hdg == -90) {
    var L1 = {moveX:-15 ,moveY:3};
    var L2 = {moveX:-14 ,moveY:6};
    var S = {moveX:-16 ,moveY:0};
    var R1 = {moveX:-15 ,moveY:-3};
    var R2 = {moveX:-14 ,moveY:-6};
} else if (hdg == 292.5 || hdg == -67.5) {
    var L1 = {moveX:-15 ,moveY:3};
    var L2 = {moveX:-16 ,moveY:1};
    var S = {moveX:-13 ,moveY:6};
    var R1 = {moveX:-12 ,moveY:9};
    var R2 = {moveX:-11 ,moveY:11};
} else if (hdg == 315 || hdg == -45) {
    var L1 = {moveX:-13 ,moveY:8};
    var L2 = {moveX:-15 ,moveY:6};
    var S = {moveX:-10 ,moveY:11};
    var R1 = {moveX:-9 ,moveY:13};
    var R2 = {moveX:-7 ,moveY:15};
} else if (hdg == 337.5 || hdg == -22.5) {
    var L1 = {moveX:-9 ,moveY:13};
    var L2 = {moveX:-11 ,moveY:11};
    var S = {moveX:-6 ,moveY:14};
    var R1 = {moveX:-4 ,moveY:15};
    var R2 = {moveX:-1 ,moveY:16};
}


  function CR90() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'Solo Ship is a CR90 Corellian Corvette'
    return soloShip = "CR90";
  }
  
  function AFM2() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'Solo Ship is an Assault Frigate Mark II'
    return soloShip = "AFM2";
  }
  
  function Gladiator() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'Solo Ship is a Gladiator-class Star Destroyer'
    return soloShip = "Gladiator";
  }
  
  function Nebulon() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'Solo Ship is a Nebulon-B Frigate'
    return soloShip = "Nebulon";
  }
  
  function Victory() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'Solo Ship is a Victory-class Star Destroyer'
    return soloShip = "Victory";
  }
  
  function MC80() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'Solo Ship is Home One'
    return soloShip = "MC80";
  }
  
  function Imperial() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'Solo Ship is an Imperial-class Star Destroyer'
    return soloShip = "Imperial";
  }
  
  function Raider() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'Solo Ship is an Imperial Raider'
    return soloShip = "Raider";
  }
  
  function MC30() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'Solo Ship is an MC30 Frigate'
    return soloShip = "MC30";
  }
  
  function AC() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'Solo Ship is an Imperial Assault Carriers'
    return soloShip = "AC";
  }
  
  function GR75() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'Solo Ship is a Rebel Transports'
    return soloShip = "GR75";
  }
  
  function Interdictor() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'Solo Ship is an Interdictor'
    return soloShip = "Interdictor";
  }
  
  function MC80bat() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'Solo Ship is an MC80 Liberty'
    return soloShip = "MC80bat";
  }
  
  function debug() {
    document.getElementById("dropdownMenuSoloShip").innerHTML = 'debug ship'
    return soloShip = "debug";
  }
  
  function soloFrontShields() {
	if (SFShields == 0){
	  document.getElementById("SFS").innerHTML = 'Front shields 6 points left';
	  SFShields = 6;
	} else if (SFShields == 6){
	  document.getElementById("SFS").innerHTML = 'Front shields 5 points left';
	  SFShields = 5;
	} else if (SFShields == 5){
	  document.getElementById("SFS").innerHTML = 'Front shields 4 points left';
	  SFShields = 4;
	} else if (SFShields == 4){
	  document.getElementById("SFS").innerHTML = 'Front shields 3 points left';
	  SFShields = 3;
	} else if (SFShields == 3){
	  document.getElementById("SFS").innerHTML = 'Front shields 2 points left';
	  SFShields = 2;
	} else if (SFShields == 2){
	  document.getElementById("SFS").innerHTML = 'Front shields 1 points left';
	  SFShields = 1;
	} else if (SFShields == 1){
	  document.getElementById("SFS").innerHTML = 'Front shields 0 points left';
	  SFShields = 0;
	}
    }
    
    function soloLeftShields() {
	if (SLShields == 0){
	  document.getElementById("SLS").innerHTML = '6 points left';
	  SLShields = 6;
	} else if (SLShields == 6){
	  document.getElementById("SLS").innerHTML = '5 points left';
	  SLShields = 5;
	} else if (SLShields == 5){
	  document.getElementById("SLS").innerHTML = '4 points left';
	  SLShields = 4;
	} else if (SLShields == 4){
	  document.getElementById("SLS").innerHTML = '3 points left';
	  SLShields = 3;
	} else if (SLShields == 3){
	  document.getElementById("SLS").innerHTML = '2 points left';
	  SLShields = 2;
	} else if (SLShields == 2){
	  document.getElementById("SLS").innerHTML = '1 points left';
	  SLShields = 1;
	} else if (SLShields == 1){
	  document.getElementById("SLS").innerHTML = '0 points left';
	  SLShields = 0;
	}
    }
    
    function soloRightShields() {
	if (SRShields == 0){
	  document.getElementById("SRS").innerHTML = '6 points left';
	  SRShields = 6;
	} else if (SRShields == 6){
	  document.getElementById("SRS").innerHTML = '5 points left';
	  SRShields = 5;
	} else if (SRShields == 5){
	  document.getElementById("SRS").innerHTML = '4 points left';
	  SRShields = 4;
	} else if (SRShields == 4){
	  document.getElementById("SRS").innerHTML = '3 points left';
	  SRShields = 3;
	} else if (SRShields == 3){
	  document.getElementById("SRS").innerHTML = '2 points left';
	  SRShields = 2;
	} else if (SRShields == 2){
	  document.getElementById("SRS").innerHTML = '1 points left';
	  SRShields = 1;
	} else if (SRShields == 1){
	  document.getElementById("SRS").innerHTML = '0 points left';
	  SRShields = 0;
	}
    }
    
    function soloBackShields() {
	if (SBShields == 0){
	  document.getElementById("SBS").innerHTML = '6 points left';
	  SBShields = 6;
	} else if (SBShields == 6){
	  document.getElementById("SBS").innerHTML = '5 points left';
	  SBShields = 5;
	} else if (SBShields == 5){
	  document.getElementById("SBS").innerHTML = '4 points left';
	  SBShields = 4;
	} else if (SBShields == 4){
	  document.getElementById("SBS").innerHTML = '3 points left';
	  SBShields = 3;
	} else if (SBShields == 3){
	  document.getElementById("SBS").innerHTML = '2 points left';
	  SBShields = 2;
	} else if (SBShields == 2){
	  document.getElementById("SBS").innerHTML = '1 points left';
	  SBShields = 1;
	} else if (SBShields == 1){
	  document.getElementById("SBS").innerHTML = '0 points left';
	  SBShields = 0;
	}
    }
    
    function targetFrontShields() {
	if (TFShields == 0){
	  document.getElementById("TFS").innerHTML = 'Front shields 6 points left';
	  TFShields = 6;
	} else if (TFShields == 6){
	  document.getElementById("TFS").innerHTML = 'Front shields 5 points left';
	  TFShields = 5;
	} else if (TFShields == 5){
	  document.getElementById("TFS").innerHTML = 'Front shields 4 points left';
	  TFShields = 4;
	} else if (TFShields == 4){
	  document.getElementById("TFS").innerHTML = 'Front shields 3 points left';
	  TFShields = 3;
	} else if (TFShields == 3){
	  document.getElementById("TFS").innerHTML = 'Front shields 2 points left';
	  TFShields = 2;
	} else if (TFShields == 2){
	  document.getElementById("TFS").innerHTML = 'Front shields 1 points left';
	  TFShields = 1;
	} else if (TFShields == 1){
	  document.getElementById("TFS").innerHTML = 'Front shields 0 points left';
	  TFShields = 0;
	}
    }
    
    function targetLeftShields() {
	if (TLShields == 0){
	  document.getElementById("TLS").innerHTML = '6 points left';
	  TLShields = 6;
	} else if (TLShields == 6){
	  document.getElementById("TLS").innerHTML = '5 points left';
	  TLShields = 5;
	} else if (TLShields == 5){
	  document.getElementById("TLS").innerHTML = '4 points left';
	  TLShields = 4;
	} else if (TLShields == 4){
	  document.getElementById("TLS").innerHTML = '3 points left';
	  TLShields = 3;
	} else if (TLShields == 3){
	  document.getElementById("TLS").innerHTML = '2 points left';
	  TLShields = 2;
	} else if (TLShields == 2){
	  document.getElementById("TLS").innerHTML = '1 points left';
	  TLShields = 1;
	} else if (TLShields == 1){
	  document.getElementById("TLS").innerHTML = '0 points left';
	  TLShields = 0;
	}
    }
    
    function targetRightShields() {
	if (TRShields == 0){
	  document.getElementById("TRS").innerHTML = '6 points left';
	  TRShields = 6;
	} else if (TRShields == 6){
	  document.getElementById("TRS").innerHTML = '5 points left';
	  TRShields = 5;
	} else if (TRShields == 5){
	  document.getElementById("TRS").innerHTML = '4 points left';
	  TRShields = 4;
	} else if (TRShields == 4){
	  document.getElementById("TRS").innerHTML = '3 points left';
	  TRShields = 3;
	} else if (TRShields == 3){
	  document.getElementById("TRS").innerHTML = '2 points left';
	  TRShields = 2;
	} else if (TRShields == 2){
	  document.getElementById("TRS").innerHTML = '1 points left';
	  TRShields = 1;
	} else if (TRShields == 1){
	  document.getElementById("TRS").innerHTML = '0 points left';
	  TRShields = 0;
	}
    }
    
    function targetBackShields() {
	if (TBShields == 0){
	  document.getElementById("TBS").innerHTML = '6 points left';
	  TBShields = 6;
	} else if (TBShields == 6){
	  document.getElementById("TBS").innerHTML = '5 points left';
	  TBShields = 5;
	} else if (TBShields == 5){
	  document.getElementById("TBS").innerHTML = '4 points left';
	  TBShields = 4;
	} else if (TBShields == 4){
	  document.getElementById("TBS").innerHTML = '3 points left';
	  TBShields = 3;
	} else if (TBShields == 3){
	  document.getElementById("TBS").innerHTML = '2 points left';
	  TBShields = 2;
	} else if (TBShields == 2){
	  document.getElementById("TBS").innerHTML = '1 points left';
	  TBShields = 1;
	} else if (TBShields == 1){
	  document.getElementById("TBS").innerHTML = '0 points left';
	  TBShields = 0;
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
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 25 cm or 10 inch'
    return distance = 25;
  }
  
  function dist26() {
    document.getElementById("dropdownMenu1").innerHTML = 'Target Distance is 26 cm or more'
    return distance = 30;
  }
  
  function relHead1() {
    heading = 1
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 0 to 45 degrees right'
     // augmentTargetX = 5.86;a
     // augmentTargetY = 13.8;
     augmentTargetFX = 4.6;
     augmentTargetFY = 11.1;
     
     augmentTargetLX = -11.1;
     augmentTargetLY = 4.6;
     
     augmentTargetRX = 11.1;
     augmentTargetRY = -4.6;
     
     augmentTargetBX = -4.6;
     augmentTargetBY = -11.1;
  }
  
  function relHead2() {
    heading = 2
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 45 to 90 degrees right'
     // augmentTargetX = 13.9;
     // augmentTargetY = 5.62;
     augmentTargetFX = 11.1;
     augmentTargetFY = 4.6;
     
     augmentTargetLX = -4.6;
     augmentTargetLY = 11.1;
     
     augmentTargetRX = 4.6;
     augmentTargetRY = -11.1;
     
     augmentTargetBX = -11.1;
     augmentTargetBY = -4.6;
    
  }
  
  function relHead3() {
    heading = 3
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 90 to 135 degrees right'
      //augmentTargetX = 13.9;
     // augmentTargetY = -5.62;
     augmentTargetFX = 11.1;
     augmentTargetFY = -4.6;
     
     augmentTargetLX = 4.6;
     augmentTargetLY = 11.1;
     
     augmentTargetRX = -4.6;
     augmentTargetRY = -11.1;
     
     augmentTargetBX = -11.1;
     augmentTargetBY = 4.6;
  }
  
  function relHead4() {
    heading = 4
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 135 to 180 degrees right'
     // augmentTargetX = 5.86;
     // augmentTargetY = -13.8;
     augmentTargetFX = 4.6;
     augmentTargetFY = -11.1;
     
     augmentTargetLX = 11.1;
     augmentTargetLY = 4.6;
     
     augmentTargetRX = -11.1;
     augmentTargetRY = -4.6;
     
     augmentTargetBX = -4.6;
     augmentTargetBY = 11.1;
  }
  
  function relHead5() {
    heading = 5
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 135 to 180 degrees left'
     // augmentTargetX = -5.86;
     // augmentTargetY = -13.8;
     augmentTargetFX = -4.6;
     augmentTargetFY = -11.1;
     
     augmentTargetLX = 11.1;
     augmentTargetLY = -4.6;
     
     augmentTargetRX = -11.1;
     augmentTargetRY = 4.6;
     
     augmentTargetBX = 4.6;
     augmentTargetBY = 11.1;
  }
  
  function relHead6() {
    heading = 6
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 90 to 135 degrees left'
     // augmentTargetX = -13.9;
     // augmentTargetY = -5.62;
     augmentTargetFX = -11.1;
     augmentTargetFY = -4.6;
     
     augmentTargetLX = 4.6;
     augmentTargetLY = -11.1;
     
     augmentTargetRX = -4.6;
     augmentTargetRY = 11.1;
     
     augmentTargetBX = 11.1;
     augmentTargetBY = 4.6;
  }
  
  function relHead7() {
    heading = 7
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 45 to 90 degrees left'
     // augmentTargetX = -13.9;
     // augmentTargetY = 5.62;
     augmentTargetFX = -11.1;
     augmentTargetFY = 4.6;
     
     augmentTargetLX = -4.6;
     augmentTargetLY = -11.1;
     
     augmentTargetRX = 4.6;
     augmentTargetRY = 11.1;
     
     augmentTargetBX = 11.1;
     augmentTargetBY = -4.6;
  }
  
  function relHead8() {
    heading = 8
    document.getElementById("dropdownMenu2").innerHTML = 'Target Rel. HDG is 0 to 45 degrees left'
     // augmentTargetX = -5.86;
     // augmentTargetY = 13.8;
     augmentTargetFX = -4.6;
     augmentTargetFY = 11.1;
     
     augmentTargetLX = -11.1;
     augmentTargetLY = -4.6;
     
     augmentTargetRX = 11.1;
     augmentTargetRY = 4.6;
     
     augmentTargetBX = 4.6;
     augmentTargetBY = -11.1;
  }
  


    function selectSoloSpeed() {
	if (speed == 0){
	  document.getElementById("cyclingSoloSpeed").innerHTML = 'Solo ship speed 1';
	  speed = 1;
	} else if (speed == 1){
	  document.getElementById("cyclingSoloSpeed").innerHTML = 'Solo ship speed 2';
	  speed = 2;
	} else if (speed == 2){
	  document.getElementById("cyclingSoloSpeed").innerHTML = 'Solo ship speed 3';
	  speed = 3;
	} else if (speed == 3){
	  document.getElementById("cyclingSoloSpeed").innerHTML = 'Solo ship speed 4';
	  speed = 4;
	} else if (speed == 4){
	  document.getElementById("cyclingSoloSpeed").innerHTML = 'Solo ship speed 0';
	  speed = 0;
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
  

function computeStage() {
    
    switch (soloShip) {
	case "CR90":
	    if (speed == 1) {
		man1 = 2;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 2) {
		man1 = 1;
		man2 = 2;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 3) {
		man1 = 0;
		man2 = 1;
		man3 = 2;
		man4 = 0;
	    } else if (speed == 4) {
		man1 = 0;
		man2 = 1;
		man3 = 1;
		man4 = 2;
	    }
	    break;
	case "AFM2":
	    if (speed == 1) {
		man1 = 1;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 2) {
		man1 = 1;
		man2 = 1;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 3) {
		man1 = 0;
		man2 = 1;
		man3 = 1;
		man4 = 0;
	    } else if (speed == 4) {
		man1 = 0;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    }
	    break;
	case "Gladiator":
	    if (speed == 1) {
		man1 = 2;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 2) {
		man1 = 1;
		man2 = 1;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 3) {
		man1 = 0;
		man2 = 1;
		man3 = 1;
		man4 = 0;
	    } else if (speed == 4) {
		man1 = 0;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    }
	    break;
	case "Nebulon":
	    if (speed == 1) {
		man1 = 1;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 2) {
		man1 = 1;
		man2 = 1;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 3) {
		man1 = 0;
		man2 = 1;
		man3 = 2;
		man4 = 0;
	    } else if (speed == 4) {
		man1 = 0;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    }
	    break;
	case "Victory":
	    if (speed == 1) {
		man1 = 1;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 2) {
		man1 = 0;
		man2 = 1;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 3) {
		man1 = 0;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 4) {
		man1 = 0;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    }
	    break;
	case "MC80":
	    if (speed == 1) {
		man1 = 1;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 2) {
		man1 = 1;
		man2 = 1;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 3) {
		man1 = 0;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 4) {
		man1 = 0;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    }
	    break;
	case "Imperial":
	    if (speed == 1) {
		man1 = 1;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 2) {
		man1 = 1;
		man2 = 1;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 3) {
		man1 = 0;
		man2 = 1;
		man3 = 1;
		man4 = 0;
	    } else if (speed == 4) {
		man1 = 0;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    }
	    break;
	case "Raider":
	    if (speed == 1) {
		man1 = 2;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 2) {
		man1 = 2;
		man2 = 2;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 3) {
		man1 = 0;
		man2 = 1;
		man3 = 1;
		man4 = 0;
	    } else if (speed == 4) {
		man1 = 0;
		man2 = 1;
		man3 = 1;
		man4 = 1;
	    }
	    break;
	case "MC30":
	    if (speed == 1) {
		man1 = 1;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 2) {
		man1 = 1;
		man2 = 1;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 3) {
		man1 = 0;
		man2 = 1;
		man3 = 2;
		man4 = 0;
	    } else if (speed == 4) {
		man1 = 0;
		man2 = 1;
		man3 = 1;
		man4 = 0;
	    }
	    break;
	case "AC":
	    if (speed == 1) {
		man1 = 2;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 2) {
		man1 = 1;
		man2 = 1;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 3) {
		man1 = 1;
		man2 = 1;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 4) {
		man1 = 0;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    }
	    break;
	case "GR75":
	    if (speed == 1) {
		man1 = 2;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 2) {
		man1 = 1;
		man2 = 2;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 3) {
		man1 = 0;
		man2 = 1;
		man3 = 2;
		man4 = 0;
	    } else if (speed == 4) {
		man1 = 0;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    }
	    break;
	case "Interdictor":
	    if (speed == 1) {
		man1 = 1;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 2) {
		man1 = 1;
		man2 = 1;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 3) {
		man1 = 0;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 4) {
		man1 = 0;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    }
	    break;
	case "MC80bat":
	    if (speed == 1) {
		man1 = 1;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 2) {
		man1 = 1;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    } else if (speed == 3) {
		man1 = 1;
		man2 = 0;
		man3 = 1;
		man4 = 0;
	    } else if (speed == 4) {
		man1 = 0;
		man2 = 0;
		man3 = 0;
		man4 = 0;
	    }
	    break;
	case "debug":
	    if (speed == 1) {
		man1 = 2;
		man2 = 2;
		man3 = 2;
		man4 = 2;
	    } else if (speed == 2) {
		man1 = 2;
		man2 = 2;
		man3 = 2;
		man4 = 2;
	    } else if (speed == 3) {
		man1 = 2;
		man2 = 2;
		man3 = 2;
		man4 = 2;
	    } else if (speed == 4) {
		man1 = 2;
		man2 = 2;
		man3 = 2;
		man4 = 2;
	    }
	    break;
    }
    
    
    if (val == 1) {
      targetX = (Math.cos(1.309) * distance) + augmentTargetX;
      targetY = (Math.sin(1.309) * distance) + augmentTargetY;
      
      targetFX = (Math.cos(1.309) * distance) + augmentTargetFX;
      targetFY = (Math.sin(1.309) * distance) + augmentTargetFY;
      
      targetLX = (Math.cos(1.309) * distance) + augmentTargetLX;
      targetLY = (Math.sin(1.309) * distance) + augmentTargetLY;
      
      targetRX = (Math.cos(1.309) * distance) + augmentTargetRX;
      targetRY = (Math.sin(1.309) * distance) + augmentTargetRY;
      
      targetBX = (Math.cos(1.309) * distance) + augmentTargetBX;
      targetBY = (Math.sin(1.309) * distance) + augmentTargetBY;
    } else if (val == 2) {
      targetX = (Math.cos(0.785398) * distance) + augmentTargetX;
      targetY = (Math.sin(0.785398) * distance) + augmentTargetY;
      
      targetFX = (Math.cos(0.785398) * distance) + augmentTargetFX;
      targetFY = (Math.sin(0.785398) * distance) + augmentTargetFY;
      
      targetLX = (Math.cos(0.785398) * distance) + augmentTargetLX;
      targetLY = (Math.sin(0.785398) * distance) + augmentTargetLY;
      
      targetRX = (Math.cos(0.785398) * distance) + augmentTargetRX;
      targetRY = (Math.sin(0.785398) * distance) + augmentTargetRY;
      
      targetBX = (Math.cos(0.785398) * distance) + augmentTargetBX;
      targetBY = (Math.sin(0.785398) * distance) + augmentTargetBY;
    } else if (val == 3) {
      targetX = (Math.cos(0.261799) * distance) + augmentTargetX;
      targetY = (Math.sin(0.261799) * distance) + augmentTargetY;
      
      targetFX = (Math.cos(0.261799) * distance) + augmentTargetFX;
      targetFY = (Math.sin(0.261799) * distance) + augmentTargetFY;
      
      targetLX = (Math.cos(0.261799) * distance) + augmentTargetLX;
      targetLY = (Math.sin(0.261799) * distance) + augmentTargetLY;
      
      targetRX = (Math.cos(0.261799) * distance) + augmentTargetRX;
      targetRY = (Math.sin(0.261799) * distance) + augmentTargetRY;
      
      targetBX = (Math.cos(0.261799) * distance) + augmentTargetBX;
      targetBY = (Math.sin(0.261799) * distance) + augmentTargetBY;
    } else if (val == 4) {
      targetX = (Math.cos(-0.261799) * distance) + augmentTargetX;
      targetY = (Math.sin(-0.261799) * distance) + augmentTargetY;
      
      targetFX = (Math.cos(-0.261799) * distance) + augmentTargetFX;
      targetFY = (Math.sin(-0.261799) * distance) + augmentTargetFY;
      
      targetLX = (Math.cos(-0.261799) * distance) + augmentTargetLX;
      targetLY = (Math.sin(-0.261799) * distance) + augmentTargetLY;
      
      targetRX = (Math.cos(-0.261799) * distance) + augmentTargetRX;
      targetRY = (Math.sin(-0.261799) * distance) + augmentTargetRY;
      
      targetBX = (Math.cos(-0.261799) * distance) + augmentTargetBX;
      targetBY = (Math.sin(-0.261799) * distance) + augmentTargetBY;
    } else if (val == 5) {
      targetX = (Math.cos(-0.785398) * distance) + augmentTargetX;
      targetY = (Math.sin(-0.785398) * distance) + augmentTargetY;
      
      targetFX = (Math.cos(-0.785398) * distance) + augmentTargetFX;
      targetFY = (Math.sin(-0.785398) * distance) + augmentTargetFY;
      
      targetLX = (Math.cos(-0.785398) * distance) + augmentTargetLX;
      targetLY = (Math.sin(-0.785398) * distance) + augmentTargetLY;
      
      targetRX = (Math.cos(-0.785398) * distance) + augmentTargetRX;
      targetRY = (Math.sin(-0.785398) * distance) + augmentTargetRY;
      
      targetBX = (Math.cos(-0.785398) * distance) + augmentTargetBX;
      targetBY = (Math.sin(-0.785398) * distance) + augmentTargetBY;
    } else if (val == 6) {
      targetX = (Math.cos(-1.309) * distance) + augmentTargetX;
      targetY = (Math.sin(-1.309) * distance) + augmentTargetY;
      
      targetFX = (Math.cos(-1.309) * distance) + augmentTargetFX;
      targetFY = (Math.sin(-1.309) * distance) + augmentTargetFY;
      
      targetX = (Math.cos(-1.309) * distance) + augmentTargetLX;
      targetY = (Math.sin(-1.309) * distance) + augmentTargetLY;
      
      targetX = (Math.cos(-1.309) * distance) + augmentTargetRX;
      targetY = (Math.sin(-1.309) * distance) + augmentTargetRY;
      
      targetX = (Math.cos(-1.309) * distance) + augmentTargetBX;
      targetY = (Math.sin(-1.309) * distance) + augmentTargetBY;
    } else if (val == 7) {
      targetX = (Math.cos(1.309) * distance * -(1)) + augmentTargetX;
      targetY = (Math.sin(-1.309) * distance) + augmentTargetY;
      
      targetFX = (Math.cos(1.309) * distance * -(1)) + augmentTargetFX;
      targetFY = (Math.sin(-1.309) * distance) + augmentTargetFY;
      
      targetX = (Math.cos(1.309) * distance * -(1)) + augmentTargetLX;
      targetY = (Math.sin(-1.309) * distance) + augmentTargetLY;
      
      targetX = (Math.cos(1.309) * distance * -(1)) + augmentTargetRX;
      targetY = (Math.sin(-1.309) * distance) + augmentTargetRY;
      
      targetX = (Math.cos(1.309) * distance * -(1)) + augmentTargetBX;
      targetY = (Math.sin(-1.309) * distance) + augmentTargetBY;
    } else if (val == 8) {
      targetX = (Math.cos(-0.785398) * distance * -(1)) + augmentTargetX;
      targetY = (Math.sin(-0.785398) * distance) + augmentTargetY;
      
      targetFX = (Math.cos(-0.785398) * distance * -(1)) + augmentTargetFX;
      targetFY = (Math.sin(-0.785398) * distance) + augmentTargetFY;
      
      targetLX = (Math.cos(-0.785398) * distance * -(1)) + augmentTargetLX;
      targetLY = (Math.sin(-0.785398) * distance) + augmentTargetLY;
      
      targetRX = (Math.cos(-0.785398) * distance * -(1)) + augmentTargetRX;
      targetRY = (Math.sin(-0.785398) * distance) + augmentTargetRY;
      
      targetBX = (Math.cos(-0.785398) * distance * -(1)) + augmentTargetBX;
      targetBY = (Math.sin(-0.785398) * distance) + augmentTargetBY;
    } else if (val == 9) {
      targetX = (Math.cos(-0.261799) * distance * -(1)) + augmentTargetX;
      targetY = (Math.sin(-0.261799) * distance) + augmentTargetY;
      
      targetFX = (Math.cos(-0.261799) * distance * -(1)) + augmentTargetFX;
      targetFY = (Math.sin(-0.261799) * distance) + augmentTargetFY;
      
      targetLX = (Math.cos(-0.261799) * distance * -(1)) + augmentTargetLX;
      targetLY = (Math.sin(-0.261799) * distance) + augmentTargetLY;
      
      targetRX = (Math.cos(-0.261799) * distance * -(1)) + augmentTargetRX;
      targetRY = (Math.sin(-0.261799) * distance) + augmentTargetRY;
      
      targetBX = (Math.cos(-0.261799) * distance * -(1)) + augmentTargetBX;
      targetBY = (Math.sin(-0.261799) * distance) + augmentTargetBY;
    } else if (val == 10) {
      targetX = (Math.cos(0.261799) * distance * -(1)) + augmentTargetX;
      targetY = (Math.sin(0.261799) * distance) + augmentTargetY;
      
      targetFX = (Math.cos(0.261799) * distance * -(1)) + augmentTargetFX;
      targetFY = (Math.sin(0.261799) * distance) + augmentTargetFY;
      
      targetLX = (Math.cos(0.261799) * distance * -(1)) + augmentTargetLX;
      targetLY = (Math.sin(0.261799) * distance) + augmentTargetLY;
      
      targetRX = (Math.cos(0.261799) * distance * -(1)) + augmentTargetRX;
      targetRY = (Math.sin(0.261799) * distance) + augmentTargetRY;
      
      targetBX = (Math.cos(0.261799) * distance * -(1)) + augmentTargetBX;
      targetBY = (Math.sin(0.261799) * distance) + augmentTargetBY;
    } else if (val == 11) {
      targetX = (Math.cos(0.785398) * distance * -(1)) + augmentTargetX;
      targetY = (Math.sin(0.785398) * distance) + augmentTargetY;
      
      targetFX = (Math.cos(0.785398) * distance * -(1)) + augmentTargetFX;
      targetFY = (Math.sin(0.785398) * distance) + augmentTargetFY;
      
      targetLX = (Math.cos(0.785398) * distance * -(1)) + augmentTargetLX;
      targetLY = (Math.sin(0.785398) * distance) + augmentTargetLY;
      
      targetRX = (Math.cos(0.785398) * distance * -(1)) + augmentTargetRX;
      targetRY = (Math.sin(0.785398) * distance) + augmentTargetRY;
      
      targetBX = (Math.cos(0.785398) * distance * -(1)) + augmentTargetBX;
      targetBY = (Math.sin(0.785398) * distance) + augmentTargetBY;
    } else if (val == 12) {
      targetX = (Math.cos(1.309) * distance * -(1)) + augmentTargetX;
      targetY = (Math.sin(1.309) * distance) + augmentTargetY;
      
      targetFX = (Math.cos(1.309) * distance * -(1)) + augmentTargetFX;
      targetFY = (Math.sin(1.309) * distance) + augmentTargetFY;
      
      targetLX = (Math.cos(1.309) * distance * -(1)) + augmentTargetLX;
      targetLY = (Math.sin(1.309) * distance) + augmentTargetLY;
      
      targetRX = (Math.cos(1.309) * distance * -(1)) + augmentTargetRX;
      targetRY = (Math.sin(1.309) * distance) + augmentTargetRY;
      
      targetBX = (Math.cos(1.309) * distance * -(1)) + augmentTargetBX;
      targetBY = (Math.sin(1.309) * distance) + augmentTargetBY;
    } else if (val == 0) {
      targetX = 20081988
      targetY = 20081988
    }
    
  var targetShieldArray = [TFShields, TLShields, TRShields, TBShields]
  targetShieldArray.sort(function(a, b){return a-b})
  lowestTargetShield = targetShieldArray[0];
  
  var shieldRoll = Math.floor((Math.random() * 6) + 1);
  
    switch (shieldRoll) {
  
	case 1:
	    if (lowestTargetShield == TFShields) {
	      targetDesiredX = targetFX;
	      targetDesiredY = targetFY;
	    } else if (lowestTargetShield == TLShields) {
	      targetDesiredX = targetLX;
	      targetDesiredY = targetLY;
	    } else if (lowestTargetShield == TRShields) {
	      targetDesiredX = targetRX;
	      targetDesiredY = targetRY;
	    } else if (lowestTargetShield == TBShields) {
	      targetDesiredX = targetBX;
	      targetDesiredY = targetBY;
	    }
	    break;
	case 2:
	    if (lowestTargetShield == TLShields) {
	      targetDesiredX = targetLX;
	      targetDesiredY = targetLY;
	    } else if (lowestTargetShield == TRShields) {
	      targetDesiredX = targetRX;
	      targetDesiredY = targetRY;
	    } else if (lowestTargetShield == TBShields) {
	      targetDesiredX = targetBX;
	      targetDesiredY = targetBY;
	    } else if (lowestTargetShield == TFShields) {
	      targetDesiredX = targetFX;
	      targetDesiredY = targetFY;
	    }
	    break;
	case 3:
	    if (lowestTargetShield == TRShields) {
	      targetDesiredX = targetRX;
	      targetDesiredY = targetRY;
	    } else if (lowestTargetShield == TBShields) {
	      targetDesiredX = targetBX;
	      targetDesiredY = targetBY;
	    } else if (lowestTargetShield == TFShields) {
	      targetDesiredX = targetFX;
	      targetDesiredY = targetFY;
	    } else if (lowestTargetShield == TLShields) {
	      targetDesiredX = targetLX;
	      targetDesiredY = targetLY;
	    }
	    break;
	case 4:
	    if (lowestTargetShield == TBShields) {
	      targetDesiredX = targetBX;
	      targetDesiredY = targetBY;
	    } else if (lowestTargetShield == TFShields) {
	      targetDesiredX = targetFX;
	      targetDesiredY = targetFY;
	    } else if (lowestTargetShield == TLShields) {
	      targetDesiredX = targetLX;
	      targetDesiredY = targetLY;
	    } else if (lowestTargetShield == TRShields) {
	      targetDesiredX = targetRX;
	      targetDesiredY = targetRY;
	    }
	    break;
    }
    

  DistL1 = Math.sqrt(Math.pow((L1.moveX+pos.X-targetDesiredX), 2)+Math.pow((L1.moveY+pos.Y-targetDesiredY), 2));
  DistL2 = Math.sqrt(Math.pow((L2.moveX+pos.X-targetDesiredX), 2)+Math.pow((L2.moveY+pos.Y-targetDesiredY), 2));
  DistS = Math.sqrt(Math.pow((S.moveX+pos.X-targetDesiredX), 2)+Math.pow((S.moveY+pos.Y-targetDesiredY), 2));
  DistR1 = Math.sqrt(Math.pow((R1.moveX+pos.X-targetDesiredX), 2)+Math.pow((R1.moveY+pos.Y-targetDesiredY), 2));
  DistR2 = Math.sqrt(Math.pow((R2.moveX+pos.X-targetDesiredX), 2)+Math.pow((R2.moveY+pos.Y-targetDesiredY), 2));
  
  var distanceArray = [DistL1, DistL2, DistS, DistR1, DistR2];
  
  if (stage == 1 && man1 == 0) {
    var distanceArray = [DistS];
  } else if (stage == 1 && man1 == 1) {
    var distanceArray = [DistL1, DistS, DistR1];
  } else if (stage == 1 && man1 == 2) {
    var distanceArray = [DistL1, DistL2, DistS, DistR1, DistR2];
  } else if (stage == 2 && man2 == 0) {
    var distanceArray = [DistS];
  } else if (stage == 2 && man2 == 1) {
    var distanceArray = [DistL1, DistS, DistR1];
  } else if (stage == 2 && man2 == 2) {
    var distanceArray = [DistL1, DistL2, DistS, DistR1, DistR2];
  } else if (stage == 3 && man3 == 0) {
    var distanceArray = [DistS];
  } else if (stage == 3 && man3 == 1) {
    var distanceArray = [DistL1, DistS, DistR1];
  } else if (stage == 3 && man3 == 2) {
    var distanceArray = [DistL1, DistL2, DistS, DistR1, DistR2];
  } else if (stage == 4 && man4 == 0) {
    var distanceArray = [DistS];
  } else if (stage == 4 && man4 == 1) {
    var distanceArray = [DistL1, DistS, DistR1];
  } else if (stage == 4 && man4 == 2) {
    var distanceArray = [DistL1, DistL2, DistS, DistR1, DistR2];
  }
  
  
  
  
  

  
  distanceArray.sort(function(a, b){return a-b})
  lowestDist = distanceArray[0];
  
  if (lowestDist == DistL1) {
    result = "Click one left";
    pos = {X: L1.moveX + pos.X , Y: L1.moveY + pos.Y};
    hdg = hdg - 22.5;
  } else if (lowestDist == DistL2) {
    result = "Click two left";
    pos = {X: L2.moveX + pos.X , Y: L2.moveY + pos.Y};
    hdg = hdg - 45;
  } else if (lowestDist == DistS) {
    result = "Click straight";
    pos = {X: S.moveX + pos.X , Y: S.moveY + pos.Y};
  } else if (lowestDist == DistR1) {
    result = "Click one right";
    pos = {X: R1.moveX + pos.X , Y: R1.moveY + pos.Y};
    hdg = hdg + 22.5;
  } else if (lowestDist == DistR2) {
    result = "Click two right";
    pos = {X: R2.moveX + pos.X , Y: R2.moveY + pos.Y};
    hdg = hdg + 45;
  }
  
  
}
  
  
function computeManeuver() {
    
    if (soloShip == "Victory" || soloShip == "MC80" || soloShip == "Interdictor") {
	noThirdStage = "yes";
    } else {
	noThirdStage = "no";
    }
    
    if (soloShip == "AFM2" || soloShip == "Gladiator" || soloShip == "Nebulon" || soloShip == "Victory" || soloShip == "MC80" || soloShip == "Imperial"
	|| soloShip == "AC" || soloShip == "GR75" || soloShip == "Interdictor" || soloShip == "MC80bat") {
	noFourthStage = "yes";
    } else {
	noFourthStage = "no";
    }
    
    if (speed == 0) {
	document.getElementById("maneuver1").innerHTML = '<div class="alert alert-success text-center">Solo ship has 0 speed and does not move.</div>';
	document.getElementById("maneuver2").innerHTML = '';
	document.getElementById("maneuver3").innerHTML = '';
	document.getElementById("maneuver4").innerHTML = '';
    }
    if (speed > 0) {
	stage = stage + 1;
	computeStage();
	//var resultshown1 = '<div class="alert alert-success text-center">Stage 1: '+ result + ' hdg: ' + hdg + ' X: ' + pos.X + ' Y: ' + pos.Y + '</div>'
	//var resultshown1 = '<div class="alert alert-success text-center">Stage 1: '+ 'emptyManeuver: ' + emptyManeuver + '</div>'
	var resultshown1 = '<div class="alert alert-success text-center">Stage 1: '+ result + '</div>'
	document.getElementById("maneuver1").innerHTML = resultshown1;
	//document.getElementById("maneuverImage").innerHTML = resultingImage;
	
    }
    
    if (speed > 1) {
	stage = stage + 1;
	computeStage();
	//var resultshown2 = '<div class="alert alert-success text-center">Stage 2: '+ result + ' hdg: ' + hdg + ' X: ' + pos.X + ' Y: ' + pos.Y + '</div>'
	//var resultshown2 = '<div class="alert alert-success text-center">Stage 2: '+ 'stage' + stage + '</div>'
	var resultshown2 = '<div class="alert alert-success text-center">Stage 2: '+ result + '</div>'
	document.getElementById("maneuver2").innerHTML = resultshown2;
	
    }
    
    if (speed > 2 && noThirdStage == "no") {
	stage = stage + 1;
	computeStage();
	//var resultshown3 = '<div class="alert alert-success text-center">Stage 3: '+ result + ' hdg: ' + hdg + ' X: ' + pos.X + ' Y: ' + pos.Y + '</div>'
	//var resultshown3 = '<div class="alert alert-success text-center">Stage 3: '+ 'stage' + stage + '</div>'
	var resultshown3 = '<div class="alert alert-success text-center">Stage 3: '+ result + '</div>'
	document.getElementById("maneuver3").innerHTML = resultshown3;
    } else if (speed > 2 && noThirdStage == "yes") {
	document.getElementById("maneuver1").innerHTML = '<div class="alert alert-danger text-center">Wrong speed selected</div>';
	document.getElementById("maneuver2").innerHTML = '';
	document.getElementById("maneuver3").innerHTML = '';
	document.getElementById("maneuver4").innerHTML = '';
    }
    
    if (speed > 3 && noFourthStage == "no") {
	stage = stage + 1;
	computeStage();
	//var resultshown4 = '<div class="alert alert-success text-center">Stage 4: '+ result + ' hdg: ' + hdg + ' X: ' + pos.X + ' Y: ' + pos.Y + '</div>'
	//var resultshown4 = '<div class="alert alert-success text-center">Stage 4: '+ 'stage' + stage + '</div>'
	var resultshown4 = '<div class="alert alert-success text-center">Stage 4: '+ result + '</div>'
	document.getElementById("maneuver4").innerHTML = resultshown4;
    } else if (speed > 3 && noFourthStage == "yes") {
	document.getElementById("maneuver1").innerHTML = '<div class="alert alert-danger text-center">Wrong speed selected</div>';
	document.getElementById("maneuver2").innerHTML = '';
	document.getElementById("maneuver3").innerHTML = '';
	document.getElementById("maneuver4").innerHTML = '';
    }
    
    
    
    
    
   hdg = 0;
   pos = {X:0 ,Y:0};
   stage = 0;
    
}

function computeCommand (){
    
    if (soloShip == "Victory" || soloShip == "MC80" || soloShip == "Interdictor") {
	noThirdStage = "yes";
    } else {
	noThirdStage = "no";
    }
    
    if (soloShip == "AFM2" || soloShip == "Gladiator" || soloShip == "Nebulon" || soloShip == "Victory" || soloShip == "MC80" || soloShip == "Imperial"
	|| soloShip == "AC" || soloShip == "GR75" || soloShip == "Interdictor" || soloShip == "MC80bat") {
	noFourthStage = "yes";
    } else {
	noFourthStage = "no";
    }
    
    //var incSpeed = {action:"Increase speed", priority:5};
    //var decSpeed = {action:"Decrease speed", priority:5};
    
    
    
    //var crewActions = [];


   
    
    
    
    
    if (soloSquadrons > 0) {
	var crewAction = "Squadron. Activate nearest squadron(s) and engage solo ship's target or engaging fighting, whichever are closer. If unable this turn, do so at the next possible opportunity using a Command Token."
    }
    
    if (CardDam > 0 && EngineeringValue > 2) {
	var crewAction = "Repair card damage."
    } else if (ShieldDam > 0 && EngineeringValue > 1) {
	var crewAction = "Recover the weakest shield"
    } else if (ShieldDam > 0 && EngineeringValue == 1) {
	var crewAction = "Recover the weakest shield by transferring from the strongest shield."
    } else if (distance == 30 && speed != 4 && noThirdStage == "no" && noFourthStage == "no" || distance == 30 && speed < 2 && noThirdStage == "yes" || distance == 30 && speed < 3 && noFourthStage == "yes") {
	//crewActions.push(incSpeed);
	var crewAction = "Increase speed";
    } else if (distance < 15 && speed > 1) {
	//crewActions.push(decSpeed);
	var crewAction = "Decrease speed";
    } else  if (distance <= 25) {
	var crewAction = "Concentrate fire. Roll another die of the strongest color if solo ship attacks this turn. If there is no attack this turn, reroll the weakest die on the next attack using a Command Token.";
    } else {
	var crewAction = "Squadron. Activate nearest squadron(s) and engage solo ship's target or engaging fighting, whichever are closer. If unable this turn, do so at the next possible opportunity using a Command Token."
    }
    
    

    //var crewActionsLength =  crewActions.length;
    //crewActions.sort(function(a, b){return a.priority - b.priority});
    
    //var resultshown = '<div class="alert alert-success text-center">'+ crewActions[0].action + '</div>'
    var resultshown = '<div class="alert alert-success text-center">'+ crewAction + '</div>'
    document.getElementById("crewAction").innerHTML = resultshown;
}

function computeSquadron () {
    var squadronAction = 'Make sure you have filled out the General game info properly.'
    var squadRoll = Math.floor((Math.random() * 2) + 1);
  
    
    if (targetCapital > soloCapital && soloSquadrons > 0 && targetSquadrons <= soloSquadrons) {
	switch (squadRoll) {
	case 1:
	    squadronAction = "Roll a dice or flip a coin for each squadron. Half of the solo squadrons move and attack towards the nearest enemy capital ship. The other half moves and attacks towards the nearest target squadrons.";
	    break;
	case 2:
	    squadronAction = "All solo squadrods move and attack towards nearest enemy capital ship";
	    break;
	}
    } else if (targetCapital <= soloCapital && soloSquadrons > 0 && targetSquadrons <= soloSquadrons) {
	switch (squadRoll) {
	case 1:
	    squadronAction = "Roll a dice or flip a coin for each squadron. Half of the solo squadrons move and attack towards the nearest enemy capital ship. The other half moves and attacks towards the nearest target squadrons.";
	    break;
	case 2:
	    squadronAction = "Roll a dice or flip a coin for each squadron. Half of the solo squadrons move and attack towards the nearest enemy capital ship. The other half moves towards to the nearest friendly capital ship.";
	    break;
	}
    } else if (targetCapital > soloCapital && soloSquadrons > 0 && targetSquadrons > soloSquadrons) {
	switch (squadRoll) {
	case 1:
	    squadronAction = "Roll a dice or flip a coin for each squadron. Half of the solo squadrons move and attack towards the nearest enemy capital ship. The other half moves and attacks towards the nearest target squadrons.";
	    break;
	case 2:
	    squadronAction = "All solo squadrons move and attack towards nearest enemy capital ship";
	    break;
	}
    } else if (targetCapital <= soloCapital && soloSquadrons > 0 && targetSquadrons > soloSquadrons) {
	switch (squadRoll) {
	case 1:
	    squadronAction = "Roll a dice or flip a coin for each squadron. Half of the solo squadrons move and attack towards the nearest enemy squadrons. The other half moves towards the nearest friendly capital ship.";
	    break;
	case 2:
	    squadronAction = "Roll a dice or flip a coin for each squadron. Half of the solo squadrons move and attack towards the nearest enemy capital ship. The other half moves towards to the nearest friendly capital ship.";
	    break;
	}
    }
    
    
    
    var resultshown = '<div class="alert alert-success text-center">'+ squadronAction + '</div>'
    document.getElementById("squadronAction").innerHTML = resultshown;
}