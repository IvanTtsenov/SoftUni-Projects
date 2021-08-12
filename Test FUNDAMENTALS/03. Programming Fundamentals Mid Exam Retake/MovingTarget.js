function solve(a) {
    let targets = a.shift().split(' ').map(Number);
    let action = a.shift();
    while (action !== "End") {
        let split = action.split(' ');
        let first = split[0];
        let index = Number(split[1]);
        let power = Number(split[2]);
        if (first === "Shoot" && index <= targets.length - 1) {
            targets[index] -= power;
            if (targets[index] <= 0) {
                targets.splice(index, 1)
            }
        } else if (first === "Add") {
            if (index > targets.length - 1 || index < 0) {
                console.log(`Invalid placement!`);
            }else{
            targets.splice(index, 0, power);
            }
        } else if (first === "Strike") {
            if (index + power <= targets.length - 1 && index - power >= 0) {
                let start = index - power;
                let end = power * 2 + 1;
                targets.splice(start, end);
            } else {
                console.log(`Strike missed!`);
            }
        }
        action = a.shift();
    }

    console.log(`${targets.join('|')}`);
}

solve((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
)
solve((["1 2 3 4 5",
    "Strike 0 1",
    "End"])
)

