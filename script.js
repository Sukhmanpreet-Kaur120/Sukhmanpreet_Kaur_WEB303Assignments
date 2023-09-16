/*
	WEB 303 Assignment 1 - jQuery
	Sukhmanpreet kaur
*/
$(document).ready(function() {
	$("input").on("keyup",function(){
		let sal = $("#yearly-salary").val();
		let percentage = $("#percent").val();
		let amt = ((sal*percentage)/100).toFixed(2);
		$("#amount").text("$"+amt);
	})
})
