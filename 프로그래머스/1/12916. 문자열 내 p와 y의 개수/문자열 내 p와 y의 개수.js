function solution(s){
    var answer = 0;
    const string = s.toLowerCase();
    for(let i = 0; i<string.length; i++) {
        if(string[i] === 'p') {
            answer++;
        } else if(string[i] === 'y') {
            answer--;
        }
    }

    return answer === 0 ? true : false;
}