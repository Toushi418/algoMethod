const array = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');
const N = Number(array[0]);
const numbers = array[1].split(' ').map(Number);
let sumN = 0;
for(i = 0;i < N;i++){
  sumN += numbers[i];
}
console.log(sumN * sumN);