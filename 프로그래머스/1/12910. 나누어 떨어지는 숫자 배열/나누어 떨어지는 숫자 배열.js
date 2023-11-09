function solution(arr, divisor) {
    const filter = arr.filter((i) => i % divisor === 0);
    if(filter.length === 0) {
        filter.push(-1)
    }
    return filter.sort((a,b) => a - b);
}