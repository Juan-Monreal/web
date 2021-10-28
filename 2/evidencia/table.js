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
			
		for (let j = 0; j < 1; j++){
			let row = document.createElement("td");
			let text = document.createTextNode( table + " * " + (i + 1 ) + " = " + (table * (i + 1 )) );
			row.appendChild(text);
			column.appendChild(row);
		}
		tbody.appendChild(column);
	}

	tabla.appendChild(tbody);
	query.appendChild(tabla);
	tabla.setAttribute("border", "5")
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