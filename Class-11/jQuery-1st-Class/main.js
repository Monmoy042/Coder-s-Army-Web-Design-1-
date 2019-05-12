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
$('#Append').click(function(){
    $('#text2').append('<b>Bangladesh</b>');
});

$('#Prepend').click(function(){
    $('#text2').prepend('<b>Bangladesh</b>');
});

});

