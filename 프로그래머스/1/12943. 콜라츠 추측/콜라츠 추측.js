function solution(num) {
    
    let number = num;
    for(let i=0; i<=500; i++) {
        if(number === 1) {
            return i;
        } else if(number % 2 === 0) {
            number /= 2;
        } else if(number % 2 === 1) {
            number = (number * 3) + 1;
        } 
    }
    return -1
    
}