function solution(array, commands) {
    const answer = commands.map((item) => {
        const [start, end, index] = item;
        const value = array.slice(start - 1, end).sort((a, b) => a - b)[index - 1];
        return value;
    });
    return answer;
}