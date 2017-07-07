// JavaScript File
// JavaScript File
$( document ).ready(function() {
$("#change").click(function() {
    $("div").css("background-color","aqua");
});

$("#Picture").click(function(){
for(var count = 0; count < 10 ; count++){
    $("body").append('<img src="https://sistersoliloquies.files.wordpress.com/2014/06/img_7054.jpg">');
    }
});

});