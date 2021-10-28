class Operation{
	isNumber(value){
		if(value == "")
			throw "Empty";
		if(!isNaN(value))
			return Number(value)
		else
			throw "Error";
	}
	total(data){
		let i = data.length;
		let sum = 0;
		while(i--)
			sum += isNumber(data[i]);
		return sum;
	}
	
	average(data){
		return total(data)/data.length;
	}
	
	getDifferences(data, avr){
		let i = data.length;
		let sum = 0;
		while(i--)
			sum += (data[i]-avr) ** 2;
		return sum;
	}
	
	variance(data){
		let avr = average(data);
		let vari = 0;
		vari = getDifferences(data, avr);
		return vari / data.length;
	}
	
	standar_deviation(data){
		return Math.sqrt(variance(data));
	}
	
	add(num, num2){
		return isNumber(num) + isNumber(num2);
	}
	
	substract(num, num2){
		return isNumber(num) - isNumber(num2);
	}
	
	divide(num, num2){
		if (isNumber(num2) == 0) 
			throw "Zero Division ERROR";
		else
			return isNumber(num)/isNumber(num2);
	
	}
	
	multiply(num, num2){
		return isNumber(num) * isNumber(num2);
	}
	
	power(num, num2){
		return isNumber(num) ** isNumber(num2)
	}

}
const _Operation = Operation;
export { _Operation as Operation };