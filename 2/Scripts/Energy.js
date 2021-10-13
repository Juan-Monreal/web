/**
 * la CFE genera la factura con base en 
        la lectura de Kwh consumidos en un bimestre

        los primeros 300kw son a la tarifa1 (basica)
        los siguientes 300 kw son a la tarifa 2(intermiedia)
        de 601 kw hacia arriba son a la tarifa de alto consumo

        dado un consumo en Kw y los costos de cada tarifa 
        escribir un pequeño programa  en javascipt que 
        obtenga el total a pagar y presente el detalle 
        a pagar de cada tarifa

        1000kw   t1 $1, t2
         300 * $1 
        300 * $3
        400 * $5
       -----------------
       $3200
 */


let kw = 1000;
let total = 0;
let message = "Your total of KW was: " + kw + "\n";
if (kw > 600){
	kw -= 600;
	message += "First 300 * $1 = " + 300 * 1 + "\n";
	total += 300*1;
	message += "Second 300 * $3 = " + 300 * 3 + "\n";
	total += 300*3;
	message += "The rest "+ kw +"* $3 = " + kw * 5 +"\n";
	total += kw*5;
}else if (kw > 300) {
	kw -= 300;
	message += "First 300 * $1 = " + 300 * 1 + "n";
	total += 300*1;
	message += "The rest "+ kw +"* $3 = " + kw * 3 +"\n";
	total += kw*3;
}else {
	message += "The rest "+ kw +"* $1 = " + kw * 1 +"\n";
	total += kw*1;
}
message += "Your total: " + total;
alert(message)
document.getElementById("energy").innerHTML = message;
