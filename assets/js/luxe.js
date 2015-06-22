var Luxe = (function($) {

	var init = function() {

		// add animate class
		setTimeout(function(){
			$('body').addClass('animate-in');
		}, 250);

		// modal functionality
		Modal.init();

		// forms functionality
		Forms.init();

		// owl slider container
		var slider = $('.slider');

		// owl slider properties
		slider.owlCarousel({ 
			addClassActive : true,
			itemsCustom : [[0, 1]]
		});

		// grab carousel data
		slider = $('.slider').data('owlCarousel');

		// jump to slide
		slider.jumpTo(2);

		// owl navigation
		$(".slider-nav .next").click(function(){ slider.next(); });
		$(".slider-nav .prev").click(function(){ slider.prev(); });

		// handle the lack of SVG support
		if(!Modernizr.svg) {
			
			$('img[src*="svg"]').attr('src', function() {
				return $(this).attr('src').replace('.svg', '.png');
			});
		
		} else {

			// replace svg with svg code
			jQuery('img.svg-raw').each(function(){
	            var $img = jQuery(this);
	            var imgID = $img.attr('id');
	            var imgClass = $img.attr('class');
	            var imgURL = $img.attr('src');

	            jQuery.get(imgURL, function(data) {
	                // Get the SVG tag, ignore the rest
	                var $svg = jQuery(data).find('svg');

	                // Add replaced image's ID to the new SVG
	                if(typeof imgID !== 'undefined') {
	                    $svg = $svg.attr('id', imgID);
	                }
	                // Add replaced image's classes to the new SVG
	                if(typeof imgClass !== 'undefined') {
	                    $svg = $svg.attr('class', imgClass+' replaced-svg');
	                }

	                // Remove any invalid XML tags as per http://validator.w3.org
	                $svg = $svg.removeAttr('xmlns:a');

	                // Replace image with new SVG
	                $img.replaceWith($svg);

	            }, 'xml');

	        });
		}

		// waypoints
		$('.waypoint').waypoint(function(direction) { 
			if(!$('body').hasClass('body-modal-open')) {
				$(this).toggleClass($(this).data('class'), direction === 'down');
			}
		}, { offset: '40%' });

	};

	var setupTweets = function(allTweets) {
		var $cards = $('.social-card.twitter');
		var tweets = selectRandom(allTweets, $cards.length);

		$cards.each(function (index) {
			var tweet = tweets[index];

			$(this).html(
				'<a href="' + tweet.link + '" target="_blank">' +
				'<div style="background-image:url(\'img/avatar_' + tweet.user + '.jpg\')" class="avatar"></div>' +
				'<br>@' + tweet.user +
				'</a>' +
				'<p>' + tweet.html + '</p>'
			);
		});
	};
	
	return {
		init: init
	};

}(jQuery));

$(function() {
	Luxe.init();
});