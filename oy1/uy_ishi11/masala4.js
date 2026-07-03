function groupBy(arr, key){
    const result = {};
    for (let i of arr){
        result[i[key]] = [];
    }
    
    for (let i in result){
        for (let j of arr){
            if (i == j[key]){
                result[i].push(j)
            }
        }
    }
    
    return result; 
    
}
    
const users = [
 { name: "Ali", city: "Tashkent" },
 { name: "Vali", city: "Samarqand" },
 { name: "Guli", city: "Tashkent" }
];

console.log(groupBy(users, "city"));