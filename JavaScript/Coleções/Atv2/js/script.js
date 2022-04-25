function elementosUnicos(array){
  let unique = new Set(array);
	return [...unique];
}

const nums = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(elementosUnicos(nums));