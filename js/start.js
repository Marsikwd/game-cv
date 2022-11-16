jQuery(document).ready(function ($) {
	$('#start1').on('click', function (e) {

		$(e.currentTarget).attr('disabled', true);
		$('#start1').toggleClass('hide');
		$('.loader').toggleClass('hide');

		setTimeout(function () {

			$('.loader').toggleClass('hide');
			$('#start1').toggleClass('hide');
			$(e.currentTarget).attr('disabled', false);
			window.location.href = "start.html";
		}, 5000)
	});
});
