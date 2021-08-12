function solve(a) {
    let arr = a.shift().split(' ').map(Number)
    let action = a.shift();
    while (action !== "end") {
        let token = action.split(' ');
        let first = token[0];
        let second = Number(token[1]);
        let third = Number(token[2]);
        switch (first) {
            case 'swap':
                [arr[second], arr[third]] = [arr[third], arr[second]]
                break;
            case 'multiply':
                arr[second] *= arr[third];
                break;
            case "decrease":
                arr = arr.map(x => x - 1);
                break;
        }
        action = a.shift();
    }
    console.log(arr.join(', '));
}
solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
)
