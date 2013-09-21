/*! DO NOT EDIT THIS FILE */
/*! File Concatatenated by grunt @ 2013-09-21 14:35 */
/*
*	
*	---
*	Written by Nic Mulvaney
*
*/


// Setup App namespace
var App = App || {};

// Globals
var mobile,
	ua = navigator.userAgent,
	event_down, 
	event_move, 
	event_release, 
	mobile,
	transition = "transitionend webkitTransitionEnd",
	animation = "animationend webkitAnimationEnd";

// CHECK BROWSER
/* ------------------------------------------------------------ */

if( ua.match(/iPhone/i) || ua.match(/iPad/i) || ua.match(/Android/i) ){
	event_down =  "touchstart";
    event_move = "touchmove";
    event_release =  "touchend";
    mobile = true;
}else{
    event_down = "mousedown";
    event_move = "mousemove";
    event_release =  "mouseup";
}


App.view = (function () {

	var init = function(){
		console.log("App ready");
	};

	return {
		init:init
	};

})();


App.api = (function () {

	var get = function(){

	};

	var set = function(){

	};

	return {
		get:get,
		set:set
	};

})();


// GENERIC TOOLS
/* ------------------------------------------------------------ */


// LOAD ALL SCRIPTS AND INITIATE THE APP
/* ------------------------------------------------------------ */


head.js(
	"//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",
	"js/vendor/transparency.min.js"
).ready(App.view.init);


// Disable Console if not available;
window.console = window.console || { log: function (d) {} };