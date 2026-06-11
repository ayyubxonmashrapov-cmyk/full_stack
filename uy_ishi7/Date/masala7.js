const isDam = function(sana) {
  const date = new Date(sana);
  const day = date.getDay(); 

  return day === 0 || day === 6
}

console.log(isDam("2025-01-04")); 
console.log(isDam("2025-01-06")); 