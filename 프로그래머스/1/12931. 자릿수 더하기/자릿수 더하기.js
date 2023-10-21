function solution(n)
{
    let answer = 0;
    const string = n.toString();
    for(let i=0; i<string.length; i++){
       const item = Number(string[i]);
        answer += item;
    }
    return answer;
}