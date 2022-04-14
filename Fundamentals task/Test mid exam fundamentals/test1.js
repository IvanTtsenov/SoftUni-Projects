function solve(a) {
    let budget = a.shift();
    let students = a.shift();
    let flour = a.shift();
    let eggs = a.shift();
    let apron = a.shift();
    let freePackage = 0;
    for (let i = 1; i <= students; i++) {
        if (i % 5 == 0) {
            freePackage++;
        }

    }
    let totalSum = ((students - freePackage) * flour) + ((10 * eggs) * students) + Math.ceil((students * 1.20)) * apron
    let diff = totalSum - budget;
    if (totalSum <= budget) {
        console.log(`Items purchased for ${totalSum.toFixed(2)}$.`);
    }else {
        console.log(`${diff.toFixed(2)}$ more needed.`);
    }
}
solve([40,
    2,
    1.0,
    0.10,
    10.0])
    
    

