function getRectangleString(width, height) {
  // const rectangle = [];
  let str = '';
  for (let i = 0; i < height; i += 1) {
    const column = [];
    if (i === 0) {
      column.push('┌');
      for (let j = 1; j < width - 1; j += 1) {
        column.push('─');
      }
      column.push('┐');
    } else if (i === height - 1) {
      column.push('└');
      for (let j = 1; j < width - 1; j += 1) {
        column.push('─');
      }
      column.push('┘');
    } else {
      column.push('│');
      for (let j = 1; j < width - 1; j += 1) {
        column.push(' ');
      }
      column.push('│');
    }
    str += `${column.join('')}\n`;
    console.log(str);
  }

  return str;
  //  throw new Error('Not implemented');
}
console.log(getRectangleString(2, 2));
