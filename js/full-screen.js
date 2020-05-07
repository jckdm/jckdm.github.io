(function() {
	$('.websiteImages').click(function(e) {
		if (e.target.tagName === 'IMG') {
			$('body').append('<div id="overlay"></div>');
			$('#overlay').append('<img id="popimage" src="' + e.target.src + '"></div>');
			$('#overlay').click(function() { document.body.removeChild(overlay); })
		}
	});
}());
