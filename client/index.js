'use strict';

$(document).ready(init);

function init(){
  var checkLength = funtion(number) {
    if (number.length > 9) {
      totaldiv.text(number.substr(number.length-9,9));
      if (number.length > 15) {
        number = '';
        totaldiv.text("I'm afraid I can't do that Dave");
      }
    }
  };
  var number = '';
  var newNumber = '';
  var operator = '';
  var totaldiv = $('#total');

}
