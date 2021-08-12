function solve(a) {
    let mes = a.shift();
    while (a[0] !== 'Reveal') {
        let command = a.shift().split(':|:');
        let action = command.shift();
        if (action === 'InsertSpace') {
            let index = Number(command[0]);
            let left = mes.substring(0, index)
            let right = mes.substring(index)
            mes = left + ' ' + right;
            console.log(mes);
        } else if (action === 'Reverse') {
            let sub = command[0];
            if (mes.includes(sub)) {
                mes = mes.replace(sub, '');
                sub = sub.split('').reverse().join('');
                mes = mes + sub;
                console.log(mes);
            } else {
                console.log(`error`);
            }
        } else if (action === 'ChangeAll') {
            let [sub, replace] = command;
            mes = mes.split(sub).join(replace);
            console.log(mes);
        }
    }
    console.log(`You have a new text message: ${mes}`);
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]

)