function isNumber(value){
	if(value == "")
		throw "Empty";
	if(!isNaN(value))
		return Number(value)
	else
		throw "Error";
}
function total(data){
	let i = data.length;
	let sum = 0;
	while(i--)
		sum += isNumber(data[i]);
	return sum;
}

function average(data){
	return total(data)/data.length;
}

function getDifferences(data, avr){
	let i = data.length;
	let sum = 0;
	while(i--)
		sum += (data[i]-avr) ** 2;
	return sum;
}

function variance(data){
	let avr = average(data);
	let vari = 0;
	vari = getDifferences(data, avr);
	return vari / data.length;
}

function standar_deviation(data){
	return Math.sqrt(variance(data));
}

function addition(num, num2){
	return isNumber(num) + isNumber(num2);
}

function substraction(num, num2){
	return isNumber(num) - isNumber(num2);
}

function division(num, num2){
	if (isNumber(num2) == 0) 
		throw "Zero Division ERROR";
	else
		return isNumber(num)/isNumber(num2);

}

function mult(num, num2){
	return isNumber(num) * isNumber(num2);
}
let POW = function(num, num2){return isNumber(num) ** isNumber(num2)};

function clean(data){
	data = data.replaceAll(/\s+/g,'');
	return data.split(",");
}

function appendInputs(id){
	let f = document.getElementById("frm");
	while (f.firstChild)
		f.firstChild.remove();
	switch(id){
		case "sum":
		case "res":
		case "mult":
		case "div":
			for (i = 0; i<2; i++){
				f.appendChild(document.createTextNode("Input" + (i+1) + " "));
				let input = document.createElement("input");
				input.type = "number";
				input.min = "1";
				input.name = "Input " + i;
				input.id = i+1;
				input.value = 10;
				f.appendChild(input);
				f.appendChild(document.createElement("br"));
			}
			break;
		case "prom":
		case "des":
			f.appendChild(document.createTextNode("Insert N values comma separated "));
			let input = document.createElement("TEXTAREA");
			input.name = "text";
			input.id = "data";
			input.value = "864,178,880,45,477,156,323,90,718,699,552,926,126,382,17,1000,926,837,644,320,486,516,130,693,903,176,786,534,525,713,489,571,431,944,308,574,19,746,142,550,936,365,316,689,19,624,356,382,725,956,138,697,683,364,924,430,906,105,340,519,1000,844,496,254,957,360,358,778,692,500,766,763,212,225,164,79,913,631,831,460,678,189,654,307,443,499,499,486,730,385,280,198,816,671,928,448,442,976,417,710"
			f.appendChild(input);
			f.appendChild(document.createElement("br"));
			break;
		default:
			alert("ERROR!!!None");
			break;
	}
}

let op = "none";
function getSelected(id){
	op = id;
	appendInputs(id);
}
//data = [864 , 178 , 880 , 45 , 477 , 156 , 323 , 90 , 718 , 699 , 552 , 926 , 126 , 382 , 17 , 1000 , 926 , 837 , 644 , 320 , 486 , 516 , 130 , 693 , 903 , 176 , 786 , 534 , 525 , 713 , 489 , 571 , 431 , 944 , 308 , 574 , 19 , 746 , 142 , 550 , 936 , 365 , 316 , 689 , 19 , 624 , 356 , 382 , 725 , 956 , 138 , 697 , 683 , 364 , 924 , 430 , 906 , 105 , 340 , 519 , 1000 , 844 , 496 , 254 , 957 , 360 , 358 , 778 , 692 , 500 , 766 , 763 , 212 , 225 , 164 , 79 , 913 , 631 , 831 , 460 , 678 , 189 , 654 , 307 , 443 , 499 , 499 , 486 , 730 , 385 , 280 , 198 , 816 , 671 , 928 , 448 , 442 , 976 , 417 , 710]

//alert("Standar Deviation = " + standar_deviation(data));
//document.getElementById("standar").innerHTML = "Standar Deviation = " + standar_deviation(data);
//
function output(value){
	let sect = document.getElementById("sect");
	while (sect.firstChild)
		sect.firstChild.remove();
	sect.appendChild(document.createTextNode("Resultado : " + value));
}
function calculator(){
	switch(op){
		case "sum":
			//alert("Suma " + addition(document.getElementById("1").value, document.getElementById("2").value));
			output(addition(document.getElementById("1").value, document.getElementById("2").value));
			break;
		case "res":
			//alert("Resta " + substraction(document.getElementById("1").value, document.getElementById("2").value));
			output(substraction(document.getElementById("1").value, document.getElementById("2").value));
			break;
		case "mult":
			output(mult(document.getElementById("1").value, document.getElementById("2").value));
			//alert("Multiplicacion " + mult(document.getElementById("1").value, document.getElementById("2").value));
			break;
		case "div":
			output(division(document.getElementById("1").value, document.getElementById("2").value));
			//alert("Division " + division(document.getElementById("1").value, document.getElementById("2").value));
			break;
		case "prom":
			let d = document.getElementById("data").value;
			d = clean(d);
			output(average(d));
			//alert("Promedio " + average(d));
			break;
		case "des":
			let d2 = document.getElementById("data").value;
			d2 = clean(d2);
			output(standar_deviation(d2));
			//alert("Desviacion Estandar " + standar_deviation(d2));
			break;
		default:
			alert("ERROR!!! None");
	}
	let f = document.getElementById("frm");
	while (f.firstChild)
		f.firstChild.remove();
	
	op = "none";
}
