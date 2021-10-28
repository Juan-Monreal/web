//const Operation = require('operation.js');

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');


keys.addEventListener('click', e => {
	if(e.target.matches('button')){
		const key = e.target;
		const action = key.dataset.action;
		const keyContent = key.textContent;
		const displayedNum = display.textContent;
		const previousKeyType = calculator.dataset.previousKeyType;

		if (!action) {
			if (displayedNum === '0' || 
				previousKeyType === 'operator' || 
				previousKeyType === 'calculate'
				) {
				display.textContent = keyContent;
			} else {
				display.textContent = displayedNum + keyContent;
			}
			calculator.dataset.previousKeyType = 'number';
		}
		if (action === 'add' ||
			action === 'subtract' ||
			action === 'multiply' ||
			action === 'divide'
			) {
			const firstValue = calculator.dataset.firstValue;
			const operator = calculator.dataset.operator;
			const secondValue = displayedNum;
			if (firstValue && 
				operator && 
				previousKeyType !== 'operator' && 
				previousKeyType !== 'calculate'
				) {
				const result = calculate(firstValue, operator, secondValue);
				display.textContent = result;
				calculator.dataset.firstValue = result;
			}else {
				calculator.dataset.firstValue = displayedNum;
			}
			key.classList.add('is-depressed');
			calculator.dataset.previousKeyType = 'operator';
			calculator.dataset.operator = action;
		}
		if (action === 'decimal') {
			if (!displayedNum.includes('.')) {
				display.textContent = displayedNum + '.';
			}else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
				display.textContent = '0.';
			}
			calculator.dataset.previousKeyType = 'decimal';
		}
			
		if (action === 'clear') {
			if (key.textContent === 'AC') {
				calculator.dataset.firstValue = '';
				calculator.dataset.modValue = '';
				calculator.dataset.operator = '';
				calculator.dataset.previousKeyType = '';
			}else {
				key.textContent = 'AC';
			}
			display.textContent = 0;
			calculator.dataset.previousKeyType = 'clear';
		}
			
		if (action === 'calculate') {
			const firstValue = calculator.dataset.firstValue;
			const operator = calculator.dataset.operator;
			const secondValue = displayedNum;
			if (firstValue) {
				if (previousKeyType === 'calculate') {
					firstValue = displayedNum;
					secondValue = calculator.dataset.modValue;
				}
				display.textContent = calculate(firstValue, operator, secondValue);
			}
			calculator.dataset.modValue = secondValue;
			calculator.dataset.previousKeyType = 'calculate';
		}
		if (action !== 'clear') {
			const clear = calculator.querySelector('[data-action=clear]')
			clear.textContent = 'CE'
		}

		Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

	}
});
/**
 *  Calculate the operation between n1 and n2
 * @param {String First Value} n1 
 * @param {'add', 'substract', 'multiply', 'divide'} operator 
 * @param {String Second Value} n2 
 * @returns Result of n1 operator n2 applied
 */
const calculate = (n1, operator, n2) =>{
	n1 = isNumber(n1);
	n2 = isNumber(n2);
	if (operator === 'add') {
		return n1 + n2;
	}else if (operator === 'subtract'){
		return n1 - n2;
	}else if (operator === 'multiply'){
		return n1 * n2;
	}else if (operator === 'divide'){
		if (n2 === 0)
			//return "Zero Division ERROR";/
			return 0;
		else
			return n1 / n2;
	}
};
/**
 * 
 * @param {String} value 
 * @returns Float value
 */
function isNumber(value){
	if(value == "")
		throw "Empty";
	if(!isNaN(value))
		return parseFloat(value);
	else
		throw "Error";
}