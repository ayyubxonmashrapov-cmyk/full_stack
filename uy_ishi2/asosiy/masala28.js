function mostAndWorsePrice(obj){
    let maxP = Object.entries(obj)[0];

    for (let i of Object.entries(obj)){
        if (i[1] > maxP[1]){
            maxP = i
        }
    }

    let minP = maxP;

    for (let i of Object.entries(obj)){
        if (i[1] < minP[1]){
            minP = i
        }
    }

    return [maxP, minP]
}


const products = {
    laptop: 1200,
    phone: 800,
    monitor: 350,
    keyboard: 70,
    mouse: 40,
    headphones: 150
};

console.log(mostAndWorsePrice(products))