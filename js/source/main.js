(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('.flexslider').flexslider();
    navLinks();
    initYoutubeVideos();
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

  function initYoutubeVideos(){
      var URL = "https://gdata.youtube.com/feeds/api/users/";
      var UserName = "LexieLeighWilson";
      var jsonFormat = "/uploads?v=2&alt=jsonc&";
      var ajaxURL = URL + UserName + jsonFormat;
      $.getJSON(ajaxURL, function(data){
           var htmlString = "";

          $.each(data.data.items, function(i,item){      
              htmlString += '<div class="col-md-6"><iframe class="videos" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/';
              htmlString += item.id;
              htmlString += '?autoplay=0" frameborder="0"></iframe></div>';
          });

          $('#videos').html(htmlString);

      });
  }


})();
