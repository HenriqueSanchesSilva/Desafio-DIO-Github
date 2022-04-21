const myObj= {
  nome: 'Henrique',
  idade: 18
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(myObj, 30));
console.log(calculaIdade.apply(myObj, [40]));