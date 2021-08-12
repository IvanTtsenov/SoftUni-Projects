function solve(a) {
    let b = a.split('|')
    let health = 100;
    let coins = 0;
    let rooms = 0;
    for (let el of b) {
        let elements = el.split(' ')
        let action = elements[0];
        let number = Number(elements[1])
        switch (action) {
            case `potion`:
                rooms++;
                health += number;
                if (health > 100) {
                    number = number - (health - 100);
                    health = 100;
                }
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case `chest`:
                rooms++;
                coins += number;
                console.log(`You found ${number} bitcoins.`);
                break;
            default:
                health -= number;
                if (health > 0) {
                    console.log(`You slayed ${action}.`);
                    rooms++;
                } else {
                    rooms++;
                    console.log(`You died! Killed by ${action}.`);
                    console.log(`Best room: ${rooms}`);
                }
                break;
        }
        if (health <= 0) {
            break;
        }
    }
    if (rooms === b.length && health > 0) {
        console.log(`You've made it!\nBitcoins: ${coins}\nHealth: ${health}`);
    }
}
//solve('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')
solve('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')