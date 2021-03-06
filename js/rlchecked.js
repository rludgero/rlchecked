/*
*
* Author: Rodrigo Ludgero http://rodrigoludgero.com/
*
* Description: A jQuery checkboxes and radio buttons plugin
*
* License: MIT licensed
*
* Project: jQuery rlChecked Plugin https://github.com/Rodrigo-Ludgero
*
*/

(function($) {

$.fn.rlChecked = function(options) {

  var $typeCheck = $("input[type=checkbox]");
  var $typeRadio = $("input[type=radio]");
  var $typeInputs = $("input[type=checkbox], input[type=radio]");
  var $labels = $("label");

  var settings = $.extend({
    element: "<span></span>", // html tag created to insert through the DOM
    checkboxes: "rlCheckboxes", // parent class of checkboxes
    radios: "rlRadios", // parent class of radio buttons
    bg: "span", // reference a settings.element for make use like a variable
    check: "checked", // sign a class when a checkbox is checked
    radio: "radio", // sign a class when a radio button is checked
    focus: "focus", // sign a class when accessed with keyboard a checkbox or radio button element
    disable: "disabled", // sign a class when a checkbox or radio button element have the disabled attribute
    disableChecked: "disabled-checked", // sign a class when a radio-button and checkbox element have the disabled and checked attribute, this behavior is necessary when have this attributes combination
    hover: "hover" // sign a class when hover a checkbox or radio button element

  }, options);


  // add element before inputs type
  $typeInputs.before(settings.element);

  return this.each(function() {

    // CHECK BOXES

      // add class to the parent
      $typeCheck.parent().addClass(settings.checkboxes);

      // parse if ckeckboxes is checked
      $typeCheck.each(function() {
        if($(this).is(":checked")) {
          $(this).siblings(settings.bg).addClass(settings.check);
        }
      });

      // change behavior when trigger event
      $typeCheck.change(function() {
        if($(this).is(":checked")) {
          $(this).siblings(settings.bg).addClass(settings.check);
        }
        else {
          $(this).siblings(settings.bg).removeClass(settings.check);
        }
      });


    // RADIO BUTTONS

      // add class to the parent
      $typeRadio.parent().addClass(settings.radios);

      // parse if radiobuttons is checked
      $typeRadio.each(function() {
        if($(this).is(":checked")) {
          $(this).siblings(settings.bg).addClass(settings.radio);
        }
      });

      // change behavior when trigger event
      $typeRadio.change(function() {
        if($(this).is(":checked")) {
          $(this).parent().siblings().find(settings.bg).removeClass(settings.radio);
          $(this).siblings(settings.bg).addClass(settings.radio);
        }
        else {
          $(this).click().siblings(settings.bg).addClass(settings.radio);
        }
      });


    // CHECK BOXES & RADIO BUTTONS

      // add focus class of the checkboxes and radio-buttons
      $typeInputs.focusin(function() {
        $(this).siblings(settings.bg).addClass(settings.focus);
      });
      // remove focus class of the checkboxes and radio-buttons
      $typeInputs.focusout(function() {
        $(this).siblings(settings.bg).removeClass(settings.focus);
      });

      // add hover class of the checkboxes and radio-buttons
      $typeInputs.hover(
        function() {
          $(this).siblings(settings.bg).addClass(settings.hover);
        },
        function() {
          $(this).siblings(settings.bg).removeClass(settings.hover);
        }
      );

      // add hover class when hover a sibling label of the checkboxes and radio-buttons
      $labels.hover(
        function() {
          $(this).siblings(settings.bg).addClass(settings.hover);
        },
        function() {
          $(this).siblings(settings.bg).removeClass(settings.hover);
        }
      );

      // add class if the element is disabled
      if($(this).is(":disabled")) {
        $(this).siblings(settings.bg).addClass(settings.disable);
        if($(this).is(":checked")) {
          $(this).siblings(settings.bg).addClass(settings.disableChecked);
        }
      }

  });
};

})(jQuery);
