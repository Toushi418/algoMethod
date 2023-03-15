const array = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');
const N = Number(array[0]);
let strings = [];
let flag = false;
for(i = 1;i <= N;i++){
    strings.push(array[i])
}
for(i = 0;i < strings.length - 1;i++){
    for(j = i + 1;j < strings.length;j++){
        if(strings[i] == strings[j]){
            flag = true;
        }
    }
}

console.log(flag ? "Yes" : "No");