(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = true;
	button.addEventListener('click', handler, true);

	function handler(){
	  if(!open){
	    this.innerHTML = "Compute";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "Compute";
		classie.add(wrapper, 'opened-nav');
	  }
	  open = !open;
	}

})();
