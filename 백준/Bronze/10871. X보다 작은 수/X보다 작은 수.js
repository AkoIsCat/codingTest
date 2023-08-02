let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [N, X] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let answer = [];
for(let i = 0; i < N; i++){
    if( X > arr[i]) answer.push(arr[i]);
}
    console.log(answer.join(' '));