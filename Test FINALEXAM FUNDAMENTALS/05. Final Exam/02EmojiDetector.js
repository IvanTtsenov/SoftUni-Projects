function solve([input]) {
    let treshold = 1;
    let coolEmojis = [];
    let digits = input.match(/\d/g).map(Number);

    for (let digit of digits) {
        treshold *= digit;
    }

    let emojis = input.match(/(::|\*\*)[A-Z][a-z]{2,}(\1)/g);

    if (emojis !== null) {

        for (let emoji of emojis) {
            let coolnes = 0;
            let chars = emoji.slice(2, -2);
            for (let char of chars) {
                coolnes += char.charCodeAt(0);
            }
            if (coolnes >= treshold) {
                coolEmojis.push(emoji);
            }
        }
    }

    console.log(`Cool threshold: ` + treshold);
    console.log(`${emojis ? emojis.length : 0} emojis found in the text. The cool ones are:`);
    for (let emoji of coolEmojis) {
        console.log(emoji);
    }
}
solve([`In the Sofia Zoo there are 311 animals in total! 
::Smiley:: This includes 3 **Tigers**, 
1 ::Elephant:, 12 **Monk3ys**, 
a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**`])