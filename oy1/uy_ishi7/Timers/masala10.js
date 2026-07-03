let i = 1;

const timer = setInterval(() => {
  console.log(i++);
  if (i === 6) {
    clearInterval(timer);
  }
}, 1000);