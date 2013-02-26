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

$.fn.rlChecked = function() {

	// add element before inputs type
	$("input[type=checkbox], input[type=radio]").before("<span>elements</span>");

	return this.each(function() {

		// CHECK BOXES and RADIO BUTTONS


		// CHECK BOXES

			// add class to the parent
			$("input[type=checkbox]").parents("li").addClass("checkboxes");

			// parse if ckeckboxes is checked
			$("input[type=checkbox]").each(function() {
				if($(this).is(":checked")) {
					$(this).siblings("span").addClass("checked");
				}
			});

			// change behavior when trigger event
			$("input[type=checkbox]").change(function() {
				if($(this).is(":checked")) {
					$(this).siblings("span").addClass("checked");
				}
				else {
					$(this).siblings("span").removeClass("checked");
				}
			});


		// RADIO BUTTONS

			// add class to the parent
			$("input[type=radio]").parents("li").addClass("radios");

			// parse if radiobuttons is checked
			$("input[type=radio]").each(function() {
				if($(this).is(":checked")) {
					$(this).siblings("span").addClass("radio");
				}
			});

			// change behavior when trigger event
			$("input[type=radio]").change(function() {
				if($(this).is(":checked")) {
					$(this).parents().find(".radio").removeClass("radio");
					$(this).siblings("span").addClass("radio");
				}
				else {
					$(this).click().siblings("span").addClass("radio");
				}
			});

	});
};

})( jQuery );
