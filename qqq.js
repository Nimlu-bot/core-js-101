function getIdentityMatrix(n) {
  const arr = Array(n).fill(0);
  const arr2 = Array(n).fill(0);
  return arr2.map((elem, index) => arr.map((el, i) => {
    if (i === index) return 1;
    return 0;
  }));
  //  throw new Error('Not implemented');
}

console.log(getIdentityMatrix(5));
