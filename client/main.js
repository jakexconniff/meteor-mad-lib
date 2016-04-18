Template.body.events({
	'submit form': function(event) {
		event.preventDefault();
		var exclamation = event.target.exclamation.value;
		var adverb = event.target.adverb.value;
		var animal = event.target.animal.value;
		var verb = event.target.verb.value;
		var result = '\'' + exclamation + '!\' you say, as you ' + adverb + ' jump onto your ' + animal + ' and ' + verb + ' into the sunset.';
		console.log(result);
		$('#result').text(result);
		$('#result').css("color","#0000FF");
		$('#result').hide();
		$('#result').fadeIn("slow");
	}
});