(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('.flexslider').flexslider();
    navLinks();
  }

  function navLinks(){
    hideShowSlider();
    $('.menu-links').click(function(){
      $(".content:visible").hide();
      $('#' + $(this).attr("data-showdiv")).show();
    });
    $('#photo-link').click(function(){
      $('#photo-content').load("partials/gallery.html");
    });
  }

  function hideShowSlider(){
    $('.menu-links').click(function(){
      $('.flexslider').hide();
      $('.content-container').removeClass('hide');
    });
    $('.navbar-brand').click(function(){
      $('.flexslider').show();
      $('.content-container').addClass('hide');
    });
  }


})();
