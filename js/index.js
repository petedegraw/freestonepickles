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

// Navigation
$(function(){
  var toggleButton = $('#nav-toggle');
  var menu = $('#nav');
  
  $(toggleButton).click(function(){
    $(menu).toggle("fast","linear",function(){
      if ($(menu).hasClass('nav-hidden')) {
        $(menu).removeClass('nav-hidden');
      } else {
        $(menu).addClass('nav-hidden');
      }
    });
  });
});

// Slider
jQuery(document).ready(function($) {
  $('.home-slider').unslider({
    // autoplay: true,
    speed: 1000
  });
});

// Years In Business
var today = new Date();
var yearNow = today.getYear();
var firstYear = 1903;
var years = yearNow - firstYear;
// var numOfYears = getElementById('years').textContent('years');
$('#years').text(years);