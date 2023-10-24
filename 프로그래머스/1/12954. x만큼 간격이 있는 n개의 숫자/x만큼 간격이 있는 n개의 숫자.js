function solution(x, n) {
    let answer = new Array(n).fill().map((v, i) => i * x );
    for(let i=0; i<answer.length ; i++) {
        answer[i] += x;
    }
    return answer;
}