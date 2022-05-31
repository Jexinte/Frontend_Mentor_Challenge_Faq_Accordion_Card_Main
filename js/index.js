const questions = document.querySelector('.questions img')
const responses = document.querySelector('.main-response');

$(document).ready(function() {
    $("#question1").click(function(){
        $("#response1").fadeToggle();
        $("#question1").css("font-weight","700")
    })
})

$(document).ready(function() {
    $("#question2").click(function(){
        $("#response2").fadeToggle();
        $("#question2").css("font-weight","700")
    })
})

$(document).ready(function() {
    $("#question3").click(function(){
        $("#response3").fadeToggle();
        $("#question3").css("font-weight","700")
    })
})

$(document).ready(function() {
    $("#question4").click(function(){
        $("#response4").fadeToggle();
        $("#question4").css("font-weight","700")
    })
})

$(document).ready(function() {
    $("#question5").click(function(){
        $("#response5").fadeToggle();
        $("#question5").css("font-weight","700")
    })
})