/* function soma(a: number, b:number){
  return a + b;
}
*/

interface iAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático'; 
  executarRugido(alturaDecibeis: number): void;  // quando for utilizar em uma variavel 
}                                                // não podera usar um valor diferente do definido
                                                 //como no exemplo abaixo.

interface iFelinos extends iAnimal {
  visaoNoturna: boolean;
}

const animal: iAnimal = {
  nome: 'Elefante',
  tipo: 'terrestre',
  executarRugido: (alturaDecibeis) => (`${alturaDecibeis}dB`)
}

const felino: iFelinos = {
  nome: 'leao',
  tipo: 'terrestre',
  executarRugido: (alturaDecibeis) => (`${alturaDecibeis}dB`),
  visaoNoturna: true
}