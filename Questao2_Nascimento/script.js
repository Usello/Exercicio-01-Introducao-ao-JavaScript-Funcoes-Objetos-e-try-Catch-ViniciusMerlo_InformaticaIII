var idade = (ano) => {
	var ano = parseInt(prompt("Digite o ano do seu nascimento."));
	try{
		if (ano < 0){
		throw "Ano invalido";
	}
	}
	catch (err){
		console.log(err);
		alert (err);
	}
	var resultado = 2022-ano; 
	console.log (resultado)
	alert (resultado);
	var String = "Quem nasceu em "+ano+" vai completar "+resultado+" anos em 2022";
	document.getElementById("result").innerHTML = String
}
