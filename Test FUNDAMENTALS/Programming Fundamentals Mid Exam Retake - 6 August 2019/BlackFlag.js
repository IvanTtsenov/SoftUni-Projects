function solve(a) {
let b = a.map(Number);
let days = b[0];
let plunder = b[1];
let expected = b[2];
let result = 0

for (let i = 1; i <= days; i++) {
    result += plunder
    if(i % 3 === 0){
        result += plunder/2
    }
    if(i % 5 === 0){
        result *= 0.70;
    }
}
if(result >= expected){
    console.log(`Ahoy! ${result.toFixed(2)} plunder gained.`);
}else{
    let percentage = result / (expected/100);
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
}
}
solve((["5",
"40",
"100"])

)