const student = {
    name: "Ali",
    scores: [78, 90, 85, 95],
    getAvg(){
        let sum = 0;
        let count = 0;

        for (let score of this.scores){
            sum += score;
            ++count;
        }

        return (sum / count).toFixed(2)
    }
}

console.log(student.getAvg())