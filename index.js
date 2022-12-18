let a, b, operator;

console.log(operate(7, 2, '*'));

//functions for basic math operations
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function devide(a, b) {
	return a / b;
}

function multiply(a, b) {
	return a * b;
}

//function that does the math
function operate(a, b, operator) {
	switch (operator) {
		case '+':
			return add(a, b);

		case '-':
			return subtract(a, b);

		case '/':
			return devide(a, b);

		case '*':
			return multiply(a, b);

		default:
			alert('Invalid operator, try again.');
	}
}
