function solve(a) {
    let arrOld = a.shift().split(' ');
    let arr = []
    for (let i = 0; i < arrOld.length; i++) {
        let char = arrOld[i];
        if ((/[a-zA-Z]/).test(char)) {
            char = char;
        } else {
            char = Number(char)
        }
        arr.push(char)
    }
    let tries = a.shift();
    let moves = 0;
    while (tries !== "end") {
        let tokens = tries.split(' ').map(Number);
        let index1 = tokens[0];
        let index2 = tokens[1];
        if (index1 === index2 || arr.indexOf(arr[index1]) === -1 || arr.indexOf(arr[index2]) === -1) {
            moves++;
            let middleIndex = arr.length / 2;
            arr.splice(middleIndex, 0, `-${moves}a`)
            arr.splice(middleIndex, 0, `-${moves}a`)
            console.log(`Invalid input! Adding additional elements to the board`);
        } else {
            if (arr[index1] === arr[index2]) {
                moves++;
                console.log(`Congrats! You have found matching elements - ${arr[index1]}!`);
                arr.splice(index1, 1)
                if (index2 === 0) {
                    arr.splice(index2, 1)
                } else {
                    arr.splice(index2 - 1, 1)
                }
            } else {
                console.log(`Try again!`);
            }
        }
        if (arr.length === 0) {
            break;
        }
        tries = a.shift();
    }
    if (arr.length === 0) {
        console.log(`You have won in ${moves} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(`${arr.join(' ')}`);
    }
}
solve([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    
    )