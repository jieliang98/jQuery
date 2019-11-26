$(document).ready(function(event){ 
    $('img')
	    .mouseenter(function() {
	    	$('#image').css('background-image', 'url(' + this.src + ')');
	    	$('#image').text(this.alt);
	    })
	    .mouseleave(function() {
	    	$('#image').css('background-image', 'url()');
	    	$('#image').text("Hover over an image below.");
	    })
	    .focus(function() {
	    	$('#image').css('background-image', 'url(' + this.src + ')');
	    	$('#image').text(this.alt);	    	
	    })
	    .blur(function() {
	    	$('#image').css('background-image', 'url()');
	    	$('#image').text("Hover over an image below.");	    	
	    });
});



