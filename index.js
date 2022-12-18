let a, b, operator;

console.log(operate(5, 2, '+'));

//functions for basic math operations
function add(a, b) {
	return a + b;
}

function subtract() {
	return a - b;
}

function devide() {
	return a / b;
}

function multiply() {
	return a * b;
}

//function that does the math
function operate(a, b, operator) {
	switch (operator) {
		case '+':
			return add(a, b);

		case '+':
			return add(a, b);

		case '+':
			return add(a, b);

		case '+':
			return add(a, b);

		default:
			alert('Invalid operator, try again.');
	}
}
