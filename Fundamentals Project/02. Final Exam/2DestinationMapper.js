function solve(a) {
    let pattern = /(=|\/)[A-Z]([A-Za-z]+){2,}\1/g
    let arr = a.match(pattern)
    let points = 0;
    if (arr !== null) {
        arr = arr.map(x => x.slice(1, -1))
        for (let el of arr) {
            points += el.length;
        }
        console.log(`Destinations: ${arr.join(', ')}`);
        console.log(`Travel Points: ${points}`);
    } else {
        console.log(`Destinations:`);
        console.log(`Travel Points: ${points}`);
    }
}
solve(`=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=`)
solve(`ThisIs some InvalidInput`)