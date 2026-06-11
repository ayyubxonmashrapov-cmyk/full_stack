let i = 0;

const timer = setInterval(() => {
  console.log((i += 2));
  if (i === 20) {
    clearInterval(timer);
  }
}, 1000);