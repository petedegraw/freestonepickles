// index.js

// Tabs
// https://webdesignerhut.com/create-simple-jquery-tabs/
jQuery(document).ready(function($) {
	$('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
});

// Navigation
jQuery(document).ready(function($) {
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
jQuery(document).ready(function($) {
	function totalYears(){
	  var originYear = 1903;
	  var currentYear = new Date().getFullYear();
	  var yearsInBusiness = currentYear-originYear;
	  $('#yearsInBusiness').html(yearsInBusiness);
	}
	totalYears();
});

jQuery(document).ready(function($){
	$('.bh-sl-form-input .bh-sl-form-input-group:first-child').before('<h3 class="bh-sl-filter-title">Location Search</h3>');
});
