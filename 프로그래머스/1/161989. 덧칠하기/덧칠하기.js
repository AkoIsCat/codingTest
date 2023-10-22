function solution(n, m, section) {
     var answer = 0;
    var painted = 0;
    for(let item of section) {
        if(painted < item) {
            answer++;
            painted = item+m-1;
        }
    }
    return answer;

}