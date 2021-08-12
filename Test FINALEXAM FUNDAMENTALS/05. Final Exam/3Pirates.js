function solve(a) {
    let towns = a.shift().split('||');
    let obj = {};
    while (towns[0] !== "Sail") {
        let [town, pop, gold] = towns;
        if (obj.hasOwnProperty(town)) {
            obj[town][0] += Number(pop);
            obj[town][1] += Number(gold);
        }
        if (!obj.hasOwnProperty(town)) {
            pop = Number(pop);
            gold = Number(gold);
            obj[town] = [pop, gold];
        }
        towns = a.shift().split('||');
    }
    let actions = a.shift().split('=>');
    while (actions[0] !== 'End') {
        let [action, town, pop, gold] = actions;
        if (action === 'Plunder') {
            obj[town][0] -= Number(pop);
            obj[town][1] -= Number(gold);
            console.log(`${town} plundered! ${gold} gold stolen, ${pop} citizens killed.`);
            if (obj[town][0] === 0 || obj[town][1] === 0) {
                delete obj[town]
                console.log(`${town} has been wiped off the map!`);
            }
        } else {
            gold = Number(pop);
            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                obj[town][1] += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${obj[town][1]} gold.`);
            }
        }
        actions = a.shift().split('=>');
    }
    if (Object.keys(obj).length > 0) {
        let sorted = Object.entries(obj).sort((a, b) => b[1][1] - a[1][1] || a[0].localeCompare(b[0]));
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        for (let el of sorted) {
            console.log(`${el[0]} -> Population: ${el[1][0]} citizens, Gold: ${el[1][1]} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}
solve(((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
)
)