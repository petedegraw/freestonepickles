/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);