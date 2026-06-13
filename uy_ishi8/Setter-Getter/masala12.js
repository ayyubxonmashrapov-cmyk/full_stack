const temperature = { 
    celsius: 0,

    set fahrenheit(n){
        this.celsius = +((n - 32) * 5/9).toFixed(2);
    }
}


temperature.fahrenheit = 78;

console.log(temperature)
