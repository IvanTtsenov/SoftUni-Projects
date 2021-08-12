function solve([a]) {
    let pattern = /(#|\|)(?<item>[A-Za-z\s]+)\1(?<date>(\d+){2}\/(\d+){2}\/(\d+){2})\1(?<calories>\d+){1,5}\1/g;
    let result = pattern.exec(a);
    let totalCal = 0;
    let count = 0;
    while (result !== null) {
        count++;
        totalCal += Number(result.groups.calories)
        result = pattern.exec(a);
    }
    let days = totalCal / 2000
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);
    for (let i = 0; i < count; i++) {
        result = pattern.exec(a);
        let item = result.groups.item;
        let date = result.groups.date;
        let cal = result.groups.calories;
        console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${cal}`);
    }

}
solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
//solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
//solve(['Hello|#Invalid food#19/03/20#450|$5*(@'])