function solve(a) {
    let arr = a.split(' ').map(Number);
    let total = 0;
    let arrEmpty = 0;
    for (let el of arr) {
        total += el
    }
    let average = total / arr.length
    arrEmpty = arr.filter(x => x > average);

    if (arrEmpty.length > 0) {
        return arrEmpty.sort((a, b) => b - a).slice(0, 5).join(' ')
    } else {
        return `No`
    }
}
console.log(solve('10 20 30 40 50'))
console.log(solve('1'))
