let i = 0;
let count = 0;

const timer = setInterval(() => {
    console.log(Math.floor(Math.random(10) * 100 + 1));
    count ++;
  if (count === 10) {
    clearInterval(timer);
  }
}, 1000);