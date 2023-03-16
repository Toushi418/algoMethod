const array = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');
const N = Number(array[0]);
const S = array[1];

let count = 0;

for(x = 0;x < N - 1;x++){
    for(y = x + 1;y < N;y++){
        if(S[x] === S[y]){
            count++;
        }
    }
}

console.log(count);