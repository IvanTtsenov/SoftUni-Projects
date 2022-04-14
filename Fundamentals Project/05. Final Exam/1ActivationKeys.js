function solve(a) {
    let raw = a.shift();
    let input = a.shift().split('>>>');
    while (input[0] !== "Generate") {
        let substring;
        let startIndex;
        let endIndex;
        switch (input[0]) {
            case 'Contains':
                substring = input[1];
                if (raw.includes(substring)) {
                    console.log(`${raw} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            case 'Flip':
                let letters = input[1];
                startIndex = Number(input[2]);
                endIndex = Number(input[3]);
                substring = raw.substring(startIndex, endIndex)
                if (letters === 'Upper') {
                    raw = raw.replace(substring, substring.toUpperCase());
                    console.log(raw);
                } else {
                    raw = raw.replace(substring, substring.toLowerCase());
                    console.log(raw);
                }
                break;
            case 'Slice':
                startIndex = Number(input[1]);
                endIndex = Number(input[2]);
                substring = raw.substring(startIndex, endIndex);
                raw = raw.replace(substring, '');
                console.log(raw);
                break;
        }
        input = a.shift().split('>>>');
    }
    console.log(`Your activation key is: ${raw}`);
}
solve((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])

)