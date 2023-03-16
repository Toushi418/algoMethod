const array = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');
const N = Number(array[0]);
const numbers = array[1].split(' ').map(Number);
sortedNumbers = numbers.sort((a,b)=>{
    return a - b;
});

let sum = 0;

for(i = 1;i < sortedNumbers.length;i++){
    sum += sortedNumbers[i];
}

console.log(sum);