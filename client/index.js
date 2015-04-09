'use strict';

$(document).ready(init);

function init(){
  var checkLength = function(number) {
    if (number.length > 9) {
      result.text(number.substr(number.length-9,9));
      if (number.length > 15) {
        number = '';
        result.text("I'm afraid I can't do that Dave");
      }
    }
  };
  var number = '';
  var newNumber = '';
  var operator = '';
  var result = $('#total');
result.text('0');
$('.number').click(function(){
  number += $(this).text();
  result.text(number);
  checkLength(number);
});
$('.operator').click(function(){
  operator = $(this).text();
  newNumber = number;
  number = '';
  result.text(newNumber);
});
/*$('#dec').click(function(){
    for(var i = 0; i < number.length; i++){
      if (number[i] = '.') {
        number = number;
      }
      else {
        number = number + $(this).text();
    }
  }
  result.text(number);
})*/
$('#clear').click(function(){
  number = '';
  result.text('');
  newNumber = '';
});
$('#posNeg').click(function(){
  number = parseFloat(number * -1);
  result.text(number);
});
$('#perc').click(function(){
  number = parseFloat(number / 100);
  result.text(number);
});
$('#equal').click(function(){
  //number = parseFloat(number * 1);
  //newNumber = parseFloat(newNumber * 1);
  switch(operator) {
    case '+':
      number = (parseFloat((number * 1) + (newNumber * 1))).toString(10);
      break;
    case '-':
      number = (parseFloat((newNumber * 1) - (number * 1))).toString(10);
      break;
    case '*':
      number = (parseFloat((number * 1) * (newNumber * 1))).toString(10);
      break;
    case '/':
      number = (parseFloat((newNumber * 1) / (number * 1))).toString(10);
  }
  //debugger;
  result.text(number);
  checkLength(number);
  //number = '';
  newNumber = '';
});
}
