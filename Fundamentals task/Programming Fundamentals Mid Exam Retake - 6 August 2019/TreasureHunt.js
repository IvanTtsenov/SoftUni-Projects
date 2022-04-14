function solve(a) {
    let arr = a.shift().split('|');
    let command = a.shift();
    let total = 0;
    while (command !== "Yohoho!") {
        let tokens = command.split(' ');
        for (let i = 1; i <= tokens.length - 1; i++) {
            let action = tokens[0];
            let item = tokens[i]
            if (action === "Loot" && !arr.includes(item)) {
                arr.unshift(item);
            } else if (action === "Drop") {
                let index = Number(item);
                if (index <= arr.length - 1 && index >= 0) {
                    item = arr[index];
                    arr.splice(index, 1);
                    arr.push(item)
                }
            } else if (action === "Steal") {
                let index = Number(item);
                if(index > arr.length){
                    index = arr.length;
                }
                let newArr = arr.slice(arr.length - index)
                arr.splice(arr.length - index)
                console.log(newArr.join(', '));
            }
        }
        command = a.shift();
    }
    for (let el of arr) {
        total += el.length;
    }
    if (arr.length > 0) {
        let average = total / arr.length
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }
}
solve((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 22",
"Yohoho!"])

)