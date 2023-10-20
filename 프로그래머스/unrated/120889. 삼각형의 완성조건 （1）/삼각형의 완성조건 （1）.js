function solution(sides) {
    const sortArray = sides.sort((a, b) => a - b);
    return sortArray[0] + sortArray[1] <= sortArray[2] ? 2 : 1;
}