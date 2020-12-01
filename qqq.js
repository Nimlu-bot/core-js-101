function getIntervalArray(start, end) {
  const arr = Array(end - start);
  //console.log(arr);
  const newArr = arr.map((el, index) => {
    console.log(start);
    return start + index;
  })

  return newArr;

  // const arr = [];
  // for (let i = start; i <= end; i += 1) {
  //   arr.push(i);
  // }
  // return arr;
  // throw new Error('Not implemented');
}
console.log(getIntervalArray(-3, 3));
