function solution(s) {
    var answer = [];
    const numberList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numberList2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let string = [];
    
    for(let i=0; i<=s.length + 1; i++){

        const checkedString = numberList.indexOf(string.join(''));
        if(isNaN(+s[i]) && checkedString === -1) {
            string.push(s[i]);
        } else if(checkedString > -1 && isNaN(+s[i])) {
            string = [];
            answer.push(numberList2[checkedString]);
            string.push(s[i])
        } else if(checkedString > -1 && !isNaN(+s[i])){
            string = [];
            answer.push(numberList2[checkedString]);
            answer.push(s[i])
        } else if(!isNaN(+s[i])) {
            answer.push(s[i])
        } 

    }
    
    return +answer.join('');
}