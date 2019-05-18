$(document).ready(function(){

var a =10;
var b = 10;
var ans;
ans=a+b;
console.log(ans);

// Hide | Show | Toggle
$('#btn').click(function(){
    $('#text').hide(2000);
});

$('#btn2').mouseleave(function(){
    $('#text').show('slow');
});

$('#btn3').dblclick(function(){
    $('#text').toggle('slow');
});

// Append | Prepend | Before | After
// $('#Append').click(function(){
//     $('#text2').append('<b>Bangladesh</b>');
// });

$('#Append').click(function(){
	$('#text2').append('<img src="spiderMan.jpg" id="image">');
});
// $('#Prepend').click(function(){
//     $('#text2').prepend('<b>Bangladesh</b>');
// });
$('#Prepend').dblclick(function(){
	$('#text2').prepend('<img src="spiderMan.jpg" id="image">');
});

$('#Before').click(function(){
	$('#text2').before('<img src="spiderMan.jpg" id="image">');
});

$('#After').click(function(){
	$('#text2').after('<img src="spiderMan.jpg" id="image">');
});

// Slide Up | Slide Down | Slide Toggle
$('#slideUp').click(function(){
	$('#text3').slideUp(5000);
});

$('#slideDown').click(function(){
	$('#text3').slideDown('fast');
});

$('#slideToggle').click(function(){
	$('#text3').slideToggle('slow');
});

// Fade In | Fade Out | Fade Toggle
$('#fadeIn').click(function(){
	$('#text4').fadeIn(5000);
});

// Scroll to top
$('#top').click(function(){
	$('html,body').animate({
		scrollTop: 0
	},5000);
});



});

