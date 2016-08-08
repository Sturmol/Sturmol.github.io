 
(function () {
  'use strict';

  $(document).ready(function () {

      $('nav').hover(function () {
      $(this).find('.slide-in').toggleClass('weak');
    }, function () {
      $(this).find('.slide-in').toggleClass('weak');
    });

    $('nav a').hover(function () {
        $(this).find('.slide-in').removeClass('weak');
      }, function () {
        $(this).find('.slide-in').addClass('weak');
      });

    $('.section-nav').click(function (e) {
      e.preventDefault();
      var target = this.hash,
        $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 1200, 'easeInOutCubic', function () {
        window.location.hash = target;
      });
    });

    $('.menu-clickback').click(function (e) {
      e.preventDefault();
      var $pulsates = $('.pulsate-in');
      $pulsates.hide('fast');
      $('html, body').scrollTop(0, function () {
        window.location.hash = '#';
      });
      $pulsates.each(function () {
      $(this).show('pulsate');
      });
    });

    $('.slider').slider({full_width: true});

    $('#nav, footer').on('scrollSpy:enter', function () {
      $('.main-title-header').show('pulsate');
      console.log('enter');
    });

    $('#nav, footer').on('scrollSpy:exit', function () {
      $('.main-title-header').hide('pulsate');
      console.log('exit');
    });

    $('#nav, footer').scrollSpy();
  });

}());


