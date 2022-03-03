function reajuste(){
	
	var funcionario = {
	nome : prompt("Qual o nome do funcionário?"), salario : parseFloat(prompt("Qual o salário do funcionário?")), pct : parseFloat(prompt("Qual o reajuste do funcionário?")), fone : parseFloat(prompt("Qual o telefone do funcionário?"))
	}

	try{
		if(funcionario.salario < 0){
			throw "O valor é negativo"; 
		}
	} catch (err){
		console.log (err);
		alert(err);
	}
	
	
	
	pct = funcionario.salario * (funcionario.pct/100);
	pct1 = funcionario.salario + pct
	var String = ("O FUNCIONÁRIO "+funcionario.nome+" RECEBEU UM REAJUSTE!!  O salário de "+funcionario.nome+" era de R$"+funcionario.salario+ " e agora é de R$"+pct1+ "Com um reajuste de "+funcionario.pct+"%, para entrar em contato com o funcionário ligue: "+funcionario.fone);
	document.getElementById("q01").innerHTML = String;
}
