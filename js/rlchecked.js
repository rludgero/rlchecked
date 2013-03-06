/*
* Author: Rodrigo Ludgero http://rodrigoludgero.com/
*
* Description: A jQuery checkboxes and radio buttons plugin
*
* License: MIT licensed
*
* Project: jQuery rlChecked Plugin https://github.com/Rodrigo-Ludgero
*
*
*/
(function( $ ){

$.fn.rlChecked = function(options) {

	var settings = $.extend({
		element: "<span>elements</span>", // html tag created to insert through the DOM
		checkboxes: "checkboxes", // parent class of checkboxes
		radios: "radios", // parent class of radio buttons
		tag: "li", // html tag parent for checkboxes and radio buttons
		bg: "span", // reference a settings.element for make use like a variable
		check: "checked", // sign a class when a checkbox is checked
		radio: "radio" // sign a class when a radio button is checked

	}, options);


	// add element before inputs type
	$("input[type=checkbox], input[type=radio]").before(settings.element);

	return this.each(function() {

		// CHECK BOXES and RADIO BUTTONS


		// CHECK BOXES

			// add class to the parent
			$("input[type=checkbox]").parents(settings.tag).addClass(settings.checkboxes);

			// parse if ckeckboxes is checked
			$("input[type=checkbox]").each(function() {
				if($(this).is(":checked")) {
					$(this).siblings(settings.bg).addClass(settings.check);
				}
			});

			// change behavior when trigger event
			$("input[type=checkbox]").change(function() {
				if($(this).is(":checked")) {
					$(this).siblings(settings.bg).addClass(settings.check);
				}
				else {
					$(this).siblings(settings.bg).removeClass(settings.check);
				}
			});


		// RADIO BUTTONS

			// add class to the parent
			$("input[type=radio]").parents(settings.tag).addClass(settings.radios);

			// parse if radiobuttons is checked
			$("input[type=radio]").each(function() {
				if($(this).is(":checked")) {
					$(this).siblings(settings.bg).addClass(settings.radio);
				}
			});

			// change behavior when trigger event
			$("input[type=radio]").change(function() {
				if($(this).is(":checked")) {
					$(this).parents().find(settings.bg).removeClass(settings.radio);
					$(this).siblings(settings.bg).addClass(settings.radio);
				}
				else {
					$(this).click().siblings(settings.bg).addClass(settings.radio);
				}
			});

	});
};

})( jQuery );
