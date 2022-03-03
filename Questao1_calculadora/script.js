
function Calculadora() {
	var n1 = parseInt(prompt("Digite um número")); 
	var n2 = parseInt (prompt("Digite o segundo número")); 

	var opt = parseInt(prompt("Digite 1 para soma, 2 para subtração, 3 para multiplicação e 4 para divisão"));

	if(opt === 1){
		console.log(soma (n1, n2));
	}	else if (opt === 2){
		console.log(subtração(n1, n2));
	} else if (opt === 3){
		console.log(multiplicação(n1, n2));
	}	else if (opt === 4){
		console.log(divisão(n1, n2));
	}

}

var soma = (n1, n2) =>{
	return n1+n2;
}



var subtração = (n1, n2) => {
	return n1-n2;
}



function multiplicação (n1, n2){
	return n1*n2;
}



var divisão = function (n1, n2){
	return n1/n2;
}

