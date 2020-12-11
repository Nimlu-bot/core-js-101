// function getIdGeneratorFunction(startFrom) {
//   let id = startFrom - 1;
//   getIdGeneratorFunction = function getId() {
//     id += 1;
//     return id;
//   }
//   return getIdGeneratorFunction();
//   // throw new Error('Not implemented');
// }
// console.log(getIdGeneratorFunction(6));
// console.log(getIdGeneratorFunction());
// console.log(getIdGeneratorFunction());
// console.log(getIdGeneratorFunction());
// console.log(getIdGeneratorFunction());

function swapHeadAndTail(arr) {
  if (arr.length <= 1) return arr;
  if (arr.length % 2) {
    const half = Math.trunc(arr.length / 2);
    return arr.concat(arr.splice(half, 1).concat(arr.splice(0, half)));
    //	return arr.splice(half, half - 1);
  }
  const half = Math.trunc(arr.length / 2);
  return arr.concat(arr.splice(0, half));
  //  throw new Error('Not implemented');
}
console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6, 7, 8, 9]));
