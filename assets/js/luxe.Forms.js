var Forms = (function($) {

	var $body;

	var init = function() {

		// cache body selector
		$body = $('body');

		// handle form option clicks
		$body.find('.forms-option a').on("click", function() {
			$(this).parent().find('a').removeClass('active');
			$(this).addClass('active');
		});

	};

	var submit = function(id) {

		var $form = $(id);
		var valid = true;

		$form.find('.req').removeClass('error');

		$form.find('.req').each(function() {
			if(this.value == this.defaultValue) {
				$(this).addClass('error');
				valid = false;
			}

		});

	};
	
	return {
		init: init,
		submit: submit
	};

}(jQuery));