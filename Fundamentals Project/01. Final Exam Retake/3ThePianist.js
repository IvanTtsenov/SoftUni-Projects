function solve(a) {
    let n = Number(a.shift());
    let obj = {};
    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = a.shift().split('|');
        obj[piece] = {
            composer: composer,
            key: key
        }
    }
    while (a[0] !== 'Stop') {
        let tokens = a.shift().split('|');
        let operation = tokens.shift();
        if (operation === 'Add') {
            let [piece, composer, key] = tokens;
            if (obj.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                obj[piece] = {
                    composer: composer,
                    key: key
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (operation === 'Remove') {
            let piece = tokens[0];
            if (obj.hasOwnProperty(piece)) {
                delete obj[piece]
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else {
            let [piece, newKey] = tokens;
            if (obj.hasOwnProperty(piece)) {
                let music = obj[piece];
                music.key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    let sorted = Object.entries(obj).sort(comparePieces)

    function comparePieces(a,b){
        return a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer)
        }

    for (let el of sorted) {
        let piece = el[0];
        let composer = el[1].composer
        let key = el[1].key;
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }



        
}
solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]

)