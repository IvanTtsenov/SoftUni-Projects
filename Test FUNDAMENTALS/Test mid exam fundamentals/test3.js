function solve(a) {
    let list = a.shift().split('|');
    let action = a.shift().split('%')
    while (action[0] !== "Shop!") {
        let first = action[0];
        let productOne = 0;
        let productTwo = 0;
        let index = 0;
        switch (first) {
            case "Important":
                productOne = action[1];
                if (list.includes(productOne)) {
                    index = list.indexOf(productOne)
                    list.splice(index, 1,)
                    list.unshift(productOne)
                } else {
                    list.unshift(productOne)
                }
                break;
            case "Add":
                productOne = action[1]
                if (list.includes(productOne)) {
                    console.log(`The product is already in the list.`);
                } else {
                    list.push(productOne);
                }
                break;
            case "Swap":
                productOne = action[1]
                productTwo = action[2]
                let indexOne = list.indexOf(productOne)
                let indexTwo = list.indexOf(productTwo)
                if (list.includes(productOne) && list.includes(productTwo)) {
                    list[indexOne] = productTwo;
                    list[indexTwo] = productOne;
                } else {
                    if (!list.includes(productOne)) {
                        console.log(`Product ${productOne} missing!`);
                    } else if (!list.includes(productTwo)) {
                        console.log(`Product ${productTwo} missing!`);
                    }
                }
                break;
            case "Remove":
                productOne = action[1];
                index = list.indexOf(productOne)
                if (list.includes(productOne)) {
                    list.splice(index, 1);
                } else {
                    console.log(`Product ${productOne} isn't in the list.`);
                }
                break;
            case "Reversed":
                list.reverse();
                break;
        }
        action = a.shift().split('%')
    }
    for (let i = 0; i < list.length; i++) {
        let n = i + 1
        console.log(`${n}. ${list[i]}`);
    }
}
solve(["apple|salt|bananas",
"Remove%cheese",
"Swap%salt%bananas",
"Shop!"])
