
$(document).ready(function(event){ 
    $('#ch4form').submit(function(event) {
        if(!$('#fullname').val()) {
            $('#nameerrormsg').show();
            event.preventDefault();
        } else {
            $('#nameerrormsg').hide();      
        }
        if(!$('#streetaddr').val()) {
            $('#addrerrormsg').show();
            event.preventDefault();
        } else {
            $('#addrerrormsg').hide();      
        }
    });
});


