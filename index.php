<?php
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];
		$human = intval($_POST['human']);
		$from = 'Contact form Digital Game Aides'; 
		$to = 'digitalgameaides@gmail.com'; 
		$subject = 'Message from user';
		
		$body ="From: $name\n E-Mail: $email\n Subject: $subject\n
		  Message:\n $message";
		
		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
			$result='<div class="alert alert-danger text-center">Sorry, there was an error sending your message. Please try again.</div>';
		}

// If there are no errors, send the email
if (!$errEmail) {
	if (mail ($to, $subject, $body, $from)) {
		$result='<div class="alert alert-success text-center">Thank You! I will be in touch soon.</div>';
	} else {
		$result='<div class="alert alert-danger text-center">Sorry, there was an error sending your message. Please try again.</div>';
	}
}
	}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Digital Game Aides</title>

    <!-- Bootstrap -->

		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/custom.css" rel="stylesheet">




    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/bootstrap.js"></script>
      <script src="js/jquery-1.11.3.min.js"></script>
      <script src="js/npm.js"></script>
      <script src="js/scripts.js"></script>
      
    <![endif]-->
  </head>
  <body>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
      ga('create', 'UA-79946415-1', 'auto');
      ga('send', 'pageview');
    
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
      <div class="navbar navbar-default" role="navigation">
	  <div class="container">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
		<span class="sr-only">Toggle navigation</span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand">Digital Game Aides</a>
	    </div>
	    <div class="navbar-collapse collapse">
	      <ul class="nav navbar-nav navbar-right">
	      </ul>
	    </div>
	  </div>
      </div>
      
      

      <div class="container">
	
	<div class="col-md-12">
	  <div class="panel">
	    <div class="panel-body">
	      <div class="row">
		</a>
		  <h2 class="text-center">Digital Game Aides</h2>
		  <p class="lead text-center">Welcome to the Digital Game Aides website</p>
		  <p class="text-center">This is a fan-made website containing digital game aides for various tabletop board games.
		  This website is not affiliated with any of the game designers and is intended to offer free software to the gaming community.
		  </p>
		  <p class="text-center">The founding of this website has been made possible by many people! Click <a href="#thanksto" data-toggle="modal">here</a> to see who has proved that not all heroes wear capes!
		  </p>
		  <div class="text-center">
		    <p>Your feedback matters a lot for the improvement of the software for each game! Please let me know what you liked and what you didn't like. Any suggestions or general ideas are also more than welcome.
		    I am usually able to reply within a few days, make sure you leave a working email address! Also, if you have your own game aides but don't have a place to publish them then I offer free
		    hosting so you can share them with the community!</p>
		    <a class="btn btn-primary" href="#contact" data-toggle="modal">Feedback</a>
		    <p></p>
		  </div>
		  <div class="container">
		    <div class="form-group">
		       <div class="col-md-12">
			   <?php echo $result; ?>	
		       </div>
		    </div>
		  </div>
	      </div>
	    </div>
	  </div>
	</div>
	
	<div class="col-md-3">
	  <div class="panel">
	    <div class="panel-body">
	      <div class="row">
		<a class="thumbnail">
		  <img class="img-rounded indeximage" src="img/swa.jpg">
		</a>
		  <h2>SW: Armada</h2>
		  <p class="lead">V1.0</p>
		  <a class="btn btn-primary" href="armada.html">Give it a try!</a>
		  <p></p>
		  <em>Last Updated 06-09-2016</em>
		  <p></p>
		  <p>Features:</p>
		  <li>AI for playing co-op or solo "Star Wars Armada".</li>
		  <li>Separate computation for ships and squadrons.</li>
		  <p></p>
		  <p>Will Feature:</p>
		  <li>Ability to use more than 1 solo ship.</li>
		  <li>Further refinement and development.</li>
	      </div>
	    </div>
	  </div>
	</div>
	
	<div class="col-md-3">
	  <div class="panel">
	    <div class="panel-body">
	      <div class="row">
		<a class="thumbnail">
		  <img class="img-rounded indeximage" src="img/wog.jpg">
		</a>
		  <h2>Wings of Glory</h2>
		  <p class="lead">V2.2</p>
		  <a class="btn btn-primary" href="wog.html">Give it a try!</a>
		  <p></p>
		  <em>Last Updated 27-06-2016</em>
		  <p></p>
		  <p>Features:</p>
		  <li>AI for playing co-op or solo "Wings of Glory".</li>
		  <li>Patrol Encounter Generator.</li>
		  <li>Image base maneuver output.</li>
		  <li>More stable hosting.</li>
		  <p></p>
		  <p>Will feature:</p>
		  <li>Ongoing development.</li>
		  <p></p>
		  
	      </div>
	    </div>
	  </div>
	</div>
	
	<div class="col-md-3">
	  <div class="panel">
	    <div class="panel-body">
	      <div class="row">
		<a class="thumbnail">
		  <img class="img-rounded indeximage" src="img/sog.jpg">
		</a>
		  <h2>Sails of Glory</h2>
		  <p class="lead">V1.0</p>
		  <a class="btn btn-primary" href="sog.html">Give it a try!</a>
		  <p></p>
		  <em>Last Updated 28-07-2016</em>
		  <p></p>
		  <p>Features:</p>
		  <li>AI for playing co-op or solitaire "Sails of Glory".</li>
		  <li>Incorporated crew actions, wind situation, Damages and much more!</li>
		  <li>An intelligent system that does not rely on randomly drawn maneuvers!</li>
		  <p></p>
		  <p>Will feature:</p>
		  <li>Ongoing development.</li>
		  <p></p>
	    </div>
	  </div>
	</div>
      </div>
	  
	<div class="col-md-3">
	  <div class="panel">
	    <div class="panel-body">
	      <div class="row">
		<a class="thumbnail">
		  <img class="img-rounded indeximage" src="img/catan.jpg">
		</a>
		  <h2>Catan</h2>
		  <p class="lead">V1.0</p>
		  <a class="btn btn-primary" href="catan.html">Give it a try!</a>
		  <p></p>
		  <em>Last Updated 14-05-2016</em>
		  <p></p>
		  <p>Features:</p>
		  <li>Simple click system for game affecting events.</li>
		  <li>Economic events.</li>
		  <li>Environmental events.</li>
		  <li>Cultural events.</li>
		  <p></p>
		  <p>Features light and heavy versions for:</p>
		  <li>Catan, the base game.</li>
		  <li>Catan Cardgame.</li>
		  <li>Explorers and Pirates.</li>
		  <li>Struggle for Rome.</li>
	    </div>
	  </div>
	</div>
      </div>
	
      </div>
	
	
	<div class="modal fade" id="contact" role="dialog">
      <div class="modal-dialog">
	<div class="modal-content">
	<form class="form-horizontal" role="form" method="post" action="index.php">
	  <div class="modal-header">
	    <h4><dt>Contact</dt></h4>
	  </div>
	  <div class="modal-body">
	    <p>
	      Your feedback is more important than you think. Please share anything, good or bad, what you have to say about the software.
	    </p>
	    <h1 class="page-header text-center">Contact Form</h1>
	      <form class="form-horizontal" role="form" method="post" action="dienstenenglish.php">
		<div class="form-group">
		    <label for="name" class="col-sm-2 control-label">Name</label>
		    <div class="col-sm-10">
			    <input type="text" class="form-control" id="name" name="name" placeholder="Your name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
		    </div>
		</div>
		<div class="form-group">
		    <label for="email" class="col-sm-2 control-label">Email</label>
		    <div class="col-sm-10">
			    <input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="<?php echo htmlspecialchars($_POST['email']); ?>">
			    <?php echo "<p class='text-danger'>$errEmail</p>";?>
		    </div>
		</div>
		<div class="form-group">
		    <label for="phone" class="col-sm-2 control-label">Subject</label>
		    <div class="col-sm-10">
			    <input type="subject" class="form-control" id="subject" name="subject" placeholder="Bugs, suggestions, complaints" value="<?php echo htmlspecialchars($_POST['subject']); ?>">
		    </div>
		</div>
		<div class="form-group">
		    <label for="message" class="col-sm-2 control-label">Message</label>
		    <div class="col-sm-10">
			    <textarea class="form-control" rows="4" name="message" placeholder="Your message here"><?php echo htmlspecialchars($_POST['message']);?></textarea>
		    </div>
		</div>
		<div class="form-group">
		    <div class="col-sm-10 col-sm-offset-2">
			    <input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
		    </div>
		</div>
	      </form> 
	  </div>
	  
	  
	  <div class="modal-footer">
	    <a class="btn btn-default" data-dismiss="modal">Close</a>
	  </div>
	  </form>
	</div>
      </div>
    </div>
	
	<div class="modal fade" id="thanksto" role="dialog">
      <div class="modal-dialog">
	<div class="modal-content">
	<form class="form-horizontal" role="form" method="post" action="index.php">
	  <div class="modal-header">
	    <h4><dt>A big thanks to:</dt></h4>
	  </div>
	  <div class="modal-body">
	    <li>My wife, Grace</li>
	    <li>Lex Strikwerda</li>
	    <li>Tokhuah</li>
	    <li>Guus Duijsters</li>
	    <li>Christian Pirkheim</li>
	    <li>James Buckett</li>
	    <li>Michael McLean</li>
	    <li>Langston Jones</li>
	    <li>Steve Flack</li>
	    <li>Mycenius</li>
	    <li>Jonathan Moore</li>
	    <li>Peter Hogg</li>
	    <li>Martin Mahrhofer</li>
	    <li>Matthew Chaulklin</li>
	    <li>Kevin Stark</li>
	    <li>Margreet van Woudenberg</li>
	    <li>Stephen Burrows</li>
	    <li>Mikolaj Laczynski</li>
	    <li>JH</li>
	    <li>Minsu Kim</li>
	    <li>Joaquim</li>
	    <li>John Edwards</li>
	    <li><a href="https://www.chaoscards.co.uk" target="_blank">Chaos Cards UK</a></li>
	    <li><a href="http://www.everythingboardgames.com" target="_blank">Everything Board Games</a></li>
	    <p></p>
	    <p>
	     All of the people listed above have made this website come to life! Thank you so much for the financial, advertising and emotional support!
	     Ofcourse also a big thank you for the unmentioned people in the respective gaming communities that have helped the software from it's days even before it was even accessible on mobile devices!
	    </p>
	   
	  <div class="modal-footer">
	    <a class="btn btn-default" data-dismiss="modal">Close</a>
	  </div>
	  </form>
	</div>
      </div>
    </div>  

  </body>
</html>