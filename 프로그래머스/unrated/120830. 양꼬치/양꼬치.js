function solution(n, k) {
    const service = parseInt(n / 10);
    const meatPrice = n * 12000;
    const drinkPrice = (k - service) * 2000;
    return meatPrice + drinkPrice;
}