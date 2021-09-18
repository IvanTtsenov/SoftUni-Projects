let fs = require('fs');

let dataAsString = fs.readFileSync('./data.json', 'utf-8');
let data = JSON.parse(dataAsString);

data.age++;
fs.writeFileSync('./data2.json',JSON.stringify(data),'utf-8')