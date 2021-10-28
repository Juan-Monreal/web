let btn = document.querySelector('button');

btn.addEventListener('click', compute, false);

function isValidNumber(value){
	if (value == "") 
		return 0;
	if (!isNaN(value))
		return Number(value);
	else
		return 0;
}

function isValidResult(result){
	if (result > 0 && result <= 20)
		return true;
	else 
		return false;
}

function isValidTable(table) {
	if (table > 0 && table <=50)
		return true;
	else
		return false;
}

function solve(table, result){
	let query = document.querySelector('.resultados');
	while(query.firstChild)
		query.firstChild.remove();
	let tabla = document.createElement("table");
	let tbody = document.createElement("tbody");

	for(let i = 0; i < result; i++){
		let column = document.createElement("tr");
			
		
		let row1 = document.createElement("td");
		let row2 = document.createElement("td");
		let row3 = document.createElement("td");
		let row4 = document.createElement("td");
		let row5 = document.createElement("td");
		//let text = document.createTextNode( table + " * " + (i + 1 ) + " = " + (table * (i + 1 )) );
		let text1 = document.createTextNode(table);
		let text2 = document.createTextNode(" * ");
		let text3 = document.createTextNode((i + 1 ));
		let text4 = document.createTextNode(" = ");
		let text5 = document.createTextNode((table * (i + 1 )) );
		row1.appendChild(text1);
		row2.appendChild(text2);
		row3.appendChild(text3);
		row4.appendChild(text4);
		row5.appendChild(text5);
		column.appendChild(row1);
		column.appendChild(row2);
		column.appendChild(row3);
		column.appendChild(row4);
		column.appendChild(row5);
		
		tbody.appendChild(column);
	}

	tabla.appendChild(tbody);
	query.appendChild(tabla);
	tabla.setAttribute("border", "2")
}

/**
 * Validate the values and then solves
 * 
 */
function compute(){
	let table = document.getElementById('tabla');
	let result = document.getElementById('resultados');
	table = isValidNumber(table.value);
	result = isValidNumber(result.value);
	let labelResult = document.querySelectorAll('.alerta');
	
	if (isValidTable(table) && isValidResult(result)) {
		labelResult[0].innerText = "";
		labelResult[1].innerText = "";
		solve(table, result);
	}else {
		if(!isValidTable(table))
			labelResult[0].innerText = "Ingrese un numero valido entre 1 y 50";
		else
			labelResult[0].innerText = "";

		if(!isValidResult(result))
			labelResult[1].innerText = "Ingrese un numero valido entre 1 y 20";
		else
			labelResult[1].innerText = "";
	}


}