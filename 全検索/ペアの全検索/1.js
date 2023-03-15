const array = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');
const NK = array[0].split(' ').map(Number)
const N = NK[0];
const K = NK[1];

const newArray = array[1].split(' ').map(Number);

let count = 0;

for(i = 0;i < N-1;i++){
    for(j = i + 1; j < N;j++){
        if(newArray[i] + newArray[j] <= K){
            count++;
        }
    }
}
console.log(count);