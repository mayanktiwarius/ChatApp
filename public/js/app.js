var socket = io();

socket.on('connect', function() {
	console.log('Connected to socket.io server')
});

socket.on('message', function(message) {
	console.log('New message');
	console.log(message.text);
});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
	event.preventDefault(); // Need to disable refresh of the page which is traditional way
	var $message = $form.find('input[name=message]');
	socket.emit('message', {
		text: $message.val() 
		//Seach the input variable in the form which has name set as message.
		// Extract the string value of the data
	});
	$message.var('');
});