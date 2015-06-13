var Luxe = (function($) {

	var init = function() {

		// add animate class
		setTimeout(function(){
			$('body').addClass('animate-in');
		}, 250);

		// waypoints
		$('.save').waypoint(function(direction) { 
			$(this).addClass('animate-save', direction === 'down');
		}, { offset: 200 });

		$('.app').waypoint(function(direction) { 
			$(this).addClass('animate-app', direction === 'down');
		}, { offset: 200 });


	};
	
	return {
		init: init
	};

}(jQuery));

$(function() {
	Luxe.init();
});