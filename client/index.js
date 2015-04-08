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
  result.text('');
});
  $('.operatorR').click(function(){
    operator = $(this).text();
    newNumber = number;
    number = '';
    result.text('');
});
$('#clear').click(function(){
  number = '';
  result.text('');
    newNumber = '';
});
$('#equal').click(function(){
  switch(operator) {
    case '+':
      result = (parseFloat(number) + parseFloat(newNumber)).toString(10);
      break;
    case '-':
      result = (parseFloat(number) - parseFloat(newNumber)).toString(10);
      break;
    case '*':
      result = (parseFloat(number) * parseFloat(newNumber)).toString(10);
      break;
    case '/':
      result = (parseFloat(number) / parseFloat(newNumber)).toString(10);
      break;
    //case '%':
      //result = (parseFloat(number) / 100).toString(10);
  }
  result.text(number);
  checkLength(number);
  number = '';
  newNumber = '';
});
}
