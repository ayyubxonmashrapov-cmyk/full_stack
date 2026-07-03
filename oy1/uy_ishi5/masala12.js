function narx(arr){
    let maxP = arr[0];
    for (let i of arr){
        if (i["price"] > maxP["price"])
            maxP = i;
    }
    return maxP
}



arr = [
{ name: "Book", price: 5000 },
{ name: "Phone", price: 500 }
]

console.log(narx(arr))