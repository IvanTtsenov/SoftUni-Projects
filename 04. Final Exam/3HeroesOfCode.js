function solve(a) {
    let n = Number(a.shift());
    let obj = {};
    let heroName;
    let HP;
    let mana;
    for (let i = 0; i < n; i++) {
        let name = a.shift().split(' ');
        heroName = name[0]
        HP = Number(name[1]);
        mana = Number(name[2]);
        obj[heroName] = [HP, mana]
    }
    let action = a.shift().split(' - ')
    while (action[0] !== 'End') {
        let b = action[0]
        if (b === 'CastSpell') {
            let [_, name, MP, spellName] = action;
            if (obj[name][1] >= MP) {
                obj[name][1] -= MP
                console.log(`${name} has successfully cast ${spellName} and now has ${obj[name][1]} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
        } else if (b === 'TakeDamage') {
            let [_, name, damage, attacker] = action;
            damage = Number(damage)
            if (obj[name][0] > damage) {
                obj[name][0] -= damage;
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${obj[name][0]} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete obj[name]
            }
        } else if (b === 'Recharge') {
            let [_, name, amount] = action;
            let previous = obj[name][1]
            obj[name][1] += Number(amount)
            if (obj[name][1] > 200) {
                amount = 200 - previous;
                obj[name][1] = 200;
            }
            console.log(`${name} recharged for ${amount} MP!`);
        } else {
            let [_, name, amount] = action;
            amount = Number(amount);
            let previous = obj[name][0]
            obj[name][0] += amount
            if (obj[name][0] > 100) {
                amount = 100 - previous
                obj[name][0] = 100;
            }
            console.log(`${name} healed for ${amount} HP!`);
        }
        action = a.shift().split(' - ')
    }
    let sorted = Object.entries(obj).sort((a, b) => b[1][0] - a[1][0] || a[0].localeCompare(b[0]));
    for (let el of sorted) {
        console.log(`${el[0]}\n  HP: ${el[1][0]}\n  MP: ${el[1][1]}`);
    }
}
solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])
