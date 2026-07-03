const toBinary = (n) => {
if (n === 0) return '0';
  
  const isNegative = n < 0;
  let num = Math.abs(n);
  let bits = '';
  
  while (num > 0) {
    bits = (num % 2) + bits;
    num = Math.floor(num / 2);
  }
  
  return isNegative ? '-' + bits : bits;
}

console.log(toBinary(10))