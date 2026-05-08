// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	if(string_numbers === '')
	{
		return 0;
	} 
	else if(string_numbers.includes(','))
	{
		let numbers = string_numbers.split(',');

		return parseInt(numbers[0]) + parseInt(numbers[1]);
	}
	else
	{
		return parseInt(string_numbers);
	}
	
};
