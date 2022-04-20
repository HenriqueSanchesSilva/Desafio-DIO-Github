function exibir(word){
  if(!word) return "Escreva uma palavra.";
  const palindromo = inverterEComparar(word);
  return `${palindromo}`;
}

function inverterEComparar(word){
  const inverse = word.split('').reverse().join('');
  if(word === inverse){
    return `A palavra ${word} é um palíndromo.`;
  }
  else{
    return `A palavra ${word} não é um palíndromo.`;
  }
}

console.log(exibir("ovo"));