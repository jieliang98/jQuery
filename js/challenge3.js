$(document).ready(function(event){ 
    $('#ch3form').submit(function(event) {
        if(!$('input[name="fruit"]:checked').length) {
        	alert("You must pick a fruit!");
        	event.preventDefault();
        } 
    });
});


