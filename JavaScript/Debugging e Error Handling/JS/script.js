function exibe(array, tamanho){
 try{
   if(!array && !num) throw new ReferenceError('Parâmetros não foram enviados.');

   if(typeof array !== 'object') throw new TypeError('O array precisa ser um elemento tipo object');

   if(typeof tamanho !== 'number') throw new TypeError('Tamanho precisa ser um elemento tipo number');

   if(array.length !== tamanho) throw new RangeError('Tamanho do array diferente do número informado.')
 }
 catch(e){
  if (e instanceof RangeError) {
    console.log('RangeError!');
    console.log(e.message);
  } else if (e instanceof ReferenceError) {
    console.log('ReferenceError!');
    console.log(e.message);
  } else if(e instanceof TypeError) {
    console.log('TypeError!');
    console.log(e.message);
  } else {
    console.log('Outro tipo de erro!' + e);
  }
 }
}
arr = [1,2,2,3,3,3,4]
console.log(exibe(arr, 8));