const array = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');
const N = Number(array[0]);
const numbers = array[1].split(' ').map(Number);
let count = 0;

for(i = 0;i < N -2;i++){
    for(j = i + 1;j < N-1 ;j++){
        for(k = j + 1;k < N;k++){
            if(numbers[j] === Math.max(numbers[i],numbers[j],numbers[k])){
                count++;
            }
        }
    }
}
console.log(count);