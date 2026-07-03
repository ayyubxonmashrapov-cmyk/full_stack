const temperature = {
    celsius:  17,

    get onFarenheit(){
        return (this.celsius * 9/5) + 32
    }
}

console.log(temperature.onFarenheit)