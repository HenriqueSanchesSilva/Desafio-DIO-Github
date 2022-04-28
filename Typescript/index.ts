interface iPessoa{
  nome: string;
  idade: number;
  nacionalidade;
}

interface Brasileiro extends Omit<iPessoa, 'nacionalidade'>{
  
}

import $ from 'jquery';

$.fn.extend({
  novaFuncao(){
    console.log("nova funcao");
  }
});

$('body').novaFuncao();

interface Cachorro{
  nome: string;
  idade: number;
  parqueFav?: string;
}

type CachorroSomenteLeitura = {
  +readonly [K in keyof Cachorro]-?: Cachorro[K]
}

class meuCachorro implements CachorroSomenteLeitura{
  nome;
  idade;
  parqueFav;
  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new meuCachorro('Apolo', 14);


interface iUsuario {
  id: string;
  email: string;
  cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';//dado opcional
}

function redirecione(usuario: iUsuario){
  if(usuario.cargo){
   // redirecione(usuario.cargo);
  }
}



  //if ('cargo' in usuario){ //verifica se a variavel possui o att
    //redireciona para admin area
  //}

//Generic types

function adicionaApendiceALista<T>(array: T[], value: T){
  return array.map(() => value)
}

adicionaApendiceALista([1, 2, 3, 4], 2);


const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input', (event) =>{
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
})


 function soma(a: number, b:number){
  return a + b;
}


interface iAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático'; 
  domestico: boolean;         // quando for utilizar em uma variavel 
}                             // não podera usar um valor diferente do definido
                              //como no exemplo abaixo.

interface iFelinos extends iAnimal {
  visaoNoturna: boolean;
}

interface iCanino extends iAnimal {
  porte: 'pequeno' | 'medio' | 'grande';
}

type iDomestico = iFelinos | iCanino

const animal: iDomestico = {
  nome: 'Cachorro',
  tipo: 'terrestre',
  porte:'medio',
  domestico: true,
  visaoNoturna: true
}
