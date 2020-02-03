      <div class="modal fade" id="contact" role="dialog">
      <div class="modal-dialog">
	<div class="modal-content">
	  <form class="form-horizontal" role="form" method="post" action="index.php">
	  <div class="modal-header">
	    <h4><dt>Contact</dt></h4>
	  </div>
	  <div class="modal-body">
	    <p>
	      Maak nu afspraak via telefoon of email. Uiteraard kunt U ook het contact formulier
	      hier onder invullen
            </p>
            <dt>Tel</dt><p>+31 10 123456</p>
            <dt>Mobiel</dt><p>+31 6 123456</p>
	    <dt>Email</dt><p>voorbeeld@example.com</p>
	  </div>
	  <div class="form-group">
	    <label for="name" class="col-sm-2 control-label">Naam</label>
	    <div class="col-sm-10">
		<input type="text" class="form-control" id="name" name="name" placeholder="uw naam" value="">
	    </div>
	    </div>
	    <div class="form-group">
		<label for="email" class="col-sm-2 control-label">Email</label>
		<div class="col-sm-10">
		    <input type="email" class="form-control" id="email" name="email" placeholder="voorbeeld@domein.com" value="">
		</div>
	    </div>
	    <div class="form-group">
		<label for="message" class="col-sm-2 control-label">Boodschap</label>
		<div class="col-sm-10">
		    <textarea class="form-control" rows="4" name="message"></textarea>
		</div>
	    </div>
	    <div class="form-group">
		<label for="human" class="col-sm-2 control-label">2 + 3 = ?</label>
		<div class="col-sm-10">
		    <input type="text" class="form-control" id="human" name="human" placeholder="Antwoord ter controle spambot">
		</div>
	    </div>
	    <div class="form-group">
		<div class="col-sm-10 col-sm-offset-2">
		    <input id="submit" name="submit" type="submit" value="Versturen" class="btn btn-primary">
		</div>
	    </div>
	    <div class="form-group">
		<div class="col-sm-10 col-sm-offset-2">
		    <! Will be used to display an alert to the user>
		</div>
	    </div>


	  <div class="modal-footer">
	    <a class="btn btn-default" data-dismiss="modal">Sluiten</a>
	  </div>
	  </form>
	</div>
      </div>
    </div>