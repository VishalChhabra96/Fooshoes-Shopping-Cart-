$(document).ready(function() {
  $('.pink-shoes').click(function () {
    $('.pink-shoes').css({"border-top": "5px solid #57c0a5"});
    $('.anna-field').css({"border-top": "5px solid #000000"});
    $('.prada').css({"border-top": "5px solid #000000"});
    $('.casadei').css({"border-top": "5px solid #000000"});
    $('.mellow-yellow').css({"border-top": "5px solid #000000"});
    $('.slider-1').css({"display": "flex"});
    $('.slider-5').css({"display": "none"});
    $('.slider-2').css({"display": "none"});
    $('.slider-3').css({"display": "none"});
    $('.slider-4').css({"display": "none"});
  });
  $('.anna-field').click(function () {
    $('.pink-shoes').css({"border-top": "5px solid #000000"});
    $('.anna-field').css({"border-top": "5px solid #57c0a5"});
    $('.prada').css({"border-top": "5px solid #000000"});
    $('.casadei').css({"border-top": "5px solid #000000"});
    $('.mellow-yellow').css({"border-top": "5px solid #000000"});
    $('.slider-2').css({"display": "flex"});
    $('.slider-1').css({"display": "none"});
    $('.slider-4').css({"display": "none"});
    $('.slider-3').css({"display": "none"});
    $('.slider-5').css({"display": "none"});
  });
  $('.prada').click(function () {
    $('.pink-shoes').css({"border-top": "5px solid #000000"});
    $('.anna-field').css({"border-top": "5px solid #000000"});
    $('.prada').css({"border-top": "5px solid #57c0a5"});
    $('.casadei').css({"border-top": "5px solid #000000"});
    $('.mellow-yellow').css({"border-top": "5px solid #000000"});
    $('.slider-3').css({"display": "flex"});
    $('.slider-1').css({"display": "none"});
    $('.slider-2').css({"display": "none"});
    $('.slider-4').css({"display": "none"});
    $('.slider-5').css({"display": "none"});
  });
  $('.casadei').click(function () {
    $('.pink-shoes').css({"border-top": "5px solid #000000"});
    $('.anna-field').css({"border-top": "5px solid #000000"});
    $('.prada').css({"border-top": "5px solid #000000"});
    $('.casadei').css({"border-top": "5px solid #57c0a5"});
    $('.mellow-yellow').css({"border-top": "5px solid #000000"});
    $('.slider-4').css({"display": "flex"});
    $('.slider-1').css({"display": "none"});
    $('.slider-2').css({"display": "none"});
    $('.slider-3').css({"display": "none"});
    $('.slider-5').css({"display": "none"});
  });
  $('.mellow-yellow').click(function () {
    $('.pink-shoes').css({"border-top": "5px solid #000000"});
    $('.anna-field').css({"border-top": "5px solid #000000"});
    $('.prada').css({"border-top": "5px solid #000000"});
    $('.casadei').css({"border-top": "5px solid #000000"});
    $('.mellow-yellow').css({"border-top": "5px solid #57c0a5"});
    $('.slider-5').css({"display": "flex"});
    $('.slider-1').css({"display": "none"});
    $('.slider-2').css({"display": "none"});
    $('.slider-3').css({"display": "none"});
    $('.slider-4').css({"display": "none"});
  });
});