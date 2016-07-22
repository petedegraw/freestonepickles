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

/***/ }
/******/ ]);