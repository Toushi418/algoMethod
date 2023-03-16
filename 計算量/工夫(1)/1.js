const array = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');
const N = Number(array[0]);
let numbers = array[1].split(' ').map(Number);

numbers = numbers.sort((a,b)=>{
    return a-b;
})
const max = numbers[numbers.length - 1] - numbers[0];

console.log(max);