			
			YUI().use('dial', function(Y) {
		      
			  var dial = new Y.Dial({
			      min:0,
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
			
		      
			
			
			
		      
		      

			
			
			
			var zone = "zone0"
			var maneuverability = "undefined"
			var heading = "undefined"
			var range = "undefined"
			var distance = 15
			
			var longRFsideslip = {moveX:5, moveY:15};
			var longRSsideslip = {moveX:3, moveY:11};
			var longLFsideslip = {moveX:-5, moveY:15};
			var longLSsideslip = {moveX:-3, moveY:11};
			
			var longRFturn = {moveX:4, moveY:14};
			var longRSturn = {moveX:3, moveY:10};
			var longLFturn = {moveX:-4, moveY:14};
			var longLSturn = {moveX:-3, moveY:10};
			
			var shortRFturn = {moveX:5, moveY:12};
			var shortRSturn = {moveX:4, moveY:9};
			var shortLFturn = {moveX:-5, moveY:12};
			var shortLSturn = {moveX:-4, moveY:9};
			
			var wideRsideslip = {moveX:8, moveY:12};
			var wideLsideslip = {moveX:-8, moveY:12};
			
			var Fstraight = {moveX:1, moveY:15};
			var Sstraight = {moveX:1, moveY:11};
			
			var climb = {moveX:1, moveY:8};
			var descend = {moveX:1, moveY:15};
			var stall = {moveX:1, moveY:8};
			var immelman = {moveX:1, moveY:8};
			
			function cyclemaneuver() {
			  if (maneuverability == "more"){
			    document.getElementById("cyclingman").innerHTML = 'Target maneuverability same';
			    return maneuverability = "same"
			  } else{
			    document.getElementById("cyclingman").innerHTML = 'Target maneuverability higher';
			    return maneuverability = "more"
			  }
			  
			}
			
			function cyclerange() {
			  if (range == 3){
			    document.getElementById("cyclingrange").innerHTML = 'Distance more than 1/2 ruler';
			    return range = 2
			  } else if (range == 2){
			    document.getElementById("cyclingrange").innerHTML = 'Distance more than 1 ruler';
			    return range = 1
			  } else {
			    document.getElementById("cyclingrange").innerHTML = 'Distance less than 1/2 ruler';
			    return range= 3
			  }
			  
			}
			
			function cycleheading() {
			  if (heading == "more than 90 left"){
			    document.getElementById("cyclinghdg").innerHTML = 'HDG less than 90 Degrees left';
			    return heading = "less than 90 left"
			  } else if (heading == "less than 90 left"){
			    document.getElementById("cyclinghdg").innerHTML = 'HDG less than 90 Degrees right';
			    return heading = "less than 90 right"
			  } else if (heading == "less than 90 right"){
			    document.getElementById("cyclinghdg").innerHTML = 'HDG more than 90 Degrees right';
			    return heading = "more than 90 right"
			  } else {
			    document.getElementById("cyclinghdg").innerHTML = 'HDG more than 90 Degrees left';
			    return heading = "more than 90 left"
			  }
			  
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
			
			  var zone;
			  
			  if (val == 1) {
			    targetX = 6
			    targetY = 20
			  } else if (val == 2) {
			    targetX = 15
			    targetY = 15
			  } else if (val == 3) {
			    targetX = 20
			    targetY = 6
			  } else if (val == 4) {
			    targetX = 20
			    targetY = -6
			  } else if (val == 5) {
			    targetX = 15
			    targetY = -15
			  } else if (val == 6) {
			    targetX = 6
			    targetY = -20
			  } else if (val == 7) {
			    targetX = -6
			    targetY = -20
			  } else if (val == 8) {
			    targetX = -15
			    targetY = -15
			  } else if (val == 9) {
			    targetX = -20
			    targetY = -6
			  } else if (val == 10) {
			    targetX = -20
			    targetY = 6
			  } else if (val == 11) {
			    targetX = -15
			    targetY = 15
			  } else if (val == 12) {
			    targetX = -6
			    targetY = 20
			  } else if (val == 0) {
			    zone = "Tailing. Follow the target aircrafts maneuver as closely as possible. Randomize speed"
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
			
			var lowestDist = Math.min(DistlongRFsideslip, DistlongRSsideslip, DistlongLFsideslip, DistlongLSsideslip, DistlongRFturn, DistlongRSturn, DistlongLFturn, DistlongLSturn, DistshortRFturn, DistshortLFturn, DistshortLFturn, DistwideRsideslip, DistwideLsideslip, DistFstraight, DistSstraight);
			
			var result;
			if (lowestDist == DistlongRFsideslip && targetX > 0) {
			  result = "Perform a long right sideslip at high speed";
			} else if (lowestDist == DistlongRSsideslip && targetX > 0){
			  result = "Perform a long right sideslip at low speed";
			} else if (lowestDist == DistlongRFturn && targetX > 0){
			  result = "Perform a long right turn at high speed";
			} else if (lowestDist == DistlongRSturn && targetX > 0){
			  result = "Perform a long right turn at low speed";
			} else if (lowestDist == DistshortRFturn && targetX > 0){
			  result = "Perform a short right turn at high speed";
			} else if (lowestDist == DistshortRSturn && targetX > 0){
			  result = "Perform a short right turn at low speed";
			}  else if (lowestDist == DistwideRsideslip && targetX > 0){
			  result = "Perform a wide right sideslip";
			} else if (lowestDist == DistFstraight){
			  result = "Perform a straight at high speed";
			} else if (lowestDist == DistSstraight){
			  result = "Perform a straight at low speed";
			} else if (lowestDist == DistlongLFsideslip && targetX < 0) {
			  result = "Perform a long left sideslip at high speed";
			} else if (lowestDist == DistlongLSsideslip && targetX < 0){
			  result = "Perform a long left sideslip at low speed";
			} else if (lowestDist == DistlongLFturn && targetX < 0){
			  result = "Perform a long left turn at high speed";
			} else if (lowestDist == DistlongLSturn && targetX < 0){
			  result = "Perform a long left turn at low speed";
			} else if (lowestDist == DistshortLFturn && targetX < 0){
			  result = "Perform a short left turn at high speed";
			} else if (lowestDist == DistshortLSturn && targetX < 0){
			  result = "Perform a short left turn at low speed";
			} else if (lowestDist == DistwideLsideslip && targetX < 0){
			  result = "Perform a wide left sideslip";
			}
			    
			    var resultshown = '<div class="alert alert-success text-center">' + result + '</div>'
			    document.getElementById("maneuver").innerHTML = resultshown;
			}
			
			
			
			