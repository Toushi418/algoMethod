const array = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');
const N = Number(array[0]);
const numbers = array[1].split(' ').map(Number);

let sum = 0;
for(i = 0;i < N;i++){
    sum += numbers[i];
}
const SS = sum * sum;

let sumAA = 0;
for(i = 0;i < N;i++){
    sumAA += numbers[i] * numbers[i];
}

const result = (SS - sumAA) / 2;
console.log(result);