'use strict';

$(document).ready(init);

var storedNumber;
var storedNumber2;
var operator = '';

function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
  $('#clear').click(clear);
  $('#perc').click(clickPercent);
  $('#posNeg').click(clickNeg);
  $('.operator').click(clickOperator);
  $('#equal').click(performCalculation);
}

function clickNumber(){
  var num = $(this).text();
  var display = $('#display').text();
  var output = (display === '0') ? num : display + num;
  $('#display').text(output);
}

function clickDecimal(){
  var display = $('#display').text();
  var output = display.indexOf('.') !== -1 ? display : display += '.';
  $('#display').text(output);
}

function clear(){
  if ($('#display').text()==='0'){
    storedNumber = undefined;
    storedNumber2 = undefined;
    $('#clear').text('C');
  }else {
    storedNumber = parseFloat($('#display').text());
    $('#clear').text('AC');
  }
  $('#display').text('0');
}

function clickPercent(){
  var display = parseFloat($('#display').text());
  var output = display / 100;
  $('#display').text(output);
}
function clickNeg(){
  var display = -1 * (parseFloat($('#display').text()));
  $('#display').text(display);
}

function clickOperator(){
  /*if (storedNumber2 !== undefined){
    performCalculation();
  }
  else {
    storedNumber = parseFloat($('#display').text());
    $('#display').text('0');
  }*/
  storedNumber = parseFloat($('#display').text());
  operator = $(this).text();
  $('#display').text('0');
}

function performCalculation() {
  var result;
  if(storedNumber2 !== undefined){
  switch (operator) {
    case '+':
      result = storedNumber + storedNumber2;
      break;
    case '-':
      result = storedNumber2 - storedNumber;
      break;
    case '×':
      result = storedNumber * storedNumber2;
      break;
    case '÷':
      result = storedNumber2 / storedNumber;
  }
}
  else{
  var newNumber = parseFloat($('#display').text());
  switch (operator) {
    case '+':
      result = storedNumber + newNumber;
      break;
    case '-':
      result = storedNumber - newNumber;
      break;
    case '×':
      result = storedNumber * newNumber;
      break;
    case '÷':
      result = storedNumber / newNumber;
    }
    storedNumber = newNumber;
  }
  storedNumber2 = result;
  $('#display').text(+result.toFixed(7));
}
