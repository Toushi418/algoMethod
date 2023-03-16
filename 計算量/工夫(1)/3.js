const array = require("fs").readFileSync("/dev/stdin", "utf8").split(' ').map(Number);

const N = array[0];
const M = array[1];

let count = 0;
let max = 0;


for(x = 1;x <= N;x++){
    for(y = 1;y <= N;y++){
        max = Math.min(N,(M - (x + y)));
        if(max <= 0){
            continue;
        }else{
            count += max;
        }
    }
}

console.log(count);