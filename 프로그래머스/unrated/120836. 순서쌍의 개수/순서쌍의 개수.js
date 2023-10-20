function solution(n) {
    let count = 0;
    for(let i=1; i<=n; i++) {
        const value = n % i
        if(value === 0) {
            count++;
        }
    }
    return count;
}