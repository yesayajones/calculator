let a, b, operator;
//select numbers
let numbers = document.querySelectorAll('.num');
//select operators
let operators = document.querySelectorAll('.opt');
//select equal sign
let equal = document.getElementById('equal');
//select display area
let calc_typed = document.getElementById('calc-typed');
let calc_operation = document.getElementById('calc-operation');
//clear display area
calc_operation.innerHTML = '';

equal.onclick = (a, b, operator) => {
	operate(a, b, operator);
};

//listen for operator click
operators.forEach((operate) => {
	operate.onclick = () => {
		calc_operation.innerHTML += `${operate.innerHTML}`;
	};
});

//listen for number click
numbers.forEach((number) => {
	number.onclick = () => {
		display(number);
		calc_operation.innerHTML += `${number.innerHTML}`;
	};
});

//pass arguments to the math function
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
			alert('No operator selected, try again.');
	}
}

function display(number) {
	calc_typed.innerHTML = `${number.innerHTML}`;
}
