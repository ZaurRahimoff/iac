$(function () {

	function formatText(icon) {
		return $('<span><i class="' + $(icon.element).data('icon') + '"></i> ' + icon.text + '</span>');
	}

	$('.exampleFloatingBox2').select2({
		theme: 'outlined',
		placeholder: formatText,
		templateSelection: formatText,
		templateResult: formatText,
		width: '100%'
	});

});