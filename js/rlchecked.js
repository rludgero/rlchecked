/**
* jQuery RLChecked Plugin
* https://github.com/rludgero/rlchecked
*
* MIT licensed, (c) 2012 http://rodrigoludgero.com/
*/


jQuery.fn.rlChecked = function() {

// CHECK BOXES and RADIO BUTTONS

  // add element before inputs
  jQuery("input[type=checkbox], input[type=radio]").before("<span>elements</span>");


 // CHECK BOXES

  // add class to the parent
  jQuery("input[type=checkbox]").parents("li").addClass("checkboxes");

  // parse if ckeckboxes is checked
  jQuery("input[type=checkbox]").each(function (){
    if(jQuery(this).is(":checked")) {
      jQuery(this).siblings("span").addClass("checked");
    }
  });

  // change behavior when trigger event
  jQuery("input[type=checkbox]").change(function (){
    if( jQuery(this).is(":checked") ) {
      jQuery(this).siblings("span").addClass("checked");
    }
    else {
      jQuery(this).siblings("span").removeClass("checked");
    }
  });


// RADIO BUTTONS

  // add class to the parent
  jQuery("input[type=radio]").parents("li").addClass("radios");

  // parse if radiobuttons is checked
  jQuery("input[type=radio]").each(function (){
    if(jQuery(this).is(":checked")) {
      jQuery(this).siblings("span").addClass("radio");
    }
  });

  // change behavior when trigger event
  jQuery("input[type=radio]").change(function (){
    if( jQuery(this).is(":checked") ) {
      jQuery(this).parents().find(".radio").removeClass("radio");
      jQuery(this).siblings("span").addClass("radio");
    }
    else {
      jQuery(this).click().siblings("span").addClass("radio");
    }
  });

 };