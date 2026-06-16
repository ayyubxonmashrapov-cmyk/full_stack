function mostScoreStudents(obj){
    const result = [];

    let maxP = Object.entries(obj)[0];

    for (let i of Object.entries(obj)){
        if (i[1] > maxP[1]){
            maxP = i
        }
    }

    for (let i in obj){
        if (obj[i] == maxP[1]){
            result.push(i)
        }
    }

    return result
}

const students = {
ali: 85,
vali: 91,
sami: 77,
nodir: 91
}

console.log(mostScoreStudents(students))