function exibe(num1, num2) {
  if(!num1 || !num2) return "Defina dois números!"
  const fraseCompara = compara(num1, num2);
  const fraseMaiorEMenor = maioremenor(num1, num2);

  return `${fraseCompara} E ${fraseMaiorEMenor}`;
}

function compara(num1, num2) {
  if(num1 === num2){
    return `Os números ${num1} e ${num2} são iguais.`
  }
  else{
    return `Os números ${num1} e ${num2} não são iguais.`
  } 
}

function maioremenor(num1, num2) {
  const soma = num1 + num2;
  let dez = 'menor';
  let vinte = 'menor';
  if(soma > 10){
    dez = 'maior'
  }
  if(soma > 20){
    vinte = 'maior'
  }

  return `a soma dos números ${num1} e ${num2} é ${soma}, que é ${dez} que 10 e ${vinte} que 20.`
}

console.log(exibe(10,34));