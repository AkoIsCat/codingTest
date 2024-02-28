function solution(name, yearning, photo) {
    const result = [];
    for(let elements of photo) {
        let score = 0;
        for(let element of elements) {
            const elementScore = name.indexOf(element);
            if(elementScore !== -1) {
                score += yearning[elementScore];
            };
        }
        result.push(score)
    }
    
    return result;
}