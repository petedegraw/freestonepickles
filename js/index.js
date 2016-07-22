// index.js

// Tabs
// https://webdesignerhut.com/create-simple-jquery-tabs/
$(function(){
	$('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
});

// Search
// $(function(){
// 	$('.search-ecwid').detach().appendTo('#top-bar');
// });

// Navigation
$(function(){
  $('#nav-toggle').click(function(){
    $('#nav').toggle("fast","swing",function(){
      var menu = $('#nav');
      if (menu.hasClass('nav-hidden')) {
        menu.removeClass('nav-hidden');
    	$("#nav-toggle i").removeClass('fa-times').addClass('fa-bars');
      } else {
        menu.addClass('nav-hidden');
        $("#nav-toggle i").removeClass('fa-bars').addClass('fa-times');
      }
    });
  });
});