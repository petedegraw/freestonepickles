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