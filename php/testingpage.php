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
    <meta name="description" content="Bootstrap contact form with PHP example by BootstrapBay.com.">
    <meta name="author" content="BootstrapBay.com">
    <title>Contact form</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
  </head>
  <body>
    
    
    
  	<div class="container">
	  <div class="row">
	    <div class="col-md-6 col-md-offset-3">
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
			    <textarea class="form-control" rows="4" name="message" placeholder="Any aditional information you might think we need"><?php echo htmlspecialchars($_POST['message']);?></textarea>
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
  </body>
</html>