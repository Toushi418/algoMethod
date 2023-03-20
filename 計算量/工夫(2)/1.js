const array = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');
const N = Number(array[0]);
const numbers = array[1].split(' ').map(Number);
const Q = Number(array[2]);

let questions = [];
for(i = 0;i < Q;i++){
    questions.push(Number(array[3 + i]));
}

//これは質問のk達

let answers = [];
for(i = 0;i < N + 1;i++){
    if(i == 0){
        answers[i] = 0;
    }else{
        answers[i] = answers[i - 1] + numbers[i - 1]; 
    }
}

//これはk0からkQまでの各和

for(i = 0;i < questions.length;i++){
    console.log(answers[questions[i]]);
}
