const array = require("fs").readFileSync("/dev/stdin", "utf8").split(' ');
const L = Number(array[0]);
const R = Number(array[1]);
const quantity = R - L + 1;
let count = 0;

for(i = 0;i < quantity - 1;i++){
    for(j = i + 1;j < quantity;j++){
        if((L + [i]) % 10 === (R + [j]) % 10){
            count++;
        }
    }
}

console.log(count);