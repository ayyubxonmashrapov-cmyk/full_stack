// Berilgan sonlar massividan eng katta sonni qaytaruvchi funksiya yozing. Misol: [3, 9, 1, 7]
// -> 9.

(function(arr){
    console.log(arr.reduce((a,b) => a < b ? b : a))

}([3, 9, 1, 7]))