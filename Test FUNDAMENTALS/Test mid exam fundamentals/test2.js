function solve(a) {
    let pieces = a.shift().split('|');
    let action = a.shift();
    while (action !== "Done") {
        let tokens = action.split(' ');
        let first = tokens[0];
        if (first === "Check") {
            first = tokens[1];
        }
        let index = 0;
        let particle = 0;
        let emptyArr = [];
        switch (first) {
            case "Add":
                particle = tokens[1];
                index = Number(tokens[2]);
                if (pieces[index] !== undefined) {
                    pieces.splice(index, 0, particle);
                }
                break;
            case "Remove":
                index = Number(tokens[1]);
                if (pieces[index] !== undefined) {
                    pieces.splice(index, 1)
                }
                break;
            case "Even":
                for (let i = 0; i < pieces.length; i++) {
                    if (i % 2 === 0) {
                        emptyArr.push(pieces[i])
                    }
                }
                console.log(`${emptyArr.join(' ')}`);
                break;
            case "Odd":
                for (let i = 0; i < pieces.length; i++) {
                    if (i % 2 !== 0) {
                        emptyArr.push(pieces[i])
                    }
                }
                console.log(`${emptyArr.join(' ')}`);
                break;


        }
        action = a.shift();
    }
    console.log(`You crafted ${pieces.join('')}!`);
}
solve(["Ta|es|to|la|ch",
    "Add pa 8",
    "Add ha 2",
    "Remove 3",
    "Done"])


