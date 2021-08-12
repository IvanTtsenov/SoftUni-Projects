function solve(a) {
    let code = a.shift();
    while (a[0] !== 'Decode') {
        let action = a.shift().split('|');

        if (action[0] === 'Move') {
            let [_, n] = action;
            n = Number(n);
            let str = code.substring(0, n);
            code = code + str;
            code = code.slice(n)
        } else if (action[0] === 'Insert') {
            let [_, index, value] = action;
            index = Number(index);
            let left = code.substring(0, index);
            let right = code.substring(index)
            code = left + value + right;
        } else {
            let [_, sub, replacement] = action;
            code = code.split(sub);
            code = code.join(replacement);
        }
    }
    console.log(`The decrypted message is: ${code}`);
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
)
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])