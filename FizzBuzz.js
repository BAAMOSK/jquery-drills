function fizzBuzz (num){
var result = num;
var output = ``;
  for (i = 1; i < num; i++) {	
   if (i % 15 === 0){
    result = `<div class="fizz-buzz-item fizzbuzz"><span>fizzBuzz</span></div>`;
    output += result;
   } else if (i % 5 === 0) {
   result = `<div class="fizz-buzz-item buzz"><span>buzz</span></div>`;
   output += result;
    } else if (i % 3 === 0) {
   result = `<div class="fizz-buzz-item fizz"><span>fizz</span></div>`;
   output += result;
   } else {
    result = `<div class="fizz-buzz-item"><span>${i}</span></div>`;
	output += result;
   }
  }	
  return output;
}

$('#button').click(function(event){
  event.preventDefault();
  var userInput = $('#number-choice').val();
  $('#number-choice').val('');
  var resultTwo = fizzBuzz(userInput);
  $('.js-results').html(resultTwo);
});

