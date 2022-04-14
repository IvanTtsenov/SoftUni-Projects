function solve([a]) {
    let pattern = /([#@])(?<word>([A-Za-z]+){3,})\1\1(?<wordTwo>([A-Za-z]+){3,})\1/g
    let match = pattern.exec(a)
    let result = [];
    let count = 0;

    while (match !== null) {
        count++;
        let first = match.groups.word
        let second = match.groups.wordTwo
        let same = match.groups.wordTwo.split('').reverse().join('')
        if (first === same) {
            result.push(first + ' <=> ' + second)
        }
        match = pattern.exec(a)
    }

    if (count == 0) {
        console.log(`No word pairs found!`);
    } if (count > 0) {
        console.log(`${count} word pairs found!`);
    } if (result.length == 0) {
        console.log(`No mirror words!`);
    } if (result.length > 0) {
        console.log(`The mirror words are: \n${result.join(', ')}`);
    }
}
solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
console.log(`---`);
solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
console.log(`----`);
solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])