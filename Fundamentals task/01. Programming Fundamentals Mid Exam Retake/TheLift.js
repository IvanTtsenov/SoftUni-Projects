function solve(input) {
    let people = Number(input[0]);
    let lift = input[1].split(' ').map(Number);
    let i = 0;


    while (people > 0 && i < lift.length) {
        let freePlaces = 4 - lift[i];

        if (people >= freePlaces) {
            lift[i] += freePlaces;
            people -= freePlaces;
        } else {
            lift[i] += people;
            people -= freePlaces;
        }

        i++;
    }

    let filtered = lift.filter(x => x < 4);
    if (people <= 0 && filtered.length > 0) {
        console.log(`The lift has empty spots!\n${lift.join(' ')}`);
    } else if (people > 0 && filtered.length <= 0) {
        console.log(`There isn't enough space! ${people} people in a queue!\n${lift.join(' ')}`);
    } else {
        console.log(`${lift.join(' ')}`);
    }
}
solve([
    "20",
    "0 0 0 0 0"
])
solve([
    "15",
    "0 0 0 0 0"
]
)
//    solve([
//     "5",
//     "1 2 1"
//    ]
//    )
