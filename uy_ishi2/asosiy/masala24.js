function allKeysLength(obj) {
  let totalLength = 0;

  for (const key in obj) {
    totalLength += key.length;
  }

  return totalLength
}

const obj = {
    afsda: 5,
    b: 7,
    cfas: 5,
    d: 9,
    efa: 5
}

console.log(allKeysLength(obj))