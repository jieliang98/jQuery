$(document).ready(function(event){ 
    $('#ch3form').submit(function(event) {
        if(!$('input[name="fruit"]:checked').length || !$('input[name="standing"]:checked').length) {
        	alert("You must pick a fruit and standing!");
        	event.preventDefault();
        } 
    });
});


