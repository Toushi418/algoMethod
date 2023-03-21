const array = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');
const sAtA = array[0].split(' ').map(Number);
const sBtB = array[1].split(' ').map(Number);
const sA = sAtA[0];
const tA = sAtA[1];
const sB = sBtB[0];
const tB = sBtB[1];
let startTime = 0;
let endTime = 0;
let result = 0;

if(sA >= tB || sB >= tA){
    result = 1;
}else if(sA <= sB){
  startTime = sB;
}else if(sA >= sB){
  startTime = sA;
} 

if(tA <= tB){
  endTime = tA;
}else{
  endTime = tB;
}

if(result == 1){
    console.log(0);
}else{
    console.log(endTime - startTime);
}