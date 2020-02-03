<?php
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$cargotype = $_POST['cargotype'];
		$weightvolume = $_POST['weightvolume'];
		$departure = $_POST['departure'];
		$destination = $_POST['destination'];
		$message = $_POST['message'];
		$human = intval($_POST['human']);
		$from = 'Contact form, do not reply directly to this email'; 
		$to = 'daangerard@hotmail.com'; 
		$subject = 'Message from customer';
		
		$body ="From: $name\n E-Mail: $email\n Phone: $phone\n Type of Cargo: $cargotype\n Cargo Weight and Volume: $weightvolume\n Departure Point: $departure\n Destination: $destination\n
		  Additional Information:\n $message";
		// Check if name has been entered
		if (!$_POST['name']) {
			$errName = 'Please enter your name';
		}
		
		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}
		
		if (!$_POST['cargotype']) {
			$errCargotype = 'Please enter type of cargo';
		}
		
		if (!$_POST['weightvolume']) {
			$errWeightvolume = 'Please enter cargo weight and volume';
		}
		
		if (!$_POST['departure']) {
			$errDeparture = 'Please enter departure point';
		}
		
		if (!$_POST['destination']) {
			$errDestination = 'Please enter destination';
		}
		
		
// If there are no errors, send the email
if (!$errName && !$errEmail && !$errCargotype && !$errWeightvolume && !$errDeparture && !$errDestination) {
	if (mail ($to, $subject, $body, $from)) {
		$result='<div class="alert alert-success">Thank You! We will be in touch</div>';
	} else {
		$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later.</div>';
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
    <title>Euros Transport V.O.F.</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="customeuros.css" rel="stylesheet">

      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <script src="js/bootstrap.min.js"></script>

  </head>
  <body>
    
      <div class="navbar navbar-default nabar-fixed-top" role="navigation">
	  <div class="container">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
		<span class="sr-only">Toggle navigation</span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="index.html">Euros Transport V.O.F.</a>
	    </div>
	    <div class="navbar-collapse collapse">
	      <ul class="nav navbar-nav navbar-right">
		<li class="active"><a href="index.html">Home</a></li>
		<li><a href="about.html">About</a></li>
		<li><a href="#contact" data-toggle="modal">Contact</a></li>
		<li>
		  <a href="indexdutch.html">
		    <img src="flags/dutch.png">
		  </a>
		</li>
	      </ul>
	    </div>
	  </div>
      </div>
      
      <div class="container">
	
	<div class=".col-md-12 col-md-offset-4">
	  <div class="row">
	       <img class="img-rounded logopadding" src="images/logo.jpg"></img>
	  </div>
	</div>
	
	<div class="col-md-4">
	  <div class="panel">
	    <div class="panel-body">
	      <div class="row">
		<a class="thumbnail">
		  <img class="img-rounded" src="images/home1.JPG">
		</a>
		<div class="container-padded1">
		  <h2>Logistics</h2>
		  <p  class="lead">Euros Transport</p>
		  <p>Are you looking to transport any kind of goods, small or large, via road inside or outside of Europe? We can organize everything for you, from
		  the vehicles to the complex paperwork. At Eurostransport we have years of experience which you can reap the benefits of.</p>
		</div>
	      </div>
	    </div>
	  </div>
	</div>
	
	<div class="col-md-4">
	  <div class="panel">
	    <div class="panel-body">
	      <div class="row">
		<a class="thumbnail">
		  <img class="img-rounded" src="images/home2.JPG">
		</a>
		<div class="container-padded2">
		  <h2>Road Transport</h2>
		  <p>Whether you need adhoc transport of small loads in Rotterdam or looking for several truck loads going from one side of Europe to
		  the other on a scheduled basis, Euros Transport is there for you.</p>
		  <p>We will look for the right type of vehicle for your cargo and then make sure it gets there on time with all the paperwork
		  sorted out.</p>
		</div>
	      </div>
	    </div>
	  </div>
	</div>
	
	<div class="col-md-4">
	  <div class="panel">
	    <div class="panel-body">
	      <div class="row">
		<a class="thumbnail">
		  <img class="img-rounded" src="images/home3.JPG">
		</a>
		<div class="container-padded3">
		  <h2>Expedition</h2>
		  <p  class="lead">Euros Expeditors are there for you!</p>
		  <p>You've got the load, you've got the vehicles but do you have the paperwork?</p>
		  <p>Euros Transport is there for you. We can organize all the paperwork from A to B for you or simply help with what
		  you already have and make sure you are not missing anything.</p>
		  </div>
		</div>
	      </div>
	    </div>
	  </div>
	</div>
	
	<div class="col-md-12">
	  <div class="panel">
	    <div class="panel-body">
	      <div class="row">
		<div class="container-padded1">
		  <h2>Contact us</h2>
		  <p  class="lead">Contact us for a free estimate</p>
		  <p>Below you can fill out your details so we can work out a free shipping estimate for you!</p>
		    <h1 class="page-header text-center">Contact Form</h1>
	      <form class="form-horizontal" role="form" method="post" action="testingpage.php">
		<div class="form-group">
		    <label for="name" class="col-sm-2 control-label">Name</label>
		    <div class="col-sm-10">
			    <input type="text" class="form-control" id="name" name="name" placeholder="First & Last Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
			    <?php echo "<p class='text-danger'>$errName</p>";?>
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
		    <label for="phone" class="col-sm-2 control-label">Phone (optional)</label>
		    <div class="col-sm-10">
			    <input type="phone" class="form-control" id="phone" name="phone" placeholder="Phone Number (optional)" value="<?php echo htmlspecialchars($_POST['phone']); ?>">
		    </div>
		</div>
		<div class="form-group">
		    <label for="cargotype" class="col-sm-2 control-label">Type of Cargo</label>
		    <div class="col-sm-10">
			    <input type="cargotype" class="form-control" id="cargotype" name="cargotype" placeholder="Type of Cargo" value="<?php echo htmlspecialchars($_POST['cargotype']); ?>">
			    <?php echo "<p class='text-danger'>$errCargotype</p>";?>
		    </div>
		</div>
		<div class="form-group">
		    <label for="weightvolume" class="col-sm-2 control-label">Weight and Volume</label>
		    <div class="col-sm-10">
			    <input type="weightvolume" class="form-control" id="weightvolume" name="weightvolume" placeholder="Cargo Weight and Volume" value="<?php echo htmlspecialchars($_POST['weightvolume']); ?>">
			    <?php echo "<p class='text-danger'>$errWeightvolume</p>";?>
		    </div>
		</div>
		<div class="form-group">
		    <label for="departure" class="col-sm-2 control-label">Departure Point</label>
		    <div class="col-sm-10">
			    <input type="departure" class="form-control" id="departure" name="departure" placeholder="Address" value="<?php echo htmlspecialchars($_POST['departure']); ?>">
			    <?php echo "<p class='text-danger'>$errDeparture</p>";?>
		    </div>
		</div>
		<div class="form-group">
		    <label for="destination" class="col-sm-2 control-label">Destination</label>
		    <div class="col-sm-10">
			    <input type="destination" class="form-control" id="destination" name="destination" placeholder="Address" value="<?php echo htmlspecialchars($_POST['destination']); ?>">
			    <?php echo "<p class='text-danger'>$errDestination</p>";?>
		    </div>
		</div>
		<div class="form-group">
		    <label for="message" class="col-sm-2 control-label">Additional Information</label>
		    <div class="col-sm-10">
			    <textarea class="form-control" rows="4" name="message" placeholder="Do you require just a vehicle or expedition. Or do you require the whole logistics solution from Euros Transport."><?php echo htmlspecialchars($_POST['message']);?></textarea>
		    </div>
		</div>
		<div class="form-group">
		    <div class="col-sm-10 col-sm-offset-2">
			    <input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
		    </div>
		</div>
		<div class="form-group">
		    <div class="col-sm-10 col-sm-offset-2">
			    <?php echo $result; ?>	
		    </div>
		</div>
	      </form> 
		</div>
	      </div>
	    </div>
	  </div>
	</div>
	
      </div>
	
      <div class="navbar navbar-default navbar-fixed-bottom" role="navigation">
	<div clas="container">
	  <div class="navbar-text pull-right">  
	    <p>Euros Transport V.O.F. KVK: 59503300</p>
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
	      If you would like to make an estimate then you can fill out the form at the bottom of the homepage. For any other issues you
	      can use the contact details below:
	    <dt>Phone</dt><p>+31617608087</p>
            <dt>Skype</dt><p>euros.transport1</p>
	    <dt>Email</dt><p>eurostransport@europe.com</p>
	    <p>My registration details are as follows:</p>
	    <dt>Euros Transport V.O.F.</dt>
	    <dt>KVK</dt><p>59503300</p>
	    <dt>VAT</dt><p>NL 853530956B01</p>
	  </div>


	  <div class="modal-footer">
	    <a class="btn btn-default" data-dismiss="modal">Sluiten</a>
	  </div>
	  </form>
	</div>
      </div>
    </div>
    
      
      


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>