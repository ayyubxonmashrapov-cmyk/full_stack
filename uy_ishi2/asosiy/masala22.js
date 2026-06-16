function mostFrequentValue(obj) {
  const values = Object.values(obj);
  const counts = {};

  for (const val of values) {
    counts[val] = (counts[val] || 0) + 1;
  }

  return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
}

const obj = {
    a: 5,
    b: 7,
    c: 5,
    d: 9,
    e: 5
}

console.log(mostFrequentValue(obj))