function solve(arr) {
    let [firstEmployee, secondEmployee, thirdEmployee, peopleCount] = arr.map(Number);
    let total = firstEmployee + secondEmployee + thirdEmployee;
    let count = 0;
    while (peopleCount > 0) {
        count++;
        if (count % 4 === 0) {
            count++;
        }
        peopleCount -= total;
    }
    console.log(`Time needed: ${count}h.`);
}
solve(["5","6","4","20"])
