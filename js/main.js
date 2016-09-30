$(document).ready(function () {

  // page animations using waypoint.js
  var animate = $('.animated');

  animated.waypoint(function(){
    $(this.element).addClass($(this.element),data("animate")).css('opacity','1');
  }, {offset: '90%'});

});