$(document).ready(function(){
	var formData = $( "form" )
	$('form').submit(function(){
		var fn = $('#firstN').val();
		var ln = $('#lastN').val();
		var em = $('#email').val();
		var pn = $('#phoneN').val();
		$('#tableAppend').append("<tr><th>"+fn+"</th><th>"+ln+"</th><th>"+em+"</th><th>"+pn+"</th></tr>");
		return false
	});
})