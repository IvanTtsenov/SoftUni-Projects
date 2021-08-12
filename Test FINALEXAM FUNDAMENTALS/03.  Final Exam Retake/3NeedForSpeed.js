function solve(a) {
    let n = Number(a.shift());
    let obj = {};
    for (let i = 0; i < n; i++) {
        let [car, miles, fuel] = a.shift().split('|');
        miles = Number(miles)
        fuel = Number(fuel)
        obj[car] = {
            miles,
            fuel
        }
    }
    while (a[0] !== 'Stop') {
        let tokens = a.shift().split(' : ');
        let action = tokens.shift();

        if (action === 'Drive') {
            let [car, distance, fuel] = tokens;
            distance = Number(distance)
            fuel = Number(fuel)
            let name = obj[car];
            let previous = name.fuel;
            name.fuel -= fuel;

            if (name.fuel > 0) {
                name.miles += distance;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            } else {
                name.fuel = previous;
                console.log(`Not enough fuel to make that ride`);
            }
            if (name.miles >= 100000) {
                delete obj[car]
                console.log(`Time to sell the ${car}!`);
            }

        } else if (action === 'Refuel') {
            let [car, fuel] = tokens;
            fuel = Number(fuel)
            let name = obj[car];
            name.fuel += fuel;
            if (name.fuel > 75) {
                let previous = name.fuel;
                let fuel = previous - 75
                name.fuel = 75;
                console.log(`${car} refueled with ${fuel} liters`);
            } else {
                console.log(`${car} refueled with ${fuel} liters`);
            }
        } else if (action === 'Revert') {
            let [car, km] = tokens;
            km = Number(km)
            let name = obj[car];
            name.miles -= km
            if (name.miles < 10000) {
                name.miles = 10000;
            } else {
                console.log(`${car} mileage decreased by ${km} kilometers`);
            }
        }
    }

    function comparable(a, b) {
        let mileOne = a[1].miles;
        let mileTwo = b[1].miles;
        let nameOne = a[0];
        let nameTwo = b[0];
        return (mileTwo - mileOne) || nameOne.localeCompare(nameTwo)
    }

    let sorted = Object.entries(obj).sort(comparable)

    for (let el of sorted) {
        console.log(`${el[0]} -> Mileage: ${el[1].miles} kms, Fuel in the tank: ${el[1].fuel} lt.`);
    }
}
solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
)