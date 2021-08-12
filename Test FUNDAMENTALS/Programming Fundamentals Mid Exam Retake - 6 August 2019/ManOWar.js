function solve(a) {
    let pirate = a.shift().split('>').map(Number);
    let warship = a.shift().split('>').map(Number);
    let maxHealth = Number(a.shift());
    let action = a.shift();
    while (action !== "Retire") {
        let token = action.split(' ')
        let first = token[0]
        if (first === "Fire") {
            let index = Number(token[1]);
            let damage = Number(token[2]);
            if (warship[index] !== undefined) {
                warship[index] -= damage;
                if (warship[index] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
            }
        } else if (first === "Defend") {
            let startIndex = Number(token[1]);
            let endIndex = Number(token[2]);
            let damage = Number(token[3]);
            if (pirate[startIndex] !== undefined && pirate[endIndex] !== undefined) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirate[i] -= damage;
                    if (pirate[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }

            }
        } else if (first === "Repair") {
            let index = Number(token[1]);
            let repair = Number(token[2]);
            if (pirate[index] !== undefined) {
                pirate[index] += repair;
                if (pirate[index] > maxHealth) {
                    pirate[index] = maxHealth;
                }
            }
        } else if (first === "Status") {
            let count = 0;
            for (let i = 0; i < pirate.length; i++) {
                let section = pirate[i];
                let percentage = maxHealth * 0.20;
                if (section < percentage) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
        action = a.shift();
    }
    let totalPirate = 0;
    let totalWarship = 0;
    for (let el of pirate) {
        totalPirate += el;
    }
    for (let el of warship) {
        totalWarship += el;
    }
    console.log(`Pirate ship status: ${totalPirate}`);
    console.log(`Warship status: ${totalWarship}`);
}
solve((["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])

)