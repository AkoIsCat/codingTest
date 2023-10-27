function solution(x) {
    const number = x.toString().split('').reduce((acc, cur) => acc + +cur, 0)
    return x % number === 0 ? true : false;
}