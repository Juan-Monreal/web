function total(data){
	let i = data.length;
	let sum = 0;
	while(i--)
		sum += data[i];
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

data = [864 , 178 , 880 , 45 , 477 , 156 , 323 , 90 , 718 , 699 , 552 , 926 , 126 , 382 , 17 , 1000 , 926 , 837 , 644 , 320 , 486 , 516 , 130 , 693 , 903 , 176 , 786 , 534 , 525 , 713 , 489 , 571 , 431 , 944 , 308 , 574 , 19 , 746 , 142 , 550 , 936 , 365 , 316 , 689 , 19 , 624 , 356 , 382 , 725 , 956 , 138 , 697 , 683 , 364 , 924 , 430 , 906 , 105 , 340 , 519 , 1000 , 844 , 496 , 254 , 957 , 360 , 358 , 778 , 692 , 500 , 766 , 763 , 212 , 225 , 164 , 79 , 913 , 631 , 831 , 460 , 678 , 189 , 654 , 307 , 443 , 499 , 499 , 486 , 730 , 385 , 280 , 198 , 816 , 671 , 928 , 448 , 442 , 976 , 417 , 710]

alert("Standar Deviation = " + standar_deviation(data));
//document.getElementById("standar").innerHTML = "Standar Deviation = " + standar_deviation(data);
