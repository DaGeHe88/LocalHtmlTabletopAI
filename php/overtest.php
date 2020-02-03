<?php
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$message = $_POST['message'];
		$human = intval($_POST['human']);
		$from = 'Contact form daanherman.nl'; 
		$to = 'daangerard@hotmail.com'; 
		$subject = 'Message from customer';
		
		$body ="Van: $name\n E-Mail: $email\n Telefoon: $phone\n
		  Bericht:\n $message";
		// Check if name has been entered
		if (!$_POST['name']) {
			$errName = 'Alstublieft uw naam invoeren';
			$result='<div class="alert alert-danger text-center">Sorry, er was een fout bij het versturen van uw bericht. Probeert U het alstublieft nogmaals.</div>';
		}
		
		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Alstublieft een geldig emailadres invoeren';
			$result='<div class="alert alert-danger text-center">Sorry, er was een fout bij het versturen van uw bericht. Probeert U het alstublieft nogmaals.</div>';
		}

// If there are no errors, send the email
if (!$errName && !$errEmail) {
	if (mail ($to, $subject, $body, $from)) {
		$result='<div class="alert alert-success text-center">Bedankt! Ik zal contact met U opnemen.</div>';
	} else {
		$result='<div class="alert alert-danger">Sorry er was een fout bij het versturen van uw bericht. Probeert U het alstublieft nogmaals.</div>';
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
    <title>Uw bedrijf</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="custom.css" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
    <![endif]-->
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
	      <a class="navbar-brand" href="index.html">Uw bedrijf</a>
	    </div>
	    <div class="navbar-collapse collapse">
	      <ul class="nav navbar-nav navbar-right">
		<li><a href="home.php">Home</a></li>
		<li class="active"><a href="over.php">Over uw bedrijf</a></li>
		<li class="dropdown">
		  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Aanbod<b class="caret"></b></a>
		<ul class="dropdown-menu">
		  <li><a href="diensten.php">Diensten</a></li>
		  <li class="divider"></li>
		  <li><a href="producten.php">Producten</a></li>
		</ul>
		</li>
		<li><a href="#contact" data-toggle="modal">Contact</a></li>
		<li>
		  <a href="overenglish.php">
		    <img src="flags/english.png">
		  </a>
		</li>
	      </ul>
	    </div>
	  </div>
      </div>
      
      <div class="container">
	<div class="form-group">
	   <div class="col-md-12">
	       <?php echo $result; ?>	
	   </div>
	</div>
      </div>
	
      <div class="container">
	<div class="panel">
	  <div class="panel-body">
		      
		      <div class="row featurette">
		      <div class="col-md-7">
			<h2 class="featurette-heading">Over uw bedrijf</h2>
			<p>
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
			  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
			  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
			  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
			  id est laborum.
			</p>
		      </div>
		      <div class="col-md-5">
			<a class="thumbnail">
			<img class="img-rounded" src="images/over1.JPG">
			</a>
		      </div>
		      </div>
		    
		      <div class="row featurette">
		      <div class="col-md-12">
			<p>
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
			  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
			  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
			  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
			  id est laborum.
			</p>
		      </div>
		      </div>
	      
		    <div class="row">
		      <div class="col-md-5">
			<a class="thumbnail">
			<img class="img-rounded" src="images/over2.JPG">
			</a>
		      </div>
			<div class="col-md-7">
			<p>
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
			  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
			  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
			  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
			  id est laborum.
			</p>
		    </div>
		    </div> 
	      
		    <div class="row featurette">
		      <div class="col-md-12">
			<p>
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
			  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
			  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
			  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
			  id est laborum.
			</p>
		      </div>
		    </div>
	  </div>
	</div>
      </div>
	
      <div class="navbar navbar-default navbar-fixed-bottom" role="navigation">
	<div clas="container">
	  <div class="navbar-text pull-right">  
	    <p>Email: daangerard@hotmail.com Tel: +31 6 37553882</p>
	  </div>
	</div>
      </div>
      
      <div class="modal fade" id="contact" role="dialog">
      <div class="modal-dialog">
	<div class="modal-content">
	<form class="form-horizontal" role="form" method="post" action="overtest.php">
	  <div class="modal-header">
	    <h4><dt>Contact</dt></h4>
	  </div>
	  <div class="modal-body">
	    <p>
	      Als U een afspraak wilt maken kunt U mij via telefoon of email bereiken.
            <dt>Mobiel</dt><p>+31 6 37553882</p>
	    <dt>Email</dt><p>daangerard@hotmail.com</p>
	    <p>Or fill out my contact form:</p>
	    <h1 class="page-header text-center">Contact Formulier</h1>
	      <form class="form-horizontal" role="form" method="post" action="overtest.php">
		<div class="form-group">
		    <label for="name" class="col-sm-2 control-label">Naam</label>
		    <div class="col-sm-10">
			    <input type="text" class="form-control" id="name" name="name" placeholder="Voor & achternaam" value="<?php echo htmlspecialchars($_POST['name']); ?>">
			    <?php echo "<p class='text-danger'>$errName</p>";?>
		    </div>
		</div>
		<div class="form-group">
		    <label for="email" class="col-sm-2 control-label">Email</label>
		    <div class="col-sm-10">
			    <input type="email" class="form-control" id="email" name="email" placeholder="voorbeeld@domein.nl" value="<?php echo htmlspecialchars($_POST['email']); ?>">
			    <?php echo "<p class='text-danger'>$errEmail</p>";?>
		    </div>
		</div>
		<div class="form-group">
		    <label for="phone" class="col-sm-2 control-label">Telefoon (optioneel)</label>
		    <div class="col-sm-10">
			    <input type="phone" class="form-control" id="phone" name="phone" placeholder="Telefoon nummer (optioneel)" value="<?php echo htmlspecialchars($_POST['phone']); ?>">
		    </div>
		</div>
		<div class="form-group">
		    <label for="message" class="col-sm-2 control-label">Bericht</label>
		    <div class="col-sm-10">
			    <textarea class="form-control" rows="4" name="message" placeholder="Hier uw bericht"><?php echo htmlspecialchars($_POST['message']);?></textarea>
		    </div>
		</div>
		<div class="form-group">
		    <div class="col-sm-10 col-sm-offset-2">
			    <input id="submit" name="submit" type="submit" value="Versturen" class="btn btn-primary">
		    </div>
		</div>
		
	      </form> 
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