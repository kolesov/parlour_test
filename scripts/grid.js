$(document).ready(function() {
	// grid toggle button handler
	$(".toggle-grid").click(function() {
	  gToggle();
	});
	// handles grid toggle on 'g' or 'G' key press
	$(window).keypress(function(e) {
	  var key = e.keyCode;
	  if ((key == 103) || (key == 71) ) { 
		gToggle();
	  }
	});
	// grid toggle function
	function gToggle(){
	  $(".g-wrapper.over").fadeToggle("fast", "swing");
	}

	// use this formula to output grid css
	function gridValues(){
	  var death ='';
	  for (i=1; i<22; i++) {
		death += '.ml'+i+' { margin-left:'+4.545455*i+'%;}<br/>'
		$('.grid-code').html(death);
	  }
	}
});