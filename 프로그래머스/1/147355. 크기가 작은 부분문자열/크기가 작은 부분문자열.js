function solution(t, p) {
    let answer = 0;
    
    for(let i=0; i<t.length; i++) {
        const number = [...t].splice(i, p.length).join('');
        if(number.toString().length === p.length && +p >= +number) {
            answer++;
        }
    }
    
    return answer;
}