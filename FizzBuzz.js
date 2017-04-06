function fizzBuzz (num){
var result = num;
var array = [];
  for (i = 1; i < num; i++){
	result = i;
	array.push(result);
   if (i % 15 === 0){
    result =('fizzBuzz');
    array.push(result);
   }
    if (i % 5 === 0) {
   result = ('fizz');
   array.push(result);
    }
   if (i % 3 === 0) {
   result = ('buzz');
   array.push(result);  
   }
  }	
  return array;
}


// function submitForm() {
	$('#button').click(function(event){
		event.preventDefault();
		var userInput = $('#number-choice').val();
     $('#number-choice').val('');
     var resulttwo = fizzBuzz(userInput);
     $('.js-results').text(resulttwo);
	});
	// console.info('HELLO FROM INNER SCOPE');
// }

// function clicker(){
// 	console.log('Button Clicked')
// }


