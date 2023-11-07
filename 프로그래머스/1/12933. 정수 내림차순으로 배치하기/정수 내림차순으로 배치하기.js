function solution(n) {
    var answer = 0;
    return +[...n.toString()].sort((a, b) => b - a).join('');
}