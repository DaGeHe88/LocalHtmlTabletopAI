			
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
		      

			
			
			var val = 0
			var zone = "zone0"
			var maneuverability = "undefined"
			var heading = "undefined"
			var range = "undefined"
			
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
			
			function maneuverability1() { return maneuverability = "more";}
			
			function maneuverability2() { return maneuverability = "same";}
			
			function zone1() { return zone = "zone1"}
			
			function zone2() { return zone = "zone2"}
			
			function zone3() { return zone = "zone3"}
			
			function zone4() { return zone = "zone4"}
			
			function zone5() { return zone = "zone5"}
			
			function zone6() { return zone = "zone6"}
			
			function zone7() { return zone = "zone7"}
			
			function zone8() { return zone = "zone8"}
			
			function zone9() { return zone = "zone9"}
			
			function zone10() { return zone = "zone10"}
			
			function zone11() { return zone = "zone11"}
			
			function zone12() { return zone = "zone12"}
			
			function range1() {return range = 1}
			
			function range2() {return range = 2}
			
			function range3() {return range = 3}
			
			function heading1() { return heading = "more than 90 left"}
			
			function heading2() { return heading = "less than 90 left"}
			
			function heading3() { return heading = "less than 90 right"}
			
			function heading4() { return heading = "more than 90 right"}
			
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
			    zone = "zone1"
			  } else if (val == 2) {
			    zone = "zone2"
			  } else if (val == 3) {
			    zone = "zone3"
			  } else if (val == 4) {
			    zone = "zone4"
			  } else if (val == 5) {
			    zone = "zone5"
			  } else if (val == 6) {
			    zone = "zone6"
			  } else if (val == 7) {
			    zone = "zone7"
			  } else if (val == 8) {
			    zone = "zone8"
			  } else if (val == 9) {
			    zone = "zone9"
			  } else if (val == 10) {
			    zone = "zone10"
			  } else if (val == 11) {
			    zone = "zone11"
			  } else if (val == 12) {
			    zone = "zone12"
			  } else if (val == 0) {
			    zone = "zone0"
			  }
			  
			
			  var result;
			  
			  // More maneuverable, Heading more than 90 left, Range more than 1 ruler
			  
			  if (maneuverability == "more" && zone == "zone1" && heading == "more than 90 left" && range == 1) {
			    result = highspeedroll() + "speed, straight";
			    } else if (maneuverability == "more" && zone == "zone2" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, shallow right turn";
			    }  else if (maneuverability == "more" && zone == "zone3" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "more" && zone == "zone4" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone5" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone6" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone7" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone8" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone9" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone10" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "more" && zone == "zone11" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, shallow left turn";
			    } else if (maneuverability == "more" && zone == "zone12" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, wide left sideslip";
			    }
			    
			    // Less maneuverable, Heading more than 90 left, Range more than 1 ruler
			    
			    else if (maneuverability == "same" && zone == "zone1" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, straight";
			    } else if (maneuverability == "same" && zone == "zone2" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, normal right turn";
			    }  else if (maneuverability == "same" && zone == "zone3" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "same" && zone == "zone4" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone5" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone6" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone7" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone8" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone9" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone10" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone11" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, shallow left turn";
			    } else if (maneuverability == "same" && zone == "zone12" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, wide left sideslip";
			    }
			    
			    // More maneuverable, Heading less than 90 left, Range more than 1 ruler
			    
			    
			    else if (maneuverability == "more" && zone == "zone1" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, straight";
			    } else if (maneuverability == "more" && zone == "zone2" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, shallow right turn";
			    }  else if (maneuverability == "more" && zone == "zone3" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "more" && zone == "zone4" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone5" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone6" && heading == "less than 90 left" && range == 1) {
			      result = "High speed, straight and reversal";
			    } else if (maneuverability == "more" && zone == "zone7" && heading == "less than 90 left" && range == 1) {
			      result = "High speed, straight and reversal";
			    } else if (maneuverability == "more" && zone == "zone8" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone9" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone10" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone11" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, shallow left turn";
			    } else if (maneuverability == "more" && zone == "zone12" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, long left sideslip";
			    }
			    
			    // Less maneuverable, Heading less than 90 left, Range more than 1 ruler
			    
			    
			    else if (maneuverability == "same" && zone == "zone1" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, straight";
			    } else if (maneuverability == "same" && zone == "zone2" && heading == "more than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, shallow right turn";
			    }  else if (maneuverability == "same" && zone == "zone3" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "same" && zone == "zone4" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone5" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone6" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone7" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone8" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone9" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone10" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone11" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, shallow left turn";
			    } else if (maneuverability == "same" && zone == "zone12" && heading == "less than 90 left" && range == 1) {
			      result = highspeedroll() + "speed, long left sideslip";
			    }
			    
			    // More maneuverable, Heading more than 90 right, Range more than 1 ruler
			    
			    
			    else if (maneuverability == "more" && zone == "zone1" && heading == "more than 90 right" && range == 1) {
			    result = highspeedroll() + "speed, wide right sideslipe";
			    } else if (maneuverability == "more" && zone == "zone2" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, shallow right turn";
			    }  else if (maneuverability == "more" && zone == "zone3" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "more" && zone == "zone4" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone5" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone6" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone7" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone8" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone9" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone10" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tight left turn";
			    } else if (maneuverability == "more" && zone == "zone11" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, shallow left turn";
			    } else if (maneuverability == "more" && zone == "zone12" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, straight";
			    }
			    
			    // Less maneuverable, Heading more than 90 right, Range more than 1 ruler
			    
			     else if (maneuverability == "same" && zone == "zone1" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, wide right sideslip";
			    }else if (maneuverability == "same" && zone == "zone2" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, shallow right turn";
			    }  else if (maneuverability == "same" && zone == "zone3" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "same" && zone == "zone4" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone5" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone6" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone7" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone8" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone9" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone10" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone11" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone12" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, straight";
			    }
			    
			    // More maneuverable, Heading less than 90 right, Range more than 1 ruler
			    
			    else if (maneuverability == "more" && zone == "zone1" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, long right sideslip";
			    } else if (maneuverability == "more" && zone == "zone2" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, shallow right turn";
			    }  else if (maneuverability == "more" && zone == "zone3" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "more" && zone == "zone4" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone5" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone6" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, straight and reversal";
			    } else if (maneuverability == "more" && zone == "zone7" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, straight and reversal";
			    } else if (maneuverability == "more" && zone == "zone8" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone9" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone10" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "more" && zone == "zone11" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, shallow left turn";
			    } else if (maneuverability == "more" && zone == "zone12" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, straight";
			    }
			    
			    // Less maneuverable, Heading less than 90 right, Range more than 1 ruler
			    
			    else if (maneuverability == "same" && zone == "zone1" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, long right sideslip";
			    } else if (maneuverability == "same" && zone == "zone2" && heading == "more than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, shallow right turn";
			    }  else if (maneuverability == "same" && zone == "zone3" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "same" && zone == "zone4" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone5" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone6" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone7" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone8" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone9" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone10" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone11" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, shallow left turn";
			    } else if (maneuverability == "same" && zone == "zone12" && heading == "less than 90 right" && range == 1) {
			      result = highspeedroll() + "speed, straight";
			    }
			    
			    
			    
			  // More maneuverable, Heading more than 90 left, Range more than 1/2 ruler
			  
			      else if (maneuverability == "more" && zone == "zone1" && heading == "more than 90 left" && range == 2) {
			    result = lowspeedroll() + "speed, straight";
			    } else if (maneuverability == "more" && zone == "zone2" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed tightest right turn";
			    }  else if (maneuverability == "more" && zone == "zone3" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone4" && heading == "more than 90 left" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone5" && heading == "more than 90 left" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone6" && heading == "more than 90 left" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone7" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone8" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone9" && heading == "more than 90 left" && range == 2) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone10" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "more" && zone == "zone11" && heading == "more than 90 left" && range == 2) {
			      result = highspeedroll() + "speed normal left turn";
			    } else if (maneuverability == "more" && zone == "zone12" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, normal left turn";
			    }
			    
			    // Less maneuverable, Heading more than 90 left, Range more than 1/2 ruler
			    
			    else if (maneuverability == "same" && zone == "zone1" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, straight";
			    } else if (maneuverability == "same" && zone == "zone2" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, normal right turn";
			    }  else if (maneuverability == "same" && zone == "zone3" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone4" && heading == "more than 90 left" && range == 2) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone5" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone6" && heading == "more than 90 left" && range == 2) {
			      result = "Stall followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone7" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone8" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone9" && heading == "more than 90 left" && range == 2) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone10" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone11" && heading == "more than 90 left" && range == 2) {
			      result = highspeedroll() + "speed normal left turn";
			    } else if (maneuverability == "same" && zone == "zone12" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, normal left turn";
			    }
			    
			    // More maneuverable, Heading less than 90 left, Range more than 1/2 ruler
			    
			    
			    else if (maneuverability == "more" && zone == "zone1" && heading == "less than 90 left" && range == 2) {
			      result = highspeedroll() + "speed, long left sideslip";
			    } else if (maneuverability == "more" && zone == "zone2" && heading == "less than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, straight";
			    }  else if (maneuverability == "more" && zone == "zone3" && heading == "less than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "more" && zone == "zone4" && heading == "less than 90 left" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone5" && heading == "less than 90 left" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone6" && heading == "less than 90 left" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone7" && heading == "less than 90 left" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone8" && heading == "less than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone9" && heading == "less than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "more" && zone == "zone10" && heading == "less than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "more" && zone == "zone11" && heading == "less than 90 left" && range == 2) {
			      result = highspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "more" && zone == "zone12" && heading == "less than 90 left" && range == 2) {
			      result = highspeedroll() + "speed, shallow left turn";
			    }
			    
			    // Less maneuverable, Heading less than 90 left, Range more than 1/2 ruler
			    
			    
			    else if (maneuverability == "same" && zone == "zone1" && heading == "less than 90 left" && range == 2) {
			      result = highspeedroll() + "speed, long left sideslip";
			    } else if (maneuverability == "same" && zone == "zone2" && heading == "more than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, straight";
			    }  else if (maneuverability == "same" && zone == "zone3" && heading == "less than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, shallow right turn";
			    } else if (maneuverability == "same" && zone == "zone4" && heading == "less than 90 left" && range == 2) {
			      result = "Low speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone5" && heading == "less than 90 left" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone6" && heading == "less than 90 left" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone7" && heading == "less than 90 left" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone8" && heading == "less than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone9" && heading == "less than 90 left" && range == 2) {
			      result = lowspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone10" && heading == "less than 90 left" && range == 2) {
			      result = highspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone11" && heading == "less than 90 left" && range == 2) {
			      result = highspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone12" && heading == "less than 90 left" && range == 2) {
			      result = highspeedroll() + "speed, shallow left turn";
			    }
			    
			    // More maneuverable, Heading more than 90 right, Range more than 1/2 ruler
			    
			    
			    else if (maneuverability == "more" && zone == "zone1" && heading == "more than 90 right" && range == 2) {
			    result = lowspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "more" && zone == "zone2" && heading == "more than 90 right" && range == 2) {
			      result = highspeedroll() + "speed, normal right turn";
			    }  else if (maneuverability == "more" && zone == "zone3" && heading == "more than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "more" && zone == "zone4" && heading == "more than 90 right" && range == 2) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone5" && heading == "more than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone6" && heading == "more than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone7" && heading == "more than 90 right" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone8" && heading == "more than 90 right" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone9" && heading == "more than 90 right" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone10" && heading == "more than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone11" && heading == "more than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone12" && heading == "more than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, straight";
			    }
			    
			    // Less maneuverable, Heading more than 90 right, Range more than 1/2 ruler
			    
			    else if (maneuverability == "same" && zone == "zone2" && heading == "more than 90 right" && range == 2) {
			      result = "low speed, normal right turn";
			    }  else if (maneuverability == "same" && zone == "zone3" && heading == "more than 90 right" && range == 2) {
			      result = highspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "same" && zone == "zone4" && heading == "more than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "same" && zone == "zone5" && heading == "more than 90 right" && range == 2) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone6" && heading == "more than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone7" && heading == "more than 90 right" && range == 2) {
			      result = "Stall followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone8" && heading == "more than 90 right" && range == 2) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone9" && heading == "more than 90 right" && range == 2) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone10" && heading == "more than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone11" && heading == "more than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone12" && heading == "more than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, straight";
			    }
			    
			    // More maneuverable, Heading less than 90 right, Range more than 1/2 ruler
			    
			    else if (maneuverability == "more" && zone == "zone1" && heading == "less than 90 right" && range == 2) {
			      result = highspeedroll() + "speed, shallow right turn";
			    } else if (maneuverability == "more" && zone == "zone2" && heading == "less than 90 right" && range == 2) {
			      result = highspeedroll() + "speed, normal right turn";
			    }  else if (maneuverability == "more" && zone == "zone3" && heading == "less than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "more" && zone == "zone4" && heading == "less than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "more" && zone == "zone5" && heading == "less than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone6" && heading == "less than 90 right" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone7" && heading == "less than 90 right" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone8" && heading == "less than 90 right" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone9" && heading == "less than 90 right" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone10" && heading == "less than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "more" && zone == "zone11" && heading == "less than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed straight";
			    } else if (maneuverability == "more" && zone == "zone12" && heading == "less than 90 right" && range == 2) {
			      result = highspeedroll() + "speed, long right sideslip";
			    }
			    
			    // Less maneuverable, Heading less than 90 right, Range more than 1/2 ruler
			    
			    else if (maneuverability == "same" && zone == "zone1" && heading == "less than 90 right" && range == 2) {
			      result = highspeedroll() + "speed, shallow right turn";
			    } else if (maneuverability == "same" && zone == "zone2" && heading == "more than 90 right" && range == 2) {
			      result = highspeedroll() + "speed, normal right turn";
			    }  else if (maneuverability == "same" && zone == "zone3" && heading == "less than 90 right" && range == 2) {
			      result = highspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "same" && zone == "zone4" && heading == "less than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "same" && zone == "zone5" && heading == "less than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone6" && heading == "less than 90 right" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone7" && heading == "less than 90 right" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone8" && heading == "less than 90 right" && range == 2) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone9" && heading == "less than 90 right" && range == 2) {
			      result = "Low speed straight follow by a reversal";
			    } else if (maneuverability == "same" && zone == "zone10" && heading == "less than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, shallow left turn";
			    } else if (maneuverability == "same" && zone == "zone11" && heading == "less than 90 right" && range == 2) {
			      result = lowspeedroll() + "speed, straight";
			    } else if (maneuverability == "same" && zone == "zone12" && heading == "less than 90 right" && range == 2) {
			      result = highspeedroll() + "speed, long right sideslip";
			    }
			    
			    
			    // More maneuverable, Heading more than 90 left, Range less than 1/2 ruler
			  
			      else if (maneuverability == "more" && zone == "zone1" && heading == "more than 90 left" && range == 3) {
			    result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone2" && heading == "more than 90 left" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    }  else if (maneuverability == "more" && zone == "zone3" && heading == "more than 90 left" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone4" && heading == "more than 90 left" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone5" && heading == "more than 90 left" && range == 3) {
			      result = "Stall followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone6" && heading == "more than 90 left" && range == 3) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone7" && heading == "more than 90 left" && range == 3) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone8" && heading == "more than 90 left" && range == 3) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone9" && heading == "more than 90 left" && range == 3) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone10" && heading == "more than 90 left" && range == 3) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone11" && heading == "more than 90 left" && range == 3) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone12" && heading == "more than 90 left" && range == 3) {
			      result = "Stall followed by a reversal";
			    }
			    
			    // Less maneuverable, Heading more than 90 left, Range less than 1/2 ruler
			    
			    else if (maneuverability == "same" && zone == "zone1" && heading == "more than 90 left" && range == 3) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone2" && heading == "more than 90 left" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    }  else if (maneuverability == "same" && zone == "zone3" && heading == "more than 90 left" && range == 3) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone4" && heading == "more than 90 left" && range == 3) {
			      result = "High speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone5" && heading == "more than 90 left" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone6" && heading == "more than 90 left" && range == 3) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone7" && heading == "more than 90 left" && range == 3) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone8" && heading == "more than 90 left" && range == 3) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone9" && heading == "more than 90 left" && range == 3) {
			      result = highspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone10" && heading == "more than 90 left" && range == 3) {
			      result = highspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone11" && heading == "more than 90 left" && range == 3) {
			      result = highspeedroll() + "speed normal left turn";
			    } else if (maneuverability == "same" && zone == "zone12" && heading == "more than 90 left" && range == 3) {
			      result = "Stall followed by a reversal";
			    }
			    
			    // More maneuverable, Heading less than 90 left, Range less than 1/2 ruler
			    
			    
			    else if (maneuverability == "more" && zone == "zone1" && heading == "less than 90 left" && range == 3) {
			      result = lowspeedroll() + "speed wide left sideslip";
			    } else if (maneuverability == "more" && zone == "zone2" && heading == "less than 90 left" && range == 3) {
			      result = lowspeedroll() + "speed straight";
			    }  else if (maneuverability == "more" && zone == "zone3" && heading == "less than 90 left" && range == 3) {
			      result = "Stall";
			    } else if (maneuverability == "more" && zone == "zone4" && heading == "less than 90 left" && range == 3) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone5" && heading == "less than 90 left" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone6" && heading == "less than 90 left" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone7" && heading == "less than 90 left" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone8" && heading == "less than 90 left" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone9" && heading == "less than 90 left" && range == 3) {
			      result = "Stall follow by a reversal";
			    } else if (maneuverability == "more" && zone == "zone10" && heading == "less than 90 left" && range == 3) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone11" && heading == "less than 90 left" && range == 3) {
			      result = lowspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "more" && zone == "zone12" && heading == "less than 90 left" && range == 3) {
			      result = highspeedroll() + "speed, shallow left turn";
			    }
			    
			    // Less maneuverable, Heading less than 90 left, Range less than 1/2 ruler
			    
			    
			    else if (maneuverability == "same" && zone == "zone1" && heading == "less than 90 left" && range == 3) {
			      result = lowspeedroll() + "speed wide left sideslip";
			    } else if (maneuverability == "same" && zone == "zone2" && heading == "more than 90 left" && range == 3) {
			      result = lowspeedroll() + "speed straight";
			    }  else if (maneuverability == "same" && zone == "zone3" && heading == "less than 90 left" && range == 3) {
			      result = "Stall";
			    } else if (maneuverability == "same" && zone == "zone4" && heading == "less than 90 left" && range == 3) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone5" && heading == "less than 90 left" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone6" && heading == "less than 90 left" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone7" && heading == "less than 90 left" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone8" && heading == "less than 90 left" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    }  else if (maneuverability == "same" && zone == "zone9" && heading == "less than 90 left" && range == 3) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone10" && heading == "less than 90 left" && range == 3) {
			      result = lowspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone11" && heading == "less than 90 left" && range == 3) {
			      result = highspeedroll() + "speed, normal left turn";
			    } else if (maneuverability == "same" && zone == "zone12" && heading == "less than 90 left" && range == 3) {
			      result = highspeedroll() + "speed, shallow left turn";
			    }
			    
			    // More maneuverable, Heading more than 90 right, Range less than 1/2 ruler
			    
			    
			    else if (maneuverability == "more" && zone == "zone1" && heading == "more than 90 right" && range == 3) {
			    result = "Stall follow by a reversal";
			    } else if (maneuverability == "more" && zone == "zone2" && heading == "more than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    }  else if (maneuverability == "more" && zone == "zone3" && heading == "more than 90 right" && range == 3) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone4" && heading == "more than 90 right" && range == 3) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone5" && heading == "more than 90 right" && range == 3) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone6" && heading == "more than 90 right" && range == 3) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone7" && heading == "more than 90 right" && range == 3) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone8" && heading == "more than 90 right" && range == 3) {
			      result = "Stall followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone9" && heading == "more than 90 right" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone10" && heading == "more than 90 right" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone11" && heading == "more than 90 right" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone12" && heading == "more than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    }
			    
			    // Less maneuverable, Heading more than 90 right, Range less than 1/2 ruler
			    
			      else if (maneuverability == "same" && zone == "zone2" && heading == "more than 90 right" && range == 3) {
			      result = "Stall followed by a reversal";
			    }  else if (maneuverability == "same" && zone == "zone3" && heading == "more than 90 right" && range == 3) {
			      result = highspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "same" && zone == "zone4" && heading == "more than 90 right" && range == 3) {
			      result = highspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "same" && zone == "zone5" && heading == "more than 90 right" && range == 3) {
			      result = highspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "same" && zone == "zone6" && heading == "more than 90 right" && range == 3) {
			      result = highspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone7" && heading == "more than 90 right" && range == 3) {
			      result = highspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone8" && heading == "more than 90 right" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone9" && heading == "more than 90 right" && range == 3) {
			      result = highspeedroll() + "speed tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone10" && heading == "more than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone11" && heading == "more than 90 right" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone12" && heading == "more than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    }
			    
			    // More maneuverable, Heading less than 90 right, Range less than 1/2 ruler
			    
			    else if (maneuverability == "more" && zone == "zone1" && heading == "less than 90 right" && range == 3) {
			      result = highspeedroll() + "speed, shallow right turn";
			    } else if (maneuverability == "more" && zone == "zone2" && heading == "less than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed, normal right turn";
			    }  else if (maneuverability == "more" && zone == "zone3" && heading == "less than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "more" && zone == "zone4" && heading == "less than 90 right" && range == 3) {
			      result = "Stall, followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone5" && heading == "less than 90 right" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone6" && heading == "less than 90 right" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone7" && heading == "less than 90 right" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone8" && heading == "less than 90 right" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "more" && zone == "zone9" && heading == "less than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed, tightest left turn";
			    } else if (maneuverability == "more" && zone == "zone10" && heading == "less than 90 right" && range == 3) {
			      result = "Stall";
			    } else if (maneuverability == "more" && zone == "zone11" && heading == "less than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed straight";
			    } else if (maneuverability == "more" && zone == "zone12" && heading == "less than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed wide right sideslip";
			    }
			    
			    // Less maneuverable, Heading less than 90 right, Range less than 1/2 ruler
			    
			    else if (maneuverability == "same" && zone == "zone1" && heading == "less than 90 right" && range == 3) {
			      result = highspeedroll() + "speed, shallow right turn";
			    } else if (maneuverability == "same" && zone == "zone2" && heading == "more than 90 right" && range == 3) {
			      result = highspeedroll() + "speed, normal right turn";
			    }  else if (maneuverability == "same" && zone == "zone3" && heading == "less than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed, normal right turn";
			    } else if (maneuverability == "same" && zone == "zone4" && heading == "less than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed, tightest right turn";
			    } else if (maneuverability == "same" && zone == "zone5" && heading == "less than 90 right" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone6" && heading == "less than 90 right" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone7" && heading == "less than 90 right" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone8" && heading == "less than 90 right" && range == 3) {
			      result = "High speed straight followed by a reversal";
			    } else if (maneuverability == "same" && zone == "zone9" && heading == "less than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed tightest left turn";
			    } else if (maneuverability == "same" && zone == "zone10" && heading == "less than 90 right" && range == 3) {
			      result = "Stall";
			    } else if (maneuverability == "same" && zone == "zone11" && heading == "less than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed, straight";
			    } else if (maneuverability == "same" && zone == "zone12" && heading == "less than 90 right" && range == 3) {
			      result = lowspeedroll() + "speed, wide right sideslip";
			    } else if (zone == "zone0") {
			      result = "Tailing, follow as closely the oponents maneuver at random speed";
			    }
			    
			    var resultshown = '<div class="alert alert-success text-center">' + result + '</div>'
			    document.getElementById("maneuver").innerHTML = resultshown;
			}
			
			
			
			